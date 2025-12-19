// app/blog/page.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '../../lib/blogData';
import BlogCard from './BlogCard';
import { 
  FaSearch, 
  FaCalendarAlt, 
  FaUser, 
  FaFilter, 
  FaArrowRight, 
  FaArrowLeft,
  FaTimes,
  FaMapMarkerAlt,
  FaStar,
  FaEye,
  FaHeart,
  FaTag,
  FaRss,
  FaShare
} from 'react-icons/fa';

// Color constants based on #465b2d
const COLORS = {
  primary: '#465b2d',
  primaryDark: '#3a4a25',
  primaryLight: '#5a7245',
  accent: '#8a9a6d',
  light: '#f8f9f7',
  muted: '#6b7b5a'
};

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const postsPerPage = 9;
  
  // Categories from blog posts
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30">
      {/* Enhanced Hero Section */}
      <div 
        className="relative text-white py-16 md:py-24 overflow-hidden"
        style={{ 
          background: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-center lg:flex lg:items-center lg:justify-center">
            <div className="lg:flex flex-col">
              {/* Badge */}
              {/* <div 
                className="inline-flex items-center backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <FaRss className="w-4 h-4 mr-2" />
                <span className="text-sm  font-medium">Latest Safari Insights</span>
              </div> */}
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Tanzania
                <span 
                  className="block mt-2 bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent"
                >
                  Safari Blog
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 opacity-90">
                Expert guides, wildlife stories, and essential tips for your African adventure. 
                Discover the heart of Tanzania through our curated travel experiences.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold mb-1">{blogPosts.length}+</div>
                  <div className="text-sm opacity-80">Articles</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold mb-1">15K+</div>
                  <div className="text-sm opacity-80">Readers</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold mb-1">50+</div>
                  <div className="text-sm opacity-80">Destinations</div>
                </div>
              </div>
            </div>

            {/* Search Section */}
            {/* <div className="lg:w-96">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Find Your Adventure</h3>
                
                {/* Search Bar *
                <div className="relative mb-4">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, tips, destinations..."
                    className="w-full px-4 py-3 pl-11 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                </div>

                {/* Category Filter 
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 opacity-80">Category</label>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent [color-scheme:dark]"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="text-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Results Count 
                <div className="text-center">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    {filteredPosts.length} articles found
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Category Filters */}
        {/* <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse Categories</h2>
            <button 
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-sm font-medium flex items-center justify-center sm:justify-start"
              style={{ color: COLORS.primary }}
            >
              Clear filters
              <FaTimes className="ml-1 w-3 h-3" />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  selectedCategory === category
                    ? 'text-white border-transparent shadow-lg'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? COLORS.primary : '',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div> */}

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'All' ? 'Latest Articles' : selectedCategory}
            </h2>
            <p className="text-gray-600 flex items-center flex-wrap gap-2">
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ backgroundColor: `${COLORS.primary}15`, color: COLORS.primary }}
              >
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
              </span>
              {searchQuery && (
                <span className="text-sm text-gray-500">
                  for "{searchQuery}"
                </span>
              )}
            </p>
          </div>
          
          {/* Sort Options */}
          <div className="mt-4 sm:mt-0 flex items-center gap-4">
            <select 
              className="bg-white border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            >
              <option>Sort by: Latest</option>
              <option>Sort by: Most Popular</option>
              <option>Sort by: Reading Time</option>
            </select>
            
            {/* View Toggle */}
            <div className="hidden md:flex items-center gap-1 bg-gray-100 rounded-xl p-1">
              <button className="p-2 rounded-lg bg-white shadow-sm">
                <FaTag className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 rounded-lg">
                <FaShare className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {currentPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="transform transition-all duration-500 hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <BlogCard post={post} colors={COLORS} />
                </div>
              ))}
            </div>

            {/* Enhanced Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 mb-16">
                <div className="text-gray-600 text-sm">
                  Showing <span className="font-semibold text-gray-900">{indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)}</span> of{' '}
                  <span className="font-semibold text-gray-900">{filteredPosts.length}</span> articles
                </div>
                
                <div className="flex items-center space-x-2">
                  {/* Previous Button */}
                  <button 
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl font-medium transition-all duration-200 ${
                      currentPage === 1 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <FaArrowLeft className="w-4 h-4" />
                  </button>
                  
                  {/* Page Numbers */}
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNumber;
                    if (totalPages <= 5) {
                      pageNumber = i + 1;
                    } else {
                      if (currentPage <= 3) {
                        pageNumber = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + i;
                      } else {
                        pageNumber = currentPage - 2 + i;
                      }
                    }

                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl font-medium transition-all duration-200 ${
                          currentPage === pageNumber
                            ? 'text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                        }`}
                        style={{
                          backgroundColor: currentPage === pageNumber ? COLORS.primary : '',
                          borderColor: currentPage === pageNumber ? COLORS.primary : ''
                        }}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}

                  {/* Next Button */}
                  <button 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl font-medium transition-all duration-200 ${
                      currentPage === totalPages 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* No Results State */
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-gray-100">
              <FaSearch className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find any articles matching your search. Try adjusting your filters or search terms.
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-6 py-3 rounded-xl font-medium text-white hover:shadow-lg transition-all duration-200"
              style={{ backgroundColor: COLORS.primary }}
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Newsletter Section */}
        <div 
          className="rounded-2xl p-8 md:p-12 text-center text-white overflow-hidden relative mb-16"
          style={{ 
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
            border: `1px solid ${COLORS.primaryLight}`
          }}
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-white/10 border border-white/20">
              <FaRss className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss a Safari Story</h3>
            <p className="text-white/80 mb-8 text-lg">
              Join our community of 15,000+ travelers. Get weekly wildlife updates, exclusive safari tips, 
              and special offers delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button 
                className="bg-white font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                style={{ color: COLORS.primary }}
              >
                Subscribe Now
              </button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              No spam, unsubscribe at any time • We respect your privacy
            </p>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Popular Topics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'Wildlife', icon: FaHeart, count: '24 Articles', color: '#dc2626' },
              { name: 'Safari Tips', icon: FaStar, count: '18 Articles', color: '#eab308' },
              { name: 'Destinations', icon: FaMapMarkerAlt, count: '32 Articles', color: COLORS.primary },
              { name: 'Photography', icon: FaEye, count: '15 Articles', color: '#7c3aed' }
            ].map((category, index) => (
              <div 
                key={category.name}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer text-center hover:scale-105"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon 
                    className="w-6 h-6" 
                    style={{ color: category.color }}
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{category.name}</h4>
                <p className="text-sm text-gray-600">{category.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Adventure?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start planning your dream safari with our expert guides and personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-xl font-bold text-white hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              style={{ backgroundColor: COLORS.primary }}
            >
              Start Planning My Safari
            </button>
            <button className="px-8 py-4 rounded-xl font-bold border-2 hover:shadow-lg transition-all duration-200"
              style={{ borderColor: COLORS.primary, color: COLORS.primary }}
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}