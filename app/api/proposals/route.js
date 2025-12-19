// app/api/proposals/route.js
import { NextResponse } from 'next/server';
import supabase from '@/lib/db';

export async function POST(request) {
  try {
    const data = await request.json();

    const required = [
      'first_name', 'last_name', 'email', 'phone',
      'activities', 'days', 'travel_with', 'arrival_date', 'budget',
      'adults', 'children', 'adult_ages', 'country'
    ];

    for (const field of required) {
      if (data[field] === undefined || data[field] === null || (typeof data[field] === 'string' && !data[field].trim())) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // ✅ Prepare JSONB fields
    const adult_ages = Array.isArray(data.adult_ages)
      ? data.adult_ages.map(age => Number(age)).filter(age => !isNaN(age))
      : [];

    const { data: insertResult, error } = await supabase
      .from('proposals')
      .insert({
        activities: data.activities || [],
        days: data.days,
        travel_with: data.travel_with,
        arrival_date: data.arrival_date,
        budget: data.budget,
        adults: data.adults,
        children: data.children,
        adult_ages: Array.isArray(data.adult_ages)
          ? data.adult_ages.map(age => Number(age)).filter(age => !isNaN(age))
          : [],
        first_name: data.first_name.trim(),
        last_name: data.last_name.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        alternate_phone: !data.alternate_phone?.trim() ? null : data.alternate_phone.trim(),
        country: data.country.trim(),
        notes: data.notes?.trim() || null,
        newsletter: Boolean(data.newsletter),
        coupon: data.coupon?.trim() || null,
        status: 'new'
      })
      .select('id');

    if (error) throw error;

    return NextResponse.json({ success: true, id: insertResult[0].id });

  } catch (error) {
    console.error('Proposal submission error:', error);
    return NextResponse.json({ error: 'Failed to submit proposal: ' + error.message }, { status: 500 });
  }
}
