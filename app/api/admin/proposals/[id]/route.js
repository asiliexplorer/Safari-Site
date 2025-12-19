// app/api/admin/proposals/[id]/route.js
import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/auth';
import supabase from '@/lib/db';

export async function PATCH(request, { params }) {
  const isAuthenticated = await isAdminAuthenticated();
  if (!isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = params;

  try {
    // Validate proposal exists
    const { data: existing, error: existError } = await supabase
      .from('proposals')
      .select('id')
      .eq('id', id)
      .single();

    if (existError || !existing) {
      return NextResponse.json({ error: 'Proposal not found' }, { status: 404 });
    }

    const { status } = await request.json();

    // Optional: validate allowed statuses
    const allowedStatuses = ['new', 'contacted', 'responded', 'closed'];
    if (!allowedStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const { data: result, error: updateError } = await supabase
      .from('proposals')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select('id, status');

    if (updateError) throw updateError;

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error updating proposal status:', error);
    return NextResponse.json({ error: 'Failed to update proposal status' }, { status: 500 });
  }
}

// Optional: Add DELETE handler in the same file if you plan to use it
export async function DELETE(request, { params }) {
  const isAuthenticated = await isAdminAuthenticated();
  if (!isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = params;

  try {
    const result = await db.query('DELETE FROM proposals WHERE id = $1 RETURNING id', [id]);
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Proposal not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting proposal:', error);
    return NextResponse.json({ error: 'Failed to delete proposal' }, { status: 500 });
  }
}