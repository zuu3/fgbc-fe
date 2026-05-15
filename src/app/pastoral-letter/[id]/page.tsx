import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBulletinById } from '@/lib/content/client';
import TextBulletinDetailContainer from '@/containers/TextBulletinDetailContainer';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const bulletin = await getBulletinById(id);
  return {
    title: bulletin?.title ?? '목양편지',
    description: bulletin?.title ? `${bulletin.title} - 순복음범천교회 목양편지` : '순복음범천교회 목양편지',
  };
}

export default async function PastoralLetterDetailPage({ params }: Props) {
  const { id } = await params;
  const bulletin = await getBulletinById(id);

  if (!bulletin) return notFound();

  return (
    <TextBulletinDetailContainer
      bulletin={bulletin}
      backHref="/newcomer?tab=pastoral-letter"
      backLabel="목양편지"
    />
  );
}
