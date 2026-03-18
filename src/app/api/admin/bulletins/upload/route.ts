import { NextResponse } from 'next/server';
import { getAdminToken } from '@/lib/auth/admin';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function POST(request: Request) {
  const token = await getAdminToken();
  if (!token) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  try {
    const formData = await request.formData();

    const res = await fetch(`${API_URL}/bulletins/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData // forward formData directly
    });

    if (!res.ok) throw new Error(await res.text());

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

