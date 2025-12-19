import { NextResponse } from 'next/server';
import supabase from '@/lib/db';

// PATCH - Update package status
export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const { status } = await request.json();

    let updateData = {
      updated_at: new Date()
    };

    if (status) {
      updateData.status = status;
      updateData.is_draft = status === 'draft';
      if (status === 'published') {
        updateData.published_at = new Date();
      }
    }

    const { data: updatedPackage, error } = await supabase
      .from('packages')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      package: updatedPackage[0],
      message: `Package ${status} successfully`
    });
  } catch (error) {
    console.error('Error updating package:', error);
    return NextResponse.json(
      { error: 'Failed to update package' },
      { status: 500 }
    );
  }
}

// DELETE - Delete package
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

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