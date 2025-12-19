import { NextResponse } from 'next/server';
import supabase from '@/lib/db';

export async function GET() {
  try {
    const { data: rawPackages, error } = await supabase
      .from('packages')
      .select('id, name, slug, duration, price, image, created_at, status, is_draft, published_at, updated_at, tour_type, difficulty_level, featured, popular, rating, review_count')
      .order('is_draft', { ascending: true })
      .order('created_at', { ascending: false });

    if (error) throw error;

    const packages = rawPackages.map(pkg => ({
      ...pkg,
      status: pkg.status || 'draft',
      is_draft: pkg.is_draft !== null ? pkg.is_draft : true,
      updated_at: pkg.updated_at || pkg.created_at,
      tour_type: pkg.tour_type || 'Safari',
      difficulty_level: pkg.difficulty_level || 'Moderate',
      featured: pkg.featured || false,
      popular: pkg.popular || false,
      rating: pkg.rating || 0,
      review_count: pkg.review_count || 0
    }));

    return NextResponse.json({ packages });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}