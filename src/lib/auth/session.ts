import { cookies } from 'next/headers';
import { ADMIN_ACCESS_TOKEN_COOKIE } from '@/lib/auth/constants';
import { validateAdminAccessToken } from '@/lib/auth/supabaseAdmin';

export async function readValidAdminTokenFromCookie(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_ACCESS_TOKEN_COOKIE)?.value;

  if (!token) {
    return null;
  }

  const isValidAdmin = await validateAdminAccessToken(token);
  return isValidAdmin ? token : null;
}
