// app/admin/(protected)/packages/api/update/[id]/route.js
import { NextResponse } from 'next/server';
import supabase from '@/lib/db';

// Helper: Safely convert string to number or null
const parseNumeric = (value) => {
  if (value === '' || value == null) return null;
  const num = parseFloat(value);
  return isNaN(num) ? null : num;
};

// Helper: Ensure array fields are properly formatted
const parseArray = (value) => {
  if (Array.isArray(value)) {
    return value
      .filter(item => item !== null && item !== undefined && item !== '')
      .map(item => item.toString().trim());
  }
  if (typeof value === 'string' && value.trim()) {
    return [value.trim()];
  }
  return [];
};

// Helper: Safely stringify JSON with proper error handling
const safeStringify = (obj, defaultValue = null) => {
  try {
    if (obj === null || obj === undefined) {
      return defaultValue;
    }
    return JSON.stringify(obj);
  } catch (error) {
    console.error('JSON stringify error:', error, obj);
    return defaultValue || JSON.stringify({});
  }
};

// Helper: Parse itinerary data
const parseItinerary = (itinerary) => {
  if (!Array.isArray(itinerary)) return [];
  
  return itinerary.map(day => ({
    day: Number(day.day) || 1,
    title: (day.title || '').toString().trim(),
    description: (day.description || '').toString().trim(),
    meals: {
      breakfast: Boolean(day.meals?.breakfast),
      lunch: Boolean(day.meals?.lunch),
      dinner: Boolean(day.meals?.dinner)
    },
    accommodation: (day.accommodation || '').toString().trim()
  }));
};

// Helper: Parse pricing data
const parsePricing = (pricing) => {
  const basePricing = {
    base_price: parseNumeric(pricing?.base_price) || 0,
    seasonal_pricing: [],
    group_discounts: []
  };

  if (Array.isArray(pricing?.seasonal_pricing)) {
    basePricing.seasonal_pricing = pricing.seasonal_pricing.map(season => ({
      season: (season.season || '').toString().trim(),
      price: season.price?.toString() || '',
      start_month: (season.start_month || 'January').toString().trim(),
      end_month: (season.end_month || 'December').toString().trim()
    })).filter(season => season.season);
  }

  if (Array.isArray(pricing?.group_discounts)) {
    basePricing.group_discounts = pricing.group_discounts.map(discount => ({
      min_people: Number(discount.min_people) || 2,
      discount: Number(discount.discount) || 0
    })).filter(discount => discount.min_people > 0);
  }

  return basePricing;
};

// Helper: Parse accommodation details
const parseAccommodationDetails = (details) => {
  if (!details || typeof details !== 'object') {
    return { note: '', inclusions: [] };
  }
  return {
    note: (details.note || '').toString().trim(),
    inclusions: parseArray(details.inclusions)
  };
};

// Helper: Parse activities transportation
const parseActivitiesTransportation = (transport) => {
  if (!transport || typeof transport !== 'object') {
    return { activities: [], vehicle: '', transfer: '' };
  }
  return {
    activities: parseArray(transport.activities),
    vehicle: (transport.vehicle || '').toString().trim(),
    transfer: (transport.transfer || '').toString().trim()
  };
};

// Helper: Parse inclusions
const parseInclusions = (inclusions) => {
  if (!inclusions || typeof inclusions !== 'object') {
    return { included: [], excluded: [] };
  }
  return {
    included: parseArray(inclusions.included),
    excluded: parseArray(inclusions.excluded)
  };
};

// Helper: Parse getting there info
const parseGettingThere = (gettingThere) => {
  if (!gettingThere || typeof gettingThere !== 'object') {
    return { description: '', details: [] };
  }
  return {
    description: (gettingThere.description || '').toString().trim(),
    details: parseArray(gettingThere.details)
  };
};

// Helper: Parse policies
const parsePolicies = (policies) => {
  if (!policies || typeof policies !== 'object') {
    return { cancellation: '', health_safety: '', insurance: '' };
  }
  return {
    cancellation: (policies.cancellation || '').toString().trim(),
    health_safety: (policies.health_safety || '').toString().trim(),
    insurance: (policies.insurance || '').toString().trim()
  };
};

export async function PUT(request, context) {
  try {
    const { id } = await context.params;
    const data = await request.json();

    console.log('Updating package ID:', id);

    // Parse numeric fields
    const price = parseNumeric(data.price) || 0;
    const rating = parseNumeric(data.rating) || 4.8;
    const review_count = Number(data.review_count) || 0;
    const duration = Number(data.duration) || 1;
    const group_size_min = Number(data.group_size_min) || 1;
    const group_size_max = Number(data.group_size_max) || 6;

    // Validate required fields
    if (!data.name?.trim()) {
      return NextResponse.json({ error: 'Package name is required' }, { status: 400 });
    }
    if (price === null || price < 0) {
      return NextResponse.json({ error: 'Valid price is required' }, { status: 400 });
    }

    // Parse all fields
    const best_season = parseArray(data.best_season);
    const destinations = parseArray(data.destinations);
    const highlights = parseArray(data.highlights);
    const gallery = parseArray(data.gallery);
    const activities = parseArray(data.activities);
    const included_activities = parseArray(data.included_activities);
    const tourFeatures = parseArray(data.tourFeatures);

    // Parse nested JSON objects
    const itinerary = parseItinerary(data.itinerary || []);
    const pricing = parsePricing(data.pricing || {});
    const accommodation_details = parseAccommodationDetails(data.accommodation_details);
    const activitiesTransportation = parseActivitiesTransportation(data.activitiesTransportation);
    const inclusions = parseInclusions(data.inclusions);
    const gettingThere = parseGettingThere(data.gettingThere);
    const policies = parsePolicies(data.policies);

    // Build update object
    const updateData = {
      name: data.name.trim(),
      slug: (data.slug || '').trim() || null,
      duration: duration,
      price: price,
      short_description: (data.short_description || '').trim() || null,
      description: (data.description || '').trim() || null,
      image: (data.image || '').trim() || null,
      tour_type: (data.tour_type || 'Safari').trim(),
      comfort_level: (data.comfort_level || 'Comfortable').trim(),
      accommodation: (data.accommodation || 'Luxury Lodge').trim(),
      best_season: best_season,
      difficulty_level: (data.difficulty_level || 'Moderate').trim(),
      destinations: destinations,
      highlights: highlights,
      gallery: gallery,
      rating: rating,
      review_count: review_count,
      group_size_min: group_size_min,
      group_size_max: group_size_max,
      featured: Boolean(data.featured),
      popular: Boolean(data.popular),
      status: (data.status || 'published').trim(),
      updated_at: new Date(),
      full_description: (data.full_description || '').trim() || null,
      location: (data.location || 'Tanzania').trim(),
      tour_features: tourFeatures,
      activities: activities,
      included_activities: included_activities,
      itinerary: itinerary,
      accommodation_details: accommodation_details,
      activities_transportation: activitiesTransportation,
      inclusions: inclusions,
      getting_there: gettingThere,
      tour_operator: (data.tourOperator || 'Soul of Tanzania').trim(),
      pricing: pricing,
      policies: policies
    };

    const { data: updatedPackage, error } = await supabase
      .from('packages')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) throw error;

    if (!updatedPackage || updatedPackage.length === 0) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      package: updatedPackage[0],
      message: 'Package updated successfully'
    });

  } catch (error) {
    console.error('Error updating package:', error);
    return NextResponse.json({ error: 'Failed to update package: ' + error.message }, { status: 500 });
  }
}

// GET endpoint
export async function GET(request, context) {
  try {
    const { id } = await context.params;
    const { data: packageData, error } = await supabase
      .from('packages')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    if (!packageData) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, package: packageData });
  } catch (error) {
    console.error('Error fetching package:', error);
    return NextResponse.json({ error: 'Failed to fetch package: ' + error.message }, { status: 500 });
  }
}