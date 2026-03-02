import { buildPublicStorageUrl, supabaseRestPublic } from '@/lib/supabase/rest';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import type { Bulletin, MonthlySummary } from '@/types/content';

function encode(value: string): string {
  return encodeURIComponent(value);
}

export async function getPublishedBulletins(limit = 20): Promise<Bulletin[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const nowIso = encode(new Date().toISOString());

    return await supabaseRestPublic<Bulletin[]>(
      `/rest/v1/bulletins?select=id,title,week_start_date,service_type,file_path,published_at,is_latest&published_at=lte.${nowIso}&order=week_start_date.desc&limit=${limit}`,
      { revalidate: 30 },
    );
  } catch {
    return [];
  }
}

export async function getLatestBulletin(): Promise<Bulletin | null> {
  const list = await getPublishedBulletins(1);
  return list[0] ?? null;
}

export async function getMonthlySummary(monthKey: string): Promise<MonthlySummary | null> {
  if (!isSupabaseConfigured()) {
    return null;
  }

  try {
    const list = await supabaseRestPublic<MonthlySummary[]>(
      `/rest/v1/monthly_summaries?select=id,month_key,content,published_at&month_key=eq.${encode(monthKey)}&order=published_at.desc.nullslast&limit=1`,
      { revalidate: 30 },
    );
    return list[0] ?? null;
  } catch {
    return null;
  }
}

export function resolveBulletinFileUrl(path: string): string {
  if (!path) return '#';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('#')) {
    return path;
  }

  const bucket = process.env.NEXT_PUBLIC_SUPABASE_BULLETINS_BUCKET || 'bulletins';
  return buildPublicStorageUrl(path, bucket);
}
