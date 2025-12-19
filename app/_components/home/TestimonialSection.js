"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animatingIndex, setAnimatingIndex] = useState(0);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Thompson",
      location: "London, UK",
      date: "October 2025",
      rating: 5,
      avatar: "ST",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      safari: "Classic Tanzania Safari",
      review: "My wife and I had an amazing experience from start to finish. The team went above and beyond to make our safari unforgettable. Seeing the Big Five in their natural habitat was a dream come true!",
      highlight: "Big Five sighting"
    },
    {
      id: 2,
      name: "James Richardson",
      location: "Sydney, Australia",
      date: "October 2025",
      rating: 5,
      avatar: "JR",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      safari: "Great Migration Safari",
      review: "We had an amazing two weeks. The trip was perfectly planned, with local guides who made our experience unforgettable. The attention to detail and personalized service exceeded all our expectations.",
      highlight: "Migration crossing"
    },
    {
      id: 3,
      name: "Emma Watson",
      location: "New York, USA",
      date: "September 2025",
      rating: 5,
      avatar: "EW",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      safari: "Luxury Serengeti Experience",
      review: "A great company to work with planning our safari. The booking process was smooth, and our guide Samuel was fantastic. The lodges were absolutely stunning!",
      highlight: "Luxury lodges"
    },
    {
      id: 4,
      name: "David & Lisa Chen",
      location: "Toronto, Canada",
      date: "September 2025",
      rating: 5,
      avatar: "DC",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      safari: "Ngorongoro & Tarangire",
      review: "We had the pleasure of spending 6 days with our Safari Guide Abdallah visiting Arusha National Park and Tarangire. His expertise and friendly demeanor made our trip exceptional.",
      highlight: "Expert guide"
    },
    {
      id: 5,
      name: "Caroline Meyer",
      location: "Berlin, Germany",
      date: "August 2025",
      rating: 5,
      avatar: "CM",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      safari: "Zanzibar Beach & Safari",
      review: "An unforgettable experience led by a very knowledgeable and lovely guide who taught us so much about the wildlife and culture. Every game drive was an adventure!",
      highlight: "Beach & Safari combo"
    },
    {
      id: 6,
      name: "Robert & Anne Williams",
      location: "Cape Town, SA",
      date: "August 2025",
      rating: 5,
      avatar: "RW",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
      safari: "Classic Tanzania Safari",
      review: "We thoroughly enjoyed our week-long safari that was expertly organised, meeting our requirements for places to visit, both on safari and afterwards in Zanzibar.",
      highlight: "Custom itinerary"
    }
  ];

  const stats = [
    { number: "4.9", label: "Average Rating", icon: "⭐", color: "from-amber-400 to-orange-500" },
    { number: "1000+", label: "Happy Travelers", icon: "😊", color: "from-emerald-400 to-teal-500" },
    { number: "500+", label: "5-Star Reviews", icon: "🌟", color: "from-violet-400 to-purple-500" },
    { number: "98%", label: "Recommend Us", icon: "👍", color: "from-blue-400 to-indigo-500" }
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
    if (isHovered) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setAnimatingIndex(currentIndex);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 300);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovered, currentIndex, testimonials.length]);

  const goToSlide = (index) => {
    setAnimatingIndex(currentIndex);
    setTimeout(() => setCurrentIndex(index), 150);
  };

  const nextSlide = () => {
    setAnimatingIndex(currentIndex);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 150);
  };

  const prevSlide = () => {
    setAnimatingIndex(currentIndex);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }, 150);
  };

  return (
    <section ref={sectionRef} className="py-28 bg-gradient-to-b from-white via-[#F7EECB]/10 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF7D5A]/1 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#774433]/1 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#DDA885]/1 rounded-full blur-3xl"></div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.005]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23774433' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Large Decorative Quote */}
      <div className="absolute top-40 left-10 opacity-[0.03] hidden lg:block">
        <svg className="w-64 h-64 text-[#774433]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['⭐', '🦁', '✈️', '🌍', '❤️'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-10 animate-float"
            style={{
              left: `${15 + i * 18}%`,
              top: `${10 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header - Enhanced */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#FF7D5A]"></span>
            <span className="text-[#FF7D5A] text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF7D5A] rounded-full animate-pulse"></span>
              Testimonials
            </span>
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#FF7D5A]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#774433] mb-6">
            What Our <span className="text-[#FF7D5A] relative inline-block">
              Travelers Say
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 4 50 7 100 7C150 7 150 1 200 1" stroke="#FF7D5A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Hear from thousands of happy travelers who&apos;ve experienced the magic of Africa with us.
          </p>
        </div>

        {/* Stats Row - Enhanced */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#DDA885]/20 hover:border-[#FF7D5A]/40 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <span className="text-4xl mb-3 block transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</span>
              <span className="text-3xl md:text-4xl font-bold text-[#FF7D5A] block">{stat.number}</span>
              <span className="text-gray-600 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Main Testimonial Carousel - Enhanced */}
        <div
          className={`relative transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Featured Testimonial Card */}
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[#DDA885]/30 shadow-xl mb-8 overflow-hidden">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF7D5A]/10 to-transparent rounded-bl-full"></div>

            {/* Highlight Badge */}
            <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 px-4 py-2 bg-[#FF7D5A]/20 rounded-full">
              <span className="text-[#FF7D5A]">✨</span>
              <span className="text-[#FF7D5A] text-sm font-medium">{testimonials[currentIndex].highlight}</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
              {/* Left - Avatar & Info */}
              <div className="lg:w-1/3 text-center lg:text-left">
                {/* Avatar with Ring */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF7D5A] to-[#DDA885] rounded-full blur-lg opacity-50"></div>
                  <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#FF7D5A] to-[#DDA885] p-1">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#FF7D5A] rounded-full flex items-center justify-center text-white shadow-lg">
                    ✓
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#774433] mb-1">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-[#FF7D5A] text-sm mb-3 flex items-center justify-center lg:justify-start gap-1 font-medium">
                  📍 {testimonials[currentIndex].location}
                </p>

                {/* Star Rating */}
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FF7D5A] fill-current drop-shadow-md" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7EECB] rounded-full text-[#774433] text-sm font-medium">
                  🦁 {testimonials[currentIndex].safari}
                </span>
              </div>

              {/* Right - Review */}
              <div className="lg:w-2/3">
                <svg className="w-16 h-16 text-[#FF7D5A]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#774433] text-xl md:text-2xl lg:text-3xl leading-relaxed font-light italic">
                  &ldquo;{testimonials[currentIndex].review}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4 text-gray-600 text-sm">
                  <span className="flex items-center gap-1">
                    <span>📅</span>
                    Traveled in {testimonials[currentIndex].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>✅</span>
                    Verified booking
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation - Enhanced */}
          <div className="flex items-center justify-between">
            {/* Progress Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-[#FF7D5A] to-[#DDA885] w-10 shadow-lg shadow-[#FF7D5A]/30'
                      : 'bg-white/30 w-2.5 hover:bg-white/50 hover:w-4'
                  }`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="group w-14 h-14 rounded-full border-2 border-[#DDA885]/40 text-[#774433] hover:bg-[#FF7D5A] hover:border-[#FF7D5A] hover:text-white transition-all duration-300 flex items-center justify-center bg-white/50"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="group w-14 h-14 rounded-full border-2 border-[#DDA885]/40 text-[#774433] hover:bg-[#FF7D5A] hover:border-[#FF7D5A] hover:text-white transition-all duration-300 flex items-center justify-center bg-white/50"
              >
                <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mini Review Cards - Enhanced */}
        <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`group p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                currentIndex === index
                  ? 'bg-gradient-to-br from-[#FF7D5A] to-[#DDA885] text-white shadow-xl shadow-[#FF7D5A]/30 scale-[1.02]'
                  : 'bg-white/90 border border-[#DDA885]/30 hover:bg-white hover:border-[#FF7D5A]/50 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-12 h-12 rounded-full object-cover ring-2 ${
                    currentIndex === index ? 'ring-white' : 'ring-[#FF7D5A]/40'
                  }`}
                />
                <div>
                  <p className={`font-bold ${currentIndex === index ? 'text-white' : 'text-[#774433]'}`}>
                    {testimonial.name.split(' ')[0]}
                  </p>
                  <p className={`text-xs ${currentIndex === index ? 'text-white/80' : 'text-gray-600'}`}>
                    {testimonial.location}
                  </p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${currentIndex === index ? 'text-white' : 'text-[#FF7D5A]'}`}>★</span>
                  ))}
                </div>
              </div>
              <p className={`text-sm line-clamp-2 ${currentIndex === index ? 'text-white/90' : 'text-gray-700'}`}>
                &ldquo;{testimonial.review.substring(0, 100)}...&rdquo;
              </p>
              <div className={`mt-3 text-xs ${currentIndex === index ? 'text-white/70' : 'text-gray-600'}`}>
                {testimonial.safari}
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Enhanced */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <p className="text-gray-600 mb-6 text-lg">Ready to create your own unforgettable memories?</p>
          <Link
            href="/travel-proposal"
            className="group relative inline-flex items-center gap-3 bg-[#FF7D5A] text-white font-bold py-5 px-10 rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF7D5A]/40 hover:bg-[#DDA885]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Planning Your Safari
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
            <span className="flex items-center gap-2">
              <span>✨</span>
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <span>⏱️</span>
              Response within 24hrs
            </span>
            <span className="flex items-center gap-2">
              <span>🔒</span>
              No commitment required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;