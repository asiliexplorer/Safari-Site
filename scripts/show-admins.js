import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function showAdmins() {
  const { data, error } = await supabase
    .from('admins')
    .select('id, name, email, password_hash');
  if (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
  console.log('Admins:', data);
  process.exit(0);
}

showAdmins();
