// app/api/packages/[id]/route.js
import { NextResponse } from 'next/server';
import supabase from '@/lib/db';

export async function PUT(request, { params }) {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  let data;
  try {
    data = await request.json();
  } catch (err) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  try {
    const { error } = await supabase
      .from('packages')
      .update(data)
      .eq('id', id);

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Package update error:', error);
    return NextResponse.json({ error: 'Failed to update package' }, { status: 500 });
  }
}
