import supabase from '@/lib/db';
import Link from 'next/link';
import PackagesList from './PackagesList';

export default async function PackagesPage() {
  try {
    // Fetch packages with proper error handling
    const { data: rawPackages, error } = await supabase
      .from('packages')
      .select('id, name, slug, duration, price, image, created_at, status, is_draft, published_at, updated_at, tour_type, difficulty_level, featured, popular, rating, review_count')
      .order('is_draft', { ascending: true })
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Apply COALESCE defaults in JavaScript
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

    // Count packages by status
    const statusCounts = {
      all: packages.length,
      published: packages.filter(p => p.status === 'published').length,
      draft: packages.filter(p => p.status === 'draft').length,
      archived: packages.filter(p => p.status === 'archived').length,
    };

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Safari Packages</h1>
                <p className="text-sm text-gray-600 mt-1">
                  Manage all your safari packages and tour offerings
                </p>
              </div>
              <Link
                href="/admin/packages/new"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors mt-4 sm:mt-0"
              >
                Create New Package
              </Link>
            </div>

            {/* Status Cards */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Packages</dt>
                  <dd className="mt-1 text-2xl font-semibold text-gray-900">{statusCounts.all}</dd>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">Published</dt>
                  <dd className="mt-1 text-2xl font-semibold text-green-600">{statusCounts.published}</dd>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">Drafts</dt>
                  <dd className="mt-1 text-2xl font-semibold text-yellow-600">{statusCounts.draft}</dd>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">Archived</dt>
                  <dd className="mt-1 text-2xl font-semibold text-red-600">{statusCounts.archived}</dd>
                </div>
              </div>
            </div>
          </div>

          {/* Packages List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <PackagesList packages={packages} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch packages:', error);
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-lg font-medium text-red-800">Error Loading Packages</h2>
            <p className="mt-1 text-sm text-red-600">
              Failed to retrieve package data. Please check your database connection.
            </p>
            <details className="mt-3 text-xs">
              <summary className="cursor-pointer text-red-700">Error details</summary>
              <pre className="mt-2 whitespace-pre-wrap text-red-600">{error.message}</pre>
            </details>
          </div>
        </div>
      </div>
    );
  }
}