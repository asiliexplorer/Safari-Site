// app/api/packages/route.js
import { NextResponse } from 'next/server';
import supabase from '@/lib/db';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '12', 10);
    const status = searchParams.get('status');
    const popular = searchParams.get('popular');

    let query = supabase
      .from('packages')
      .select(`
        id, name, slug, price, image, tour_type, comfort_level, rating,
        review_count, duration, group_size_max, status, availability,
        destinations, best_season
      `)
      .eq('availability', true)
      .order('created_at', { ascending: false })
      .limit(Math.min(limit, 50));

    // Apply status filter
    if (status) {
      query = query.eq('status', status);
    } else {
      query = query.eq('status', 'published');
    }

    // Apply popular filter
    if (popular === 'true') {
      query = query.eq('popular', true);
    }

    const { data: packagesData, error } = await query;

    if (error) throw error;

    const packages = packagesData.map(pkg => ({
      ...pkg,
      price: parseFloat(pkg.price) || 0,
      rating: parseFloat(pkg.rating) || 4.5,
      review_count: parseInt(pkg.review_count) || 0,
      duration: parseInt(pkg.duration) || 5,
      group_size_max: parseInt(pkg.group_size_max) || 6,
      // Ensure destinations is array (in case stored as string)
      destinations: Array.isArray(pkg.destinations)
        ? pkg.destinations
        : typeof pkg.destinations === 'string'
          ? [pkg.destinations]
          : []
    }));

    // ✅ Return { packages: [...] } to match frontend expectation
    return NextResponse.json({ packages });
  } catch (error) {
    console.error('Error fetching packages:', error);
    return NextResponse.json(
      { error: 'Failed to load packages', success: false },
      { status: 500 }
    );
  }
}