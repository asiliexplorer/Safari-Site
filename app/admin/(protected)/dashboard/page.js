'use client';

import { useState, useEffect } from 'react';
import {
  Package,
  FileText,
  Plus,
  RefreshCw,
  Download,
  Users,
  Sparkles,
  Send,
  CheckCircle2,
  Eye,
  MapPin,
  DollarSign,
  ArrowUp,
  ArrowDown,
  TrendingUp,
  Clock,
  Mail
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState(null);
  const [recentProposals, setRecentProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
    fetchRecentProposals();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      const response = await fetch('/api/admin/dashboard/stats');
      if (!response.ok) throw new Error('Failed to fetch dashboard data');
      
      const data = await response.json();
      setDashboardData(data);
      
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentProposals = async () => {
    try {
      const response = await fetch('/api/admin/proposals?limit=5');
      if (response.ok) {
        const data = await response.json();
        setRecentProposals(data);
      }
    } catch (error) {
      console.error('Error fetching recent proposals:', error);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-200 border-t-amber-600"></div>
          <p className="text-lg font-medium text-slate-700">Loading dashboard...</p>
          <p className="text-sm text-slate-500">Gathering all your data</p>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-lg text-slate-700">Failed to load dashboard data</p>
          <button
            onClick={fetchDashboardData}
            className="mt-4 px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const { packages, proposals, metrics, popularActivities } = dashboardData;

  return (
    <div className="min-h-full bg-gradient-to-br from-slate-50 to-slate-100 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Dashboard Overview
            </h1>
            <p className="text-lg text-slate-600 mt-2">
              Welcome back! Here's what's happening with your safari business.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
            <button
              onClick={() => {
                fetchDashboardData();
                fetchRecentProposals();
              }}
              className="inline-flex items-center justify-center gap-3 px-5 py-3 text-base font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Refresh Data</span>
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Revenue */}
          <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-semibold">Total Revenue</p>
                <p className="text-2xl font-bold text-slate-900 mt-2">
                  {formatCurrency(metrics.totalRevenue)}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-xl">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className={`flex items-center gap-2 mt-4 text-sm ${
              metrics.monthlyGrowth >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {metrics.monthlyGrowth >= 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              <span>{Math.abs(metrics.monthlyGrowth)}% {metrics.monthlyGrowth >= 0 ? 'growth' : 'decline'} this month</span>
            </div>
          </div>

          {/* Conversion Rate */}
          <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-semibold">Conversion Rate</p>
                <p className="text-2xl font-bold text-slate-900 mt-2">
                  {metrics.conversionRate}%
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-xl">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-slate-600 text-sm">
              <Users className="w-4 h-4" />
              <span>Based on {proposals.total} proposals</span>
            </div>
          </div>

          {/* Active Proposals */}
          <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-semibold">Active Proposals</p>
                <p className="text-2xl font-bold text-slate-900 mt-2">
                  {metrics.activeProposals}
                </p>
              </div>
              <div className="bg-amber-100 p-3 rounded-xl">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-slate-600 text-sm">
              <Clock className="w-4 h-4" />
              <span>Need your attention</span>
            </div>
          </div>

          {/* Avg Response Time */}
          <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-semibold">Avg Response Time</p>
                <p className="text-2xl font-bold text-slate-900 mt-2">
                  {metrics.avgResponseTime}d
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-slate-600 text-sm">
              <span>Average time to respond</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Safari Packages Card */}
          <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-lg overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <Package className="w-6 h-6 text-amber-600" />
                    Safari Packages
                  </h2>
                  <p className="text-slate-600 mt-1">Manage all your safari packages and tour offerings</p>
                </div>
                <Link
                  href="/admin/packages"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-amber-700 bg-amber-50 border-2 border-amber-200 rounded-lg hover:bg-amber-100 hover:border-amber-300 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  View All
                </Link>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-slate-50 rounded-xl border-2 border-slate-200">
                  <p className="text-2xl font-bold text-slate-900">{packages.total}</p>
                  <p className="text-sm text-slate-600 font-medium">Total Packages</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border-2 border-green-200">
                  <p className="text-2xl font-bold text-green-700">{packages.published}</p>
                  <p className="text-sm text-green-600 font-medium">Published</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl border-2 border-amber-200">
                  <p className="text-2xl font-bold text-amber-700">{packages.drafts}</p>
                  <p className="text-sm text-amber-600 font-medium">Drafts</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl border-2 border-slate-200">
                  <p className="text-2xl font-bold text-slate-900">{packages.archived}</p>
                  <p className="text-sm text-slate-600 font-medium">Archived</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/admin/packages/new"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-amber-600 rounded-xl hover:bg-amber-700 transition-all shadow-sm hover:shadow-md"
                >
                  <Plus className="w-5 h-5" />
                  Create New Package
                </Link>
              </div>
            </div>
          </div>

          {/* Travel Proposals Card */}
          <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-lg overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    Travel Proposals
                  </h2>
                  <p className="text-slate-600 mt-1">Manage incoming travel inquiries and client proposals</p>
                </div>
                <Link
                  href="/admin/proposals"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-50 border-2 border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  View All
                </Link>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-slate-50 rounded-xl border-2 border-slate-200">
                  <p className="text-2xl font-bold text-slate-900">{proposals.total}</p>
                  <p className="text-sm text-slate-600 font-medium">Total Inquiries</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <p className="text-2xl font-bold text-blue-700">{proposals.new_count}</p>
                  <p className="text-sm text-blue-600 font-medium">New Requests</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl border-2 border-amber-200">
                  <p className="text-2xl font-bold text-amber-700">{proposals.contacted}</p>
                  <p className="text-sm text-amber-600 font-medium">In Conversation</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border-2 border-green-200">
                  <p className="text-2xl font-bold text-green-700">
                    {proposals.responded + proposals.closed}
                  </p>
                  <p className="text-sm text-green-600 font-medium">Booked / Closed</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    fetchDashboardData();
                    fetchRecentProposals();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm"
                >
                  <RefreshCw className="w-5 h-5" />
                  Refresh
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
                  <Download className="w-5 h-5" />
                  Export CSV
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Recent Proposals */}
          <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-lg overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">Recent Proposals</h3>
              <p className="text-slate-600 text-sm mt-1">Latest client inquiries</p>
            </div>
            <div className="p-6">
              {recentProposals.length > 0 ? (
                <div className="space-y-4">
                  {recentProposals.map((proposal) => (
                    <div key={proposal.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border-2 border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                          {proposal.first_name?.[0]}{proposal.last_name?.[0]}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">
                            {proposal.first_name} {proposal.last_name}
                          </p>
                          <p className="text-sm text-slate-600">{proposal.country}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-slate-900">
                          {formatCurrency(proposal.budget || 0)}
                        </p>
                        <p className="text-xs text-slate-500">{formatDate(proposal.created_at)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500">
                  <FileText className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                  <p>No proposals yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Popular Activities */}
          <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-lg overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">Popular Activities</h3>
              <p className="text-slate-600 text-sm mt-1">Most requested experiences</p>
            </div>
            <div className="p-6">
              {popularActivities.length > 0 ? (
                <div className="space-y-3">
                  {popularActivities.map((item, index) => (
                    <div key={item.activity} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border-2 border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                          <span className="text-amber-600 font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="font-medium text-slate-900 capitalize">{item.activity}</span>
                      </div>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">
                        {item.count} {item.count === 1 ? 'request' : 'requests'}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500">
                  <MapPin className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                  <p>No activity data available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}