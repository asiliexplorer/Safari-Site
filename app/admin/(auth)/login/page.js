// app/admin/login/page.js
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginClient from './LoginClient';

export default async function LoginPage() {
  const session = (await cookies()).get('admin_session')?.value;
  if (session) {
    redirect('/admin/packages');
  }
  return <LoginClient />;
}