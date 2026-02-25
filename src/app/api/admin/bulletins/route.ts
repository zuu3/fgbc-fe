import { NextResponse } from 'next/server';
import { readValidAdminTokenFromCookie } from '@/lib/auth/session';
import { supabaseRestWithToken } from '@/lib/supabase/rest';
import type { Bulletin } from '@/types/content';

export async function GET() {
  const token = await readValidAdminTokenFromCookie();
  if (!token) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  try {
    const bulletins = await supabaseRestWithToken<Bulletin[]>(
      token,
      '/rest/v1/bulletins?select=id,title,week_start_date,service_type,file_path,published_at,is_latest&order=week_start_date.desc&limit=100',
    );

    return NextResponse.json({ bulletins });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'failed to fetch bulletins' },
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
      title: String(body?.title || ''),
      week_start_date: String(body?.week_start_date || ''),
      service_type: body?.service_type ? String(body.service_type) : null,
      file_path: String(body?.file_path || ''),
      is_latest: Boolean(body?.is_latest),
      published_at: body?.published_at ? String(body.published_at) : new Date().toISOString(),
    };

    const created = await supabaseRestWithToken<Bulletin[]>(
      token,
      '/rest/v1/bulletins?select=id,title,week_start_date,service_type,file_path,published_at,is_latest',
      {
        method: 'POST',
        body: payload,
        preferReturnRepresentation: true,
      },
    );

    return NextResponse.json({ bulletin: created[0] || null }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'failed to create bulletin' },
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
      title: String(body?.title || ''),
      week_start_date: String(body?.week_start_date || ''),
      service_type: body?.service_type ? String(body.service_type) : null,
      file_path: String(body?.file_path || ''),
      is_latest: Boolean(body?.is_latest),
      published_at: body?.published_at ? String(body.published_at) : new Date().toISOString(),
    };

    const updated = await supabaseRestWithToken<Bulletin[]>(
      token,
      `/rest/v1/bulletins?id=eq.${encodeURIComponent(id)}&select=id,title,week_start_date,service_type,file_path,published_at,is_latest`,
      {
        method: 'PATCH',
        body: payload,
        preferReturnRepresentation: true,
      },
    );

    return NextResponse.json({ bulletin: updated[0] || null });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'failed to update bulletin' },
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
      `/rest/v1/bulletins?id=eq.${encodeURIComponent(id)}`,
      {
        method: 'DELETE',
      },
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'failed to delete bulletin' },
      { status: 500 },
    );
  }
}
