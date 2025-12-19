// components/ZanzibarBeachesSimple.js
"use client";

import { useState } from 'react';

const ZanzibarBeachesSimple = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'north', label: 'North Coast' },
    { id: 'east', label: 'East Coast' },
    { id: 'southeast', label: 'South-East' },
    { id: 'southwest', label: 'South-West' }
  ];

  const content = {
    overview: {
      title: "Zanzibar Beaches",
      description: "Zanzibar offers the world's most beautiful beaches. Soft white sandy beaches surrounded by colourful coral reefs and the crystal clear waters of the Indian Ocean. Zanzibar island has about 25 beaches, sprinkled with fishing villages.",
      question: "Should you stay north or rather choose the south or east coast of Zanzibar?",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    north: {
      title: "North Coast",
      description: "Zanzibar's best beaches are on the north and east coast. Nungwi and Kendwa are popular beaches with no tide issues. Vibrant atmosphere with restaurants, bars and accommodation. Perfect for those who want convenience and activities.",
      villages: "Uroa, Pongwe, Kiwengwa, Nungwi, Kendwa",
      image: "https://uroadventure.com/wp-content/uploads/2020/03/kendwa-north-coast-zanzibar-1024x392.jpg"
    },
    east: {
      title: "East Coast",
      description: "Most idyllic beaches with beautiful coral reef for snorkeling and diving. Abundance of marine life including sea horses, turtles and tropical fish. Beaches are tidal - perfect for walking during low tide. Great for wind and kite surfing.",
      highlight: "Matemwe beach is the longest and most beautiful",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    southeast: {
      title: "South-East Coast",
      description: "Long stretch of soft sandy beaches, best for sailing and water sports. Steady winds perfect for kite and windsurfing. Traditional wooden sailboat (dhow) sailing and dolphin swimming at Kizimkazi.",
      villages: "Jambiani, Paje, Bwejuu - timeless fishing villages with friendly people",
      image: "https://portfoliocollection.com/wp-content/uploads/2019/10/south-east-coast-zanzibar.jpg"
    },
    southwest: {
      title: "South-West Coast",
      description: "Remote beaches with fewer lodges and gentle tides. Home to Stone Town, the cultural and historical centre. Menia Bay Conservation Area offers spectacular underwater world for divers.",
      highlight: "Less crowded beaches with cultural heritage",
      image: "https://blog.tanzaniaodyssey.com/wp-content/uploads/2013/03/Zanzibar-Beach.jpg"
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Zanzibar Beaches
          </h1>
          <div className="w-16 h-0.5 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Discover 25+ beautiful beaches across the island</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-gray-50 rounded-lg p-4 border">
              <h3 className="font-bold text-gray-900 mb-5">Beach Regions</h3>
              <div className="space-y-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded transition-colors ${
                      activeSection === section.id
                        ? 'bg-[#465b2d] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg">
              
              {/* Main Image */}
              <div className="mb-4">
                <img
                  src={content[activeSection].image}
                  alt={content[activeSection].title}
                  className="w-full h-60 object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {content[activeSection].title}
                </h2>
                
                <p className="text-gray-700 leading-relaxed">
                  {content[activeSection].description}
                </p>

                {content[activeSection].villages && (
                  <div className="bg-green-50 p-4 rounded">
                    <p className="text-gray-700">
                      <strong>Villages:</strong> {content[activeSection].villages}
                    </p>
                  </div>
                )}

                {content[activeSection].highlight && (
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="text-gray-700">
                      <strong>Highlight:</strong> {content[activeSection].highlight}
                    </p>
                  </div>
                )}

                {content[activeSection].question && (
                  <div className="bg-yellow-50 p-4 rounded">
                    <p className="text-gray-700 font-semibold">
                      {content[activeSection].question}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Simple CTA */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZanzibarBeachesSimple;