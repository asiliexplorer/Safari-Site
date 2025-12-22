import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function seedAdmin() {
  try {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const { data, error } = await supabase
      .from('admins')
      .insert({ email: 'admin@safari.com', password_hash: hashedPassword, name: 'admin' })
      .select('id, name');
    if (error) throw error;
    console.log('✅ Admin user created:', data[0]);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding admin:', err.message);
    process.exit(1);
  }
}

seedAdmin();
