import { NextResponse } from 'next/server';
import { readValidAdminTokenFromCookie } from '@/lib/auth/session';
import { requireSupabaseConfig } from '@/lib/supabase/config';

function sanitizeFileName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function POST(request: Request) {
  const token = await readValidAdminTokenFromCookie();
  if (!token) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    return NextResponse.json({ error: 'SUPABASE_SERVICE_ROLE_KEY is missing' }, { status: 500 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'file is required' }, { status: 400 });
    }

    const bucket = process.env.NEXT_PUBLIC_SUPABASE_BULLETINS_BUCKET || 'bulletins';
    const { url } = requireSupabaseConfig();

    const now = new Date();
    const year = now.getFullYear();
    const safeName = sanitizeFileName(file.name || 'bulletin.pdf') || 'bulletin.pdf';
    const filePath = `${year}/${Date.now()}-${safeName}`;
    const encodedPath = filePath.split('/').map(encodeURIComponent).join('/');

    const bytes = await file.arrayBuffer();
    const uploadResponse = await fetch(
      `${url}/storage/v1/object/${bucket}/${encodedPath}`,
      {
        method: 'POST',
        headers: {
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
          'Content-Type': file.type || 'application/octet-stream',
          'x-upsert': 'false',
        },
        body: bytes,
      },
    );

    if (!uploadResponse.ok) {
      const text = await uploadResponse.text();
      return NextResponse.json({ error: `upload failed: ${text}` }, { status: 500 });
    }

    const publicUrl = `${url}/storage/v1/object/public/${bucket}/${filePath}`;

    return NextResponse.json({
      filePath,
      publicUrl,
      message: 'uploaded',
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'upload failed' },
      { status: 500 },
    );
  }
}
