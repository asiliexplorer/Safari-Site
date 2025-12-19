// components/ZanzibarLodgesArrow.js
"use client";
import { useState } from "react";

const ZanzibarLodgesArrow = () => {
  const lodges = [
    {
      id: 1,
      name: "Legendary Zanzibar Beach Resort",
      image:"https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-e4b7f67/tanzania-specialist.com/wp-content/uploads/2025/08/IM_TZ_ZNZ_Legendary-Zanzibar_Pool-1960x800.jpg"
    },
    {
      id: 2,
      name: "Qambani Luxury Resort",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Fun Beach Resort",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Lux* Marijani",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Zanzibar Lodges
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the island's top lodges—beloved for stunning locations, warm hospitality, and unforgettable sunsets.
          </p>
        </div>

        {/* Wider Cards with Arrow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {lodges.map((lodge) => (
            <div
              key={lodge.id}
              className="relative group h-72 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${lodge.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                  <h3 className="text-xl font-semibold mb-2">
                    {lodge.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">Accommodation</span>
                    
                    {/* Animated Arrow */}
                    {/* <div className="transform transition-all duration-500 group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Top Right Arrow on Hover */}
              <div className="absolute top-6 right-6 transform transition-all duration-500 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors group">
            Find Your Perfect Lodge
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ZanzibarLodgesArrow;