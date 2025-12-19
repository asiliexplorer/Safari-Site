'use client';

import { useState, useEffect } from 'react';
import {
  Search,
  Mail,
  Phone,
  Calendar,
  Users,
  DollarSign,
  MapPin,
  Clock,
  Eye,
  Trash2,
  RefreshCw,
  Download,
  X,
  Filter,
  ChevronDown,
  User,
  CheckCircle2,
  Send,
  Sparkles,
  Archive,
  Compass,
  Palmtree,
  Mountain,
  Footprints,
  MoreHorizontal,
  MessageSquare,
  Plus
} from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function ProposalsPage() {
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [actionLoading, setActionLoading] = useState(null);

  useEffect(() => {
    fetchProposals();
  }, []);

  const fetchProposals = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/proposals');
      if (!response.ok) throw new Error('Failed to fetch proposals');
      const data = await response.json();
      setProposals(data);
    } catch (error) {
      console.error('Error fetching proposals:', error);
      toast.error('Failed to load proposals');
    } finally {
      setLoading(false);
    }
  };

  const updateProposalStatus = async (id, status) => {
    try {
      setActionLoading(id);
      const response = await fetch(`/api/admin/proposals/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });

      if (!response.ok) throw new Error('Failed to update status');

      setProposals(prev => prev.map(p => p.id === id ? { ...p, status } : p));
      toast.success(`Status updated to ${status.charAt(0).toUpperCase() + status.slice(1)}`);
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    } finally {
      setActionLoading(false);
    }
  };

  const deleteProposal = async (id) => {
    if (!confirm('Are you sure you want to delete this proposal?')) return;

    try {
      setActionLoading(id);
      const response = await fetch(`/api/admin/proposals/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete proposal');
      setProposals(prev => prev.filter(p => p.id !== id));
      toast.success('Proposal deleted successfully');
    } catch (error) {
      console.error('Error deleting proposal:', error);
      toast.error('Failed to delete proposal');
    } finally {
      setActionLoading(false);
    }
  };

  // --- UI Helpers ---

  const getStatusConfig = (status) => {
    switch (status) {
      case 'new': 
        return { 
          color: 'text-blue-800 bg-blue-100 border border-blue-200', 
          icon: Sparkles,
          label: 'New'
        };
      case 'contacted': 
        return { 
          color: 'text-amber-800 bg-amber-100 border border-amber-200', 
          icon: Send,
          label: 'Contacted'
        };
      case 'responded': 
        return { 
          color: 'text-emerald-800 bg-emerald-100 border border-emerald-200', 
          icon: CheckCircle2,
          label: 'Responded'
        };
      case 'closed': 
        return { 
          color: 'text-slate-700 bg-slate-100 border border-slate-200', 
          icon: Archive,
          label: 'Closed'
        };
      default: 
        return { 
          color: 'text-gray-700 bg-gray-100 border border-gray-200', 
          icon: MoreHorizontal,
          label: status 
        };
    }
  };

  const getActivityIcon = (activity) => {
    const map = {
      'safari': { icon: Compass, label: 'Safari', color: 'text-green-600' },
      'beach': { icon: Palmtree, label: 'Beach', color: 'text-blue-500' },
      'kilimanjaro': { icon: Mountain, label: 'Kilimanjaro', color: 'text-gray-600' },
      'migration': { icon: Footprints, label: 'Migration', color: 'text-orange-500' }
    };
    return map[activity] || { icon: Compass, label: activity, color: 'text-slate-500' };
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const filteredProposals = proposals.filter(proposal => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      proposal.first_name?.toLowerCase().includes(term) ||
      proposal.last_name?.toLowerCase().includes(term) ||
      proposal.email?.toLowerCase().includes(term) ||
      proposal.country?.toLowerCase().includes(term) ||
      proposal.phone?.includes(term);

    const matchesStatus = statusFilter === 'all' || proposal.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-200 border-t-amber-600"></div>
          <p className="text-lg font-medium text-slate-700">Loading proposals...</p>
          <p className="text-sm text-slate-500">Please wait while we sync your data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gradient-to-br from-slate-50 to-slate-100 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Travel Proposals
            </h1>
            <p className="text-lg text-slate-600 mt-2 max-w-2xl">
              Manage incoming travel inquiries and client proposals in one place
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
            <button
              onClick={fetchProposals}
              className="inline-flex items-center justify-center gap-3 px-5 py-3 text-base font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-amber-500/20 min-w-[120px]"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Refresh</span>
            </button>
            <button
              className="inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-amber-500/40 min-w-[140px]"
            >
              <Download className="w-5 h-5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { 
              label: 'Total Inquiries', 
              value: proposals.length, 
              icon: User, 
              color: 'text-slate-600', 
              bg: 'bg-white',
              border: 'border-2 border-slate-200'
            },
            { 
              label: 'New Requests', 
              value: proposals.filter(p => p.status === 'new').length, 
              icon: Sparkles, 
              color: 'text-blue-600', 
              bg: 'bg-blue-50',
              border: 'border-2 border-blue-200'
            },
            { 
              label: 'In Conversation', 
              value: proposals.filter(p => p.status === 'contacted').length, 
              icon: Send, 
              color: 'text-amber-600', 
              bg: 'bg-amber-50',
              border: 'border-2 border-amber-200'
            },
            { 
              label: 'Booked / Closed', 
              value: proposals.filter(p => ['responded', 'closed'].includes(p.status)).length, 
              icon: CheckCircle2, 
              color: 'text-emerald-600', 
              bg: 'bg-emerald-50',
              border: 'border-2 border-emerald-200'
            }
          ].map((stat, idx) => (
            <div key={idx} className={`${stat.bg} ${stat.border} rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-white shadow-sm`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 ${
                    idx === 0 ? 'bg-slate-400' : 
                    idx === 1 ? 'bg-blue-400' : 
                    idx === 2 ? 'bg-amber-400' : 'bg-emerald-400'
                  }`}
                  style={{ width: `${(stat.value / Math.max(proposals.length, 1)) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters & Search Toolbar */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-lg mb-8 p-1">
          <div className="p-5 flex flex-col lg:flex-row gap-5 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search clients, emails, countries, or phone numbers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-5 py-4 text-base border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition-all duration-200 shadow-sm"
              />
            </div>
            
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="relative w-full lg:w-56">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 text-base border-2 border-slate-300 rounded-xl appearance-none bg-white focus:ring-4 focus:ring-amber-500/30 focus:border-amber-500 outline-none cursor-pointer font-medium shadow-sm"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New Requests</option>
                  <option value="contacted">In Conversation</option>
                  <option value="responded">Responded</option>
                  <option value="closed">Closed</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-xl font-bold text-slate-800">
            Client Proposals <span className="text-slate-500">({filteredProposals.length})</span>
          </h2>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <RefreshCw className="w-4 h-4" />
            <span>Last updated: Just now</span>
          </div>
        </div>

        {/* Data List */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-lg overflow-hidden">
          {filteredProposals.length === 0 ? (
            <div className="py-24 flex flex-col items-center justify-center text-center px-6">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-2xl mb-6 shadow-inner">
                <Search className="w-16 h-16 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">No proposals found</h3>
              <p className="text-slate-600 text-lg max-w-md mb-8">
                We couldn't find any proposals matching your current search criteria.
              </p>
              <button 
                onClick={() => { setSearchTerm(''); setStatusFilter('all'); }}
                className="px-8 py-4 text-base font-semibold text-amber-600 bg-amber-50 border-2 border-amber-200 rounded-xl hover:bg-amber-100 hover:border-amber-300 transition-all duration-200 shadow-sm"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {filteredProposals.map((proposal) => {
                const statusConfig = getStatusConfig(proposal.status);
                const StatusIcon = statusConfig.icon;

                return (
                  <div key={proposal.id} className="group p-6 hover:bg-slate-50/80 transition-all duration-200 border-b-2 border-slate-50 last:border-b-0">
                    <div className="flex flex-col xl:flex-row gap-6">
                      
                      {/* Client Avatar & Core Info */}
                      <div className="flex-1 flex gap-5">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center border-2 border-white shadow-lg text-white font-bold text-lg">
                            {(proposal.first_name?.[0] || '')}{(proposal.last_name?.[0] || '')}
                          </div>
                        </div>
                        
                        <div className="min-w-0 flex-1">
                          {/* Header with Name and Status */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                            <h3 className="text-xl font-bold text-slate-900">
                              {proposal.first_name} {proposal.last_name}
                            </h3>
                            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${statusConfig.color} shadow-sm w-fit`}>
                              <StatusIcon className="w-4 h-4" />
                              {statusConfig.label}
                            </span>
                          </div>

                          {/* Contact Information Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center gap-3 group/link p-3 bg-slate-50 rounded-lg hover:bg-white transition-colors">
                              <Mail className="w-5 h-5 text-slate-500 group-hover/link:text-amber-500 transition-colors" />
                              <a href={`mailto:${proposal.email}`} className="text-slate-700 hover:text-amber-600 font-medium transition-colors truncate">
                                {proposal.email}
                              </a>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                              <Phone className="w-5 h-5 text-slate-500" />
                              <a href={`tel:${proposal.phone}`} className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                                {proposal.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                              <MapPin className="w-5 h-5 text-slate-500" />
                              <span className="text-slate-700 font-medium">{proposal.country}</span>
                            </div>
                          </div>

                          {/* Trip Details Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                              <Calendar className="w-5 h-5 text-slate-500" />
                              <span className="text-slate-700"><strong>{proposal.days} days</strong> • {formatDate(proposal.arrival_date)}</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                              <Users className="w-5 h-5 text-slate-500" />
                              <span className="text-slate-700"><strong>{proposal.adults} adults</strong>, {proposal.children} children</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                              <DollarSign className="w-5 h-5 text-slate-500" />
                              <span className="text-slate-900 font-bold text-lg">${proposal.budget?.toLocaleString()}</span>
                            </div>
                          </div>

                          {/* Activities Tags */}
                          {proposal.activities?.length > 0 && (
                            <div className="flex flex-wrap gap-3">
                              {proposal.activities.map((act, i) => {
                                const { icon: ActIcon, label, color } = getActivityIcon(act);
                                return (
                                  <span
                                    key={i}
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-white text-slate-700 border-2 border-slate-200 shadow-sm hover:shadow-md transition-all"
                                  >
                                    <ActIcon className={`w-4 h-4 ${color}`} />
                                    {label}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Actions Panel */}
                      <div className="flex flex-col justify-between gap-4 xl:min-w-[280px] border-t xl:border-t-0 pt-4 xl:pt-0 border-slate-200">
                        {/* Timestamp */}
                        <div className="flex items-center justify-between xl:justify-end">
                          <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-100 px-3 py-2 rounded-lg">
                            <Clock className="w-4 h-4" />
                            <span>{new Date(proposal.created_at).toLocaleDateString()}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row xl:flex-col gap-3">
                          {/* Status Dropdown */}
                          <div className="relative flex-1">
                            <select
                              value={proposal.status}
                              onChange={(e) => updateProposalStatus(proposal.id, e.target.value)}
                              disabled={actionLoading === proposal.id}
                              className="w-full appearance-none cursor-pointer pl-4 pr-10 py-3 text-sm font-semibold bg-white border-2 border-slate-300 rounded-xl hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-amber-500/30 text-slate-800 transition-all shadow-sm"
                            >
                              <option value="new">Mark as New</option>
                              <option value="contacted">Mark as Contacted</option>
                              <option value="responded">Mark as Responded</option>
                              <option value="closed">Mark as Closed</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                          </div>

                          {/* Action Buttons Row */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSelectedProposal(proposal)}
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-slate-700 bg-white border-2 border-slate-300 rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all shadow-sm"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                              <span className="font-semibold text-sm">View</span>
                            </button>
                            <a
                              href={`mailto:${proposal.email}`}
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-blue-700 bg-blue-50 border-2 border-blue-200 rounded-xl hover:border-blue-300 hover:bg-blue-100 transition-all shadow-sm"
                              title="Send Email"
                            >
                              <Mail className="w-4 h-4" />
                              <span className="font-semibold text-sm">Email</span>
                            </a>
                            <button
                              onClick={() => deleteProposal(proposal.id)}
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-red-700 bg-red-50 border-2 border-red-200 rounded-xl hover:border-red-300 hover:bg-red-100 transition-all shadow-sm"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span className="font-semibold text-sm">Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedProposal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm">
          <div 
            className="absolute inset-0 transition-opacity" 
            onClick={() => setSelectedProposal(null)}
          ></div>
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] transform transition-transform">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b-2 border-slate-100 bg-gradient-to-r from-slate-50 to-white">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Proposal Details</h3>
                <p className="text-slate-600 mt-1">Complete client information and trip requirements</p>
              </div>
              <button
                onClick={() => setSelectedProposal(null)}
                className="p-3 text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-100 rounded-xl transition-all duration-200 shadow-sm border-2 border-slate-200 hover:border-slate-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-8 overflow-y-auto flex-1">
              <div className="space-y-8">
                {/* Client Header */}
                <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl border-2 border-amber-200">
                  <div className="h-20 w-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {selectedProposal.first_name[0]}{selectedProposal.last_name[0]}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      {selectedProposal.first_name} {selectedProposal.last_name}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-amber-500" />
                        <span className="font-medium">{selectedProposal.country}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-amber-500" />
                        <a href={`mailto:${selectedProposal.email}`} className="font-medium hover:text-amber-600 transition-colors">
                          {selectedProposal.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-amber-500" />
                        <a href={`tel:${selectedProposal.phone}`} className="font-medium hover:text-slate-900 transition-colors">
                          {selectedProposal.phone}
                        </a>
                      </div>
                      {selectedProposal.alternate_phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-amber-500" />
                          <span className="font-medium">Alt: {selectedProposal.alternate_phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Trip Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm">
                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-amber-500" />
                      Trip Summary
                    </h4>
                    <div className="space-y-3 text-slate-700">
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="font-semibold">Arrival Date:</span>
                        <span className="font-bold text-slate-900">{formatDate(selectedProposal.arrival_date)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="font-semibold">Duration:</span>
                        <span className="font-bold text-slate-900">{selectedProposal.days} days</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="font-semibold">Traveling With:</span>
                        <span className="font-bold text-slate-900">{selectedProposal.travel_with}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="font-semibold">Group Size:</span>
                        <span className="font-bold text-slate-900">{selectedProposal.adults} adults, {selectedProposal.children} children</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="font-semibold">Budget:</span>
                        <span className="font-bold text-emerald-600 text-lg">${selectedProposal.budget?.toLocaleString()}</span>
                      </div>
                      {Array.isArray(selectedProposal.adult_ages) && selectedProposal.adult_ages.length > 0 && (
                        <div className="p-3 bg-slate-50 rounded-lg">
                          <span className="font-semibold">Adult Ages:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {selectedProposal.adult_ages.map((age, index) => (
                              <span key={index} className="px-3 py-1 bg-white rounded-lg border-2 border-slate-200 text-sm font-medium">
                                {age} years
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm">
                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <Compass className="w-6 h-6 text-amber-500" />
                      Requested Activities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProposal.activities?.map((act, i) => {
                        const { icon: ActIcon, label, color } = getActivityIcon(act);
                        return (
                          <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border-2 border-slate-200 hover:border-amber-200 transition-colors">
                            <ActIcon className={`w-6 h-6 ${color}`} />
                            <span className="font-semibold text-slate-800">{label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Notes Section */}
                {selectedProposal.notes && (
                  <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm">
                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <MessageSquare className="w-6 h-6 text-amber-500" />
                      Client Notes & Requirements
                    </h4>
                    <div className="p-4 bg-amber-50 rounded-xl border-2 border-amber-200">
                      <p className="text-slate-800 leading-relaxed whitespace-pre-wrap text-lg">
                        {selectedProposal.notes}
                      </p>
                    </div>
                  </div>
                )}

                {/* Metadata */}
                <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-slate-100 rounded-xl border-2 border-slate-200">
                  <div className="text-slate-600 font-medium">
                    <span>Submitted: {new Date(selectedProposal.created_at).toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <span className="text-slate-600 font-medium">Current Status:</span>
                    {(() => {
                      const statusConfig = getStatusConfig(selectedProposal.status);
                      const StatusIconComponent = statusConfig.icon;
                      return (
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold ${statusConfig.color}`}>
                          <StatusIconComponent className="w-4 h-4" />
                          {statusConfig.label}
                        </span>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="px-8 py-6 bg-slate-50 border-t-2 border-slate-200 flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex items-center gap-3 text-slate-600">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Last updated: {new Date(selectedProposal.updated_at || selectedProposal.created_at).toLocaleString()}</span>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedProposal(null)}
                  className="px-8 py-4 text-base font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-xl hover:bg-slate-100 hover:border-slate-400 transition-all duration-200 shadow-sm"
                >
                  Close Details
                </button>
              
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}