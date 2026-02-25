import { NextResponse } from 'next/server';
import { readValidAdminTokenFromCookie } from '@/lib/auth/session';

export async function GET() {
  const token = await readValidAdminTokenFromCookie();
  return NextResponse.json({ authenticated: Boolean(token), admin: Boolean(token) });
}
