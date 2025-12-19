import supabase from '@/lib/db';
import { notFound } from 'next/navigation';
import EditPackageForm from './EditPackageForm';

async function getPackage(id) {
  try {
    console.log('Fetching package with id:', id);
    const { data: packageData, error } = await supabase
      .from('packages')
      .select('*')
      .eq('id', id)
      .single();
    console.log('Supabase result:', { packageData, error });
    if (error) return null;
    return packageData;
  } catch (error) {
    console.error('Error fetching package:', error);
    return null;
  }
}

export default async function EditPackagePage(context) {
  const { id } = await context.params;
  const packageData = await getPackage(id);

  if (!packageData) {
    notFound();
  }

  // Transform database data to match form structure
  const formattedData = {
    ...packageData,
    best_season: packageData.best_season ? 
      (Array.isArray(packageData.best_season) ? packageData.best_season : packageData.best_season.split(', ')) 
      : [],
    destinations: packageData.destinations || [],
    highlights: packageData.highlights || [],
    gallery: packageData.gallery || [],
    // Add any nested objects that might be stored as JSON
    route: typeof packageData.route === 'object' ? packageData.route : { start: '', end: '', days: [] },
    accommodationMeals: typeof packageData.accommodation_meals === 'object' ? packageData.accommodation_meals : { note: '', schedule: [] },
    activitiesTransportation: typeof packageData.activities_transportation === 'object' ? packageData.activities_transportation : { activities: [], vehicle: '', flightIncluded: false, flightDetails: '', transfer: '' },
    rates: typeof packageData.rates === 'object' ? packageData.rates : { disclaimer: '', pricing: [] },
    inclusions: typeof packageData.inclusions === 'object' ? packageData.inclusions : { included: [], excluded: [] },
    cancellationPolicy: typeof packageData.cancellation_policy === 'object' ? packageData.cancellation_policy : { description: '' },
    healthSafety: typeof packageData.health_safety === 'object' ? packageData.health_safety : { insurance: '', requirements: [], precautions: [] },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditPackageForm packageData={formattedData} />
      </div>
    </div>
  );
}