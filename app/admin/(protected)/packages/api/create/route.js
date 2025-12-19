import { NextResponse } from 'next/server';
import supabase from '@/lib/db';

export async function POST(request) {
  let connection;
  try {
    console.log('📦 Starting package creation...');
    
    // Check if request body exists
    if (!request.body) {
      return NextResponse.json(
        { error: 'Request body is required' },
        { status: 400 }
      );
    }

    let data;
    try {
      data = await request.json();
      console.log('📨 Received data:', { 
        name: data.name, 
        price: data.price,
        hasImage: !!data.image,
        galleryCount: data.gallery?.length || 0
      });
    } catch (parseError) {
      console.error('❌ JSON parse error:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!data.name || !data.price) {
      console.error('❌ Missing required fields:', { 
        hasName: !!data.name, 
        hasPrice: !!data.price 
      });
      return NextResponse.json(
        { error: 'Package name and price are required' },
        { status: 400 }
      );
    }

    // Test database connection first
    try {
      const { data, error } = await supabase.from('admins').select('id').limit(1);
      if (error) throw error;
      console.log('✅ Database connection test passed');
    } catch (dbError) {
      console.error('❌ Database connection test failed:', dbError);
      return NextResponse.json(
        { error: 'Database connection failed: ' + dbError.message },
        { status: 500 }
      );
    }

    // Generate slug if not provided
    const slug = data.slug || data.name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .substring(0, 100); // Limit slug length

    console.log('🔍 Checking for existing slug:', slug);

    // Check if slug already exists
    const { data: existingResult, error: slugError } = await supabase
      .from('packages')
      .select('id')
      .eq('slug', slug);

    if (slugError) throw slugError;

    if (existingResult.length > 0) {
      console.error('❌ Slug already exists:', slug);
      return NextResponse.json(
        { error: 'Package with this slug already exists' },
        { status: 400 }
      );
    }

    console.log('💾 Inserting package into database...');

    console.log('🚀 Executing database insert...');
    const { data: insertResult, error: insertError } = await supabase
      .from('packages')
      .insert({
        name: data.name,
        slug,
        duration: data.duration || 5,
        price: parseFloat(data.price) || 0,
        short_description: data.short_description || '',
        description: data.description || '',
        full_description: data.full_description || data.description || '',
        location: data.location || 'Tanzania',
        tour_type: data.tour_type || 'Safari',
        comfort_level: data.comfort_level || 'Comfortable',
        accommodation: data.accommodation || 'Luxury Lodge',
        best_season: data.best_season || [],
        difficulty_level: data.difficulty_level || 'Moderate',
        destinations: data.destinations || [],
        highlights: data.highlights || [],
        itinerary: data.itinerary || [],
        accommodation_details: data.accommodation_details || { note: '', inclusions: [] },
        activities: data.activities || [],
        included_activities: data.included_activities || [],
        group_size: data.groupSize || `${data.group_size_min || 1}-${data.group_size_max || 6} People`,
        tour_features: data.tourFeatures || [],
        activities_transportation: data.activitiesTransportation || { activities: [], vehicle: '', transfer: '' },
        inclusions: data.inclusions || { included: [], excluded: [] },
        getting_there: data.gettingThere || { description: '', details: [] },
        tour_operator: data.tourOperator || 'Soul of Tanzania',
        pricing: data.pricing || { base_price: data.price || '', seasonal_pricing: [], group_discounts: [] },
        image: data.image || '',
        gallery: data.gallery || [],
        policies: data.policies || { cancellation: '', health_safety: '', insurance: '' },
        rating: parseFloat(data.rating) || 4.8,
        review_count: parseInt(data.review_count) || 0,
        group_size_min: parseInt(data.group_size_min) || 1,
        group_size_max: parseInt(data.group_size_max) || 6,
        featured: Boolean(data.featured),
        popular: Boolean(data.popular),
        status: data.status || 'draft',
        is_draft: Boolean(data.is_draft),
        published_at: data.status === 'published' ? new Date() : null,
        availability: true,
        created_at: new Date(),
        updated_at: new Date()
      })
      .select();

    if (insertError) throw insertError;

    console.log('✅ Package created successfully, ID:', insertResult[0].id);

    const responseData = {
      success: true,
      package: insertResult[0],
      message: `Package ${data.status === 'published' ? 'published' : 'saved as draft'} successfully`
    };

    // Ensure proper response
    return new NextResponse(JSON.stringify(responseData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('❌ Error creating package:', error);
    
    // Detailed error response
    const errorResponse = {
      success: false,
      error: 'Failed to create package',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    };

    return new NextResponse(JSON.stringify(errorResponse), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}