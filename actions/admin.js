// actions/admin.js
"use server";

import { loginAdmin } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function loginAction(prevState, formData) {
  const username = formData.get('username')?.trim();
  const password = formData.get('password');

  if (!username || !password) {
    return { error: 'Username and password are required' };
  }
  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters' };
  }

  const success = await loginAdmin(username, password);
  if (success) {
    redirect('/admin/packages');
  }
  return { error: 'Invalid username or password' };
}