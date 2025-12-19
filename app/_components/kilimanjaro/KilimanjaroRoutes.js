// components/KilimanjaroRoutes.js
"use client"
import { useState } from 'react';

const KilimanjaroRoutes = () => {
  const [activeRoute, setActiveRoute] = useState('machame');

  const routes = {
    machame: {
      name: "Machame Route",
      nickname: "Whiskey Route",
      description: "Also known as the 'Whiskey Route', Kilimanjaro's Machame Route is one the most popular climbing routes in Tanzania. Better yet, this route has a fantastically high success rate. The route has a gradual ascend which gives your body more time to adjust to the altitude. The trail circles around the mountain, offering up spectacular views and a wide variety of landscapes.",
      duration: "6-7 days",
      difficulty: "Medium",
      successRate: "High",
      pros: [
        "Less expensive than most of the others, due to its shorter route and easy access",
        "High success rate due to good acclimatization profile",
        "Spectacular views and varied landscapes",
        "Gradual ascent helps with altitude adjustment"
      ],
      cons: [
        "This route can be quite busy, especially during the peak season",
        "Last ascent to Stella Point is challenging",
        "Requires at least a basic level of fitness"
      ]
    },
    marangu: {
      name: "Marangu Route",
      nickname: "Coca-Cola Route",
      description: "This route, nicknamed the 'Coca-Cola' route, has a reputation for being one of the easiest paths on the mountain. Though it is certainly the shortest route on the mountain, this does not necessarily mean it is the easiest! As this is a shorter route, your body has less time to acclimatize properly, increasing the chances of fatigue and ultimately decreasing the chances of reaching the summit on this route.",
      duration: "5-6 days",
      difficulty: "Medium",
      successRate: "Medium",
      pros: [
        "The Marangu Route is one of the cheapest and quickest Mount Kilimanjaro routes",
        "This route also offers hut accommodation in dorm rooms – a benefit for those looking to stay away from camping!",
        "Best for those on a budget",
        "Shorter duration than other routes"
      ],
      cons: [
        "This route can be quite busy, especially during the peak season",
        "As you will do the same trail for your descent as you did for your ascent, you get to see less of the spectacular scenery!",
        "Lower success rate due to poor acclimatization",
        "Less privacy in hut accommodations"
      ]
    },
    lemosho: {
      name: "Lemosho Route",
      nickname: "Scenic Route",
      description: "The Lemosho Route is a beautiful and unique route, known for its breathtaking views. In contrary to other Mount Kilimanjaro climbing routes, it starts on the western side of Kilimanjaro. Because of this, the Lemosho Route is less crowded with climbers and offers a much more secluded hiking experience. Better yet, the Lemosho trail is completely unspoiled, making for a breathtakingly beautiful adventure up to the famous Shira Plateau.",
      duration: "7-8 days",
      difficulty: "High",
      successRate: "Very High",
      pros: [
        "The Lemosho route gives climbers plenty of time to acclimatize properly",
        "The views are spectacular and the success rates to reach the summit are high",
        "This is one of the most beautiful and complete routes to climb Kilimanjaro",
        "Less crowded with climbers and offers secluded hiking experience"
      ],
      cons: [
        "Lemosho is undoubtedly a more expensive route – it's a long trail and requires extra transport to the other side of the mountain",
        "Requires a decent level of fitness!",
        "Longer duration than other routes"
      ]
    }
  };

  const currentRoute = routes[activeRoute];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Kilimanjaro Climbing Routes
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            There are seven different Kilimanjaro climbing routes to choose from, each with various pros and cons 
            to suit the capabilities of the hiker. They all differ in length, difficulty, scenery, traffic, 
            accommodation and a myriad of varying factors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Route Selection Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Choose Your Route
              </h3>
              
              <div className="space-y-3">
                {Object.keys(routes).map((routeKey) => (
                  <button
                    key={routeKey}
                    onClick={() => setActiveRoute(routeKey)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeRoute === routeKey 
                        ? 'bg-[#465b2d] text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="font-semibold">{routes[routeKey].name}</div>
                    <div className={`text-sm ${activeRoute === routeKey ? 'text-green-100' : 'text-gray-500'}`}>
                      {routes[routeKey].nickname}
                    </div>
                  </button>
                ))}
              </div>

              {/* Expert Note */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-bold text-[#465b2d] mb-2 text-sm">Expert Recommendation</h4>
                <p className="text-xs text-gray-700">
                  The Asiliexplorer team are experts at defining the best route for your journey. 
                  We take time to listen to your group's specific needs and requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Route Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              
              {/* Route Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{currentRoute.name}</h2>
                    <p className="text-[#465b2d] font-medium">{currentRoute.nickname}</p>
                  </div>
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{currentRoute.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{currentRoute.difficulty}</div>
                      <div className="text-xs text-gray-500">Difficulty</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{currentRoute.successRate}</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {currentRoute.description}
                </p>
              </div>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Pros */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Advantages
                  </h3>
                  <ul className="space-y-2">
                    {currentRoute.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Considerations
                  </h3>
                  <ul className="space-y-2">
                    {currentRoute.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Additional Route Information */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Route Specifics</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  {activeRoute === 'machame' && (
                    <>
                      <p><strong>Duration Options:</strong> 6 or 7 days (7 days recommended for higher success rate)</p>
                      <p><strong>Key Feature:</strong> Gradual ascent through rainforest to Shira Plateau</p>
                      <p><strong>Challenge:</strong> Last ascent to Stella Point requires basic fitness</p>
                    </>
                  )}
                  {activeRoute === 'marangu' && (
                    <>
                      <p><strong>Accommodation:</strong> Hut accommodation in dorm rooms (no camping)</p>
                      <p><strong>Trail:</strong> Same route for ascent and descent</p>
                      <p><strong>Consideration:</strong> Shorter duration means less acclimatization time</p>
                    </>
                  )}
                  {activeRoute === 'lemosho' && (
                    <>
                      <p><strong>Starting Point:</strong> Western side of Kilimanjaro</p>
                      <p><strong>Experience:</strong> Less crowded, more secluded hiking</p>
                      <p><strong>Route Connection:</strong> Joins Machame Route at Lava Tower after few days</p>
                    </>
                  )}
                </div>
              </div>

              {/* Popular Routes Note */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-700">
                  <strong>Most Popular Routes:</strong> The Machame Route, Marangu Route, and Lemosho Route are 
                  the most popular choices with our clients, each offering unique experiences suited to different 
                  preferences and capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KilimanjaroRoutes;