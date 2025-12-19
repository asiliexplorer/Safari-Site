"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const TanzaniaVacation = () => {
  const [activeTab, setActiveTab] = useState('safari');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Wildlife Safari',
      description: 'Experience the Great Migration'
    },
    {
      image: 'https://images.unsplash.com/photo-1723643750330-c868b56af36f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
      title: 'Zanzibar Beaches',
      description: 'Pristine white sand beaches'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661870399335-f5efe423b78d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
      title: 'Kilimanjaro',
      description: 'Conquer the Roof of Africa'
    }
  ];

  // Faster auto slide effect (3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Side - Text Content */}
          <div className="flex-1">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/80 p-8 lg:p-12 shadow-xl">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-[#465b2d]/10 px-4 py-2 rounded-full mb-4">
                  <div className="w-2 h-2 bg-[#465b2d] rounded-full animate-pulse"></div>
                  <span className="text-[#465b2d] text-md font-bold">Asili Explorer</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#465b2d] mb-4 leading-tight">
                  BOOK YOUR DREAM{' '}
                  <span className="bg-gradient-to-r from-[#465b2d] to-[#8B5A4A] bg-clip-text text-transparent">
                    VACATION NOW!
                  </span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[#465b2d] to-[#8B5A4A] rounded-full"></div>
              </div>

              {/* Main Description */}
              <div className="space-y-6 text-slate-700 mb-8">
                <p className="text-lg leading-relaxed">
                  A Tanzania vacation is the ultimate once-in-a-lifetime holiday! Tanzania is a top safari destination and has so much to offer. You can choose to experience an amazing Tanzania safari or relax at the world's most beautiful beaches on Zanzibar Island.
                </p>
                <p className="text-lg leading-relaxed">
                  Or did you always dream about climbing <span className="text-[#465b2d] font-semibold">Kilimanjaro</span>? We are called <span className="text-slate-800 font-bold">Tanzania Specialist</span> for a reason: we offer the most extensive range of Tanzania vacation packages!
                </p>
              </div>

             

              {/* Custom Trip Section */}
              <div className="bg-gradient-to-r from-[#465b2d]/10 to-[#8B5A4A]/10 rounded-xl p-6 border border-[#465b2d]/20 mb-8">
                <p className="text-slate-700 text-lg leading-relaxed">
                  You can choose one of our popular Tanzania itineraries or build your own trip exactly the way you love it. Let us know which national parks and islands you like and we will design the perfect Tanzania vacation for you.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/packages" className="bg-gradient-to-r from-[#465b2d] to-[#3a4a24] text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex-1 text-center">
                  VIEW ALL OUR ITINERARIES
                </Link>
             
              </div>
            </div>

            {/* Trust Indicators */}
           
          </div>

          {/* Right Side - Image Slider */}
          <div className="flex-1 w-full">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/80 shadow-xl overflow-hidden">
              <div className="relative h-[400px] lg:h-[470px]">
                {/* Slides */}
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0    bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                
                  </div>
                ))}

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                {/* Auto-play Indicator */}
                  
              </div>
            </div>

            {/* Why Choose Us Section - Moved below the slider */}
            <div className="mt-8 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/80 p-6 shadow-xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 text-center mb-6">
                THE BEST WAY TO EXPLORE TANZANIA
              </h2>
              <div className="space-y-4 text-slate-700">
                <p className="text-center">
                  Thousands of travelers have traveled with Tanzania Specialist and we are very happy that each of them has had an unforgettable experience. Take time to read their reviews on <span className="text-slate-800 font-semibold">Tripadvisor</span> and look at the pictures they've made during their Tanzania vacation.
                </p>
                <p className="text-center">
                  We have our own office and team in Arusha. Our team consists of locals and expats that love the country and know much about the culture. This enables us to arrange and oversee your entire journey from start to finish.
                </p>
             
                <p className="text-slate-800 font-semibold text-center mt-4">
                  We guarantee the best prices and quality for your Tanzania vacation. See you soon in Tanzania!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TanzaniaVacation;