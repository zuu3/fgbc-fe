import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_ACCESS_TOKEN_COOKIE } from '@/lib/auth/constants';
import { fetchSupabaseUser, hasAdminRole } from '@/lib/auth/supabaseAdmin';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/admin') || pathname.startsWith('/admin/login')) {
    return NextResponse.next();
  }

  const token = request.cookies.get(ADMIN_ACCESS_TOKEN_COOKIE)?.value;

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    return NextResponse.redirect(url);
  }

  const user = await fetchSupabaseUser(token);
  const isAdmin = user ? await hasAdminRole(token, user.id) : false;

  if (!isAdmin) {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    const redirectResponse = NextResponse.redirect(url);
    redirectResponse.cookies.set(ADMIN_ACCESS_TOKEN_COOKIE, '', { maxAge: 0, path: '/' });
    return redirectResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
