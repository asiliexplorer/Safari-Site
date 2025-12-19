"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const TailorMadeTrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { icon: "💭", title: "Share Your Dream", desc: "Tell us your ideal safari experience" },
    { icon: "✨", title: "We Design", desc: "Our experts craft your perfect itinerary" },
    { icon: "🔧", title: "Refine Together", desc: "We fine-tune every detail with you" },
    { icon: "🦁", title: "Adventure Awaits", desc: "Embark on your unforgettable journey" }
  ];

  const benefits = [
    { icon: "🎯", title: "100% Personalized", desc: "Every detail tailored to you" },
    { icon: "💰", title: "Best Value", desc: "Direct prices, no middlemen" },
    { icon: "🛡️", title: "Safe & Secure", desc: "Licensed & insured operator" },
    { icon: "🌟", title: "Expert Guides", desc: "20+ years local experience" }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7EECB]/8 to-white"></div>

      {/* SVG Pattern Background */}
      <div className="absolute inset-0 opacity-1">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7D5A]/1 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF7D5A]/1 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FF7D5A]/20 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#FF7D5A] rounded-full animate-pulse"></span>
              <span className="text-[#FF7D5A] text-sm font-bold uppercase tracking-wider">Bespoke Safari Experiences</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#774433] mb-6 leading-tight">
              Let Us Create Your{' '}
              <span className="text-[#FF7D5A]">Dream Safari</span>
            </h2>

            {/* Description */}
            <p className="text-[#774433]/80 text-lg mb-8 leading-relaxed max-w-lg">
              Every adventure is unique. Tell us your dreams, and our expert travel designers will craft
              a personalized African safari that exceeds your wildest expectations.
            </p>

            {/* Process Steps */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-500 ${activeStep === index
                      ? 'bg-[#FF7D5A] shadow-lg shadow-[#FF7D5A]/20 scale-105'
                      : 'bg-white/80 hover:bg-white border border-[#DDA885]/30'
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{step.icon}</span>
                    <div>
                      <h4 className={`font-bold text-sm ${activeStep === index ? 'text-white' : 'text-[#774433]'}`}>
                        {step.title}
                      </h4>
                      <p className={`text-xs mt-1 ${activeStep === index ? 'text-white/90' : 'text-[#774433]/70'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tailor-made"
                className="group inline-flex items-center justify-center gap-3 bg-[#FF7D5A] hover:bg-[#DDA885] text-[#774433] font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#FF7D5A]/30"
              >
                <span>Start Planning</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#774433]/30 text-[#774433] hover:bg-[#774433] hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300"
              >
                <span>View Sample Itineraries</span>
              </Link>
            </div>
          </div>

          {/* Right Side - Image Card */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"
                  alt="Safari experience"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                      {['JM', 'SA', 'KL'].map((initials, i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-[#FF7D5A] border-2 border-white flex items-center justify-center text-[#774433] text-xs font-bold">
                          {initials}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-white font-bold">1,000+ Happy Travelers</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-[#FF7D5A]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-white/80 text-sm ml-1">4.9/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Quote Form Preview */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#774433] flex items-center justify-center">
                    <span className="text-lg">📋</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#774433] text-sm">Free Quote</p>
                    <p className="text-gray-500 text-xs">No obligation</p>
                  </div>
                </div>
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF7D5A] rounded-full animate-pulse" style={{ width: '60%' }}></div>
                </div>
              </div>

              {/* Floating Card - Response Time */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-bold text-[#774433] text-sm">24hr Response</p>
                    <p className="text-gray-500 text-xs">Quick turnaround</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Row */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#DDA885]/30 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">{benefit.icon}</span>
              <h4 className="text-[#774433] font-bold mb-1">{benefit.title}</h4>
              <p className="text-[#774433]/70 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className={`mt-16 bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-[#DDA885]/30 shadow-lg transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left - Text */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-serif text-[#774433] mb-2">Prefer to Talk?</h3>
              <p className="text-[#774433]/70">Our safari experts are just a call away.</p>
            </div>

            {/* Middle - Phone Numbers */}
            <div className="md:col-span-1 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+255767140150" className="flex items-center gap-3 bg-[#774433]/10 hover:bg-[#FF7D5A] px-5 py-3 rounded-xl transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-[#774433]/20 group-hover:bg-white/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#774433] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#774433]/60 text-xs group-hover:text-white/80">Tanzania</p>
                  <p className="text-[#774433] group-hover:text-white font-bold">+255 767 140 150</p>
                </div>
              </a>
            </div>

            {/* Right - Email & WhatsApp */}
            <div className="md:col-span-1 flex flex-wrap gap-3 justify-center md:justify-end">
              <a href="mailto:info@asiliexplorer.com" className="flex items-center gap-2 bg-[#774433]/10 hover:bg-[#774433] hover:text-white px-4 py-2 rounded-full transition-all duration-300">
                <svg className="w-4 h-4 text-[#FF7D5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[#774433] hover:text-white text-sm">Email Us</span>
              </a>
              <a href="https://wa.me/255767140150" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-white text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailorMadeTrip;