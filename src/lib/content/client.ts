import { buildPublicStorageUrl, supabaseRestPublic } from '@/lib/supabase/rest';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import type { Bulletin, Notice } from '@/types/content';

function encode(value: string): string {
  return encodeURIComponent(value);
}

export async function getPublishedNotices(limit = 50): Promise<Notice[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    return await supabaseRestPublic<Notice[]>(
      `/rest/v1/notices?select=id,title,content,category,start_at,end_at,is_all_day,is_pinned,location,attachment_path,status,published_at&status=eq.published&order=start_at.asc&limit=${limit}`,
      { revalidate: 30 },
    );
  } catch {
    return [];
  }
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

export function resolveBulletinFileUrl(path: string): string {
  if (!path) return '#';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('#')) {
    return path;
  }

  const bucket = process.env.NEXT_PUBLIC_SUPABASE_BULLETINS_BUCKET || 'bulletins';
  return buildPublicStorageUrl(path, bucket);
}
