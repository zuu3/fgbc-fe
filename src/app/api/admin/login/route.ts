import { NextResponse } from 'next/server';
import { requireSupabaseConfig } from '@/lib/supabase/config';
import { ADMIN_ACCESS_TOKEN_COOKIE } from '@/lib/auth/constants';
import {
  fetchProfileRole,
  fetchProfileRoleWithServiceRole,
  fetchSupabaseUser,
  hasAdminRole,
} from '@/lib/auth/supabaseAdmin';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const email = String(payload?.email || '').trim();
    const password = String(payload?.password || '').trim();

    if (!email || !password) {
      return NextResponse.json({ error: 'email, password are required' }, { status: 400 });
    }

    const { url, anonKey } = requireSupabaseConfig();
    const response = await fetch(`${url}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: {
        apikey: anonKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'invalid credentials' }, { status: 401 });
    }

    const data = await response.json() as { access_token?: string; expires_in?: number };
    if (!data.access_token) {
      return NextResponse.json({ error: 'access token missing' }, { status: 401 });
    }

    const user = await fetchSupabaseUser(data.access_token);
    const isAdmin = user ? await hasAdminRole(data.access_token, user.id) : false;

    if (!isAdmin) {
      const profileRole = user ? await fetchProfileRole(data.access_token, user.id) : null;
      const fallbackRole = user ? await fetchProfileRoleWithServiceRole(user.id) : null;
      return NextResponse.json({
        error: 'admin role required',
        details: {
          userId: user?.id ?? null,
          role: profileRole,
          fallbackRole,
        },
      }, { status: 403 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set(ADMIN_ACCESS_TOKEN_COOKIE, data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: data.expires_in || 60 * 60,
    });

    return res;
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'login failed' },
      { status: 500 },
    );
  }
}
