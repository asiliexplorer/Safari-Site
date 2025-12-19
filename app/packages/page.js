// app/packages/page.js
import PackageCard from '@/app/_components/cards/PackageCard';
import supabase from '@/lib/db'; // ✅ direct DB access

export default async function PackageListingPage() {
  let packages = [];

  try {
    // ✅ Fetch directly from DB — no API, no URL issues
    const { data: packagesData, error } = await supabase
      .from('packages')
      .select(`
        id, name, slug, price, image, tour_type, comfort_level, rating,
        review_count, duration, group_size_max, status, availability, destinations
      `)
      .eq('status', 'published')
      .eq('availability', true)
      .order('created_at', { ascending: false });

    if (error) throw error;

    packages = packagesData.map(pkg => ({
      ...pkg,
      price: parseFloat(pkg.price) || 0,
      rating: parseFloat(pkg.rating) || 4.5,
      review_count: parseInt(pkg.review_count) || 0,
      duration: parseInt(pkg.duration) || 5,
      group_size_max: parseInt(pkg.group_size_max) || 6,
      destinations: Array.isArray(pkg.destinations) ? pkg.destinations : []
    }));
  } catch (err) {
    console.error('Failed to fetch packages from DB:', err);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Safari Packages</h1>
        {packages.length === 0 ? (
          <p className="text-gray-600">No packages available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map(pkg => (
              <PackageCard key={pkg.slug}   pkg={pkg} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}