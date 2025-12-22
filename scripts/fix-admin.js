import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function fixAdmin() {
  // Delete all admins except the one with email 'admin@safari.com'
  await supabase.from('admins').delete().neq('email', 'admin@safari.com');
  // Update the remaining admin to have name 'admin' and password 'admin123'
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await supabase.from('admins').update({ name: 'admin', password_hash: hashedPassword }).eq('email', 'admin@safari.com');
  console.log('✅ Only one admin remains with username "admin" and password "admin123"');
  process.exit(0);
}

fixAdmin();
