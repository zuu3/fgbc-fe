import type { Metadata } from 'next';
import AdminLoginContainer from '@/containers/AdminLoginContainer';

export const metadata: Metadata = {
  title: '관리자 로그인',
  description: '순복음범천교회 관리자 로그인 페이지',
  alternates: {
    canonical: '/admin/login',
  },
};

export default function AdminLoginPage() {
  return <AdminLoginContainer />;
}
