require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.supabase_url;
const supabaseKey = process.env.supabase_key;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function queryTable() {
  try {
    const { data, error } = await supabase
      .from('packages')
      .select('id, name, status')
      .eq('status', 'published');

    if (error) {
      console.error('Error querying packages:', error);
      return;
    }

    console.log(`Found ${data.length} published packages:`);
    data.forEach(pkg => {
      console.log(`- ${pkg.name} (ID: ${pkg.id})`);
    });
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

queryTable();