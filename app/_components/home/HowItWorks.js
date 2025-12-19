"use client"

import { useState, useEffect, useRef } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Get in Touch",
      description: "Reach out via email, phone, or our online form. Tell us about your dream safari - where you want to go, what you want to see, and when you'd like to travel.",
      icon: "💬",
      color: "from-emerald-400 to-teal-500"
    },
    {
      number: "02",
      title: "Expert Consultation",


      description: "Our safari specialists, with 20+ years experience, help you choose the perfect destinations, timing, and experiences based on your preferences.",
      icon: "🎯",
      color: "from-blue-400 to-indigo-500"
    },
    {
      number: "03",
      title: "Custom Itinerary",
      description: "We craft a tailor-made safari plan designed around your preferences and budget. Every detail is personalized just for you.",
      icon: "📋",
      color: "from-violet-400 to-purple-500"
    },
    {
      number: "04",
      title: "Perfect It Together",
      description: "We refine every detail until your safari is exactly how you envisioned it. No compromises, just your dream safari.",
      icon: "✨",
      color: "from-pink-400 to-rose-500"
    },
    {
      number: "05",
      title: "Secure Your Trip",
      description: "Confirm your booking with a deposit. Your adventure is now officially on! We handle all the logistics so you can relax.",
      icon: "🔒",
      color: "from-amber-400 to-orange-500"
    },
    {
      number: "06",
      title: "Safari Time!",
      description: "Embark on your incredible African adventure. We're here 24/7 if you need us. Let the memories begin!",
      icon: "🦁",
      color: "from-green-400 to-emerald-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance steps
  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isVisible]);

  return (
    <section ref={sectionRef} className="py-28 px-4 bg-gradient-to-b from-white via-[#F7EECB]/10 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF7D5A]/1 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#DDA885]/1 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#FF7D5A]/0.5 to-[#DDA885]/0.5 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.005]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23774433' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Safari Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['🦒', '🐘', '🦓', '🌴', '🌅'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-10 animate-float"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Content Section */}
        <div className={`mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#774433] mb-6 leading-tight">
              Book Your Dream <span className="text-[#FF7D5A] relative inline-block">
                Vacation Now!
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 4 50 7 100 7C150 7 150 1 200 1" stroke="#FF7D5A" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </div>

          {/* Content Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Main Content Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-[#DDA885]/20 shadow-lg relative overflow-hidden group hover:bg-white hover:shadow-xl transition-all duration-500">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#FF7D5A]/20 to-transparent rounded-bl-full"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-3xl">🇹🇿</span>
                  <span className="text-[#FF7D5A] text-sm font-bold uppercase tracking-wider">Tanzania Adventures</span>
                </div>

                <p className="text-[#774433]/90 text-lg leading-relaxed mb-4">
                  A Tanzania vacation is truly a <span className="text-[#FF7D5A] font-semibold">once-in-a-lifetime experience</span>! As one of Africa's top safari destinations, Tanzania offers an incredible variety of adventures.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[#FF7D5A] text-xl mt-1">🦁</span>
                    <p className="text-[#774433]/80 flex-1">Enjoy an <span className="text-[#774433] font-semibold">unforgettable wildlife safari</span> through the Serengeti and witness the Great Migration</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#FF7D5A] text-xl mt-1">🏝️</span>
                    <p className="text-[#774433]/80 flex-1">Relax on the <span className="text-[#774433] font-semibold">stunning beaches of Zanzibar Island</span> with crystal-clear waters and pristine sands</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#FF7D5A] text-xl mt-1">⛰️</span>
                    <p className="text-[#774433]/80 flex-1">Fulfil your dream of <span className="text-[#774433] font-semibold">climbing Mount Kilimanjaro</span>, Africa's highest peak</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Value Card */}
            <div className="bg-gradient-to-br from-[#FF7D5A]/10 to-[#DDA885]/10 backdrop-blur-xl rounded-3xl p-8 border border-[#FF7D5A]/20 shadow-lg relative overflow-hidden group hover:from-[#FF7D5A]/15 hover:to-[#DDA885]/15 hover:shadow-xl transition-all duration-500">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-3xl">✨</span>
                  <span className="text-[#FF7D5A] text-sm font-bold uppercase tracking-wider">Asili Explorer</span>
                </div>

                <h3 className="text-2xl font-bold text-[#774433] mb-4">
                  African Safaris in Tanzania
                </h3>

                <p className="text-[#774433]/90 text-lg leading-relaxed mb-6">
                  At <span className="text-[#774433] font-bold">Asili Explorer – African Safaris in Tanzania</span>, we take pride in offering one of the most <span className="text-[#774433] font-semibold">diverse and customizable</span> ranges of Tanzania travel experiences.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF7D5A] rounded-full"></div>
                    <p className="text-[#774433]/90">Choose from our <span className="text-[#774433] font-semibold">popular, expertly crafted itineraries</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF7D5A] rounded-full"></div>
                    <p className="text-[#774433]/90">Or <span className="text-[#774433] font-semibold">create your own tailor-made adventure</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF7D5A] rounded-full"></div>
                    <p className="text-[#774433]/90">Whatever your travel style, we'll <span className="text-[#774433] font-semibold">design the perfect Tanzania vacation</span> just for you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust & Quality Section */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-[#DDA885]/20 shadow-lg relative overflow-hidden mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7D5A]/5 via-transparent to-[#DDA885]/5"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-[#774433] mb-3">
                  The Best Way to Explore Tanzania
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#FF7D5A] to-[#DDA885] mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-3">👥</div>
                  <p className="text-[#774433]/90 text-lg mb-2">
                    <span className="text-[#FF7D5A] font-bold text-2xl">Thousands</span> of travellers
                  </p>
                  <p className="text-[#774433]/70 text-sm">have discovered Tanzania with us</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⭐</div>
                  <p className="text-[#774433]/90 text-lg mb-2">
                    <span className="text-[#FF7D5A] font-bold text-2xl">Lifelong</span> memories
                  </p>
                  <p className="text-[#774433]/70 text-sm">each one left with unforgettable experiences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📸</div>
                  <p className="text-[#774433]/90 text-lg mb-2">
                    <span className="text-[#FF7D5A] font-bold text-2xl">Beautiful</span> photos
                  </p>
                  <p className="text-[#774433]/70 text-sm">captured along the way on Tripadvisor</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF7D5A]/15 to-[#DDA885]/15 rounded-2xl p-6 border border-[#FF7D5A]/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold text-[#774433] mb-2">Our Guarantee</h4>
                    <p className="text-[#774433]/90">
                      We guarantee the <span className="text-[#FF7D5A] font-bold">best price</span>, <span className="text-[#FF7D5A] font-bold">best service</span>, and <span className="text-[#FF7D5A] font-bold">best quality</span> for your Tanzania vacation.
                    </p>
                  </div>
                  <div className="text-5xl">🤝</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-[#774433]/80 text-lg italic">
                  See you soon in Tanzania! <span className="text-[#FF7D5A]">🇹🇿</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#FF7D5A]"></span>
            <span className="text-[#FF7D5A] text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF7D5A] rounded-full animate-pulse"></span>
              Simple Process
            </span>
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#FF7D5A]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#774433] mb-6">
            Your Journey <span className="text-[#FF7D5A] relative inline-block">
              Starts Here
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 4 50 7 100 7C150 7 150 1 200 1" stroke="#FF7D5A" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-[#774433]/70 max-w-2xl mx-auto text-lg leading-relaxed">
            From your first enquiry to unforgettable memories, we guide you through every step of your safari adventure.
          </p>
        </div>

        {/* Desktop Timeline - Enhanced */}
        <div className="hidden lg:block">
          {/* Interactive Progress Line */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-[#774433]/10 -translate-y-1/2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF7D5A] via-[#e8c073] to-[#FF7D5A] rounded-full transition-all duration-700 ease-out"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>

            {/* Step Indicators */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => { setActiveStep(index); setIsAutoPlaying(false); }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  className={`group relative flex flex-col items-center transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Step Circle */}
                  <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${index <= activeStep
                    ? 'bg-gradient-to-br from-[#FF7D5A] to-[#DDA885] text-white scale-110 shadow-xl shadow-[#FF7D5A]/30'
                    : 'bg-[#774433]/10 text-[#774433]/50 hover:bg-[#774433]/20 hover:scale-105'
                    }`}>
                    {/* Pulse Ring for Active */}
                    {index === activeStep && (
                      <div className="absolute inset-0 rounded-full bg-[#FF7D5A]/30 animate-ping"></div>
                    )}
                    <span className="text-3xl relative z-10">{step.icon}</span>
                  </div>

                  {/* Step Number */}
                  <span className={`mt-3 text-sm font-bold transition-colors duration-300 ${index <= activeStep ? 'text-[#FF7D5A]' : 'text-[#774433]/50'
                    }`}>
                    Step {step.number}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Content Card */}
          <div className={`mt-16 relative transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            {/* Glass Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-[#DDA885]/20 shadow-lg relative overflow-hidden">
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${steps[activeStep].color}`}></div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FF7D5A]/10 to-transparent rounded-bl-full"></div>

              <div className="flex items-start gap-10 relative z-10">
                {/* Big Icon */}
                <div className={`flex-shrink-0 w-32 h-32 rounded-3xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                  <span className="text-6xl">{steps[activeStep].icon}</span>
                </div>

                <div className="flex-1">
                  {/* Step Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#FF7D5A]/20 px-4 py-1.5 rounded-full mb-4">
                    <span className="w-2 h-2 bg-[#FF7D5A] rounded-full"></span>
                    <span className="text-[#FF7D5A] text-sm font-bold">Step {steps[activeStep].number} of 6</span>
                  </div>

                  <h3 className="text-4xl font-bold text-[#774433] mb-4">{steps[activeStep].title}</h3>
                  <p className="text-[#774433]/80 text-lg leading-relaxed mb-8 max-w-2xl">{steps[activeStep].description}</p>

                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => { setActiveStep(Math.max(0, activeStep - 1)); setIsAutoPlaying(false); }}
                      disabled={activeStep === 0}
                      className="group px-6 py-3 border border-[#774433]/30 text-[#774433] rounded-full hover:bg-[#774433]/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                    </button>
                    <button
                      onClick={() => { setActiveStep(Math.min(steps.length - 1, activeStep + 1)); setIsAutoPlaying(false); }}
                      disabled={activeStep === steps.length - 1}
                      className="group px-6 py-3 bg-[#FF7D5A] text-white rounded-full hover:bg-[#DDA885] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 hover:shadow-lg hover:shadow-[#FF7D5A]/30"
                    >
                      Next Step
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Auto-play Toggle */}
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className={`ml-auto px-4 py-2 rounded-full text-sm transition-all duration-300 ${isAutoPlaying
                        ? 'bg-[#FF7D5A]/20 text-[#FF7D5A]'
                        : 'bg-[#774433]/10 text-[#774433]/70 hover:text-[#774433]'
                        }`}
                    >
                      {isAutoPlaying ? '⏸ Auto-play On' : '▶ Auto-play Off'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Cards - Enhanced */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#DDA885]/20 hover:border-[#FF7D5A]/40 shadow-md hover:shadow-lg transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${step.color} rounded-t-2xl`}></div>

              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div>
                  <span className="text-[#FF7D5A] text-xs font-bold tracking-wider">STEP {step.number}</span>
                  <h3 className="text-lg font-bold text-[#774433] mt-1 mb-2 group-hover:text-[#FF7D5A] transition-colors">{step.title}</h3>
                  <p className="text-[#774433]/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Enhanced */}
        <div className={`text-center mt-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <a
            href="/travel-proposal"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#FF7D5A] text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF7D5A]/40"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Safari Journey
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#DDA885] to-[#FF7D5A] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </a>

          <p className="mt-6 text-[#774433]/60 text-sm">
            ✨ Free consultation • No obligation • Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
