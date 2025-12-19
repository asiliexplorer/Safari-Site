// pages/destinations/tanzania/index.js
"use client"
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { mockParksData } from '../../lib/mockData';
import { 
  FaStar, FaHeart, FaMapMarkerAlt, FaChevronRight, FaCheck, 
  FaUser, FaCalendar, FaMap, FaGlobeAfrica, FaUmbrella, 
  FaShieldAlt, FaStethoscope, FaRoute, FaUsers, FaEye, 
  FaBinoculars, FaPlane, FaCar, FaPaw, FaSun, FaCloudRain,
  FaTemperatureHigh, FaCompass, FaFirstAid, FaExclamationTriangle,
  FaHotel, FaTree, FaMountain, FaWater
} from 'react-icons/fa';

const TanzaniaDetailsPage = () => {
  const tanzania = mockParksData.tanzania;
  const [activeTab, setActiveTab] = useState('Parks & Reserves');
  const [isLiked, setIsLiked] = useState(false);

  const renderStars = (rating, size = 'md') => {
    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };

    return (
      <div className={`flex items-center ${sizeClasses[size]}`}>
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`${
              i < Math.floor(rating) 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            } mx-0.5`}
          />
        ))}
        <span className="ml-2 font-semibold text-gray-700">
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  const HeroSection = () => (
    <div className="relative bg-gray-900">
      <div className="h-96 bg-cover bg-center"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
           }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🇹🇿</span>
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                Premium Safari Destination
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              TANZANIA
              <span className="block text-2xl text-yellow-400 mt-2">Wildlife Safari</span>
            </h1>
            
            <p className="text-lg text-gray-200 max-w-2xl mb-6">
              Experience the ultimate African adventure where nature's greatest spectacles unfold.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                {renderStars(tanzania.overallRating, 'lg')}
              </div>
              <div className="text-gray-200">
                <span className="font-semibold">{tanzania.totalReviews.toLocaleString()}</span> Verified Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SidebarNavigation = () => (
    <div className="bg-white rounded-lg border border-gray-200 sticky top-6">
      <div className="bg-gradient-to-br from-[#2c4c1c] to-[#5a7238] text-white p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
            <span className="text-lg">🦁</span>
          </div>
          <div>
            <h3 className="font-bold">Tanzania Guide</h3>
            <p className="text-green-200 text-sm">Complete Safari Experience</p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <div className="space-y-1">
          {tanzania.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${
                activeTab === tab
                  ? 'bg-green-50 text-green-800 border-l-4 border-[#d4af37]'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center mr-3 ${
                activeTab === tab ? 'text-green-600' : 'text-gray-500'
              }`}>
                {getTabIcon(tab)}
              </div>
              <span className="font-medium">{tab}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Link 
          href="/safari-tours/tanzania"
          className="block w-full bg-gradient-to-r from-[#d4af37] to-[#f7ef8a] hover:from-[#c19b2e] hover:to-[#e6d87c] text-gray-900 text-center font-semibold py-3 px-4 rounded-lg transition-all duration-200"
        >
          Book Your Safari
        </Link>
      </div>
    </div>
  );

  const getTabIcon = (tab) => {
    const icons = {
      'Overview': <FaGlobeAfrica className="w-4 h-4" />,
      'Parks & Reserves': <FaMap className="w-4 h-4" />,
      'Reviews': <FaUsers className="w-4 h-4" />,
      'Wildlife': <FaPaw className="w-4 h-4" />,
      'Birds': <FaBinoculars className="w-4 h-4" />,
      'Best Time To Visit': <FaCalendar className="w-4 h-4" />,
      'Weather & Climate': <FaUmbrella className="w-4 h-4" />,
      'Popular Routes': <FaRoute className="w-4 h-4" />,
      'How To Get There': <FaPlane className="w-4 h-4" />,
      'Malaria & Vaccinations': <FaStethoscope className="w-4 h-4" />,
      'Staying Safe': <FaShieldAlt className="w-4 h-4" />
    };
    return icons[tab] || <FaStar className="w-4 h-4" />;
  };

  const ContentCard = ({ children, className = "" }) => (
    <div className={`bg-white rounded-lg border border-gray-200 ${className}`}>
      {children}
    </div>
  );

  const renderOverviewTab = () => {
    const { overview } = tanzania;
    if (!overview) return <div>Loading overview...</div>;

    return (
      <div className="space-y-6">
        <ContentCard>
          <div className="p-6">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#f7ef8a] rounded-lg flex items-center justify-center text-white font-bold">
                PB
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-gray-900">{overview.expert.name}</h4>
                  <span className="text-[#d4af37] font-semibold">{overview.expert.byline}</span>
                </div>
                <p className="text-gray-600">{overview.expert.bio}</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FaGlobeAfrica className="w-6 h-6 text-[#d4af37] mr-2" />
              Welcome to Tanzania
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 bg-gray-50 p-4 rounded-lg">
              {overview.summary}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-lg font-bold text-gray-900">Safari Rates</div>
                <div className="text-gray-600">{overview.stats.rates}</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-lg font-bold text-gray-900">Best Time</div>
                <div className="text-gray-600">{overview.stats.bestTimeToGo}</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-lg font-bold text-gray-900">High Season</div>
                <div className="text-gray-600">{overview.stats.highSeason}</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-lg font-bold text-gray-900">Park Size</div>
                <div className="text-gray-600">{overview.stats.size}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-3 flex items-center">
                  <FaCheck className="w-4 h-4 text-green-600 mr-2" />
                  Advantages
                </h4>
                <ul className="space-y-2">
                  {overview.prosCons.pros.map((pro, i) => (
                    <li key={i} className="flex items-start text-green-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-800 mb-3 flex items-center">
                  <FaCheck className="w-4 h-4 text-red-600 mr-2" />
                  Considerations
                </h4>
                <ul className="space-y-2">
                  {overview.prosCons.cons.map((con, i) => (
                    <li key={i} className="flex items-start text-red-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ContentCard>

        <ContentCard>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-[#d4af37] rounded-lg flex items-center justify-center text-white mr-3">🦁</span>
              {overview.wildlifeSection.title}
            </h3>
            <p className="text-gray-700 mb-4">{overview.wildlifeSection.content}</p>
            <button className="inline-flex items-center px-4 py-2 bg-[#465b2d] hover:bg-[#3a4a24] text-white font-semibold rounded-lg transition-colors">
              {overview.wildlifeSection.moreLink}
              <FaChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </ContentCard>
      </div>
    );
  };

  const renderParksTab = () => {
    const { parksAndReserves } = tanzania;
    if (!parksAndReserves) return <div>Loading parks data...</div>;

    return (
      <div className="space-y-6">
        <ContentCard>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Premier Parks & Reserves</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {parksAndReserves.premierParks.map((park, idx) => {
                const fullPark = parksAndReserves.allParks.find(p => p.name === park.name);
                return (
                  <div key={park.name} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200 relative">
                      <img 
                        src={fullPark?.image || "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"} 
                        alt={park.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 rounded text-xs font-bold text-white ${
                          park.tag === 'Best Park' ? 'bg-yellow-500' : 'bg-green-500'
                        }`}>
                          {park.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-2 left-2 text-white">
                        <h3 className="font-bold text-lg drop-shadow-lg">{park.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      {fullPark && (
                        <div className="flex items-center justify-between mb-3">
                          {renderStars(fullPark.rating, 'sm')}
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {fullPark.reviews} reviews
                          </span>
                        </div>
                      )}
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {fullPark?.highlights || "Explore incredible wildlife and landscapes"}
                      </p>
                      
                      <Link href={`/parks/${park.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full py-2 bg-gradient-to-r from-[#465b2d] to-[#5a7238] hover:from-[#3a4a24] hover:to-[#465b2d] text-white font-medium rounded text-center block transition-colors">
                        Explore Park
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ContentCard>

        <ContentCard>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Parks & Reserves</h2>
            
            <div className="space-y-6">
              {parksAndReserves.allParks.map((park) => (
                <div key={park.name} className="border border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-64 h-48 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <img 
                        src={park.image} 
                        alt={park.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            <Link href={`/parks/${park.slug}`} className="hover:text-green-600">
                              {park.name}
                            </Link>
                          </h3>
                          <div className="flex items-center space-x-4 mb-3">
                            {renderStars(park.rating, 'sm')}
                            <span className="text-gray-500 text-sm">{park.reviews} reviews</span>
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => setIsLiked(!isLiked)} 
                          className="self-start md:self-auto"
                        >
                          <FaHeart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-400'} transition-colors`} />
                        </button>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-start text-gray-700">
                          <FaMapMarkerAlt className="text-[#d4af37] mt-1 mr-2 flex-shrink-0" />
                          <span className="font-semibold text-gray-900 mr-2">Highlights:</span>
                          <span>{park.highlights}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Wildlife</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Birds</span>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">Best Time</span>
                      </div>
                      
                      <Link href={`/parks/${park.slug}`}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#465b2d] to-[#5a7238] hover:from-[#3a4a24] hover:to-[#465b2d] text-white font-medium rounded transition-colors">
                        View Details
                        <FaChevronRight className="ml-2 w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ContentCard>
      </div>
    );
  };

  const renderReviewsTab = () => {
    const { reviews } = tanzania;
    if (!reviews) return <div>Loading reviews...</div>;

    return (
      <div className="space-y-6">
        <ContentCard>
          <div className="p-6">
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">{reviews.expertRating}</div>
              {renderStars(reviews.expertRating, 'lg')}
              <p className="text-gray-600 mt-2">Based on {reviews.expertReviews + reviews.userReviews} reviews</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaUser className="w-5 h-5 text-blue-500 mr-2" />
                  Expert Reviews
                </h3>
                
                <ContentCard>
                  <div className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                        TB
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-bold text-gray-900">{reviews.latestExpertReview.author}</h4>
                            <p className="text-blue-600 text-sm">{reviews.latestExpertReview.country}</p>
                          </div>
                          {renderStars(reviews.latestExpertReview.rating, 'sm')}
                        </div>
                        <h5 className="font-bold text-gray-900 mb-2">{reviews.latestExpertReview.title}</h5>
                        <p className="text-gray-600 text-sm">{reviews.latestExpertReview.fullReview}</p>
                      </div>
                    </div>
                  </div>
                </ContentCard>

                <button className="w-full mt-4 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:border-blue-500 transition-colors">
                  View All {reviews.expertReviews} Expert Reviews
                </button>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaUsers className="w-5 h-5 text-green-500 mr-2" />
                  Traveler Reviews
                </h3>
                
                <ContentCard>
                  <div className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                        CC
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-bold text-gray-900">{reviews.latestUserReview.author}</h4>
                            <p className="text-gray-500 text-sm">{reviews.latestUserReview.country} • {reviews.latestUserReview.date}</p>
                          </div>
                          {renderStars(reviews.latestUserReview.rating, 'sm')}
                        </div>
                        <p className="text-gray-600 text-sm">{reviews.latestUserReview.review}</p>
                      </div>
                    </div>
                  </div>
                </ContentCard>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <button className="py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors">
                    Write a Review
                  </button>
                  <button className="py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:border-green-500 transition-colors">
                    All {reviews.userReviews} Reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>

        <ContentCard>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <FaStar className="w-5 h-5 text-purple-500 mr-2" />
              Review Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-purple-500 text-white py-3 rounded-t-lg font-bold">4.8/5</div>
                <div className="bg-gray-50 py-3 rounded-b-lg border border-gray-200">
                  <div className="text-gray-700 font-semibold">Overall Experience</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-500 text-white py-3 rounded-t-lg font-bold">4.9/5</div>
                <div className="bg-gray-50 py-3 rounded-b-lg border border-gray-200">
                  <div className="text-gray-700 font-semibold">Wildlife Viewing</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 text-white py-3 rounded-t-lg font-bold">4.7/5</div>
                <div className="bg-gray-50 py-3 rounded-b-lg border border-gray-200">
                  <div className="text-gray-700 font-semibold">Guide Quality</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 text-white py-3 rounded-t-lg font-bold">4.5/5</div>
                <div className="bg-gray-50 py-3 rounded-b-lg border border-gray-200">
                  <div className="text-gray-700 font-semibold">Value for Money</div>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>
      </div>
    );
  };

  const renderWildlifeTab = () => {
    const { wildlife } = tanzania;
    if (!wildlife) return <div>Loading wildlife data...</div>;

    const animalImages = {
      'Elephant': 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Lion': 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Leopard': 'https://images.unsplash.com/photo-1506905925341-15BE5CA5DD57?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Cheetah': 'https://images.unsplash.com/photo-1544568152-3c8153578e79?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Giraffe': 'https://images.unsplash.com/photo-1518706833106-853b8cb8c356?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Zebra': 'https://images.unsplash.com/photo-1547722700-57c2c8f56ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Hippo': 'https://images.unsplash.com/photo-1567599757261-0f12c256d1d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Buffalo': 'https://images.unsplash.com/photo-1576080460403-436e1c53d1a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Wildebeest': 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    };

    return (
      <div className="space-y-6">
        <ContentCard>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tanzania Wildlife</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(wildlife.speciesAbundance).map(([species, abundance]) => (
                <div key={species} className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={animalImages[species]} 
                      alt={species}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-medium text-gray-900 mb-2">{species}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    abundance === 'Abundant' ? 'bg-green-100 text-green-800' :
                    abundance === 'Common' ? 'bg-blue-100 text-blue-800' :
                    abundance === 'Occasional' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {abundance}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white mr-4">
                  <FaRoute className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{wildlife.wildebeestMigration.title}</h3>
                  <p className="text-orange-600 font-semibold">The Greatest Wildlife Spectacle on Earth</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{wildlife.wildebeestMigration.description}</p>
              <p className="text-gray-600">{wildlife.wildebeestMigration.highlights}</p>
            </div>
          </div>
        </ContentCard>

        <ContentCard>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">The Big Five</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "Lion", status: "Common", image: animalImages.Lion },
                { name: "Leopard", status: "Occasional", image: animalImages.Leopard },
                { name: "Elephant", status: "Abundant", image: animalImages.Elephant },
                { name: "Rhino", status: "Rare", image: "https://images.unsplash.com/photo-1589650497446-88d43c8f6e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                { name: "Buffalo", status: "Abundant", image: animalImages.Buffalo }
              ].map((animal, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={animal.image} 
                      alt={animal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-semibold text-gray-900">{animal.name}</div>
                  <span className={`text-xs ${
                    animal.status === 'Abundant' ? 'text-green-600' :
                    animal.status === 'Common' ? 'text-blue-600' :
                    animal.status === 'Occasional' ? 'text-yellow-600' : 'text-orange-600'
                  }`}>
                    {animal.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ContentCard>
      </div>
    );
  };

  const renderBirdsTab = () => {
    const { birds } = tanzania;
    if (!birds) return <div>Loading birds data...</div>;

    const birdImages = {
      'Flamingo': 'https://images.unsplash.com/photo-1594736797933-d0ea3ff8db41?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Fish Eagle': 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Ostrich': 'https://images.unsplash.com/photo-1572402230267-f3e267c1e5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Secretary Bird': 'https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    };

    return (
      <div className="space-y-6">
        <ContentCard>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bird Watching in Tanzania</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700">{birds.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {birds.notableBirds.map((bird, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{bird.name}</h4>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        bird.abundance.includes('endemic') 
                          ? 'bg-purple-100 text-purple-800 border border-purple-200'
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}>
                        {bird.abundance}
                      </span>
                    </div>
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 ml-4">
                      <img 
                        src={birdImages[bird.name]} 
                        alt={bird.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-gray-900 mb-3">Peak Season</h4>
                <p className="text-gray-700 mb-4">November to April</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <FaCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Migratory birds present
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Breeding plumage
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Nesting activity
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-3">Year-Round</h4>
                <p className="text-gray-700 mb-4">Resident Species</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <FaCheck className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    800+ resident species
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Endemic birds
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Consistent viewing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ContentCard>
      </div>
    );
  };

  const renderBestTimeToVisitTab = () => {
    const { bestTimeToVisit } = tanzania;
    if (!bestTimeToVisit) return <div>Loading best time data...</div>;

    return (
      <div className="space-y-6">
        <ContentCard>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Time to Visit</h2>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700">{bestTimeToVisit.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <FaSun className="w-5 h-5 text-amber-500 mr-2" />
                  Dry Season ({bestTimeToVisit.drySeason.months})
                </h3>
                <ul className="space-y-2">
                  {bestTimeToVisit.drySeason.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <FaCheck className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <FaCloudRain className="w-5 h-5 text-blue-500 mr-2" />
                  Wet Season ({bestTimeToVisit.wetSeason.months})
                </h3>
                <ul className="space-y-2">
                  {bestTimeToVisit.wetSeason.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <FaCheck className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Monthly Wildlife Viewing Guide</h4>
              <div className="grid grid-cols-6 gap-2">
                {bestTimeToVisit.monthlyChart.map((month) => (
                  <div key={month.month} className="text-center">
                    <div className={`h-12 flex items-center justify-center text-white font-bold ${
                      month.wildlife >= 5 ? 'bg-green-500' :
                      month.wildlife >= 4 ? 'bg-green-400' :
                      month.wildlife >= 3 ? 'bg-yellow-400' : 'bg-red-400'
                    } rounded-t-lg`}>
                      {month.month.substring(0, 3)}
                    </div>
                    <div className="text-xs mt-1 text-gray-600 bg-gray-100 p-1 rounded-b-lg">
                      {month.wildlife >= 5 ? 'Excellent' :
                       month.wildlife >= 4 ? 'Good' :
                       month.wildlife >= 3 ? 'Fair' : 'Poor'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContentCard>
      </div>
    );
  };

  const renderWeatherTab = () => {
    const { weatherAndClimate } = tanzania;
    if (!weatherAndClimate) return <div>Loading weather data...</div>;

    return (
      <div className="space-y-6">
        <ContentCard>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Weather & Climate</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700">{weatherAndClimate.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <div className="flex items-center mb-4">
                  <FaSun className="w-8 h-8 text-amber-500 mr-3" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{weatherAndClimate.drySeason.months}</h3>
                    <p className="text-amber-600 font-semibold">Dry Season</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{weatherAndClimate.drySeason.description}</p>
                <ul className="space-y-2">
                  {weatherAndClimate.drySeason.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center mb-4">
                  <FaCloudRain className="w-8 h-8 text-blue-500 mr-3" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{weatherAndClimate.wetSeason.months}</h3>
                    <p className="text-blue-600 font-semibold">Wet Season</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{weatherAndClimate.wetSeason.description}</p>
                <ul className="space-y-2">
                  {weatherAndClimate.wetSeason.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ContentCard>
      </div>
    );
  };

  const renderRoutesTab = () => {
    const { popularRoutes } = tanzania;
    if (!popularRoutes) return <div>Loading routes data...</div>;

    const renderCircuit = (circuit, circuitName) => (
      <ContentCard>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-[#d4af37] rounded-lg flex items-center justify-center text-white mr-4">
              <FaRoute className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{circuit.title} <span className="text-[#d4af37]">{circuit.duration}</span></h3>
              <p className="text-gray-600">{circuit.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <FaMapMarkerAlt className="text-[#d4af37] mr-2" />
                Destinations
              </h4>
              <div className="space-y-2">
                {circuit.destinations.map((destination, i) => (
                  <div key={i} className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-gray-700">{destination}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <FaCheck className="text-green-500 mr-2" />
                Popular Add-ons
              </h4>
              <div className="space-y-2">
                {circuit.addOns.map((addon, i) => (
                  <div key={i} className="flex items-center p-2 bg-green-50 rounded-lg">
                    <FaCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{addon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-3 bg-[#465b2d] hover:bg-[#3a4a24] text-white font-semibold rounded-lg transition-colors">
              View Sample Itinerary
            </button>
            <button className="flex-1 py-3 border-2 border-[#465b2d] text-[#465b2d] hover:bg-[#465b2d] hover:text-white font-semibold rounded-lg transition-colors">
              Get Custom Quote
            </button>
          </div>
        </div>
      </ContentCard>
    );

    return (
      <div className="space-y-6">
        <ContentCard>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Safari Routes</h2>
            <p className="text-gray-700">
              Tanzania offers three distinct safari circuits, each with unique experiences and wildlife viewing opportunities.
            </p>
          </div>
        </ContentCard>

        {renderCircuit(popularRoutes.northernCircuit, 'northern')}
        {renderCircuit(popularRoutes.southernCircuit, 'southern')}
        {renderCircuit(popularRoutes.westernCircuit, 'western')}
      </div>
    );
  };

  const renderHowToGetThereTab = () => {
    const { howToGetThere } = tanzania;
    if (!howToGetThere) return <div>Loading travel information...</div>;

    return (
      <div className="space-y-6">
        <ContentCard>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Get to Tanzania</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700">{howToGetThere.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <FaPlane className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Domestic Flights</h4>
                <p className="text-gray-600 text-sm">Quick transfers between parks</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <FaCar className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Road Transfers</h4>
                <p className="text-gray-600 text-sm">4x4 safari vehicles</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <FaHotel className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Accommodation</h4>
                <p className="text-gray-600 text-sm">Lodge transfers included</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { code: "JRO", name: "Kilimanjaro International", location: "Arusha", type: "International" },
                { code: "DAR", name: "Julius Nyerere International", location: "Dar es Salaam", type: "International" },
                { code: "ARK", name: "Arusha Airport", location: "Arusha", type: "Domestic" }
              ].map((airport, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <strong className="text-gray-800">{airport.code}</strong>
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">{airport.type}</span>
                  </div>
                  <p className="font-semibold text-gray-900">{airport.name}</p>
                  <p className="text-gray-600 text-sm">{airport.location}</p>
                </div>
              ))}
            </div>
          </div>
        </ContentCard>
      </div>
    );
  };

  const renderMalariaTab = () => {
    const { malariaVaccinations } = tanzania;
    if (!malariaVaccinations) return <div>Loading health information...</div>;

    return (
      <div className="space-y-6">
        <ContentCard>
          <div className="p-6">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-[#465b2d] rounded-lg flex items-center justify-center text-white font-bold">
                PB
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">{malariaVaccinations.expert.name}</h4>
                <p className="text-[#465b2d] font-semibold">Travel Health Expert</p>
                <p className="text-gray-600 mt-2">{malariaVaccinations.expert.bio}</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FaStethoscope className="w-5 h-5 text-green-500 mr-2" />
              Vaccinations
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-gray-900 mb-2">Required</h4>
                <ul className="space-y-1">
                  <li className="flex items-center text-green-700">
                    <FaCheck className="w-4 h-4 text-green-500 mr-2" />
                    Yellow Fever*
                  </li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">*If traveling from endemic country</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Recommended</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center text-gray-700">
                    <FaCheck className="w-4 h-4 text-blue-500 mr-2" />
                    Hepatitis A & B
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheck className="w-4 h-4 text-blue-500 mr-2" />
                    Typhoid
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheck className="w-4 h-4 text-blue-500 mr-2" />
                    Rabies
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Routine</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center text-gray-700">
                    <FaCheck className="w-4 h-4 text-gray-500 mr-2" />
                    MMR
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheck className="w-4 h-4 text-gray-500 mr-2" />
                    Tetanus
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheck className="w-4 h-4 text-gray-500 mr-2" />
                    Diphtheria
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <FaExclamationTriangle className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Malaria Risk & Prevention</h3>
              </div>
              <p className="text-gray-700 mb-4">{malariaVaccinations.malariaRisk}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Prevention Methods</h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Antimalarial medication",
                      "Mosquito repellent (DEET)",
                      "Long sleeves and pants",
                      "Mosquito nets"
                    ].map((method, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                          {index + 1}
                        </div>
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Low-Risk Areas</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center p-2 bg-green-50 rounded">
                      <FaCheck className="w-4 h-4 text-green-500 mr-2" />
                      Ngorongoro Crater rim
                    </div>
                    <div className="flex items-center p-2 bg-green-50 rounded">
                      <FaCheck className="w-4 h-4 text-green-500 mr-2" />
                      Mount Kilimanjaro areas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>
      </div>
    );
  };

  const renderSafetyTab = () => {
    const { stayingSafe } = tanzania;
    if (!stayingSafe) return <div>Loading safety information...</div>;

    return (
      <div className="space-y-6">
        <ContentCard>
          <div className="p-6">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-[#465b2d] rounded-lg flex items-center justify-center text-white font-bold">
                PB
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">{stayingSafe.expert.name}</h4>
                <p className="text-[#465b2d] font-semibold">Safety & Security Expert</p>
                <p className="text-gray-600 mt-2">{stayingSafe.expert.bio}</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FaShieldAlt className="w-5 h-5 text-green-500 mr-2" />
              Safety Overview
            </h3>
            <p className="text-gray-700 bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
              {stayingSafe.summary}
            </p>

            <div className="space-y-4">
              {stayingSafe.safetyTips.map((tip, i) => (
                <ContentCard key={i}>
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-3">
                        {i === 0 && <FaPaw className="w-5 h-5" />}
                        {i === 1 && <FaTree className="w-5 h-5" />}
                        {i === 2 && <FaUsers className="w-5 h-5" />}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{tip.title}</h4>
                    </div>
                    <p className="text-gray-700 mb-3">{tip.description}</p>
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                      {tip.link}
                      <FaChevronRight className="ml-1 w-3 h-3" />
                    </button>
                  </div>
                </ContentCard>
              ))}
            </div>
          </div>
        </ContentCard>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview': return renderOverviewTab();
      case 'Parks & Reserves': return renderParksTab();
      case 'Reviews': return renderReviewsTab();
      case 'Wildlife': return renderWildlifeTab();
      case 'Birds': return renderBirdsTab();
      case 'Best Time To Visit': return renderBestTimeToVisitTab();
      case 'Weather & Climate': return renderWeatherTab();
      case 'Popular Routes': return renderRoutesTab();
      case 'How To Get There': return renderHowToGetThereTab();
      case 'Malaria & Vaccinations': return renderMalariaTab();
      case 'Staying Safe': return renderSafetyTab();
      default: 
        return (
          <ContentCard>
            <div className="text-center py-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Content Coming Soon</h3>
              <p className="text-gray-600">We're working on this section.</p>
            </div>
          </ContentCard>
        );
    }
  };

  return (
    <>
      <Head>
        <title>{tanzania.pageTitle} | SafariBookings</title>
        <meta name="description" content="Explore Tanzania's national parks, wildlife, and safari circuits." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <HeroSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-80 flex-shrink-0">
              <SidebarNavigation />
            </div>

            <div className="flex-1 min-w-0">
              {renderTabContent()}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#2c4c1c] to-[#5a7238] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Your <span className="text-yellow-400">Tanzanian Adventure</span>?
            </h2>
            <p className="text-green-200 mb-8 max-w-2xl mx-auto">
              Experience the wildlife, landscapes, and culture that make Tanzania Africa's ultimate safari destination.
            </p>
            <Link 
              href="/safari-tours/tanzania"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#f7ef8a] hover:from-[#c19b2e] hover:to-[#e6d87c] text-gray-900 font-bold rounded-lg transition-all duration-200"
            >
              Browse Safari Tours
              <FaChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TanzaniaDetailsPage;