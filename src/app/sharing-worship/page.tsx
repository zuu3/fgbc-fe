import { Suspense } from 'react';
import type { Metadata } from 'next';
import BulletinsContainer from '@/containers/BulletinsContainer';

export const metadata: Metadata = {
  title: '나눔으로 드리는 예배',
  description: '순복음범천교회 나눔으로 드리는 예배 자료를 확인하고 다운로드할 수 있습니다.',
  alternates: {
    canonical: '/sharing-worship',
  },
};

export default function SharingWorshipPage() {
  return (
    <Suspense fallback={null}>
      <BulletinsContainer
        contentCategory="sharing_worship"
        title="나눔으로 드리는 예배"
        description="매주 나눔으로 드리는 예배 자료를 확인하세요."
        emptyText="등록된 나눔으로 드리는 예배 자료가 없습니다."
      />
    </Suspense>
  );
}
