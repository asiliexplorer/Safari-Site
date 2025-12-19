"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const PlanYourSafari = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  const panels = [
    {
      title: "Start Planning",
      subtitle: "Custom Safari",
      description: "Share your travel dreams and let us craft a personalized itinerary tailored to your preferences, budget, and timeline.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
      link: "/travel-proposal",
      linkText: "Create Your Safari",
      emoji: "✨",
      color: "from-amber-500 to-orange-600",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      features: ["100% Customizable", "Expert Guidance", "Best Price Guarantee"]
    },
    {
      title: "Ready-Made Tours",
      subtitle: "Curated Packages",
      description: "Explore our collection of tried-and-tested safari itineraries, carefully designed by our experts for unforgettable experiences.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
      link: "/packages",
      linkText: "Browse Packages",
      emoji: "📦",
      color: "from-emerald-500 to-teal-600",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      features: ["Proven Itineraries", "Group & Private", "All Inclusive Options"]
    },
    {
      title: "Best Time to Visit",
      subtitle: "Travel Calendar",
      description: "Discover the optimal seasons for wildlife migrations, weather conditions, and special events across Africa's best destinations.",
      image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=80",
      link: "/when-to-travel",
      linkText: "View Calendar",
      emoji: "📅",
      color: "from-violet-500 to-purple-600",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Migration Timing", "Weather Guide", "Peak Seasons"]
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

  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % panels.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isVisible, panels.length]);

  return (
    <section ref={sectionRef} className="py-28 px-4 bg-gradient-to-b from-white via-[#F7EECB]/8 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF7D5A]/1 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#774433]/1 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['🌍', '✈️', '🦁', '🌴', '⭐'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-2 animate-float"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${5 + i}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="w-full relative z-10">
        {/* Section Header - Enhanced */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#FF7D5A]"></span>
            <span className="text-[#FF7D5A] text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF7D5A] rounded-full animate-pulse"></span>
              Start Your Journey
            </span>
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#FF7D5A]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#1a1a1a] mb-6">
            Plan Your <span className="text-[#FF7D5A] relative inline-block">
              Dream Safari
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 4 50 7 100 7C150 7 150 1 200 1" stroke="#FF7D5A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you want a custom adventure or a ready-made package, we have the perfect safari waiting for you.
          </p>
        </div>

        {/* Interactive Panels - Desktop - Enhanced */}
        <div className={`hidden lg:block transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div
            className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Background Images with Parallax Effect */}
            {panels.map((panel, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
              >
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/20"></div>
              </div>
            ))}

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 border border-[#FF7D5A]/20 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/10 rounded-full"></div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex">
              {/* Left Side - Active Content */}
              <div className="w-1/2 h-full flex items-center p-16">
                <div className="max-w-lg">
                  {/* Icon with Glow */}
                  <div className="relative mb-10">
                    <div className="absolute inset-0 bg-[#FF7D5A] rounded-2xl blur-xl opacity-30"></div>
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${panels[activeIndex].color} flex items-center justify-center text-white shadow-xl`}>
                      {panels[activeIndex].icon}
                    </div>
                  </div>

                  {/* Subtitle */}
                  <span className="text-[#FF7D5A] text-sm uppercase tracking-[0.3em] font-bold mb-4 block flex items-center gap-2">
                    <span>{panels[activeIndex].emoji}</span>
                    {panels[activeIndex].subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="text-5xl font-serif text-white mb-6">
                    {panels[activeIndex].title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    {panels[activeIndex].description}
                  </p>

                  {/* Features - Enhanced */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {panels[activeIndex].features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20 flex items-center gap-2"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <span className="text-[#FF7D5A]">✓</span> {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button - Enhanced */}
                  <Link
                    href={panels[activeIndex].link}
                    className="group relative inline-flex items-center gap-3 bg-[#FF7D5A] text-white font-bold py-4 px-8 rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF7D5A]/40"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {panels[activeIndex].linkText}
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#DDA885] to-[#FF7D5A] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </Link>
                </div>
              </div>

              {/* Right Side - Panel Selectors - Enhanced */}
              <div className="w-1/2 h-full flex">
                {panels.map((panel, index) => (
                  <div
                    key={index}
                    className={`flex-1 h-full flex flex-col justify-end p-8 cursor-pointer transition-all duration-500 border-l border-white/10 group ${
                      activeIndex === index
                        ? 'bg-gradient-to-t from-[#FF7D5A]/30 to-transparent'
                        : 'bg-gradient-to-t from-black/30 to-transparent hover:from-black/20'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    {/* Emoji */}
                    <span className={`text-4xl mb-4 transition-all duration-300 ${
                      activeIndex === index ? 'scale-110' : 'opacity-50 group-hover:opacity-80'
                    }`}>
                      {panel.emoji}
                    </span>

                    {/* Step Number */}
                    <span className={`text-6xl font-bold mb-4 transition-colors duration-300 ${
                      activeIndex === index ? 'text-[#FF7D5A]' : 'text-white/20 group-hover:text-white/40'
                    }`}>
                      0{index + 1}
                    </span>

                    {/* Panel Title */}
                    <h4 className={`text-xl font-bold transition-colors duration-300 ${
                      activeIndex === index ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                    }`}>
                      {panel.title}
                    </h4>

                    {/* Active Indicator with Animation */}
                    <div className={`mt-4 h-1.5 rounded-full transition-all duration-500 ${
                      activeIndex === index ? 'bg-gradient-to-r from-[#FF7D5A] to-[#DDA885] w-full' : 'bg-white/20 w-0 group-hover:w-1/2'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <div
                className="h-full bg-[#FF7D5A] transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / panels.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Mobile Cards - Enhanced */}
        <div className={`lg:hidden grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {panels.map((panel, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 pt-52">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${panel.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {panel.icon}
                </div>

                <span className="text-[#FF7D5A] text-xs uppercase tracking-wider font-bold mb-2 block flex items-center gap-2">
                  <span>{panel.emoji}</span>
                  {panel.subtitle}
                </span>

                <h3 className="text-2xl font-serif text-white mb-3">
                  {panel.title}
                </h3>

                <p className="text-white/70 text-sm mb-6 line-clamp-2">
                  {panel.description}
                </p>

                <Link
                  href={panel.link}
                  className="inline-flex items-center gap-2 text-[#FF7D5A] font-bold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  {panel.linkText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats - Enhanced */}
        {/* <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {[
            { number: "1000+", label: "Happy Travelers", emoji: "😊", color: "from-amber-500 to-orange-600" },
            { number: "50+", label: "Safari Packages", emoji: "📦", color: "from-emerald-500 to-teal-600" },
            { number: "15+", label: "Destinations", emoji: "🌍", color: "from-blue-500 to-indigo-600" },
            { number: "20+", label: "Years Experience", emoji: "🏆", color: "from-violet-500 to-purple-600" }
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FF7D5A]/30 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                <span className="text-2xl">{stat.emoji}</span>
              </div>
              <span className="text-4xl md:text-5xl font-bold text-[#FF7D5A] block">{stat.number}</span>
              <p className="text-gray-600 mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default PlanYourSafari;
