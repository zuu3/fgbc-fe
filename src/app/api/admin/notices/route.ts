import { NextResponse } from 'next/server';
import { readValidAdminTokenFromCookie } from '@/lib/auth/session';
import { supabaseRestWithToken } from '@/lib/supabase/rest';
import type { Notice } from '@/types/content';

export async function GET() {
  const token = await readValidAdminTokenFromCookie();
  if (!token) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  try {
    const notices = await supabaseRestWithToken<Notice[]>(
      token,
      '/rest/v1/notices?select=id,title,content,category,start_at,end_at,is_all_day,is_pinned,location,attachment_path,status,published_at&order=start_at.desc&limit=100',
    );

    return NextResponse.json({ notices });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'failed to fetch notices' },
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
      content: String(body?.content || ''),
      category: body?.category || 'event',
      start_at: String(body?.start_at || ''),
      end_at: String(body?.end_at || ''),
      is_all_day: Boolean(body?.is_all_day),
      is_pinned: Boolean(body?.is_pinned),
      location: body?.location ? String(body.location) : null,
      status: 'published',
      published_at: new Date().toISOString(),
    };

    const created = await supabaseRestWithToken<Notice[]>(
      token,
      '/rest/v1/notices?select=id,title,content,category,start_at,end_at,is_all_day,is_pinned,location,attachment_path,status,published_at',
      {
        method: 'POST',
        body: payload,
        preferReturnRepresentation: true,
      },
    );

    return NextResponse.json({ notice: created[0] || null }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'failed to create notice' },
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
      content: String(body?.content || ''),
      category: body?.category || 'event',
      start_at: String(body?.start_at || ''),
      end_at: String(body?.end_at || ''),
      is_all_day: Boolean(body?.is_all_day),
      is_pinned: Boolean(body?.is_pinned),
      location: body?.location ? String(body.location) : null,
      status: 'published',
      published_at: new Date().toISOString(),
    };

    const updated = await supabaseRestWithToken<Notice[]>(
      token,
      `/rest/v1/notices?id=eq.${encodeURIComponent(id)}&select=id,title,content,category,start_at,end_at,is_all_day,is_pinned,location,attachment_path,status,published_at`,
      {
        method: 'PATCH',
        body: payload,
        preferReturnRepresentation: true,
      },
    );

    return NextResponse.json({ notice: updated[0] || null });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'failed to update notice' },
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
      `/rest/v1/notices?id=eq.${encodeURIComponent(id)}`,
      {
        method: 'DELETE',
      },
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'failed to delete notice' },
      { status: 500 },
    );
  }
}
