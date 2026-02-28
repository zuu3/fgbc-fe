import { Suspense } from 'react';
import type { Metadata } from 'next';
import BulletinsContainer from '@/containers/BulletinsContainer';

export const metadata: Metadata = {
  title: '주보',
  description: '순복음범천교회 주보를 확인하고 다운로드할 수 있습니다.',
  alternates: {
    canonical: '/bulletins',
  },
};

export default function BulletinsPage() {
  return (
    <Suspense fallback={null}>
      <BulletinsContainer />
    </Suspense>
  );
}
