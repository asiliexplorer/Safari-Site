// app/admin/logout/route.js
import { logoutAdmin } from '@/lib/auth';

export async function GET() {
  return await logoutAdmin();
}

export async function POST() {
  return await logoutAdmin();
}