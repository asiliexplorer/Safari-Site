"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const TopDestinations = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);

  const filters = [
    { id: 'all', label: 'All Destinations', emoji: '🌍' },
    { id: 'tanzania', label: 'Tanzania', emoji: '🇹🇿' },
    { id: 'kenya', label: 'Kenya', emoji: '🇰🇪' },
    { id: 'southern', label: 'Southern Africa', emoji: '🦁' }
  ];

  const destinations = [
    {
      name: "Serengeti",
      country: "Tanzania",
      region: "tanzania",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      link: "/destinations/serengeti",
      highlights: ["Great Migration", "Big Five", "Endless Plains"],
      tours: 24,
      rating: 4.9,
      featured: true
    },
    {
      name: "Masai Mara",
      country: "Kenya",
      region: "kenya",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
      link: "/destinations/masai-mara",
      highlights: ["Wildebeest Crossing", "Hot Air Balloons", "Maasai Culture"],
      tours: 18,
      rating: 4.8
    },
    {
      name: "Ngorongoro Crater",
      country: "Tanzania",
      region: "tanzania",
      image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=800&q=80",
      link: "/destinations/ngorongoro",
      highlights: ["UNESCO Site", "Wildlife Density", "Crater Views"],
      tours: 15,
      rating: 4.9
    },
    {
      name: "Okavango Delta",
      country: "Botswana",
      region: "southern",
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80",
      link: "/destinations/okavango-delta",
      highlights: ["Mokoro Safaris", "Water Wildlife", "Pristine Wilderness"],
      tours: 12,
      rating: 4.7
    },
    {
      name: "Kruger Park",
      country: "South Africa",
      region: "southern",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      link: "/destinations/kruger-park",
      highlights: ["Self-Drive Options", "Luxury Lodges", "Diverse Ecosystems"],
      tours: 20,
      rating: 4.6
    },
    // {
    //   name: "Victoria Falls",
    //   country: "Zimbabwe/Zambia",
    //   region: "southern",
    //   image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=800&q=80",
    //   link: "/destinations/victoria-falls",
    //   highlights: ["Natural Wonder", "Adventure Activities", "Zambezi River"],
    //   tours: 10,
    //   rating: 4.8
    // }
  ];

  const filteredDestinations = activeFilter === 'all'
    ? destinations
    : destinations.filter(d => d.region === activeFilter);

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

  return (
    <section ref={sectionRef} className="py-28 px-4 bg-white relative overflow-hidden">
      {/* Light Professional Background Overlay */}
      <div className="absolute inset-0">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7EECB]/10 via-transparent to-[#F7EECB]/8"></div>

        {/* Soft Light Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7D5A]/1 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DDA885]/1 rounded-full blur-3xl"></div>

        {/* Very Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.003]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23774433' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Enhanced */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="lg:max-w-2xl">
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="w-16 h-[2px] bg-gradient-to-r from-[#FF7D5A] to-transparent"></span>
              <span className="text-[#FF7D5A] text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF7D5A] rounded-full animate-pulse"></span>
                Explore Africa
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#774433] mb-4">
              Top <span className="text-[#FF7D5A] relative inline-block">
                Destinations
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 4 50 7 100 7C150 7 150 1 200 1" stroke="#FF7D5A" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From the endless plains of the Serengeti to the thundering Victoria Falls,
              discover Africa&apos;s most iconic safari destinations.
            </p>
          </div>

          {/* Desktop View All Link */}
          <Link
            href="/destinations"
            className="hidden lg:inline-flex items-center gap-3 text-[#774433] font-bold hover:text-[#FF7D5A] transition-all group"
          >
            <span>View All Destinations</span>
            <span className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-[#FF7D5A] group-hover:border-[#FF7D5A] group-hover:text-white transition-all duration-300 group-hover:scale-110">
              <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap gap-3 mb-10 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeFilter === filter.id
                ? 'bg-[#774433] text-white shadow-lg shadow-[#774433]/20'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              <span>{filter.emoji}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Destinations Bento Grid - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination, index) => {
            // Determine column span based on position
            let colSpanClass = '';
            let heightClass = 'h-[320px]';

            if (activeFilter === 'all') {
              if (index === 0) {
                // First item: spans 2 columns, 2 rows
                colSpanClass = 'md:col-span-2 md:row-span-2';
                heightClass = 'h-[400px] md:h-full min-h-[500px]';
              } else if (index === 4) {
                // Second row, second item: spans 2 columns
                colSpanClass = 'md:col-span-2';
              }
            }

            return (
              <Link
                key={destination.name}
                href={destination.link}
                className={`group relative overflow-hidden rounded-3xl transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  } ${colSpanClass} ${heightClass}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image with Parallax-like Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>

                {/* Animated Gradient Overlay */}
                <div className={`absolute inset-0 transition-all duration-500 ${hoveredIndex === index
                  ? 'bg-gradient-to-t from-[#774433] via-[#774433]/60 to-transparent'
                  : 'bg-gradient-to-t from-black/80 via-black/30 to-transparent'
                  }`}></div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF7D5A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top Badges Row */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                  {/* Country Tag */}
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-semibold uppercase tracking-wider border border-white/20 group-hover:bg-white/20 transition-all">
                    📍 {destination.country}
                  </span>

                  {/* Featured Badge or Tours */}
                  {destination.featured ? (
                    <span className="px-4 py-2 bg-gradient-to-r from-[#FF7D5A] to-[#DDA885] rounded-full text-white text-xs font-bold flex items-center gap-1 shadow-lg">
                      ⭐ Featured
                    </span>
                  ) : (
                    <span className="px-3 py-2 bg-[#FF7D5A] rounded-full text-white text-xs font-bold">
                      {destination.tours} Tours
                    </span>
                  )}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full shadow-lg">
                    <span className="text-[#FF7D5A]">★</span>
                    <span className="text-sm font-bold text-[#1a1a1a]">{destination.rating}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Destination Name */}
                  <h3 className={`font-serif text-white mb-3 transition-all duration-500 group-hover:translate-y-0 ${(index === 0 || index === 4) && activeFilter === 'all' ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'
                    }`}>
                    {destination.name}
                  </h3>

                  {/* Highlights - Show on Hover with Stagger */}
                  <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs border border-white/10 transform transition-all duration-300"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          ✓ {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Explore Link - Enhanced */}
                  <div className={`flex items-center justify-between transition-all duration-300 ${hoveredIndex === index ? 'text-[#FF7D5A]' : 'text-white/80'
                    }`}>
                    <span className="font-semibold flex items-center gap-2">
                      <span>Explore Destination</span>
                      <span className="text-sm opacity-60">({destination.tours} tours)</span>
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'bg-[#FF7D5A] text-white translate-x-1 scale-110' : 'bg-white/20'
                      }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className={`lg:hidden text-center mt-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-3 bg-[#774433] hover:bg-[#5a3325] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl"
          >
            View All Destinations
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Bottom Feature Cards - Enhanced */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
          {[
            {
              emoji: "🌍",
              title: "East Africa",
              description: "Tanzania, Kenya, Uganda, Rwanda",
              count: "6 Countries",
              color: "from-emerald-500 to-teal-600"
            },
            {
              emoji: "🦁",
              title: "Southern Africa",
              description: "South Africa, Botswana, Zimbabwe, Zambia",
              count: "5 Countries",
              color: "from-amber-500 to-orange-600"
            },
            {
              emoji: "🏝️",
              title: "Island Escapes",
              description: "Zanzibar, Seychelles, Mauritius",
              count: "3 Destinations",
              color: "from-blue-500 to-indigo-600"
            }
          ].map((region, index) => (
            <div
              key={index}
              className="group flex items-center gap-5 p-6 bg-gradient-to-br from-[#F7EECB] to-white rounded-2xl hover:bg-[#774433] transition-all duration-500 cursor-pointer border border-gray-100 hover:border-transparent hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${region.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <span className="text-3xl">{region.emoji}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#774433] group-hover:text-white transition-colors text-lg">{region.title}</h4>
                <p className="text-sm text-gray-500 group-hover:text-white/70 transition-colors">{region.description}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs font-bold text-[#FF7D5A]">{region.count}</span>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#FF7D5A] transform group-hover:translate-x-1 transition-all mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
