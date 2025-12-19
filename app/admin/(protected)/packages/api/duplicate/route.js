// app/admin/(protected)/packages/api/duplicate/route.js
import { NextResponse } from 'next/server';
import supabase from '@/lib/db';

// Helper to safely normalize jsonb fields that may be strings or malformed
const normalizeJsonb = (value, defaultType = 'array') => {
  if (value === null || value === undefined) {
    return defaultType === 'array' ? [] : {};
  }

  if (typeof value === 'string') {
    try {
      // Try to parse as JSON
      return JSON.parse(value);
    } catch (e) {
      // If it's a comma-separated string (legacy), convert to array
      if (defaultType === 'array' && value.includes(',')) {
        return value
          .split(',')
          .map(s => s.trim())
          .filter(Boolean);
      }
      // If single value, wrap in array
      return defaultType === 'array' ? [value.trim()] : {};
    }
  }

  // Already an object/array — return as-is
  return value;
};

export async function POST(request) {
  try {
    const { packageId } = await request.json();

    if (!packageId) {
      return NextResponse.json({ error: 'packageId is required' }, { status: 400 });
    }

    // Fetch the original package
    const { data: original, error: fetchError } = await supabase
      .from('packages')
      .select(`
        name, slug, duration, price, short_description, description,
        image, tour_type, comfort_level, accommodation, best_season,
        difficulty_level, destinations, highlights, gallery, rating,
        review_count, group_size_min, group_size_max, featured, popular,
        status, is_draft, availability,
        full_description, location, tour_features, activities, included_activities,
        itinerary, accommodation_details, activities_transportation, inclusions,
        getting_there, tour_operator, pricing, policies
      `)
      .eq('id', packageId)
      .single();

    if (fetchError) throw fetchError;

    if (!original) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }

    // Generate new slug
    const newSlug = `${original.slug}-copy-${Date.now()}`;

    // Normalize all jsonb/array fields
    const best_season = normalizeJsonb(original.best_season, 'array');
    const destinations = normalizeJsonb(original.destinations, 'array');
    const highlights = normalizeJsonb(original.highlights, 'array');
    const gallery = normalizeJsonb(original.gallery, 'array');
    const tour_features = normalizeJsonb(original.tour_features, 'array');
    const activities = normalizeJsonb(original.activities, 'array');
    const included_activities = normalizeJsonb(original.included_activities, 'array');

    const itinerary = normalizeJsonb(original.itinerary, 'object');
    const accommodation_details = normalizeJsonb(original.accommodation_details, 'object');
    const activities_transportation = normalizeJsonb(original.activities_transportation, 'object');
    const inclusions = normalizeJsonb(original.inclusions, 'object');
    const getting_there = normalizeJsonb(original.getting_there, 'object');
    const pricing = normalizeJsonb(original.pricing, 'object');
    const policies = normalizeJsonb(original.policies, 'object');

    // Insert duplicate — all columns, with overrides
    const { data: newPackage, error: insertError } = await supabase
      .from('packages')
      .insert({
        name: `${original.name} (Copy)`,
        slug: newSlug,
        duration: original.duration,
        price: original.price,
        short_description: original.short_description,
        description: original.description,
        image: original.image,
        tour_type: original.tour_type,
        comfort_level: original.comfort_level,
        accommodation: original.accommodation,
        best_season: best_season,
        difficulty_level: original.difficulty_level,
        destinations: destinations,
        highlights: highlights,
        gallery: gallery,
        rating: original.rating,
        review_count: original.review_count,
        group_size_min: original.group_size_min,
        group_size_max: original.group_size_max,
        featured: false,
        popular: false,
        status: 'draft',
        is_draft: true,
        availability: original.availability,
        full_description: typeof original.full_description === 'string' ? original.full_description : null,
        location: typeof original.location === 'string' ? original.location : 'Tanzania',
        tour_features: tour_features,
        activities: activities,
        included_activities: included_activities,
        itinerary: itinerary,
        accommodation_details: accommodation_details,
        activities_transportation: activities_transportation,
        inclusions: inclusions,
        getting_there: getting_there,
        tour_operator: typeof original.tour_operator === 'string' ? original.tour_operator : 'Soul of Tanzania',
        pricing: pricing,
        policies: policies
      })
      .select();

    if (insertError) throw insertError;

    return NextResponse.json({
      success: true,
      newPackage: newPackage[0],
      message: 'Package duplicated successfully'
    });
  } catch (error) {
    console.error('Error duplicating package:', error);
    return NextResponse.json(
      { error: 'Failed to duplicate package: ' + (error.message || 'Unknown error') },
      { status: 500 }
    );
  }
}