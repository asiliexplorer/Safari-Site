// app/blog/[slug]/page.js
"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../../../lib/blogData';
import { 
  FaArrowLeft, 
  FaCalendarAlt, 
  FaUser, 
  FaClock, 
  FaShare, 
  FaHeart,
  FaEye,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaBookmark,
  FaTag,
  FaQuoteLeft,
  FaArrowRight
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

export default function BlogDetailPage() {
  const params = useParams();
  const { slug } = params;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (!slug) return;
    
    const foundPost = blogPosts.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.id !== foundPost.id && p.category === foundPost.category)
        .slice(0, 3);
      setRelatedPosts(related);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-green-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-700 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-green-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-2xl">📝</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or may have been moved.
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center font-bold text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200"
            style={{ backgroundColor: COLORS.primary }}
          >
            <FaArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Safely handle author data
  const authorName = typeof post.author === 'object' ? post.author.name : post.author;
  const authorImage = typeof post.author === 'object' ? post.author.image : '/default-avatar.jpg';
  const authorBio = typeof post.author === 'object' ? post.author.bio : 'Travel writer and safari expert';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30 pt-20">
      {/* Enhanced Hero Section with Blog Image */}
      <div 
        className="relative text-white bg-cover overflow-hidden"
        style={{ 
          background: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'flex-end'
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> 
        {/* Navigation Overlay */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-200 group"
            >
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative w-full pb-16 pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Badge */}
            {/* <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
              <span className="text-sm font-medium">{post.category}</span>
            </div> */}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center">
                <FaUser className="w-4 h-4 mr-2" />
                <span className="font-medium">{authorName}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="w-4 h-4 mr-2" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center">
                <FaEye className="w-4 h-4 mr-2" />
                <span>{post.views || '2.4K'} views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div> */}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <article className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Action Bar */}
              <div className="border-b border-gray-200 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                      <FaHeart className="w-5 h-5 mr-2" />
                      <span>{post.likes || '142'}</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
                      <FaBookmark className="w-5 h-5 mr-2" />
                      <span>Save</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">Share:</span>
                    <button className="text-gray-400 hover:text-blue-500 transition-colors">
                      <FaTwitter className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                      <FaFacebook className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-blue-700 transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  {post.content?.map((section, index) => (
                    <div key={index} className="mb-8 last:mb-0">
                      {section.type === 'heading' && (
                        <h2 
                          className="text-2xl md:text-3xl font-bold mt-12 mb-6 first:mt-0"
                          style={{ color: COLORS.primary }}
                        >
                          {section.text}
                        </h2>
                      )}
                      {section.type === 'paragraph' && (
                        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                          {section.text}
                        </p>
                      )}
                      {section.type === 'image' && (
                        <div className="my-8">
                          <img 
                            src={section.url} 
                            alt={section.alt} 
                            className="rounded-2xl shadow-md w-full h-auto"
                          />
                          {section.caption && (
                            <p className="text-center text-gray-500 mt-3 italic text-sm">
                              {section.caption}
                            </p>
                          )}
                        </div>
                      )}
                      {section.type === 'list' && (
                        <ul className="space-y-3 my-6">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div 
                                className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                                style={{ backgroundColor: COLORS.primary }}
                              ></div>
                              <span className="text-gray-700 text-lg">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.type === 'quote' && (
                        <blockquote 
                          className="border-l-4 pl-6 py-4 my-8 italic text-xl text-gray-600"
                          style={{ borderColor: COLORS.primary }}
                        >
                          <FaQuoteLeft className="text-2xl mb-4 opacity-50" />
                          {section.text}
                        </blockquote>
                      )}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center mb-4">
                    <FaTag className="w-5 h-5 mr-2 text-gray-500" />
                    <h3 className="font-bold text-gray-900">Tags</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {post.tags?.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:shadow-md transition-shadow cursor-pointer"
                        style={{ 
                          backgroundColor: `${COLORS.primary}15`,
                          color: COLORS.primary
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <img 
                  src={authorImage} 
                  alt={authorName} 
                  className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{authorName}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{authorBio}</p>
                  <div className="flex space-x-4">
                    {post.author?.twitter && (
                      <a 
                        href={post.author.twitter} 
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </a>
                    )}
                    {post.author?.instagram && (
                      <a 
                        href={post.author.instagram} 
                        className="text-gray-400 hover:text-pink-500 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Table of Contents */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6  top-6">
              <h3 className="font-bold text-gray-900 mb-4">In this article</h3>
              <nav className="space-y-2">
                {post.content
                  ?.filter(section => section.type === 'heading')
                  .map((section, index) => (
                    <a
                      key={index}
                      href={`#${section.text.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-gray-600 hover:text-green-700 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-green-500 pl-3"
                    >
                      {section.text}
                    </a>
                  ))}
              </nav>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="flex items-start space-x-3">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-[#465b2d] transition-colors text-sm leading-tight mb-1">
                            {relatedPost.title}
                          </h4>
                          <p className="text-gray-500 text-xs">
                            {relatedPost.readTime} min read
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter Signup */}
            <div 
              className="rounded-2xl p-6 text-white"
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
                border: `1px solid ${COLORS.primaryLight}`
              }}
            >
              <h3 className="font-bold text-lg mb-3">Join Our Community</h3>
              <p className="text-white/80 text-sm mb-4">
                Get the latest safari tips and exclusive content delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-green-800 font-bold py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Navigation Between Posts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/blog"
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-200 group"
          >
            <div className="flex items-center text-gray-600 group-hover:text-green-700 transition-colors">
              <FaArrowLeft className="mr-3 w-5 h-5" />
              <span className="font-semibold">Back to All Articles</span>
            </div>
          </Link>
{/*           
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white text-center hover:shadow-xl transition-all duration-200">
            <h3 className="font-bold text-lg mb-2">Ready for Your Safari?</h3>
            <p className="text-white/80 text-sm mb-4">
              Start planning your dream Tanzanian adventure today.
            </p>
            <button className="bg-white text-[#465b2d] font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Plan My Trip
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}