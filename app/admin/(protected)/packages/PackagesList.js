'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PackagesList({ packages: initialPackages }) {
  const [packages, setPackages] = useState(initialPackages);
  const [refreshing, setRefreshing] = useState(false);

  // Refetch packages from backend
  const refetchPackages = async () => {
    setRefreshing(true);
    try {
      const response = await fetch('/admin/packages/api/list');
      if (response.ok) {
        const { packages: newPackages } = await response.json();
        setPackages(newPackages);
      }
    } catch (err) {
      // Optionally handle error
    } finally {
      setRefreshing(false);
    }
  };
  const [loadingStates, setLoadingStates] = useState({});
  const [filter, setFilter] = useState('all');

  const filteredPackages = packages.filter(pkg => {
    if (filter === 'all') return true;
    if (filter === 'published') return pkg.status === 'published';
    if (filter === 'draft') return pkg.status === 'draft' || pkg.is_draft;
    if (filter === 'archived') return pkg.status === 'archived';
    return true;
  });

  const updateLoadingState = (id, isLoading) => {
    setLoadingStates(prev => ({
      ...prev,
      [id]: isLoading
    }));
  };

  const handleStatusUpdate = async (pkgId, newStatus) => {
    updateLoadingState(pkgId, true);
    
    try {
      const response = await fetch(`/admin/packages/api/${pkgId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        // Update local state
        setPackages(prev => prev.map(pkg => 
          pkg.id === pkgId 
            ? { 
                ...pkg, 
                status: newStatus,
                published_at: newStatus === 'published' ? new Date().toISOString() : pkg.published_at,
                is_draft: newStatus === 'draft'
              } 
            : pkg
        ));
      } else {
        alert('Failed to update package status');
      }
    } catch (err) {
      console.error('Status update error:', err);
      alert('Failed to update package status');
    } finally {
      updateLoadingState(pkgId, false);
    }
  };

  const handleDelete = async (pkg) => {
    if (!confirm(`Are you sure you want to delete "${pkg.name}"? This action cannot be undone.`)) return;
    
    updateLoadingState(pkg.id, true);
    
    try {
      const response = await fetch(`/admin/packages/api/delete/${pkg.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await refetchPackages();
      } else {
        const error = await response.json();
        alert(`Delete failed: ${error.error || 'Unknown error'}`);
      }
    } catch (err) {
      console.error('Delete error:', err);
      alert(`Delete failed: ${err.message}`);
    } finally {
      updateLoadingState(pkg.id, false);
    }
  };

  const handleDuplicate = async (pkg) => {
    updateLoadingState(pkg.id, true);
    
    try {
      const response = await fetch(`/admin/packages/api/duplicate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ packageId: pkg.id }),
      });

      if (response.ok) {
        const { newPackage } = await response.json();
        // Add the new package to the beginning of the list
        setPackages(prev => [newPackage, ...prev]);
        alert('Package duplicated successfully!');
      } else {
        alert('Failed to duplicate package');
      }
    } catch (err) {
      console.error('Duplicate error:', err);
      alert('Failed to duplicate package');
    } finally {
      updateLoadingState(pkg.id, false);
    }
  };

  const getStatusBadge = (pkg) => {
    const status = pkg.status || (pkg.is_draft ? 'draft' : 'published');
    
    const statusConfig = {
      published: { color: 'bg-green-100 text-green-800', label: 'Published' },
      draft: { color: 'bg-yellow-100 text-yellow-800', label: 'Draft' },
      archived: { color: 'bg-red-100 text-red-800', label: 'Archived' },
    };

    const config = statusConfig[status] || statusConfig.draft;

    return (
      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const getFeaturedBadge = (pkg) => {
    if (pkg.featured) {
      return (
        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 ml-2">
          Featured
        </span>
      );
    }
    return null;
  };

  const getPopularBadge = (pkg) => {
    if (pkg.popular) {
      return (
        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 ml-2">
          Popular
        </span>
      );
    }
    return null;
  };

  return (
    <div>
      {/* Filter Tabs */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex space-x-4">
          {[
            { key: 'all', label: 'All Packages', count: packages.length },
            { key: 'published', label: 'Published', count: packages.filter(p => p.status === 'published').length },
            { key: 'draft', label: 'Drafts', count: packages.filter(p => p.status === 'draft' || p.is_draft).length },
            { key: 'archived', label: 'Archived', count: packages.filter(p => p.status === 'archived').length },
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === key
                  ? 'bg-green-100 text-green-700 border border-green-300'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>
      </div>

      {/* Packages Table */}
      <div className="overflow-x-auto">
        {filteredPackages.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No packages found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {filter === 'all' 
                ? 'Get started by creating your first safari package.' 
                : `No ${filter} packages found.`}
            </p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Package
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPackages.map((pkg) => (
                <tr key={pkg.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {pkg.image && (
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          className="h-12 w-12 rounded object-cover border"
                        />
                      )}
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 flex items-center">
                          {pkg.name}
                          {getFeaturedBadge(pkg)}
                          {getPopularBadge(pkg)}
                        </div>
                        <div className="text-sm text-gray-500">{pkg.slug}</div>
                        <div className="text-xs text-gray-400">
                          {pkg.tour_type} • {pkg.difficulty_level}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{pkg.duration} days</div>
                    <div className="text-sm font-medium text-gray-900">
                      ${typeof pkg.price === 'number' ? pkg.price.toFixed(2) : '0.00'}
                    </div>
                    <div className="text-xs text-gray-500">
                      ⭐ {pkg.rating || 'N/A'} ({pkg.review_count || 0} reviews)
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(pkg)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(pkg.updated_at || pkg.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-2">
                        <Link
                          href={`/admin/packages/${pkg.id}/edit`}
                          className="text-indigo-600 hover:text-indigo-900 text-xs"
                          disabled={loadingStates[pkg.id]}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDuplicate(pkg)}
                          disabled={loadingStates[pkg.id]}
                          className="text-blue-600 hover:text-blue-900 text-xs disabled:opacity-50"
                        >
                          Duplicate
                        </button>
                        <button
                          onClick={() => handleDelete(pkg)}
                          disabled={loadingStates[pkg.id]}
                          className="text-red-600 hover:text-red-900 text-xs disabled:opacity-50"
                        >
                          {loadingStates[pkg.id] ? 'Deleting...' : 'Delete'}
                        </button>
                      </div>
                      
                      <div className="flex space-x-1">
                        {(pkg.status === 'draft' || pkg.is_draft) && (
                          <button
                            onClick={() => handleStatusUpdate(pkg.id, 'published')}
                            disabled={loadingStates[pkg.id]}
                            className="text-green-600 hover:text-green-900 text-xs disabled:opacity-50"
                          >
                            Publish
                          </button>
                        )}
                        {pkg.status === 'published' && (
                          <>
                            <button
                              onClick={() => handleStatusUpdate(pkg.id, 'draft')}
                              disabled={loadingStates[pkg.id]}
                              className="text-yellow-600 hover:text-yellow-900 text-xs disabled:opacity-50"
                            >
                              Unpublish
                            </button>
                            <button
                              onClick={() => handleStatusUpdate(pkg.id, 'archived')}
                              disabled={loadingStates[pkg.id]}
                              className="text-red-600 hover:text-red-900 text-xs disabled:opacity-50"
                            >
                              Archive
                            </button>
                          </>
                        )}
                        {pkg.status === 'archived' && (
                          <button
                            onClick={() => handleStatusUpdate(pkg.id, 'draft')}
                            disabled={loadingStates[pkg.id]}
                            className="text-blue-600 hover:text-blue-900 text-xs disabled:opacity-50"
                          >
                            Restore
                          </button>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}