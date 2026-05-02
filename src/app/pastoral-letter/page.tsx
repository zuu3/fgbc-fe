import { Suspense } from 'react';
import type { Metadata } from 'next';
import BulletinsContainer from '@/containers/BulletinsContainer';

export const metadata: Metadata = {
  title: '목양편지',
  description: '순복음범천교회 목양편지를 확인하고 다운로드할 수 있습니다.',
  alternates: {
    canonical: '/pastoral-letter',
  },
};

export default function PastoralLetterPage() {
  return (
    <Suspense fallback={null}>
      <BulletinsContainer
        contentCategory="pastoral_letter"
        title="목양편지"
        description="매주 발행되는 목양편지를 확인하세요."
        emptyText="등록된 목양편지가 없습니다."
      />
    </Suspense>
  );
}
