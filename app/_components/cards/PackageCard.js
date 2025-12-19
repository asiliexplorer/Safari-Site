// components/cards/PackageCard.js
"use client";
import Link from "next/link";
import { FaStar, FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function PackageCard({ pkg }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
src={pkg.image || 'https://via.placeholder.com/400x300?text=No+Image'}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-10"
        >
          <FaHeart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
          <h3 className="text-white text-xl font-bold">{pkg.name}</h3>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-4">
          <span className="text-2xl font-bold text-[#465b2d]">${Number(pkg.price)?.toLocaleString()}</span>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">{pkg.tour_type || 'Safari'}</span> • {pkg.comfort_level || 'Standard'}
          </p>
        </div>
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(Number(pkg.rating) || 5) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
<Link
  href={`/packages/${pkg.slug}`} // ✅ Use slug, not id
  className="bg-[#465b2d] text-white text-xs font-semibold py-2 px-4 rounded-lg hover:bg-[#3a4a24]"
>
  VIEW
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}