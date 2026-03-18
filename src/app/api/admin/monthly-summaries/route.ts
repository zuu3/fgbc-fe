import { NextResponse } from 'next/server';
import { getAdminToken } from '@/lib/auth/admin';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function GET() {
  const token = await getAdminToken();
  if (!token) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  try {
    const res = await fetch(`${API_URL}/monthly-summaries/`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store'
    });
    if (!res.ok) throw new Error(await res.text());
    
    const monthlySummaries = await res.json();
    return NextResponse.json({ monthlySummaries });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const token = await getAdminToken();
  if (!token) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const res = await fetch(`${API_URL}/monthly-summaries/`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(await res.text());

    const monthlySummary = await res.json();
    return NextResponse.json({ monthlySummary }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const token = await getAdminToken();
  if (!token) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const res = await fetch(`${API_URL}/monthly-summaries/`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(await res.text());

    const monthlySummary = await res.json();
    return NextResponse.json({ monthlySummary });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const token = await getAdminToken();
  if (!token) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const res = await fetch(`${API_URL}/monthly-summaries/?id=${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) throw new Error(await res.text());

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
