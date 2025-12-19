"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=2000&q=80",
      title: "Celebrating 20 Years",
      subtitle: "Your Safari, Your Way",
      description: "Since 2005, we've guided travellers through Africa's wildest and most beautiful places."
    },
    {
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2000&q=80",
      title: "Witness the Great Migration",
      subtitle: "Serengeti National Park",
      description: "Experience millions of wildebeest crossing the Mara River in one of nature's greatest spectacles."
    },
    {
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=80",
      title: "Conquer Kilimanjaro",
      subtitle: "Africa's Highest Peak",
      description: "Trek to the roof of Africa with our expert guides and experience breathtaking views."
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden bg-transparent">
      {/* Background Images with Enhanced Parallax Effect */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-[1] transition-all duration-1500 ${
            currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
          style={{
            transform: currentSlide === index ? `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.02)` : 'scale(1.1)',
            transition: 'transform 0.5s ease-out, opacity 1.5s ease-in-out'
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(1.1) contrast(1.05)' }}
          />
          {/* Lighter gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Subtle Animated Particles */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: i % 3 === 0 ? '#FF7D5A' : 'rgba(255,255,255,0.6)',
              boxShadow: i % 3 === 0 ? '0 0 8px #FF7D5A' : 'none',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              opacity: 0.5 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-36 sm:pt-40 md:pt-44 lg:pt-48">
        <div className="max-w-3xl w-full">
          {/* Pre-title with animation */}
          <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="inline-flex items-center gap-2 text-[#FF7D5A] text-sm md:text-base uppercase tracking-[0.2em] mb-6 font-medium">
              <span className="w-12 h-[2px] bg-[#FF7D5A]"></span>
              {slides[currentSlide].subtitle}
            </span>
          </div>

          {/* Main Headline with animation */}
          <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] text-white mb-6">
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className={i === slides[currentSlide].title.split(' ').length - 1 ? 'text-[#FF7D5A]' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
          </div>

          {/* Subtitle with animation */}
          <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Buttons with animation */}
          <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Link
              href="/tailor-made"
              className="group inline-flex items-center justify-center gap-3 bg-[#FF7D5A] hover:bg-[#DDA885] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-[#FF7D5A]/30"
            >
              <span>Plan Your Safari</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:bg-white/10"
            >
              View Packages
            </Link>
          </div>

          {/* Quick Stats */}
          <div className={`mt-16 flex flex-wrap gap-8 transform transition-all duration-1000 delay-[1100ms] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {[
              { number: "20+", label: "Years Experience" },
              { number: "1000+", label: "Happy Travelers" },
              { number: "4.9", label: "Rating", icon: "⭐" }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="flex items-center gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-[#FF7D5A]">{stat.number}</span>
                  {stat.icon && <span className="text-xl">{stat.icon}</span>}
                </div>
                <span className="text-white/60 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 20 Years Badge - Enhanced */}
        <div className={`hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 transform transition-all duration-1000 delay-[1300ms] ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          <div className="relative w-48 h-48">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-[#FF7D5A]/20 blur-xl animate-pulse"></div>

            {/* Circular badge */}
            <div className="absolute inset-0 rounded-full border-4 border-[#FF7D5A] flex items-center justify-center bg-black/30 backdrop-blur-sm">
              <div className="text-center">
                <span className="text-[#FF7D5A] text-6xl font-bold block">20</span>
                <span className="text-[#FF7D5A] text-xl font-bold tracking-wider">YEARS</span>
              </div>
            </div>

            {/* Rotating text around badge */}
            <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 192 192">
              <defs>
                <path id="circlePath" d="M 96, 96 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"/>
              </defs>
              <text className="fill-[#FF7D5A] text-[11px] uppercase tracking-[0.3em] font-medium">
                <textPath href="#circlePath">
                  • Celebrating Excellence • Since 2005 • Trusted Safari Partner •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === index ? 'bg-[#FF7D5A] w-12' : 'bg-white/40 w-2 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 right-8 z-20 transform transition-all duration-1000 delay-[1500ms] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest rotate-90 origin-center mb-8">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#FF7D5A] rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 z-10 w-24 h-24 border-l-2 border-t-2 border-[#FF7D5A]/30"></div>
      <div className="absolute bottom-8 right-8 z-10 w-24 h-24 border-r-2 border-b-2 border-[#FF7D5A]/30"></div>
    </section>
  );
};

export default HeroSection;