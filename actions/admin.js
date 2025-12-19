// actions/admin.js
'use server';

import { loginAdmin } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function loginAction(prevState, formData) {
  const email = formData.get('email')?.trim();
  const password = formData.get('password');

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }
  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters' };
  }

  const success = await loginAdmin(email, password);
  if (success) {
    redirect('/admin/packages');
  }
  return { error: 'Invalid email or password' };
}