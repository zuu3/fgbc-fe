import type { Metadata } from 'next';
import AdminContainer from '@/containers/AdminContainer';

export const metadata: Metadata = {
  title: '관리자',
  description: '공지와 주보를 관리하는 관리자 페이지입니다.',
  alternates: {
    canonical: '/admin',
  },
};

export default function AdminPage() {
  return <AdminContainer />;
}
