import { NextResponse } from 'next/server';
import { readValidAdminTokenFromCookie } from '@/lib/auth/session';
import { supabaseRestWithToken } from '@/lib/supabase/rest';
import type { MonthlySummary } from '@/types/content';

export async function GET() {
  const token = await readValidAdminTokenFromCookie();
  if (!token) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  try {
    const monthlySummaries = await supabaseRestWithToken<MonthlySummary[]>(
      token,
      '/rest/v1/monthly_summaries?select=id,month_key,title,content,published_at&order=month_key.desc&limit=100',
    );

    return NextResponse.json({ monthlySummaries });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'failed to fetch monthly summaries' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  const token = await readValidAdminTokenFromCookie();
  if (!token) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const payload = {
      month_key: String(body?.month_key || ''),
      title: body?.title ? String(body.title) : null,
      content: String(body?.content || ''),
      published_at: body?.published_at ? String(body.published_at) : new Date().toISOString(),
    };

    if (!payload.month_key || !payload.content) {
      return NextResponse.json({ error: 'month_key and content are required' }, { status: 400 });
    }

    const created = await supabaseRestWithToken<MonthlySummary[]>(
      token,
      '/rest/v1/monthly_summaries?select=id,month_key,title,content,published_at',
      {
        method: 'POST',
        body: payload,
        preferReturnRepresentation: true,
      },
    );

    return NextResponse.json({ monthlySummary: created[0] || null }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'failed to create monthly summary' },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  const token = await readValidAdminTokenFromCookie();
  if (!token) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const id = String(body?.id || '').trim();
    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    const payload = {
      month_key: String(body?.month_key || ''),
      title: body?.title ? String(body.title) : null,
      content: String(body?.content || ''),
      published_at: body?.published_at ? String(body.published_at) : new Date().toISOString(),
    };

    if (!payload.month_key || !payload.content) {
      return NextResponse.json({ error: 'month_key and content are required' }, { status: 400 });
    }

    const updated = await supabaseRestWithToken<MonthlySummary[]>(
      token,
      `/rest/v1/monthly_summaries?id=eq.${encodeURIComponent(id)}&select=id,month_key,title,content,published_at`,
      {
        method: 'PATCH',
        body: payload,
        preferReturnRepresentation: true,
      },
    );

    return NextResponse.json({ monthlySummary: updated[0] || null });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'failed to update monthly summary' },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  const token = await readValidAdminTokenFromCookie();
  if (!token) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = String(searchParams.get('id') || '').trim();
    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    await supabaseRestWithToken<unknown[]>(
      token,
      `/rest/v1/monthly_summaries?id=eq.${encodeURIComponent(id)}`,
      {
        method: 'DELETE',
      },
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'failed to delete monthly summary' },
      { status: 500 },
    );
  }
}
