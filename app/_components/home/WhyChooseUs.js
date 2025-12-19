"use client"
import { useState, useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, secure: 0, travelers: 0, destinations: 0 });
  const sectionRef = useRef(null);

  const features = [
    {
      icon: "🛡️",
      title: "60+ Years Experience",
      description: "Our team has a combined 60+ years of experience in African safari planning, ensuring expert guidance for your journey.",
      stat: 60,
      statLabel: "Years Combined",
      statKey: "years",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: "✅",
      title: "100% Secure Booking",
      description: "Our secure payment system and industry association affiliations guarantee safe financial transactions and protected deposits.",
      stat: 100,
      statLabel: "Secure",
      statKey: "secure",
      suffix: "%",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: "❤️",
      title: "Tailor-Made Safaris",
      description: "Every safari is customized to your preferences. We handle everything from accommodations to activities, creating your perfect adventure.",
      stat: 1000,
      statLabel: "Happy Travelers",
      statKey: "travelers",
      suffix: "+",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: "📍",
      title: "Local Expertise",
      description: "Our on-the-ground team provides authentic local insights and access to hidden gems that only true locals know about.",
      stat: 15,
      statLabel: "Destinations",
      statKey: "destinations",
      suffix: "+",
      color: "from-amber-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          features.forEach((feature) => {
            let start = 0;
            const end = feature.stat;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [feature.statKey]: Math.floor(start) }));
            }, 16);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 px-4 bg-gradient-to-b from-white via-[#F7EECB]/8 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF7D5A]/1 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#774433]/1 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#FF7D5A]/0.5 to-[#774433]/0.5 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.005]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#FF7D5A]"></span>
            <span className="text-[#FF7D5A] text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF7D5A] rounded-full animate-pulse"></span>
              Why Choose Us
            </span>
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#FF7D5A]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1a1a] mb-6">
            Your Safari, <span className="text-[#FF7D5A] relative">
              Our Expertise
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 4 50 7 100 7C150 7 150 1 200 1" stroke="#FF7D5A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We combine decades of experience with personalized service to create
            unforgettable African safari adventures tailored just for you.
          </p>
        </div>

        {/* Features Grid - Enhanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-[#FF7D5A]/30 overflow-hidden transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Floating Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF7D5A]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

              {/* Top Accent Line with Animation */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7D5A] via-[#DDA885] to-[#FF7D5A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

              <div className="relative z-10">
                {/* Icon with Bounce */}
                <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                  {feature.icon}
                </div>

                {/* Animated Counter */}
                <div className="mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#FF7D5A] to-[#DDA885] bg-clip-text text-transparent">
                    {counters[feature.statKey]}{feature.suffix || '+'}
                  </span>
                  <span className="text-sm text-gray-500 ml-2 block mt-1">{feature.statLabel}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#774433] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Arrow Link with Slide Effect */}
                <div className="mt-6 flex items-center text-[#FF7D5A] font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="relative overflow-hidden">
                    <span className="inline-block">Learn More</span>
                  </span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg viewBox="0 0 64 64" fill="none" className="w-full h-full text-[#FF7D5A]/20">
                  <path d="M64 64H0V0C0 35.3 28.7 64 64 64Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/about"
              className="group relative px-10 py-5 bg-[#FF7D5A] text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:bg-[#DDA885] hover:shadow-2xl hover:shadow-[#FF7D5A]/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover Our Story
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="/travel-proposal"
              className="group px-10 py-5 border-2 border-[#FF7D5A] text-[#FF7D5A] font-bold rounded-full hover:bg-[#FF7D5A] hover:text-white transition-all duration-500 relative overflow-hidden"
            >
              <span className="relative z-10">Start Planning</span>
              <div className="absolute inset-0 bg-[#FF7D5A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className={`mt-20 flex flex-wrap justify-center items-center gap-8 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {[
            { icon: "⭐", text: "4.9/5 Rating" },
            { icon: "🏆", text: "Award Winning" },
            { icon: "💬", text: "24/7 Support" },
            { icon: "🔒", text: "Secure Booking" }
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-500 text-sm hover:text-[#FF7D5A] transition-colors duration-300">
              <span className="text-lg">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;