import { apiClient } from '@/lib/api';
import type { Bulletin, MonthlySummary } from '@/types/content';

export async function getPublishedBulletins(limit = 20): Promise<Bulletin[]> {
  try {
    return await apiClient<Bulletin[]>('/bulletins/', {
      params: { limit },
      next: { revalidate: 30 }
    });
  } catch (error) {
    console.error('Failed to fetch bulletins from API', error);
    return [];
  }
}

export async function getLatestBulletin(): Promise<Bulletin | null> {
  const list = await getPublishedBulletins(1);
  return list[0] ?? null;
}

export async function getMonthlySummary(monthKey: string): Promise<MonthlySummary | null> {
  try {
    const list = await apiClient<MonthlySummary[]>('/monthly-summaries/', {
      next: { revalidate: 30 }
    });
    return list.find(summary => summary.month_key === monthKey) || null;
  } catch (error) {
    console.error(`Failed to fetch summary for ${monthKey}`, error);
    return null;
  }
}

export function resolveBulletinFileUrl(path: string): string {
  if (!path) return '#';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('#')) {
    return path;
  }
  
  const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
  // FastAPI serves uploaded files at /uploads/{year}/{filename}
  const cleanPath = path.replace(/^\/+/, '').replace(/^uploads\//, '');
  return `${backendUrl}/uploads/${cleanPath}`;
}
