// components/TanzaniaWonders.js
"use client"
import { useState } from 'react';
import { mockPackages } from '@/lib/mockData';
import Link from 'next/link';

const TanzaniaWonders = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

 const packages = mockPackages

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            YOUR GUIDE TO TANZANIA'S WONDERS
          </h2>
          <p className="text-xl text-[#465b2d] font-semibold mb-4">
            YOUR DREAM TRIP, OUR EXPERTISE
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#465b2d] to-[#8B5A4A] mx-auto rounded-full"></div>
        </div>

        {/* Packages Grid - Wider cards with full background images */}
<div className="grid grid-cols-1 md:grid-cols-2 px-20 xl:grid-cols-3 gap-6">
  {packages.slice(0,9).map((pkg) => (
    <Link href={`/packages/${pkg.id}`} key={pkg.id} passHref>
    <div 
      key={pkg.id}
      className="group relative h-60 w-full rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setHoveredCard(pkg.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Background Image */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${pkg.image})` }}
      /> */}
      <div className="absolute inset-0 overflow-hidden">
  {/* Background Image */}
  <div
    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
    style={{ backgroundImage: `url(${pkg.image})` }}
  />

  {/* Subtle Bottom Dark Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
</div>
      
      {/* Shine Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-2 text-white">
        
        {/* Top Section - Price & Duration */}
        <div className="flex justify-between items-start">
          {/* Duration */}
          <div className="bg-[#465b2d] text-white px-3 py-2 rounded-lg text-xs font-semibold shadow-lg">
            {pkg.duration} Days
          </div>

          {/* Price */}
          <div className="bg-white/95 text-gray-900 px-2 py-1 rounded-lg font-bold text-sm shadow-lg">
            $ {pkg.price} pp
          </div>
        </div>

        {/* Bottom Section - Content */}
        <div className="space-y-3">
          {/* Title & Description */}
          <div className="transform transition-all duration-300 group-hover:translate-y-[-8px]">
            <h3 className="text-xl font-bold leading-tight mb-1">
              {pkg.name}
            </h3>
            
            <p className="text-gray-200 text-md leading-relaxed  line-clamp-2">
              {pkg.shortDescription}
            </p>
          </div>
        </div>

        {/* Hover Arrow Indicator */}
        <div className="absolute bottom-5 right-5 transform transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
          <div className="w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all duration-300">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Gradient Overlay for Better Readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" /> */}

      {/* Glowing Border Effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500 pointer-events-none" />
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-xl shadow-lg group-hover:shadow-[0_0_30px_rgba(70,91,45,0.3)] transition-shadow duration-500" />
    </div>
    </Link>
  ))}
</div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
};

export default TanzaniaWonders;