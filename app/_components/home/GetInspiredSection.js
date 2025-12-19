"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const GetInspiredSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPost, setHoveredPost] = useState(null);
  const sectionRef = useRef(null);

  const categories = [
    { name: "All", emoji: "📚" },
    { name: "Wildlife", emoji: "🦁" },
    { name: "Travel Tips", emoji: "✈️" },
    { name: "Accommodation", emoji: "🏨" },
    { name: "Culture", emoji: "🎭" }
  ];

  const blogPosts = [
    {
      title: "The Ultimate Guide to the Great Migration",
      excerpt: "Everything you need to know about witnessing one of nature's greatest spectacles across the Serengeti and Masai Mara.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
      category: "Wildlife",
      date: "Dec 5, 2024",
      readTime: "8 min read",
      link: "/blog/great-migration-guide",
      featured: true,
      author: {
        name: "Sarah Mitchell",
        avatar: "SM",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
      }
    },
    {
      title: "Best Time to Visit the Serengeti",
      excerpt: "Plan your safari around the seasons for the best wildlife viewing experience and perfect weather.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      category: "Travel Tips",
      date: "Nov 28, 2024",
      readTime: "5 min read",
      link: "/blog/best-time-serengeti",
      featured: false,
      author: {
        name: "James Anderson",
        avatar: "JA",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
      }
    },
    {
      title: "Top 10 Safari Lodges in Tanzania",
      excerpt: "Discover the most luxurious and authentic safari accommodations for an unforgettable stay.",
      image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=800&q=80",
      category: "Accommodation",
      date: "Nov 15, 2024",
      readTime: "6 min read",
      link: "/blog/top-safari-lodges",
      featured: false,
      author: {
        name: "Emma Roberts",
        avatar: "ER",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
      }
    },
    {
      title: "Meeting the Maasai: A Cultural Experience",
      excerpt: "Immerse yourself in the rich traditions and customs of Tanzania's indigenous Maasai people.",
      image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=800&q=80",
      category: "Culture",
      date: "Nov 10, 2024",
      readTime: "7 min read",
      link: "/blog/maasai-cultural-experience",
      featured: false,
      author: {
        name: "David Kimani",
        avatar: "DK",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section ref={sectionRef} className="py-28 px-4 bg-gradient-to-b from-white via-[#F7EECB]/8 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7D5A]/1 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#774433]/1 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#FF7D5A]/1 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['📖', '✨', '🌍', '📸', '🦒'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-2 animate-float"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + i}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Enhanced */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="lg:max-w-xl">
            <div className="inline-flex items-center space-x-3 mb-6">
              <span className="w-16 h-[2px] bg-gradient-to-r from-[#FF7D5A] to-transparent"></span>
              <span className="text-[#FF7D5A] text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF7D5A] rounded-full animate-pulse"></span>
                Safari Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-[#774433] mb-4">
              Get <span className="text-[#FF7D5A] relative inline-block">
                Inspired
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 4 50 7 100 7C150 7 150 1 200 1" stroke="#FF7D5A" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Discover travel tips, wildlife guides, and stories from our African adventures.
            </p>
          </div>

          {/* Category Filter - Enhanced */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`group px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.name
                    ? "bg-[#774433] text-white shadow-lg shadow-[#774433]/30"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#FF7D5A]/30"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className={`transition-transform duration-300 ${activeCategory === category.name ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {category.emoji}
                </span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured + Grid Layout - Enhanced */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Featured Post - Enhanced */}
          {featuredPost && activeCategory === "All" && (
            <Link
              href={featuredPost.link}
              className="group relative rounded-3xl overflow-hidden h-[500px] lg:h-auto shadow-xl hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredPost('featured')}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#FF7D5A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Category & Featured Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-[#FF7D5A] to-[#DDA885] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1">
                    ⭐ Featured
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    🦁 {featuredPost.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 group-hover:text-[#FF7D5A] transition-colors">
                  {featuredPost.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/80 text-lg mb-6 max-w-lg">
                  {featuredPost.excerpt}
                </p>

                {/* Meta - Enhanced */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.image}
                      alt={featuredPost.author.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FF7D5A]"
                    />
                    <div>
                      <p className="text-white font-medium">{featuredPost.author.name}</p>
                      <p className="text-white/60 text-sm flex items-center gap-2">
                        <span>📅 {featuredPost.date}</span>
                        <span>·</span>
                        <span>⏱️ {featuredPost.readTime}</span>
                      </p>
                    </div>
                  </div>

                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                    hoveredPost === 'featured' ? 'bg-[#FF7D5A] scale-110' : 'bg-white/20 backdrop-blur-sm'
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Regular Posts Grid - Enhanced */}
          <div className={`grid gap-6 ${activeCategory === "All" ? "grid-cols-1" : "lg:col-span-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
            {regularPosts.slice(0, activeCategory === "All" ? 3 : 6).map((post, index) => (
              <Link
                key={index}
                href={post.link}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 flex flex-col hover:-translate-y-2 hover:shadow-2xl`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredPost(index)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#774433] text-xs font-bold uppercase tracking-wide rounded-full shadow-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full flex items-center gap-1">
                      ⏱️ {post.readTime}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hoveredPost === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <span className="px-4 py-2 bg-[#FF7D5A] text-white text-sm font-bold rounded-full">
                      Read Article →
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Date */}
                  <span className="text-[#FF7D5A] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    📅 {post.date}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#774433] mt-2 mb-3 group-hover:text-[#FF7D5A] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Author & Read More - Enhanced */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-100"
                      />
                      <span className="text-gray-600 text-sm font-medium">{post.author.name}</span>
                    </div>

                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredPost === index ? 'bg-[#FF7D5A] text-white scale-110' : 'bg-gray-100 text-[#774433]'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter - Enhanced */}
        <div className={`mt-20 bg-gradient-to-br from-white via-[#F7EECB]/15 to-white rounded-3xl p-8 md:p-12 relative overflow-hidden border border-gray-200/50 shadow-lg transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-lg text-center md:text-left">
              <span className="text-[#FF7D5A] text-sm uppercase tracking-wider font-bold mb-2 block">📬 Newsletter</span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#774433] mb-3">
                Subscribe to Safari Stories
              </h3>
              <p className="text-gray-600">
                Get the latest travel tips, wildlife guides, and exclusive offers delivered to your inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full bg-white border border-[#DDA885]/30 text-[#774433] placeholder-gray-400 focus:outline-none focus:border-[#FF7D5A] focus:ring-2 focus:ring-[#FF7D5A]/20 transition-all w-full sm:w-72 shadow-sm"
              />
              <button className="group px-8 py-4 bg-[#FF7D5A] hover:bg-[#DDA885] text-white font-bold rounded-full transition-all duration-300 whitespace-nowrap hover:shadow-lg hover:shadow-[#FF7D5A]/30 flex items-center justify-center gap-2">
                Subscribe
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* View All Button - Enhanced */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-3 border-2 border-[#774433] text-[#774433] hover:bg-[#774433] hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl"
          >
            <span>View All Articles</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInspiredSection;
