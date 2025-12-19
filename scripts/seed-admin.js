import supabase from '../lib/db.js';
import bcrypt from 'bcrypt';

async function seedAdmin() {
  try {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    const { data, error } = await supabase
      .from('admins')
      .insert({ email: 'admin@safari.com', password_hash: hashedPassword, name: 'Admin User' })
      .select('id, email');

    if (error) throw error;

    console.log('✅ Admin user created:', data[0]);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding admin:', err.message);
    process.exit(1);
  }
}

seedAdmin();
