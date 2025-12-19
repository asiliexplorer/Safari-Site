// app/admin/(protected)/packages/api/[id]/route.js
import { NextResponse } from 'next/server';
import supabase from '@/lib/db';

export async function DELETE(request, context) {
  try {
    const { id } = await context.params;
    console.log('DELETE package id:', id);
    if (!id) {
      return NextResponse.json({ error: 'No id provided in params' }, { status: 400 });
    }

    // Delete from database
    const { error } = await supabase
      .from('packages')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Package deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting package:', error);
    return NextResponse.json(
      { error: 'Failed to delete package' },
      { status: 500 }
    );
  }
}