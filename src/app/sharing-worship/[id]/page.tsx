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
    title: bulletin?.title ?? '나눔으로 드리는 예배',
    description: bulletin?.title ? `${bulletin.title} - 순복음범천교회 나눔으로 드리는 예배` : '순복음범천교회 나눔으로 드리는 예배',
  };
}

export default async function SharingWorshipDetailPage({ params }: Props) {
  const { id } = await params;
  const bulletin = await getBulletinById(id);

  if (!bulletin) return notFound();

  return (
    <TextBulletinDetailContainer
      bulletin={bulletin}
      backHref="/newcomer?tab=sharing-worship"
      backLabel="나눔으로 드리는 예배"
    />
  );
}
