import { requireSupabaseConfig } from '@/lib/supabase/config';

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function withBase(pathnameWithQuery: string): string {
  const { url } = requireSupabaseConfig();
  return `${url}${pathnameWithQuery}`;
}

export async function supabaseRestPublic<T>(
  pathnameWithQuery: string,
  options?: {
    method?: Method;
    body?: unknown;
    revalidate?: number;
    preferReturnRepresentation?: boolean;
  },
): Promise<T> {
  const { anonKey } = requireSupabaseConfig();

  const response = await fetch(withBase(pathnameWithQuery), {
    method: options?.method ?? 'GET',
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      'Content-Type': 'application/json',
      ...(options?.preferReturnRepresentation ? { Prefer: 'return=representation' } : {}),
    },
    body: options?.body ? JSON.stringify(options.body) : undefined,
    ...(options?.revalidate !== undefined ? { next: { revalidate: options.revalidate } } : {}),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Supabase public REST failed: ${response.status} ${text}`);
  }

  return response.json() as Promise<T>;
}

export async function supabaseRestWithToken<T>(
  accessToken: string,
  pathnameWithQuery: string,
  options?: {
    method?: Method;
    body?: unknown;
    preferReturnRepresentation?: boolean;
  },
): Promise<T> {
  const { anonKey } = requireSupabaseConfig();

  const response = await fetch(withBase(pathnameWithQuery), {
    method: options?.method ?? 'GET',
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      ...(options?.preferReturnRepresentation ? { Prefer: 'return=representation' } : {}),
    },
    body: options?.body ? JSON.stringify(options.body) : undefined,
    cache: 'no-store',
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Supabase token REST failed: ${response.status} ${text}`);
  }

  if (response.status === 204) {
    return [] as T;
  }

  return response.json() as Promise<T>;
}

export function buildPublicStorageUrl(path: string, bucket = 'bulletins'): string {
  const { url } = requireSupabaseConfig();
  const normalizedPath = path.replace(/^\/+/, '');
  return `${url}/storage/v1/object/public/${bucket}/${normalizedPath}`;
}
