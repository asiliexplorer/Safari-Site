// app/parks/[slug]/page.js
"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  FaStar, FaChevronLeft, FaCheck, FaTimes, FaMapMarkerAlt, 
  FaGlobe, FaUmbrella, FaBinoculars, FaRoute, FaPlane, 
  FaShieldAlt, FaStethoscope, FaTree, FaPaw, FaCloudSun,
  FaCalendarAlt, FaMap, FaExclamationTriangle, FaCar,
  FaBus, FaTaxi, FaFirstAid, FaSkullCrossbones, FaHotel,
  FaRoad, FaCloudRain, FaTemperatureHigh, FaSun,
  FaUser, FaClock, FaHeart, FaEye,
  FaWater, FaMountain, FaSeedling, FaWind
} from 'react-icons/fa';

import { mockParksData } from '../../../lib/mockData';

const ParkDetailPage = () => {
  const params = useParams();
  const { slug } = params;
  const [activeTab, setActiveTab] = useState('overview');
  const [parkData, setParkData] = useState(null);

  useEffect(() => {
    if (!slug) return;

    // Map slug to park key
    const parkKey = slug
      .replace(/-national-park/g, 'NationalPark')
      .replace(/-crater/g, 'Crater')
      .replace(/-mountains/g, 'Mountains')
      .replace(/-island/g, 'Island')
      .replace(/-game-reserve/g, 'GameReserve')
      .split('-')
      .map((word, i) => (i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
      .join('');

    const basePark = mockParksData.tanzania.parksAndReserves.allParks.find(p => p.slug === slug);
    const detailedData = mockParksData[parkKey] || {};

    if (basePark) {
      setParkData({ ...basePark, detailed: detailedData });
    }
  }, [slug]);

  if (!parkData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading park details...</p>
        </div>
      </div>
    );
  }

  // Render stars with improved styling
  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating) 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300 fill-current'
            }`}
          />
        ))}
        <span className="ml-2 font-semibold text-gray-700">{rating.toFixed(1)}</span>
      </div>
    );
  };

  // Tab config with improved icons
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaGlobe className="w-4 h-4" /> },
    { id: 'wildlife', label: 'Wildlife', icon: <FaPaw className="w-4 h-4" /> },
    { id: 'birds', label: 'Bird Watching', icon: <FaBinoculars className="w-4 h-4" /> },
    { id: 'bestTimeToVisit', label: 'Best Time', icon: <FaCalendarAlt className="w-4 h-4" /> },
    { id: 'weatherAndClimate', label: 'Weather', icon: <FaCloudSun className="w-4 h-4" /> },
    { id: 'howToGetThere', label: 'Getting There', icon: <FaPlane className="w-4 h-4" /> },
    { id: 'malariaAndSafety', label: 'Health & Safety', icon: <FaShieldAlt className="w-4 h-4" /> },
    { id: 'reviews', label: 'Reviews', icon: <FaStar className="w-4 h-4" /> }
  ];

  // Stats card component
  const StatCard = ({ icon, label, value, color = "blue" }) => (
    <div className={`bg-white rounded-xl p-4 border-l-4 border-${color}-500 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-center mb-2">
        <div className={`text-${color}-500 mr-2`}>{icon}</div>
        <span className="text-sm font-medium text-gray-600">{label}</span>
      </div>
      <p className="text-lg font-bold text-gray-800">{value}</p>
    </div>
  );

  // Feature list component
  const FeatureList = ({ items, type = "pro" }) => (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          {type === "pro" ? (
            <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
          ) : (
            <FaTimes className="text-red-500 mt-1 mr-3 flex-shrink-0" />
          )}
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );

  // Weather data visualization component
  const ClimateChart = ({ temperatureData, rainfallData }) => {
    const maxTemp = Math.max(...temperatureData.map(t => t.max));
    const maxRainfall = Math.max(...rainfallData.map(r => r.rainfall));

    return (
      <div className="space-y-8">
        {/* Temperature Chart */}
        <div>
          <h4 className="font-bold text-lg text-gray-900 mb-4">Average Monthly Temperature (°C)</h4>
          <div className="grid grid-cols-12 gap-2 items-end h-48">
            {temperatureData.map((month, index) => (
              <div key={month.month} className="flex flex-col items-center h-full">
                <div className="text-xs text-gray-600 mb-1">{month.month.substring(0, 3)}</div>
                <div className="flex flex-col justify-end h-32 w-full max-w-12">
                  <div 
                    className="bg-red-400 rounded-t"
                    style={{ height: `${(month.max / maxTemp) * 100}%` }}
                  ></div>
                  <div 
                    className="bg-blue-400 rounded-b"
                    style={{ height: `${(month.min / maxTemp) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-700 mt-1">
                  <div className="font-semibold">{month.max}°</div>
                  <div>{month.min}°</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-400 mr-1"></div>
              <span className="text-xs text-gray-600">Max</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 mr-1"></div>
              <span className="text-xs text-gray-600">Min</span>
            </div>
          </div>
        </div>

        {/* Rainfall Chart */}
        <div>
          <h4 className="font-bold text-lg text-gray-900 mb-4">Average Monthly Rainfall (mm)</h4>
          <div className="grid grid-cols-12 gap-2 items-end h-48">
            {rainfallData.map((month, index) => (
              <div key={month.month} className="flex flex-col items-center h-full">
                <div className="text-xs text-gray-600 mb-1">{month.month.substring(0, 3)}</div>
                <div 
                  className="bg-blue-200 rounded-t w-full max-w-12 transition-all hover:bg-blue-300"
                  style={{ height: `${(month.rainfall / maxRainfall) * 100}%` }}
                ></div>
                <div className="text-xs text-gray-700 mt-1 font-semibold">
                  {month.rainfall}mm
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Transportation option component
  const TransportOption = ({ icon, title, description, duration, cost }) => (
    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors">
      <div className="flex items-start mb-3">
        <div className="bg-blue-100 p-2 rounded-lg mr-3">
          {icon}
        </div>
        <div>
          <h5 className="font-bold text-gray-900">{title}</h5>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-700">
        <span>Duration: {duration}</span>
        <span className="font-semibold">{cost}</span>
      </div>
    </div>
  );

  // Review component
  const ReviewCard = ({ review, type = "user" }) => (
    <div className={`bg-white rounded-xl p-6 border ${
      type === "expert" ? "border-blue-200" : "border-green-200"
    }`}>
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-lg mr-3 ${
          type === "expert" ? "bg-blue-100" : "bg-green-100"
        }`}>
          <FaStar className={`w-5 h-5 ${
            type === "expert" ? "text-blue-600" : "text-green-600"
          }`} />
        </div>
        <div>
          <h5 className="font-bold text-gray-900">{review.author}</h5>
          <p className="text-sm text-gray-500">{review.country}</p>
        </div>
      </div>
      
      {review.date && (
        <p className="text-sm text-gray-600 mb-2">Reviewed: {review.date}</p>
      )}
      
      {renderStars(review.rating)}
      
      {review.title && (
        <h6 className="font-bold text-gray-800 text-lg mt-2 mb-3">{review.title}</h6>
      )}
      
      <p className="text-gray-700 leading-relaxed">
        {review.fullReview || review.review}
      </p>
      
      {type === "expert" && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-700 font-semibold">
            Expert Review • {review.rating}/5 Rating
          </p>
        </div>
      )}
    </div>
  );

  // Render tab content with improved styling
  const renderTabContent = () => {
    const d = parkData.detailed;
    if (!d) return <p className="text-gray-700">Content not available.</p>;

    switch (activeTab) {
      case 'overview':
        const ov = d.overview;
        return (
          <div className="space-y-8">
            {/* Expert Section */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                  <FaTree className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Expert Insight</h3>
                  <p className="text-gray-600 text-sm mb-3">By {ov.expert.name} - {ov.expert.bio}</p>
                  <p className="text-gray-700 leading-relaxed">{ov.summary}</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(ov.stats).map(([key, value], index) => (
                <StatCard
                  key={key}
                  icon={<FaMapMarkerAlt className="w-4 h-4" />}
                  label={key}
                  value={value}
                  color={index % 2 === 0 ? "green" : "blue"}
                />
              ))}
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <FaCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="font-bold text-lg text-green-800">Pros</h4>
                </div>
                <FeatureList items={ov.prosCons.pros} type="pro" />
              </div>

              <div className="bg-white rounded-xl p-6 border border-red-200">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-2 rounded-lg mr-3">
                    <FaTimes className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="font-bold text-lg text-red-800">Cons</h4>
                </div>
                <FeatureList items={ov.prosCons.cons} type="con" />
              </div>
            </div>
          </div>
        );

      case 'wildlife':
        const w = d.wildlife;
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Wildlife Overview</h3>
              <p className="text-gray-700 leading-relaxed">{w.summary}</p>
            </div>

            {/* Species Abundance */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Species Abundance</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(w.speciesAbundance).map(([species, status]) => (
                  <div key={species} className="text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-semibold text-gray-800 text-sm mb-1">{species}</div>
                    <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                      status === 'Abundant' ? 'bg-green-100 text-green-800' :
                      status === 'Common' ? 'bg-blue-100 text-blue-800' :
                      status === 'Occasional' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ratings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Expert Rating</h4>
                <div className="text-center">
                  {renderStars(w.wildlifeRating.expertRating)}
                  <p className="text-sm text-gray-600 mt-2">Based on {w.wildlifeRating.expertReviews} expert reviews</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-lg text-gray-900 mb-4">User Rating</h4>
                <div className="text-center">
                  {renderStars(w.wildlifeRating.userRating)}
                  <p className="text-sm text-gray-600 mt-2">Based on {w.wildlifeRating.userReviews} user reviews</p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Wildlife Highlights</h4>
              <p className="text-gray-700 leading-relaxed">{w.highlights}</p>
              <div className="mt-4 p-3 bg-white rounded-lg border">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Best Time for Wildlife:</span> {w.bestTimeForWildlife}
                </p>
              </div>
            </div>

            {/* Wildlife Tips */}
            <div className="bg-white rounded-xl p-6 border border-blue-200">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Wildlife Viewing Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <FaEye className="w-4 h-4 text-blue-500 mr-2" />
                    Optimal Viewing Times
                  </h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Early morning (6-10 AM) for predator activity</li>
                    <li>• Late afternoon (4-6 PM) for wildlife at waterholes</li>
                    <li>• Dry season for concentrated wildlife viewing</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <FaHeart className="w-4 h-4 text-red-500 mr-2" />
                    Conservation Status
                  </h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Protected national park since 1964</li>
                    <li>• Anti-poaching patrols active</li>
                    <li>• Community conservation programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'birds':
        const b = d.birds;
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Bird Watching</h3>
              <p className="text-gray-700 leading-relaxed">{b.summary}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Notable Birds */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Notable Bird Species</h4>
                <div className="space-y-3">
                  {b.notableBirds.map((bird, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-800">{bird.name}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        bird.abundance === 'Common' ? 'bg-green-100 text-green-800' :
                        bird.abundance === 'Endemic' ? 'bg-purple-100 text-purple-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {bird.abundance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Birding Facts */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-900 mb-4">Birding Facts</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-700">Total Species</span>
                      <span className="font-bold text-blue-600">{b.facts.totalSpecies}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-gray-700">Migratory Season</span>
                      <span className="font-bold text-green-600">{b.facts.migratorySeason}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Best Time for Birding</h4>
                  <p className="text-gray-700">{b.bestTimeForBirding}</p>
                </div>
              </div>
            </div>

            {/* Birding Ratings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-blue-200">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Expert Birding Rating</h4>
                <div className="text-center">
                  {renderStars(b.birdingRating.expertRating)}
                  <p className="text-sm text-gray-600 mt-2">Based on {b.birdingRating.expertReviews} expert reviews</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-green-200">
                <h4 className="font-bold text-lg text-gray-900 mb-4">User Birding Rating</h4>
                <div className="text-center">
                  {renderStars(b.birdingRating.userRating)}
                  <p className="text-sm text-gray-600 mt-2">Based on {b.birdingRating.userReviews} user reviews</p>
                </div>
              </div>
            </div>

            {/* Birding Tips */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Bird Watching Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Equipment Recommendations</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Binoculars (8x42 or 10x42 recommended)</li>
                    <li>• Field guide for East African birds</li>
                    <li>• Camera with telephoto lens</li>
                    <li>• Notebook for sightings</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Best Locations in Park</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Riverine forests for endemic species</li>
                    <li>• Waterholes during dry season</li>
                    <li>• Open grasslands for raptors</li>
                    <li>• Lodge gardens for photography</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'bestTimeToVisit':
        const btv = d.bestTimeToVisit;
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">When to Visit</h3>
              <p className="text-gray-700 leading-relaxed">{btv.expert.bio}</p>
            </div>

            {/* Key Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard icon={<FaCalendarAlt />} label="Best Time" value={btv.keyInfo.bestTime} color="green" />
              <StatCard icon={<FaStar />} label="High Season" value={btv.keyInfo.highSeason} color="blue" />
              <StatCard icon={<FaCloudSun />} label="Best Weather" value={btv.keyInfo.bestWeather} color="yellow" />
              <StatCard icon={<FaUmbrella />} label="Low Season" value={btv.keyInfo.lowSeason} color="red" />
            </div>

            {/* Monthly Calendar */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-lg text-gray-900 mb-6">Monthly Guide</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Object.entries(btv.monthlyRatings).map(([month, rating]) => (
                  <div key={month} className={`text-center p-3 rounded-lg border-2 transition-all hover:scale-105 ${
                    rating === 'Excellent' ? 'bg-green-50 border-green-200' :
                    rating === 'Good' ? 'bg-blue-50 border-blue-200' :
                    rating === 'Fair' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-red-50 border-red-200'
                  }`}>
                    <div className="font-semibold text-gray-800">{month.substring(0, 3)}</div>
                    <div className={`text-xs font-medium mt-1 ${
                      rating === 'Excellent' ? 'text-green-600' :
                      rating === 'Good' ? 'text-blue-600' :
                      rating === 'Fair' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {rating}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Season Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-bold text-lg text-blue-800 mb-3">Dry Season ({btv.drySeason.months})</h4>
                <ul className="space-y-2">
                  {btv.drySeason.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <FaCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h4 className="font-bold text-lg text-green-800 mb-3">Wet Season ({btv.wetSeason.months})</h4>
                <ul className="space-y-2">
                  {btv.wetSeason.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Travel Recommendations */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Travel Recommendations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Peak Season Travel</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Book accommodations 6-12 months in advance</li>
                    <li>• Higher rates apply during peak months</li>
                    <li>• More vehicles and tourists in popular areas</li>
                    <li>• Optimal photography conditions</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Shoulder Season Travel</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Better rates and availability</li>
                    <li>• Fewer tourists for more exclusive experience</li>
                    <li>• Combination of dry and wet season advantages</li>
                    <li>• Ideal for bird watching</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'weatherAndClimate':
        const wc = d.weatherAndClimate;
        return (
          <div className="space-y-8">
            {/* Weather Overview */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Weather & Climate</h3>
              <p className="text-gray-700 leading-relaxed">{wc.summary}</p>
            </div>

            {/* Climate Location */}
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-500 mr-2" />
                <h4 className="font-bold text-lg text-gray-900">{wc.climateChart.location}</h4>
              </div>
            </div>

            {/* Climate Charts */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <ClimateChart 
                temperatureData={wc.climateChart.temperatureData}
                rainfallData={wc.climateChart.rainfallData}
              />
            </div>

            {/* Seasons Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Dry Season */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <div className="flex items-center mb-4">
                  <FaSun className="w-5 h-5 text-amber-600 mr-2" />
                  <h4 className="font-bold text-lg text-amber-800">Dry Season ({wc.drySeason.months})</h4>
                </div>
                <ul className="space-y-3">
                  {wc.drySeason.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <FaCheck className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 bg-white rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-700 font-semibold">
                    Ideal for wildlife viewing as animals gather at water sources
                  </p>
                </div>
              </div>

              {/* Wet Season */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <FaCloudRain className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-bold text-lg text-blue-800">Wet Season ({wc.wetSeason.months})</h4>
                </div>
                <ul className="space-y-3">
                  {wc.wetSeason.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <FaCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700 font-semibold">
                    Best for bird watching and lush green landscapes
                  </p>
                </div>
              </div>
            </div>

            {/* Weather Tips */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Essential Packing Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Dry Season Essentials</h5>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Lightweight, breathable clothing</li>
                    <li>• Wide-brimmed hat and sunglasses</li>
                    <li>• High SPF sunscreen</li>
                    <li>• Warm layers for cool mornings/evenings</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Wet Season Essentials</h5>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Waterproof jacket and pants</li>
                    <li>• Quick-dry clothing</li>
                    <li>• Waterproof bags for electronics</li>
                    <li>• Insect repellent</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'howToGetThere':
        const ht = d.howToGetThere;
        return (
          <div className="space-y-8">
            {/* Getting There Overview */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Getting to {parkData.name}</h3>
              <p className="text-gray-700 leading-relaxed">{ht.summary}</p>
            </div>

            {/* Transportation Options */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* By Air */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaPlane className="w-6 h-6 text-blue-500 mr-2" />
                  <h4 className="font-bold text-lg text-gray-900">By Air</h4>
                </div>
                <div className="space-y-4">
                  {ht.airports.map((airport, index) => (
                    <TransportOption
                      key={index}
                      icon={<FaPlane className="w-5 h-5 text-blue-500" />}
                      title={`${airport.name} (${airport.code})`}
                      description={airport.note}
                      duration="Varies"
                      cost="$$$"
                    />
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">Domestic Airlines</h5>
                  <div className="flex flex-wrap gap-2">
                    {ht.domesticAirlines.map((airline, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-700 border border-blue-200">
                        {airline}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* By Road */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaCar className="w-6 h-6 text-green-500 mr-2" />
                  <h4 className="font-bold text-lg text-gray-900">By Road</h4>
                </div>
                <div className="space-y-4">
                  {Object.entries(ht.access).map(([from, details], index) => (
                    <TransportOption
                      key={index}
                      icon={<FaRoad className="w-5 h-5 text-green-500" />}
                      title={`From ${from.replace('from', '').replace(/([A-Z])/g, ' $1').trim()}`}
                      description={`Scenic drive through ${from === 'fromDar' ? 'coastal and highland regions' : 'Tanzanian countryside'}`}
                      duration={typeof details === 'string' ? details : 'Varies'}
                      cost="$$"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Travel Tips */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Travel Tips & Recommendations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Best Options</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Domestic flights save time and offer aerial views
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Private transfers provide flexibility for stops
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Book internal flights well in advance during peak season
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Important Notes</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <FaExclamationTriangle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                      Road conditions may vary during rainy season
                    </li>
                    <li className="flex items-start">
                      <FaExclamationTriangle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                      Some airstrips may have weight restrictions
                    </li>
                    <li className="flex items-start">
                      <FaExclamationTriangle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                      Always confirm flight schedules 24 hours in advance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Entry Requirements */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Park Entry Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                    {/* <FaTicket className="w-8 h-8 text-green-600 mx-auto mb-2" /> */}
                  <p className="font-semibold text-gray-800">Park Fees</p>
                  <p className="text-sm text-gray-600">Required for all visitors</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <FaClock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">Operating Hours</p>
                  <p className="text-sm text-gray-600">6:00 AM - 6:00 PM</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <FaUser className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">Guide Required</p>
                  <p className="text-sm text-gray-600">Certified guide mandatory</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'malariaAndSafety':
        const ms = d.malariaAndSafety;
        return (
          <div className="space-y-8">
            {/* Health & Safety Overview */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Health & Safety Information</h3>
              <p className="text-gray-700 leading-relaxed">
                Your safety and health are our top priority. Follow these guidelines for a safe and enjoyable safari experience.
              </p>
            </div>

            {/* Safety Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Park Safety */}
              <div className="bg-white rounded-xl p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <FaShieldAlt className="w-6 h-6 text-green-500 mr-2" />
                  <h4 className="font-bold text-lg text-gray-900">Park Safety</h4>
                </div>
                <p className="text-gray-700 mb-4">{ms.safety.summary}</p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h5 className="font-semibold text-yellow-800 mb-2 flex items-center">
                    <FaExclamationTriangle className="w-4 h-4 mr-2" />
                    Important Safety Rules
                  </h5>
                  <ul className="space-y-2 text-sm text-yellow-700">
                    {ms.safety.tips.map((tip, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Malaria Information */}
              <div className="bg-white rounded-xl p-6 border border-red-200">
                <div className="flex items-center mb-4">
                  <FaSkullCrossbones className="w-6 h-6 text-red-500 mr-2" />
                  <h4 className="font-bold text-lg text-gray-900">Malaria Prevention</h4>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-700">Risk Level</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                      HIGH
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">{ms.malaria.risk}</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h5 className="font-semibold text-red-800 mb-2 flex items-center">
                    <FaFirstAid className="w-4 h-4 mr-2" />
                    Essential Prevention Measures
                  </h5>
                  <ul className="space-y-2 text-sm text-red-700">
                    {ms.malaria.prevention.map((prevention, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                        {prevention}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Vaccination Requirements */}
            <div className="bg-white rounded-xl p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <FaStethoscope className="w-6 h-6 text-blue-500 mr-2" />
                <h4 className="font-bold text-lg text-gray-900">Vaccination Requirements</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Required Vaccinations</h5>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">Yellow Fever</p>
                        <p className="text-sm text-gray-600">{ms.vaccinations}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Recommended Vaccinations</h5>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 bg-green-50 rounded-lg">
                      <FaCheck className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm text-gray-700">Hepatitis A & B</span>
                    </div>
                    <div className="flex items-center p-2 bg-green-50 rounded-lg">
                      <FaCheck className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm text-gray-700">Typhoid</span>
                    </div>
                    <div className="flex items-center p-2 bg-green-50 rounded-lg">
                      <FaCheck className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm text-gray-700">Tetanus</span>
                    </div>
                    <div className="flex items-center p-2 bg-green-50 rounded-lg">
                      <FaCheck className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm text-gray-700">Rabies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Information */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-300">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Emergency & Medical Facilities</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Within the Park</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <FaHotel className="w-4 h-4 text-blue-500 mt-0.5 mr-2" />
                      Most lodges have basic first aid kits
                    </li>
                    <li className="flex items-start">
                      <FaCar className="w-4 h-4 text-blue-500 mt-0.5 mr-2" />
                      Emergency evacuation services available
                    </li>
                    <li className="flex items-start">
                      <FaShieldAlt className="w-4 h-4 text-blue-500 mt-0.5 mr-2" />
                      Guides trained in emergency first response
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Nearby Medical Facilities</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <FaStethoscope className="w-4 h-4 text-green-500 mt-0.5 mr-2" />
                      Regional hospitals in major towns
                    </li>
                    <li className="flex items-start">
                      <FaPlane className="w-4 h-4 text-green-500 mt-0.5 mr-2" />
                      Medical evacuation to Dar es Salaam or Nairobi
                    </li>
                    <li className="flex items-start">
                      <FaFirstAid className="w-4 h-4 text-green-500 mt-0.5 mr-2" />
                      Travel insurance with medical cover required
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Travel Insurance */}
            <div className="bg-white rounded-xl p-6 border border-purple-200">
              <div className="flex items-center mb-3">
                <FaShieldAlt className="w-6 h-6 text-purple-500 mr-2" />
                <h4 className="font-bold text-lg text-gray-900">Travel Insurance Recommendation</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Comprehensive travel insurance is mandatory for all visitors. Ensure your policy covers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <FaPlane className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-sm text-gray-800">Medical Evacuation</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <FaStethoscope className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-sm text-gray-800">Hospital Treatment</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <FaTimes className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-sm text-gray-800">Trip Cancellation</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'reviews':
        const r = d.reviews;
        return (
          <div className="space-y-8">
            {/* Overall Rating */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 text-center">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">{r.expertRating.toFixed(1)}</div>
                  <p className="text-sm text-gray-600">Expert Rating</p>
                  {renderStars(r.expertRating)}
                </div>
                <div className="text-2xl text-gray-400 hidden md:block">•</div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">{r.userRating.toFixed(1)}</div>
                  <p className="text-sm text-gray-600">User Rating</p>
                  {renderStars(r.userRating)}
                </div>
              </div>
              <p className="text-gray-600">
                Based on {r.expertReviews} expert reviews and {r.userReviews} user reviews
              </p>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Expert Review */}
              <ReviewCard review={r.latestExpertReview} type="expert" />
              
              {/* User Review */}
              <ReviewCard review={r.latestUserReview} type="user" />
            </div>

            {/* Rating Breakdown */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-lg text-gray-900 mb-6">Rating Distribution</h4>
              <div className="space-y-4">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center">
                    <div className="flex items-center w-20">
                      <span className="text-sm font-medium text-gray-600 w-6">{stars}</span>
                      <FaStar className="w-4 h-4 text-yellow-400 ml-1" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mx-4">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ 
                          width: `${(stars === 5 ? 65 : stars === 4 ? 20 : stars === 3 ? 10 : stars === 2 ? 3 : 2)}%` 
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">
                      {stars === 5 ? '65%' : stars === 4 ? '20%' : stars === 3 ? '10%' : stars === 2 ? '3%' : '2%'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Guidelines */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Review Guidelines</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Expert Reviews</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Written by professional safari guides and wildlife experts</li>
                    <li>• Based on extensive experience in African parks</li>
                    <li>• Focus on wildlife, conservation, and visitor experience</li>
                    <li>• Updated annually to reflect current conditions</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">User Reviews</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Submitted by verified visitors</li>
                    <li>• Reflect personal safari experiences</li>
                    <li>• Include practical tips and recommendations</li>
                    <li>• Moderated for authenticity and relevance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGlobe className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Content Coming Soon</h3>
            <p className="text-gray-500">We're working on adding more detailed information for this section.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50">
      {/* Enhanced Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${parkData.image || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'})`,
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Navigation */}
        <div className="relative  cursor-pointer mx-auto px-4 pt-6">
          <Link
            href="/parks" 
            className="inline-flex  items-center text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 mb-2 transition-all duration-200 group"
          >
            <FaChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Tanzania Parks
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto bottom-14 h-full flex items-end pb-14">
          <div className="text-white">
            <div className="hidden sm:flex items-center mb-3">

              <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                National Park
              </div>
              <div className="ml-3 flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                {renderStars(parkData.rating)}
                <span className="mx-2">•</span>
                <span className="text-sm">{parkData.reviews} Reviews</span>
              </div>
            </div>
            <h1 className="text-2xl lg:4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">{parkData.name}</h1>
            <p className="text-xl opacity-90 max-w-2xl drop-shadow-lg">
              {parkData.detailed?.overview?.summary || "Discover the wild beauty of Tanzania's premier national park"}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 -mt-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <nav className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-6 shadow-lg">
              <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center">
                <FaMap className="w-5 h-5 text-[#465b2d] mr-2" />
                Park Guide
              </h3>
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl flex items-center transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-[#465b2d] text-white shadow-lg transform -translate-y-0.5'
                        : 'text-gray-600 hover:bg-[#465b2d] hover:text-white hover:shadow-md'
                    }`}
                  >
                    <span className={`mr-3 ${activeTab === tab.id ? 'text-white' : 'text-gray-400'}`}>
                      {tab.icon}
                    </span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </nav>
          </aside>

          {/* Enhanced Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              {renderTabContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ParkDetailPage;