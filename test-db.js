// test-db.js
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

config({ path: '.env.local' });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function test() {
  try {
    // Test basic connection by selecting from admins table
    const { data, error } = await supabase.from('admins').select('id').limit(1);
    if (error) throw error;
    console.log('✅ Supabase connection successful');
    console.log('✅ Can access admins table');
  } catch (err) {
    console.error('❌ DB test failed:', err.message);
  }
}

test();