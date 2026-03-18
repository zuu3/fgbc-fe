import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export async function validateAdminAccessToken(): Promise<boolean> {
  const session = await getServerSession(authOptions);
  
  if (!session || !session.user || (session.user as any).role !== 'admin') {
    return false;
  }
  
  return true;
}

export async function getAdminToken(): Promise<string | null> {
  const session = await getServerSession(authOptions);
  return (session as any)?.accessToken || null;
}
