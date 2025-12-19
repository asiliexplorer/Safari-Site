"use client"
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const PopularSafaris = ({ packages = [] }) => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  // Transform packages data to match component format
  const safaris = packages.map(pkg => ({
    title: pkg.name,
    location: pkg.destinations?.[0] || 'Tanzania',
    duration: `${pkg.duration} Days`,
    nights: `${pkg.duration - 1} Nights`,
    price: pkg.price.toLocaleString(),
    originalPrice: (pkg.price * 1.2).toLocaleString(), // 20% markup for original price
    discount: "Save Now",
    image: pkg.image || "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    categories: [pkg.tour_type || 'Safari', pkg.comfort_level || 'Comfortable'],
    link: `/packages/${pkg.slug}`,
    rating: pkg.rating,
    reviews: pkg.review_count,
    highlights: pkg.destinations?.slice(0, 3) || ['Serengeti', 'Ngorongoro', 'Tarangire'],
    featured: pkg.featured || false
  }));

  // Fallback to default data if no packages
  const defaultSafaris = [
    {
      title: "Classic Tanzania Safari",
      location: "Tanzania",
      duration: "7 Days",
      nights: "6 Nights",
      price: "3,500",
      originalPrice: "4,200",
      discount: "17% OFF",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      categories: ["Wildlife", "Big Five"],
      link: "/packages/classic-tanzania",
      rating: 4.9,
      reviews: 128,
      highlights: ["Serengeti NP", "Ngorongoro", "Tarangire"],
      featured: true
    }
  ];

  const displaySafaris = safaris.length > 0 ? safaris : defaultSafaris;

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

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Drag to scroll functionality
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setDragDistance(0);
    const rect = scrollRef.current.getBoundingClientRect();
    setStartX(e.pageX - rect.left);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const rect = scrollRef.current.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    setDragDistance(Math.abs(x - startX));
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (!scrollRef.current) return;
    setIsDragging(false);
    scrollRef.current.style.cursor = 'grab';
    scrollRef.current.style.userSelect = '';
    // Reset drag distance after a short delay to allow click event to check it
    setTimeout(() => setDragDistance(0), 50);
  };

  const handleMouseLeave = () => {
    if (!scrollRef.current) return;
    setIsDragging(false);
    scrollRef.current.style.cursor = 'grab';
    scrollRef.current.style.userSelect = '';
    setTimeout(() => setDragDistance(0), 50);
  };

  return (
    <section ref={sectionRef} className="py-28 bg-gradient-to-b from-white via-[#F7EECB]/8 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#FF7D5A]/1 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#774433]/1 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#FF7D5A]/1 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Safari Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['🦁', '🐘', '🦒', '🦓', '🌴'].map((emoji, i) => (
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header - Enhanced */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="lg:max-w-xl">
            <div className="inline-flex items-center space-x-3 mb-6">
              <span className="w-16 h-[2px] bg-gradient-to-r from-[#FF7D5A] to-transparent"></span>
              <span className="text-[#FF7D5A] text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF7D5A] rounded-full animate-pulse"></span>
                Handpicked Experiences
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-[#774433] mb-4">
              Popular <span className="text-[#FF7D5A] relative inline-block">
                Safaris
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 4 50 7 100 7C150 7 150 1 200 1" stroke="#FF7D5A" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Our most loved safari packages, trusted by thousands of travelers worldwide.
            </p>
          </div>

          {/* Navigation Controls - Enhanced */}
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`group w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  canScrollLeft
                    ? 'border-[#774433] text-[#774433] hover:bg-[#774433] hover:text-white hover:shadow-lg'
                    : 'border-gray-300 text-gray-300 cursor-not-allowed'
                }`}
              >
                <svg className={`w-5 h-5 ${canScrollLeft ? 'group-hover:-translate-x-0.5' : ''} transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`group w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  canScrollRight
                    ? 'border-[#774433] text-[#774433] hover:bg-[#774433] hover:text-white hover:shadow-lg'
                    : 'border-gray-300 text-gray-300 cursor-not-allowed'
                }`}
              >
                <svg className={`w-5 h-5 ${canScrollRight ? 'group-hover:translate-x-0.5' : ''} transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <Link
              href="/packages"
              className="group hidden md:inline-flex items-center gap-2 bg-[#FF7D5A] hover:bg-[#DDA885] text-white font-bold py-4 px-6 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#FF7D5A]/30"
            >
              View All
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Safari Cards Carousel - Enhanced */}
        <div className="overflow-hidden -mx-4 px-4 lg:max-w-[1248px] lg:mx-auto lg:px-0">
          <div
            ref={scrollRef}
            className={`flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory transform transition-all duration-1000 delay-200 cursor-grab active:cursor-grabbing ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
          {displaySafaris.map((safari, index) => (
            <Link
              key={index}
              href={safari.link}
              className="flex-shrink-0 w-[340px] md:w-[400px] group snap-start"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={(e) => {
                if (dragDistance > 5) {
                  e.preventDefault();
                }
              }}
            >
              {/* Card Container - Enhanced */}
              <div className={`bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 h-full ${
                hoveredCard === index ? 'shadow-2xl shadow-[#774433]/20 -translate-y-2' : ''
              }`}>
                {/* Image Container */}
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={safari.image}
                    alt={safari.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Featured Badge */}
                  {safari.featured && (
                    <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-[#FF7D5A] to-[#DDA885] rounded-full text-white text-xs font-bold flex items-center gap-1 shadow-lg">
                      ⭐ Featured
                    </div>
                  )}

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-red-500 rounded-full text-white text-xs font-bold">
                    {safari.discount}
                  </div>

                  {/* Categories - Show on Hover */}
                  <div className={`absolute top-16 left-4 flex gap-2 flex-wrap transition-all duration-500 ${
                    hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}>
                    {safari.categories.map((cat, i) => (
                      <span key={i} className="bg-white/95 backdrop-blur-sm text-[#774433] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    className={`absolute top-4 right-16 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#FF7D5A] transition-all duration-300 ${
                      hoveredCard === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>

                  {/* Bottom Info on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    {/* Duration */}
                    <div className="flex items-center gap-2 bg-[#774433]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium">{safari.duration}</span>
                    </div>

                    {/* Rating - Enhanced */}
                    <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <svg className="w-4 h-4 text-[#FF7D5A] fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-sm font-bold text-[#1a1a1a]">{safari.rating}</span>
                      <span className="text-xs text-gray-500">({safari.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Content - Enhanced */}
                <div className="p-6">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-[#FF7D5A] mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-medium">{safari.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#774433] mb-4 group-hover:text-[#FF7D5A] transition-colors line-clamp-2">
                    {safari.title}
                  </h3>

                  {/* Highlights - Enhanced */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {safari.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full flex items-center gap-1">
                        <span className="text-[#FF7D5A]">✓</span>
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Divider with Gradient */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-5"></div>

                  {/* Price & CTA - Enhanced */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 line-through">${safari.originalPrice}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-500">From</span>
                        <span className="text-2xl font-bold text-[#774433]">${safari.price}</span>
                        <span className="text-sm text-gray-500">/ person</span>
                      </div>
                    </div>

                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-[#FF7D5A] to-[#DDA885] flex items-center justify-center text-white transition-all duration-300 ${
                      hoveredCard === index ? 'scale-110 shadow-lg shadow-[#FF7D5A]/40' : ''
                    }`}>
                      <svg className={`w-5 h-5 transition-transform duration-300 ${hoveredCard === index ? 'translate-x-0.5' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          </div>
        </div>

        {/* Mobile View All Button - Enhanced */}
        <div className={`md:hidden text-center mt-8 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <Link
            href="/packages"
            className="group inline-flex items-center gap-3 bg-[#774433] hover:bg-[#5a3325] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl"
          >
            View All Safaris
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Trust Badges - Enhanced */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {[
            { icon: "🛡️", text: "Secure Booking", sub: "256-bit SSL", color: "from-blue-500 to-indigo-600" },
            { icon: "💰", text: "Best Price", sub: "Guarantee", color: "from-emerald-500 to-teal-600" },
            { icon: "🎯", text: "Free Cancellation", sub: "Up to 30 days", color: "from-amber-500 to-orange-600" },
            { icon: "🏆", text: "Award Winning", sub: "Service", color: "from-violet-500 to-purple-600" }
          ].map((badge, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 bg-white p-5 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#FF7D5A]/30 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                <span className="text-2xl">{badge.icon}</span>
              </div>
              <div>
                <p className="font-bold text-[#1a1a1a]">{badge.text}</p>
                <p className="text-xs text-gray-500">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSafaris;
