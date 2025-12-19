// components/KilimanjaroPackages.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { mockPackages } from "@/lib/mockData";

const KilimanjaroPackages = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Filter only Kilimanjaro climbs
  const kilimanjaroRoutes = mockPackages
    .filter(pkg => pkg.Mount === "Kilimanjaro")
    .map(pkg => ({
      id: pkg.id,
      title: pkg.name.split(" ")[0] === "Private" ? "PRIVATE CLIMB" : 
             pkg.name.includes("Machame") ? "MACHAME ROUTE" :
             pkg.name.includes("Marangu") ? "MARANGU ROUTE" :
             pkg.name.includes("Lemosho") ? "LEMOSHO ROUTE" :
             pkg.name.includes("Rongai") ? "RONGAI ROUTE" :
             pkg.name.includes("Northern Circuit") ? "NORTHERN CIRCUIT" :
             pkg.name.includes("Custom") ? "PRIVATE CLIMB" : "KILIMANJARO CLIMB",
      subtitle: pkg.name.replace(/(7-Day |8-Day |9-Day |6-Day |\d+-Day )/, ""),
      duration: `${pkg.duration} Days`,
      difficulty: pkg.comfortLevel === "premium" ? "Medium-Hard" : 
                  pkg.name.includes("Northern") ? "Medium" :
                  pkg.name.includes("Private") ? "Custom" : "Medium",
      successRate: (() => {
        if (pkg.name.includes("Lemosho") || pkg.name.includes("Northern")) return "90-95%";
        if (pkg.name.includes("Machame")) return "85%";
        if (pkg.name.includes("Rongai")) return "80%";
        if (pkg.name.includes("Marangu")) return "70%";
        return "90%";
      })(),
      price: `From $${pkg.price.toLocaleString()} USD`,
      image: pkg.image.trim(),
      description: pkg.shortDescription,
      highlights: pkg.highlights || [],
      groupSize: pkg.tourType === "private" ? "1-4 people" : "2-12 people",
    }));

  return (
    <section className="pb-20">
      <div className="relative text-center mb-16 py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#465b2d]/10 to-[#8B5A4A]/10" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            CLIMB <span className="text-white">KILIMANJARO</span>
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-80 font-semibold mb-4">
            Choose Your Route to the Roof of Africa
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#465b2d] to-[#8B5A4A] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed">
            Experience the adventure of a lifetime climbing Africa's highest peak with expert guides, proven safety records, and unforgettable memories guaranteed.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {kilimanjaroRoutes.map((route) => (
            <Link href={`/packages/${route.id}`} key={route.id} passHref>
              <div
                className="relative group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden cursor-pointer border border-gray-100"
                onMouseEnter={() => setHoveredCard(route.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col md:flex-row h-auto md:h-60 w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-md bg-white group transition-all duration-300 hover:shadow-lg">
                  {/* Image Section */}
                  <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
                    <img
                      src={route.image}
                      alt={route.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#465b2d] text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg">
                      {route.duration}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium backdrop-blur-sm">
                      {route.successRate} Success
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {route.title}
                        </h3>
                        <p className="text-[#465b2d] font-medium text-xs mt-1">
                          {route.subtitle}
                        </p>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                        {route.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {route.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="bg-gray-50 text-gray-700 px-2 py-1 rounded text-xs font-medium border border-gray-200"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div>
                        <div className="text-base font-bold text-[#465b2d]">
                          {route.price}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {route.groupSize}
                        </div>
                      </div>
                      <div className="transform transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
                        <div className="w-8 h-8 bg-[#465b2d] rounded-full flex items-center justify-center hover:bg-[#3a4a24] transition-colors duration-300 shadow-md">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#465b2d]/30 rounded-xl transition-all duration-500 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KilimanjaroPackages;