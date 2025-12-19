// app/api/packages/[slug]/route.js
import { NextResponse } from 'next/server';
import supabase from '@/lib/db';

export async function GET(request, { params }) {
  const { slug } = await params; // ✅ Await params

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }

  try {
    const { data: packageData, error } = await supabase
      .from('packages')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Package not found' }, { status: 404 });
      }
      throw error;
    }

    const pkg = packageData;

    // Parse JSON fields safely
    const parsedPkg = {
      ...pkg,
      destinations: Array.isArray(pkg.destinations) ? pkg.destinations : [],
      best_season: Array.isArray(pkg.best_season) ? pkg.best_season : [],
      gallery: Array.isArray(pkg.gallery) ? pkg.gallery : [],
      highlights: Array.isArray(pkg.highlights) ? pkg.highlights : [],
      activities: Array.isArray(pkg.activities) ? pkg.activities : [],
      included_activities: Array.isArray(pkg.included_activities) ? pkg.included_activities : [],
      // Parse JSON strings if stored as text
      itinerary: typeof pkg.itinerary === 'string' ? JSON.parse(pkg.itinerary) : pkg.itinerary || [],
      accommodation_details: typeof pkg.accommodation_details === 'string' 
        ? JSON.parse(pkg.accommodation_details) 
        : pkg.accommodation_details || { note: '', inclusions: [] },
      activities_transportation: typeof pkg.activities_transportation === 'string'
        ? JSON.parse(pkg.activities_transportation)
        : pkg.activities_transportation || { activities: [], vehicle: '', transfer: '' },
      inclusions: typeof pkg.inclusions === 'string'
        ? JSON.parse(pkg.inclusions)
        : pkg.inclusions || { included: [], excluded: [] },
      getting_there: typeof pkg.getting_there === 'string'
        ? JSON.parse(pkg.getting_there)
        : pkg.getting_there || { description: '', details: [] },
      pricing: typeof pkg.pricing === 'string'
        ? JSON.parse(pkg.pricing)
        : pkg.pricing || { base_price: 0, seasonal_pricing: [], group_discounts: [] },
      policies: typeof pkg.policies === 'string'
        ? JSON.parse(pkg.policies)
        : pkg.policies || { cancellation: '', health_safety: '', insurance: '' }
    };

    return NextResponse.json(parsedPkg);
  } catch (error) {
    console.error('Package fetch error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}