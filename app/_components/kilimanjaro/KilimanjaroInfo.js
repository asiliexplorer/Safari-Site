// components/KilimanjaroInfo.js
"use client"
import { useState } from 'react';

const KilimanjaroInfo = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: "https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-e4b7f67/tanzania-specialist.com/wp-content/uploads/2023/11/00.kilimanjaro_tanzania.jpg",
      title: "Machame Route - The Whiskey Route"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Lemosho Route - Scenic Beauty"
    },
    {
      url: "https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-e4b7f67/tanzania-specialist.com/wp-content/uploads/2023/08/19-Kilimanjaro-marangu-1024x683.jpg",
      title: "Marangu Route - Hut Accommodations"
    },
    {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Summit View - Uhuru Peak"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-600 leading-relaxed">
                Kilimanjaro National Park is a popular destination for travellers who are up for a challenge. 
                Here we delve into everything you need to know about your Mount Kilimanjaro trek, from our best 
                recommended Kilimanjaro itineraries to how to the practicalities of preparing for the adventure of the lifetime.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Kilimanjaro itineraries
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Once you've made the decision to climb Mount Kilimanjaro, the next step is to choose the best route for you. 
                There are a total of seven main Mount Kilimanjaro routes which lead to the summit. One route begins on the 
                Northern side of the mountain and the remaining six begin on the Southern side. Tanzania Specialist offers 
                climbing Kilimanjaro itineraries for all the different Kilimanjaro Routes. The main question is which route should you choose?
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Kilimanjaro climbling routes: overview
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#465b2d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600"><strong>Best for beginners</strong> – Marangu or Machame Routes</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#465b2d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600"><strong>Spectacular scenery</strong> – Lemosho or Machame Routes</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#465b2d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600"><strong>Beginners with a budget</strong> – Marangu Route</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#465b2d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600"><strong>For moderate hikers</strong> – Machame or Lemosho Routes</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#465b2d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600"><strong>Expert hikers</strong> – Umbwe Route</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#465b2d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600"><strong>Most popular Mount Kilimanjaro route</strong> – Machame Route</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#465b2d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600"><strong>Longest Mt Kilimanjaro route</strong> – Northern circuit</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#465b2d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600"><strong>During rainy season</strong> – Rongai Route</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#465b2d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600"><strong>Highest success rate?</strong> – 8 days Lemosho Route or 9 days Northern Circuit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Gallery */}
          <div className="space-y-6">
            {/* Main Featured Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium">
                  {images[selectedImage].title}
                </p>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index ? 'border-[#465b2d]' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Quick Facts Box */}
            <div className="bg-gradient-to-br from-[#465b2d] to-[#3a4a24] rounded-lg p-6 text-white">
              <h4 className="font-bold text-lg mb-4">Quick Facts</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Elevation:</span>
                  <span className="font-semibold">19,341 ft</span>
                </div>
                <div className="flex justify-between">
                  <span>Success Rate:</span>
                  <span className="font-semibold">85-95%</span>
                </div>
                <div className="flex justify-between">
                  <span>Best Time:</span>
                  <span className="font-semibold">Jun-Oct</span>
                </div>
                <div className="flex justify-between">
                  <span>Routes:</span>
                  <span className="font-semibold">7 Main</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KilimanjaroInfo;