// components/TanzaniaToursSlider.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const TanzaniaToursSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch published & popular packages from API
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch("/api/packages?limit=12&status=published&popular=true");
        if (!res.ok) throw new Error("Failed to fetch packages");
        const data = await res.json();
        setPackages(data.packages || []);
      } catch (err) {
        console.error("Error fetching packages:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const nextSlide = () => {
    if (packages.length <= visibleCards) return;
    setCurrentSlide((prev) => (prev + 1) % packages.length);
  };

  const prevSlide = () => {
    if (packages.length <= visibleCards) return;
    setCurrentSlide((prev) => (prev - 1 + packages.length) % packages.length);
  };

  // Auto-slide only if more packages than visible cards
  useEffect(() => {
    if (packages.length <= visibleCards) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [packages.length, visibleCards]);

  // Responsive visible cards
  useEffect(() => {
    const getVisibleCards = () => {
      if (typeof window === "undefined") return 3;
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    const handleResize = () => setVisibleCards(getVisibleCards());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisiblePackages = () => {
    if (packages.length <= visibleCards) return packages;
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentSlide + i) % packages.length;
      visible.push(packages[index]);
    }
    return visible;
  };

  const StarRating = ({ rating }) => (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm text-gray-600">({rating})</span>
    </div>
  );

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-25 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 w-64 bg-gray-200 rounded mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 h-96"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || packages.length === 0) {
    return null; // or show a "No popular tours" message
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-25 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header with View All */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-4">
          <div className="mb-6 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-4">
              <span className="w-2 h-2 bg-[#465b2d] rounded-full mr-2"></span>
              <span className="text-sm font-medium text-[#465b2d]">POPULAR TOURS</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Tanzania <span className="text-[#465b2d]">Safari</span> Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Experience the ultimate African adventure with our carefully curated safari packages
            </p>
          </div>
          <a
            href="/packages"
            className="group flex items-center text-[#465b2d] font-semibold text-lg hover:text-[#3a4a24] transition-colors"
          >
            View All Packages
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="relative">
          {/* Navigation Arrows (only show if more packages than visible) */}
          {packages.length > visibleCards && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 w-14 h-14 bg-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 w-14 h-14 bg-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {getVisiblePackages().map((tour) => (
              <Link href={`/packages/${tour.id}`} key={tour.id} passHref>
                <div className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-3">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={tour.image || "/placeholder.png"}
                      alt={tour.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <div className="bg-white/95 backdrop-blur-sm px-2 py-1 rounded-2xl shadow-lg">
                        <span className="font-bold text-gray-900 text-md">{tour.duration} Days</span>
                      </div>
                      {tour.tour_type === "private" && (
                        <div className="bg-gradient-to-r from-[#465b2d] to-[#3a4a24] text-white px-2 py-1 rounded-2xl shadow-lg">
                          <span className="font-semibold text-sm">PRIVATE TOUR</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-2">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2">{tour.name}</h3>

                    <div className="flex flex-wrap gap-1 text-gray-600 text-sm mb-6">
                      {(Array.isArray(tour.destinations) ? tour.destinations : []).map((location, i, arr) => (
                        <span key={i} className="flex items-center px-1 py-1">
                          {location}
                          {i < arr.length - 1 && <span className="ml-2 text-gray-400">•</span>}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                      <div>
                        <span className="text-xl font-bold text-[#465b2d]">$ {tour.price}</span>
                        <span className="block text-sm text-gray-500">per person</span>
                      </div>
                      <button className="group relative bg-gradient-to-r from-[#465b2d] to-[#3a4a24] text-white px-4 py-2 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                        <span className="relative z-10">Read More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Dots Indicator */}
          {packages.length > visibleCards && (
            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: Math.ceil(packages.length / visibleCards) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index * visibleCards)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    Math.floor(currentSlide / visibleCards) === index
                      ? "bg-gradient-to-r from-[#465b2d] to-[#3a4a24] w-12"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <style jsx>{`
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TanzaniaToursSlider;