import { requireSupabaseConfig } from '@/lib/supabase/config';

export type SupabaseUser = {
  id: string;
  email?: string;
};

type ProfileRow = {
  id: string;
  role: string | null;
};

export async function fetchSupabaseUser(accessToken: string): Promise<SupabaseUser | null> {
  try {
    const { url, anonKey } = requireSupabaseConfig();
    const response = await fetch(`${url}/auth/v1/user`, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const user = await response.json() as SupabaseUser;
    return user?.id ? user : null;
  } catch {
    return null;
  }
}

export async function hasAdminRole(accessToken: string, userId: string): Promise<boolean> {
  let role = await fetchProfileRole(accessToken, userId);
  if (role === null) {
    role = await fetchProfileRoleWithServiceRole(userId);
  }
  return normalizeRole(role) === 'admin';
}

export async function fetchProfileRole(accessToken: string, userId: string): Promise<string | null> {
  try {
    const { url, anonKey } = requireSupabaseConfig();
    const query = `/rest/v1/profiles?select=id,role&id=eq.${encodeURIComponent(userId)}&limit=1`;

    const response = await fetch(`${url}${query}`, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const rows = await response.json() as ProfileRow[];
    if (!Array.isArray(rows) || rows.length === 0) {
      return null;
    }

    return rows[0]?.role ?? null;
  } catch {
    return null;
  }
}

export async function fetchProfileRoleWithServiceRole(userId: string): Promise<string | null> {
  try {
    const { url } = requireSupabaseConfig();
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceRoleKey) {
      return null;
    }

    const query = `/rest/v1/profiles?select=id,role&id=eq.${encodeURIComponent(userId)}&limit=1`;
    const response = await fetch(`${url}${query}`, {
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const rows = await response.json() as ProfileRow[];
    if (!Array.isArray(rows) || rows.length === 0) {
      return null;
    }

    return rows[0]?.role ?? null;
  } catch {
    return null;
  }
}

export async function validateAdminAccessToken(accessToken: string): Promise<boolean> {
  const user = await fetchSupabaseUser(accessToken);
  if (!user) {
    return false;
  }

  return hasAdminRole(accessToken, user.id);
}

function normalizeRole(role: string | null): string {
  return String(role || '').trim().toLowerCase();
}
