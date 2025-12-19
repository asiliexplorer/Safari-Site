import supabase from '@/lib/db';
import bcrypt from 'bcrypt';

export async function verifyAdminCredentials(email, password) {
  try {
    const { data: admin, error } = await supabase
      .from('admins')
      .select('password_hash')
      .eq('email', email)
      .single();

    if (error || !admin) return false;
    return await bcrypt.compare(password, admin.password_hash);
  } catch (err) {
    console.error('DB error in auth:', err);
    return false;
  }
}