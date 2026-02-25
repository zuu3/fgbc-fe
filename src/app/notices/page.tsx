import { redirect } from 'next/navigation';

export default function NoticesPage() {
  redirect('/newcomer?tab=notice');
}
