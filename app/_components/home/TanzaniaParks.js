// components/ParksLayout.js
"use client"
import { useState } from 'react';

export default function ParksLayout() {
  const [selectedPark, setSelectedPark] = useState(0);

  const parks = [
    {
      name: "Serengeti National Park",
      rating: "4.8 /5",
      reviews: "1,988 Reviews",
      rank: "#1 of 8 Major Safari Parks",
      description: "Serengeti National Park is one of Africa's top wildlife destinations. The park offers breathtaking landscapes and abundant wildlife viewing opportunities throughout the year.",
      image: "https://www.serengeti.com/assets/img/bush-walk-serengeti-national-park.jpg",
      rates: "$216 to $639 pp/day",
      bestTime: "June to October, January",
      highSeason: "July to March",
      safaris: "8,263 Serengeti Safaris",
      operators: "45 Safari Operators",
      highlights: ["Great Migration", "Big Five", "Balloon Safaris"]
    },
    {
      name: "Tarangire National Park",
      rating: "4.6 /5",
      reviews: "856 Reviews",
      rank: "#2 of 8 Major Safari Parks",
      description: "Known for its large elephant herds and ancient baobab trees, Tarangire offers a unique safari experience with diverse wildlife and stunning landscapes.",
      image: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRxNvlaHP2zVdHynvGEmpZcl8tgka3oLsU466OQT8ogAjzBrgA0Yr25yeQ2GPCabD8W",
      rates: "$180 to $520 pp/day",
      bestTime: "June to October",
      highSeason: "July to October",
      safaris: "2,145 Tarangire Safaris",
      operators: "32 Safari Operators",
      highlights: ["Elephant Herds", "Baobab Trees", "Bird Watching"]
    },
    {
      name: "Arusha National Park",
      rating: "4.3 /5",
      reviews: "623 Reviews",
      rank: "#3 of 8 Major Safari Parks",
      description: "Features Mount Meru, diverse habitats, and rich birdlife. Perfect for day trips and hiking adventures near Arusha city.",
      image: "https://cheetahsafaris.com/wp-content/uploads/2024/03/arusha-national-park-day-trips-1-1.jpeg",
      rates: "$150 to $450 pp/day",
      bestTime: "June to February",
      highSeason: "December to February",
      safaris: "1,234 Arusha Safaris",
      operators: "28 Safari Operators",
      highlights: ["Mount Meru", "Hiking", "Birdlife"]
    },
    {
      name: "Gombe National Park",
      rating: "4.7 /5",
      reviews: "412 Reviews",
      rank: "#4 of 8 Major Safari Parks",
      description: "Famous for chimpanzee tracking and Jane Goodall's research. A unique primate-focused safari experience on Lake Tanganyika.",
        image: "https://janegoodall.ca/wp-content/uploads/2022/02/Gombe-archival-1.jpg",
      rates: "$280 to $720 pp/day",
      bestTime: "May to October",
      highSeason: "July to September",
      safaris: "856 Gombe Safaris",
      operators: "18 Safari Operators",
      highlights: ["Chimpanzees", "Research Center", "Lake Views"]
    },
    {
      name: "Ruaha National Park",
      rating: "4.5 /5",
      reviews: "389 Reviews",
      rank: "#5 of 8 Major Safari Parks",
      description: "Tanzania's largest national park with diverse ecosystems and excellent predator viewing opportunities in a remote setting.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Purple_On_The_River.jpg",
      rates: "$220 to $580 pp/day",
      bestTime: "May to December",
      highSeason: "June to October",
      safaris: "967 Ruaha Safaris",
      operators: "24 Safari Operators",
      highlights: ["Largest Park", "Predators", "Remote Wilderness"]
    },
    {
      name: "Mahale Mountains",
      rating: "4.9 /5",
      reviews: "298 Reviews",
      rank: "#6 of 8 Major Safari Parks",
      description: "Home to chimpanzees and located on the shores of Lake Tanganyika. Combines primate tracking with beach relaxation.",
      image: "https://www.tanzania-experience.com/wp-content/uploads/2023/09/mahale-mountains-mbali-mbali.jpg",
      rates: "$320 to $850 pp/day",
      bestTime: "May to October",
      highSeason: "July to September",
      safaris: "512 Mahale Safaris",
      operators: "15 Safari Operators",
      highlights: ["Chimpanzees", "Lake Tanganyika", "Beach"]
    },
    {
      name: "Lake Manyara",
      rating: "4.2 /5",
      reviews: "745 Reviews",
      rank: "#7 of 8 Major Safari Parks",
      description: "Known for tree-climbing lions and diverse bird species. A compact park perfect for half-day safaris.",
      image: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTYvQgtJpIliNYFoP4UFUJKNeYBuXA1B_uId7RLuMo5_IiNg3mATmSugNwjLtnStJfW",
      rates: "$160 to $480 pp/day",
      bestTime: "June to September",
      highSeason: "July to October",
      safaris: "1,876 Manyara Safaris",
      operators: "31 Safari Operators",
      highlights: ["Tree-climbing Lions", "Bird Species", "Compact Size"]
    },
    {
      name: "Mkomazi National Park",
      rating: "4.1 /5",
      reviews: "267 Reviews",
      rank: "#8 of 8 Major Safari Parks",
      description: "A vital sanctuary for black rhinos and African wild dogs. Offers off-the-beaten-path safari experiences.",
      image: "https://www.safaris-uganda.com/wp-content/uploads/2023/03/Mkomazi-National-Park-1170x450.jpg",
      rates: "$140 to $420 pp/day",
      bestTime: "June to October",
      highSeason: "August to October",
      safaris: "423 Mkomazi Safaris",
      operators: "12 Safari Operators",
      highlights: ["Black Rhinos", "Wild Dogs", "Off-beaten Path"]
    }
  ];

  return (
    <div className=" bg-gray-50 py-10 ">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-[#465b2d]">Tanzania National Parks</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-2">
          {/* Left Sidebar - Minimal Parks List */}
          <div className="lg:w-1/5">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 py-5">
              <h2 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Parks List</h2>
              
              {/* Minimal Parks List - Only Names */}
              <div className="space-y-1">
                {parks.map((park, index) => (
                  <div 
                    key={index}
                    className={`p-2 rounded cursor-pointer transition-all duration-150 text-sm ${
                      selectedPark === index 
                        ? 'bg-blue-50 text-[#465b2d] font-medium border-l-2 border-blue-500' 
                        : 'text-gray-600 hover:bg-gray-50 border-l-2 border-transparent'
                    }`}
                    onClick={() => setSelectedPark(index)}
                  >
                    {park.name}
                  </div>
                ))}
                <a href="/parks" className="flex items-center gap-2 border cursor-pointer  text-gray-600 text-sm px-1 py-2  rounded-md hover:bg-blue-50 hover:text-[#465b2d] transition-all duration-300">
  All 15 Parks & Reserves
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</a>
              </div>
            </div>
          </div>

          {/* Right Content - All Information on Background Image */}
          <div className="lg:w-4/5">
            <div className="rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Background Image with All Content Overlay */}
              <div 
  className=" bg-cover bg-center relative"
  style={{ backgroundImage: `url(${parks[selectedPark].image})` }}
>
  {/* Soft Dark Overlay for Readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50"></div>

              {/* <div 
                className="min-h-[70vh] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${parks[selectedPark].image})` }}
              > */}
                {/* Dark Overlay for Readability */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
                
                {/* All Content Container */}
                <div className="relative z-10 h-full p-4 lg:p-4 flex flex-col justify-between">
                  {/* Top Section - Header & Description */}
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="bg-[#465b2d] text-white px-2 py-1 rounded-full text-sm font-semibold">
                        {parks[selectedPark].rating}
                      </span>
                      <span className="text-white/90 text-sm">{parks[selectedPark].reviews}</span>
                      <span className="bg-transparent backdrop-blur-xl border border-white/30 shadow-lg px-3 py-1 rounded-full text-sm text-white">
                      {parks[selectedPark].rank}
                         </span>
                    </div>
                    
                    <h1 className="text-3xl lg:text-4xl font-bold text-white underline ">
                      {parks[selectedPark].name}
                    </h1>
                    
                    <p className="text-white/90 text-base mt-2 lg:text-lg leading-relaxed max-w-3xl mb-6">
                      {parks[selectedPark].description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
                        Park Highlights
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {parks[selectedPark].highlights.map((highlight, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full border border-white/30"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section - Info Cards & Action */}
                  <div>
                    {/* Information Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-2">
                        <div className="bg-white/5  border border-white/10 rounded-lg p-3 shadow-md">

                      {/* <div className="bg-white bg-opacity-95 rounded-lg p-3 shadow-md"> */}
                        <h4 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">
                          Daily Rates
                        </h4>
                        <p className="text-base font-bold text-white">{parks[selectedPark].rates}</p>
                      </div>
                   <div className="bg-white/5  border border-white/10 rounded-lg p-3 shadow-md">

                        <h4 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">
                          Best Time
                        </h4>
                        <p className="text-sm font-medium text-white">{parks[selectedPark].bestTime}</p>
                      </div>
                                            <div className="bg-white/5  border border-white/10 rounded-lg p-3 shadow-md">

                       <h4 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">
                          High Season
                        </h4>
                        <p className="text-sm font-medium text-white">{parks[selectedPark].highSeason}</p>
                      </div>
                                         <div className="bg-white/5  border border-white/10 rounded-lg p-3 shadow-md">

                        <h4 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">
                          Operators
                        </h4>
                        <p className="text-sm font-medium text-white">{parks[selectedPark].operators}</p>
                      </div>
                    </div>

                    {/* Action Button & Additional Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/30">
                      <div className="text-white text-sm">
                        <span className="font-semibold">{parks[selectedPark].safaris}</span>
                        <span className="text-white/80 ml-1">available for booking</span>
                      </div>
                      
                      <button className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/20  hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Book Safari Experience
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}