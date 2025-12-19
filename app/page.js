// app/page.js
import HomePage from "@/app/_components/home/HomePage";
import supabase from '@/lib/db';

export const metadata = {
  title: "Asili Explorer Safaris | Unforgettable African Safari Adventures",
  description: "Experience the magic of Africa with expertly crafted safaris. From Serengeti game drives to Kilimanjaro treks and Zanzibar beaches. Book your dream safari today!",
};

export default async function Home() {
  // Fetch published packages for the landing page
  let packages = [];

  try {
    const { data: packagesData, error } = await supabase
      .from('packages')
      .select(`
        id, name, slug, price, image, tour_type, comfort_level, rating,
        review_count, duration, group_size_max, status, availability, destinations,
        featured, popular, difficulty_level, short_description
      `)
      .eq('status', 'published')
      .eq('availability', true)
      .order('featured', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(6); // Show top 6 packages on landing page

    if (error) throw error;

    packages = packagesData.map(pkg => ({
      ...pkg,
      price: parseFloat(pkg.price) || 0,
      rating: parseFloat(pkg.rating) || 4.5,
      review_count: parseInt(pkg.review_count) || 0,
      duration: parseInt(pkg.duration) || 5,
      group_size_max: parseInt(pkg.group_size_max) || 6,
      destinations: Array.isArray(pkg.destinations) ? pkg.destinations : [],
      featured: pkg.featured || false,
      popular: pkg.popular || false
    }));
  } catch (err) {
    console.error('Failed to fetch packages for landing page:', err);
  }

  return <HomePage packages={packages} />;
}
