import { apiClient } from '@/lib/api';
import type { Bulletin, ContentCategory, MonthlySummary } from '@/types/content';

function logRecoverableContentError(message: string, error: unknown) {
  if (process.env.NODE_ENV !== 'production') {
    console.error(message, error);
  }
}

export async function getPublishedBulletins(limit = 20, contentCategory: ContentCategory = 'bulletin'): Promise<Bulletin[]> {
  try {
    return await apiClient<Bulletin[]>('/bulletins/', {
      params: { limit, content_category: contentCategory },
      next: { revalidate: 30 }
    });
  } catch (error) {
    logRecoverableContentError('Failed to fetch bulletins from API', error);
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
    logRecoverableContentError(`Failed to fetch summary for ${monthKey}`, error);
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
