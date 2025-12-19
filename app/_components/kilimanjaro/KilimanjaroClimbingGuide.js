// components/KilimanjaroClimbingGuide.js
"use client"
import { useState } from 'react';

const KilimanjaroClimbingGuide = () => {
  const [activeSection, setActiveSection] = useState('best-time');

  const sections = {
    'best-time': {
      title: 'Best Time to Climb',
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      content: `
        <p class="text-gray-700 leading-relaxed mb-6">
          Climbing Mount Kilimanjaro is a year-round experience. At Tanzania Specialist, we provide expert advice 
          on the best time for you to plan your Kilimanjaro trip based on your individual requirements.
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">December - March</h3>
            <p class="text-gray-700">
              The warmest months with clearer skies and less chance of snow on the trail. February is the best month 
              since the temperature is high and the chances of rainfall are low.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">June - October</h3>
            <p class="text-gray-700">
              The temperatures on the mountain are noticeably colder and the trails are busier, but conditions are excellent for climbing.
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">Rainy Season Note</h4>
            <p class="text-gray-700 text-sm">
              During the rainy season, conditions can be wet and slippery with limited visibility. 
              Some experienced climbers prefer this time for the lack of crowds.
            </p>
          </div>
        </div>
      `
    },
    'preparation': {
      title: 'Preparation Guide',
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      content: `
        <p class="text-gray-700 leading-relaxed mb-6">
          Even though there is a route for every level on Mount Kilimanjaro, it's important to be able to cope with 
          around 6-7 hours of walking every single day. This can be gruelling, so preparation is essential.
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Physical Training</h3>
            <p class="text-gray-700 mb-4">
              During an average climbing day, you will walk 6-7 hours per day. In the months leading up to your trip, 
              head out on long hikes every few weeks, gradually building up your stamina.
            </p>
            <ul class="text-gray-700 space-y-2">
              <li class="flex items-start">
                <span class="text-green-600 mr-2">•</span>
                Start with long hikes every few weeks
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-2">•</span>
                Gradually build up to 6-7 hours of walking
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-2">•</span>
                Practice full weekend hiking sessions
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Additional Exercises</h3>
            <p class="text-gray-700">
              Other exercises that can help include yoga and breathing classes. Stretching out your body and mind 
              makes your muscles stronger and less likely to let you down when you need them most.
            </p>
          </div>
        </div>
      `
    },
    'costs': {
      title: 'Climbing Costs',
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      content: `
        <p class="text-gray-700 leading-relaxed mb-6">
          The costs for climbing Kilimanjaro depend on the route you choose. We work with our clients to create 
          custom Kilimanjaro itineraries for a wide range of budgets.
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Additional Expenses</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul class="text-gray-700 space-y-2">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  Walking poles
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  Hiking boots
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  Waterproof daypack
                </li>
              </ul>
              <ul class="text-gray-700 space-y-2">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  Travel insurance
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  Tipping guides and porters
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  Breathable clothing
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <p class="text-gray-700 text-sm">
              The porters and guides work very hard – often for little money. Tipping on Kilimanjaro is standard 
              and helps support the local community.
            </p>
          </div>
        </div>
      `
    },
    'ethical-climbing': {
      title: 'Ethical Climbing',
      image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      content: `
        <div class="bg-green-900 text-white p-6 rounded-lg mb-6">
          <h3 class="text-xl font-semibold mb-2">KRTO Certification</h3>
          <p class="text-green-100">
            We're proud to announce that Tanzania Specialist is now officially certified by the 
            Kilimanjaro Responsible Trekking Organization (KRTO).
          </p>
        </div>

        <p class="text-gray-700 leading-relaxed mb-6">
          This certification underscores our commitment to fair porter treatment, ethical practices, 
          and environmental responsibility. When you climb with us, you're contributing to a sustainable 
          future for Kilimanjaro and its communities.
        </p>

        <div class="space-y-3 text-gray-700">
          <div class="flex items-start">
            <span class="text-green-600 mr-2">•</span>
            <span>Fair wages and treatment for all porters and guides</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-600 mr-2">•</span>
            <span>Environmental conservation practices</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-600 mr-2">•</span>
            <span>Support for local communities</span>
          </div>
        </div>
      `
    },
    'reviews': {
      title: 'Climber Reviews',
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      content: `
        <div class="space-y-8">
          <div>
            <blockquote class="text-gray-700 italic border-l-4 border-green-600 pl-4 py-2 mb-3">
              "Climbing Kilimanjaro was so beautiful and the guides were very professional and helpful. 
              We were pleasantly surprised how good the food was they prepared. The breathtaking views 
              and reaching the summit was an incredible and memorable experience."
            </blockquote>
            <cite class="text-gray-900 font-semibold">– Connie & Jaap</cite>
          </div>

          <div>
            <blockquote class="text-gray-700 italic border-l-4 border-green-600 pl-4 py-2 mb-3">
              "My wife and I climb the Kilimanjaro on the Machame Route. We prepared ourselves properly 
              with physical training. The porters carried our heavy backpacks and were so friendly. 
              To conquer the roof of Africa is amazing and truly breathtaking!"
            </blockquote>
            <cite class="text-gray-900 font-semibold">– Gijs & Cinamon</cite>
          </div>
        </div>
      `
    }
  };

  const currentSection = sections[activeSection];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Kilimanjaro Climbing Guide
          </h1>
          <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Minimal Navigation */}
          <div className="lg:w-1/4">
            <div className="border border-gray-200 rounded-lg p-6 sticky top-8">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                Sections
              </h3>
              
              <nav className="space-y-1">
                {Object.keys(sections).map((sectionKey) => (
                  <button
                    key={sectionKey}
                    onClick={() => setActiveSection(sectionKey)}
                    className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      activeSection === sectionKey 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {sections[sectionKey].title}
                  </button>
                ))}
              </nav>

              {/* Simple Contact */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="w-full bg-green-600 text-white py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors">
                  Contact Experts
                </button>
              </div>
            </div>
          </div>

          {/* Clean Content Area */}
          <div className="lg:w-3/4">
            <div className="mb-8">
              <img
                src={currentSection.image}
                alt={currentSection.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-light text-gray-900 mb-6">
              {currentSection.title}
            </h2>

            <div 
              className="prose prose-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: currentSection.content }}
            />

            {/* Simple Section Navigation */}
            <div className="mt-12 flex justify-between border-t border-gray-200 pt-6">
              <button 
                onClick={() => {
                  const keys = Object.keys(sections);
                  const currentIndex = keys.indexOf(activeSection);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : keys.length - 1;
                  setActiveSection(keys[prevIndex]);
                }}
                className="text-green-600 hover:text-green-700 text-sm font-medium"
              >
                ← Previous
              </button>
              
              <button 
                onClick={() => {
                  const keys = Object.keys(sections);
                  const currentIndex = keys.indexOf(activeSection);
                  const nextIndex = currentIndex < keys.length - 1 ? currentIndex + 1 : 0;
                  setActiveSection(keys[nextIndex]);
                }}
                className="text-green-600 hover:text-green-700 text-sm font-medium"
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Footer Resources */}
        <div className="mt-16 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            Need personalized advice?{" "}
            <button className="text-green-600 hover:text-green-700 font-medium">
              Contact our climbing experts
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default KilimanjaroClimbingGuide;