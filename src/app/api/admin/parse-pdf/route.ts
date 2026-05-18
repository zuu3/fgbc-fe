import { NextResponse } from 'next/server';
import { getAdminToken } from '@/lib/auth/admin';

// Rate limiting state (in-memory; resets on server restart).
// For multi-instance deployments, use external store (Upstash Redis recommended).
const ipBuckets = new Map<string, number[]>(); // ip -> timestamps within window
const globalCounter = { date: '', count: 0 };

const PER_IP_LIMIT = 3; // requests
const PER_IP_WINDOW_MS = 60_000; // per minute
const DAILY_GLOBAL_LIMIT = Number(process.env.OCR_DAILY_LIMIT || 30);

function getClientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  const real = request.headers.get('x-real-ip');
  if (real) return real;
  return 'unknown';
}

function checkRateLimit(ip: string): { ok: true } | { ok: false; reason: string; retryAfter: number } {
  const now = Date.now();
  const today = new Date().toISOString().slice(0, 10);

  // Reset daily counter
  if (globalCounter.date !== today) {
    globalCounter.date = today;
    globalCounter.count = 0;
  }

  if (globalCounter.count >= DAILY_GLOBAL_LIMIT) {
    return { ok: false, reason: `일일 OCR 호출 한도(${DAILY_GLOBAL_LIMIT}건) 초과. 내일 다시 시도해 주세요.`, retryAfter: 3600 };
  }

  // Per-IP sliding window
  const timestamps = ipBuckets.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < PER_IP_WINDOW_MS);
  if (recent.length >= PER_IP_LIMIT) {
    const oldest = recent[0];
    const retryAfter = Math.ceil((PER_IP_WINDOW_MS - (now - oldest)) / 1000);
    return { ok: false, reason: `요청이 너무 잦습니다. ${retryAfter}초 후 다시 시도해 주세요.`, retryAfter };
  }

  recent.push(now);
  ipBuckets.set(ip, recent);
  globalCounter.count += 1;
  return { ok: true };
}

type ClovaField = {
  inferText: string;
  inferConfidence: number;
  type: string;
  lineBreak: boolean;
  boundingPoly: { vertices: Array<{ x: number; y: number }> };
};

type ClovaImage = {
  uid: string;
  name: string;
  inferResult: string;
  message: string;
  fields?: ClovaField[];
};

function extractDate(text: string) {
  const m1 = text.match(/(\d{4})\s*년\s*(\d{1,2})\s*월\s*(\d{1,2})\s*일/);
  if (m1) return { year: m1[1], month: m1[2], day: m1[3] };

  const m2 = text.match(/년[\s\S]{0,15}월[\s\S]{0,15}일[\s\S]{0,30}(20\d{2})[\s\S]{0,10}(\d{1,2})[\s\S]{0,10}(\d{1,2})/);
  if (m2) return { year: m2[1], month: m2[2], day: m2[3] };

  const yearM = text.match(/\b(20\d{2})\b/);
  if (yearM) {
    const after = text.slice(text.indexOf(yearM[1]));
    const monthM = after.match(/(\d{1,2})\s*월/);
    const dayM = after.match(/(\d{1,2})\s*일/);
    if (monthM && dayM) return { year: yearM[1], month: monthM[1], day: dayM[1] };
  }
  return null;
}

function extractTitle(text: string, dateInfo: { year: string; month: string; day: string } | null, label: string): string {
  const headChunk = text.slice(0, 600);
  const quoted = headChunk.match(/[“"]([^"”]{3,60})[”"]/);
  const datePrefix = dateInfo
    ? `${dateInfo.year}년 ${parseInt(dateInfo.month)}월 ${parseInt(dateInfo.day)}일 `
    : '';
  if (quoted) return `${datePrefix}${label}: ${quoted[1].trim()}`;
  return datePrefix ? `${datePrefix}${label}` : '';
}

function reconstructText(fields: ClovaField[]): string {
  let text = '';
  for (let i = 0; i < fields.length; i++) {
    const f = fields[i];
    text += f.inferText;
    if (!f.lineBreak) {
      text += ' ';
      continue;
    }
    // Detect paragraph break via vertical gap between this line and the next.
    const next = fields[i + 1];
    if (!next) {
      text += '\n';
      continue;
    }
    const currYs = f.boundingPoly.vertices.map((v) => v.y);
    const nextYs = next.boundingPoly.vertices.map((v) => v.y);
    const currBottom = Math.max(...currYs);
    const currTop = Math.min(...currYs);
    const nextTop = Math.min(...nextYs);
    const lineHeight = Math.max(currBottom - currTop, 1);
    const gap = nextTop - currBottom;
    // If gap exceeds 80% of line height, treat as paragraph break
    text += gap > lineHeight * 0.8 ? '\n\n' : '\n';
  }
  return text;
}

function cleanText(text: string): string {
  return text
    .replace(/[^\S\n]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function joinLinesSmart(lines: string[]): string {
  // Smart-join wrapped lines:
  // - If prev line ends with punctuation/closing quote/paren → space-join
  // - Otherwise assume word broken across lines → no space (concat)
  let result = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (i === 0) {
      result = line;
      continue;
    }
    const prev = lines[i - 1];
    const lastChar = prev[prev.length - 1];
    const PUNCT_END = /[.!?,;:"”’'\)\]\}」』]/;
    if (PUNCT_END.test(lastChar)) {
      result += ' ' + line;
    } else {
      result += line;
    }
  }
  return result;
}

function buildParagraphs(text: string, label: string): string {
  const blocks = text.split(/\n{2,}/);
  const paragraphs: string[] = [];

  for (const block of blocks) {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    const para = joinLinesSmart(lines).replace(/\s{2,}/g, ' ').trim();
    if (para.length < 5) continue;
    if (new RegExp(`^${label}\\s*$`).test(para)) continue;
    if (/^(년\s*월\s*일|\d{4}\s*년\s*\d{1,2}\s*월\s*\d{1,2}\s*일)\s*$/.test(para)) continue;
    if (/^["“”\s.,]+$/.test(para)) continue;
    paragraphs.push(para);
  }

  return paragraphs.join('\n\n');
}

async function callClovaOcr(pdfBase64: string, fileName: string): Promise<ClovaImage[]> {
  const url = process.env.CLOVA_OCR_INVOKE_URL;
  const secret = process.env.CLOVA_OCR_SECRET_KEY;
  if (!url || !secret) {
    throw new Error('CLOVA_OCR_INVOKE_URL/CLOVA_OCR_SECRET_KEY 환경변수가 설정되지 않았습니다.');
  }

  const body = {
    version: 'V2',
    requestId: `${Date.now()}`,
    timestamp: Date.now(),
    lang: 'ko',
    images: [
      {
        format: 'pdf',
        name: fileName,
        data: pdfBase64,
      },
    ],
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'X-OCR-SECRET': secret,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Clova OCR API 오류 (${response.status}): ${errText}`);
  }

  const json = await response.json();
  const images: ClovaImage[] = json.images ?? [];
  if (!images.length) throw new Error('Clova OCR 응답에 이미지가 없습니다.');

  return images;
}

export async function POST(request: Request) {
  const token = await getAdminToken();
  if (!token) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const formData = await request.formData();
  const file = formData.get('file') as File | null;
  const contentCategory = (formData.get('content_category') as string) || 'pastoral_letter';
  const ocrPassword = (formData.get('ocr_password') as string) || '';

  const expectedPassword = process.env.OCR_ACCESS_PASSWORD;
  if (!expectedPassword) {
    return NextResponse.json({ error: 'OCR_ACCESS_PASSWORD 환경변수가 설정되지 않았습니다.' }, { status: 500 });
  }
  if (ocrPassword !== expectedPassword) {
    return NextResponse.json({ error: 'OCR 비밀번호가 일치하지 않습니다.' }, { status: 403 });
  }

  if (!file) return NextResponse.json({ error: 'no file' }, { status: 400 });
  if (!file.name.toLowerCase().endsWith('.pdf')) {
    return NextResponse.json({ error: 'PDF 파일만 지원합니다.' }, { status: 400 });
  }
  if (file.size > 50 * 1024 * 1024) {
    return NextResponse.json({ error: 'PDF 파일은 50MB 이하여야 합니다.' }, { status: 400 });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64 = buffer.toString('base64');
    const fileName = file.name.replace(/\.pdf$/i, '');

    const images = await callClovaOcr(base64, fileName);

    // Aggregate text from all pages, join with blank line between pages
    const pageTexts = images.map((img) => {
      if (img.inferResult !== 'SUCCESS') return '';
      return reconstructText(img.fields ?? []);
    });
    const rawText = pageTexts.filter(Boolean).join('\n\n');

    if (!rawText || rawText.trim().length < 10) {
      return NextResponse.json({ error: 'OCR 결과가 비어 있습니다.' }, { status: 422 });
    }

    const cleaned = cleanText(rawText);
    const dateInfo = extractDate(cleaned);
    const week_start_date = dateInfo
      ? `${dateInfo.year}-${String(parseInt(dateInfo.month)).padStart(2, '0')}-${String(parseInt(dateInfo.day)).padStart(2, '0')}`
      : '';
    const label = contentCategory === 'pastoral_letter' ? '목양편지' : '나눔으로 드리는 예배';
    const title = extractTitle(cleaned, dateInfo, label);
    const content = buildParagraphs(cleaned, label);

    return NextResponse.json({ title, week_start_date, content });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
