import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/authOptions';

export async function readValidAdminTokenFromCookie(): Promise<string | null> {
  const session = await getServerSession(authOptions);
  
  if (session?.user?.accessToken) {
    return session.user.accessToken;
  }
  
  return null;
}
