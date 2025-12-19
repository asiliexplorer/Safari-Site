// app/api/admin/proposals/route.js

import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/auth';
import supabase from '@/lib/db';

export async function GET() {
  const isAuthenticated = await isAdminAuthenticated();
  if (!isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { data: proposals, error } = await supabase
      .from('proposals')
      .select(`
        id,
        first_name,
        last_name,
        email,
        phone,
        alternate_phone,
        country,
        activities,
        days,
        travel_with,
        arrival_date,
        budget,
        adults,
        children,
        adult_ages,
        notes,
        newsletter,
        coupon,
        status,
        created_at
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json(proposals);
  } catch (error) {
    console.error('Error fetching proposals:', error);
    return NextResponse.json({ error: 'Failed to fetch proposals' }, { status: 500 });
  }
}