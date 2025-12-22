import supabase from '@/lib/db';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
export async function verifyAdminCredentials(username, password) {
  try {
    const { data: admin, error } = await supabase
      .from('admins')
      .select('password_hash')
      .eq('name', username)
      .single();

    if (error || !admin) return false;
    return await bcrypt.compare(password, admin.password_hash);
  } catch (err) {
    console.error('DB error in auth:', err);
    return false;
  }
}