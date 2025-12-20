"use client"
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Star, ChevronLeft, ChevronRight, MapPin, Globe, Phone, Check, 
  Info, Calendar, Users, Bed, Utensils, Ticket, Map, Plane, 
  Car, Shield, Award, Heart, Clock, User, Mountain, Camera,
  Leaf, Tree, Paw, Sun, DollarSign, Headset, Briefcase,
  Wifi, Luggage, UtensilsCrossed
} from 'lucide-react';

const PackageDetailsPage = () => {
  const params = useParams();
  const slug = params?.slug;

  const [activeTab, setActiveTab] = useState('overview');
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Default data structure to prevent errors
  const defaultPackageData = {
    name: '',
    full_description: '',
    location: '',
    duration: 0,
    groupSize: '',
    price: 0,
    rating: 0,
    reviewCount: 0,
    gallery: [],
    itinerary: [],
    highlights: [],
    activities: [],
    activitiesTransportation: {
      vehicle: '',
      transfer: ''
    },
    accommodation_details: {
      note: ''
    },
    accommodation: '',
    best_season: [],
    pricing: {
      seasonal_pricing: [],
      group_discounts: []
    },
    included_activities: [],
    inclusions: {
      excluded: []
    },
    gettingThere: {
      description: '',
      details: []
    },
    tourOperator: '',
    difficulty_level: ''
  };

  useEffect(() => {
    if (!slug) {
      console.log('No slug found');
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/packages/${slug}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch package: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        // Merge with default data to ensure all properties exist
        setPackageData({ ...defaultPackageData, ...data });
      } catch (error) {
        console.error('Error fetching package:', error);
        // Set default data on error
        setPackageData(defaultPackageData);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);
  const getData = (path, defaultValue = []) => {
    if (!packageData) return defaultValue;
    
    const keys = path.split('.');
    let value = packageData;
    
    for (const key of keys) {
      if (value[key] === undefined || value[key] === null) {
        return defaultValue;
      }
      value = value[key];
    }
    
    return value || defaultValue;
  };

  // Tab Content Components with safe data access
  const renderOverviewTab = () => {
    const gallery = getData('gallery', []);
    const itinerary = getData('itinerary', []);
    const highlights = getData('highlights', []);
    const activities = getData('activities', []);
    const activitiesTransportation = getData('activitiesTransportation', {});
    const accommodation_details = getData('accommodation_details', {});

    return (
      <div className="space-y-8">
        {/* Hero Gallery */}
        {gallery.length > 0 && (
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <img
                src={gallery[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
              <div className="flex space-x-2">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : gallery.length - 1)}
                  className="bg-white/90 text-[#465b2d] p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg border border-gray-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setCurrentImageIndex(prev => prev < gallery.length - 1 ? prev + 1 : 0)}
                  className="bg-white/90 text-[#465b2d] p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg border border-gray-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Calendar, value: `${getData('duration', 0)} Days`, label: 'Adventure' },
            { icon: Users, value: getData('groupSize', 'N/A'), label: 'Group Size' },
            { icon: MapPin, value: getData('destinations', []).length || 4, label: 'Destinations' },
            { icon: Shield, value: getData('difficulty_level', 'Moderate'), label: 'Experience Level' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#465b2d] rounded-2xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="text-white w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Route Summary */}
        {itinerary.length > 0 && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-3 h-8 bg-[#465b2d] rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-800">Journey Itinerary</h3>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#465b2d] hidden md:block"></div>
              <div className="space-y-6">
                {itinerary.map((day, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#465b2d] text-white flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="font-bold text-lg">D{day.day || index + 1}</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-[#465b2d] transition-all duration-300 group-hover:shadow-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-bold text-[#465b2d] group-hover:text-[#3a4a24] transition-colors duration-300">
                          {day.title || `Day ${day.day || index + 1}`}
                        </h4>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                          Day {day.day || index + 1}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{day.description || 'Description not available'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tour Features */}
        {highlights.length > 0 && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-3 h-8 bg-[#465b2d] rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-800">Tour Highlights</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-[#465b2d] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Activities & Transportation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activities.length > 0 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <Mountain className="text-[#465b2d] w-5 h-5 mr-4" />
                <h3 className="text-xl font-bold text-gray-800">Adventure Activities</h3>
              </div>
              <div className="space-y-3">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <Check className="text-[#465b2d] mr-3 flex-shrink-0 w-4 h-4" />
                    <span className="text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <Car className="text-[#465b2d] w-5 h-5 mr-4" />
              <h3 className="text-xl font-bold text-gray-800">Transport & Comfort</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                <Car className="text-[#465b2d] w-6 h-6 mr-4" />
                <div>
                  <div className="font-semibold text-gray-800">Vehicle Type</div>
                  <div className="text-gray-700">{activitiesTransportation.vehicle || '4x4 Safari Vehicle'}</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                <Plane className="text-[#465b2d] w-6 h-6 mr-4" />
                <div>
                  <div className="font-semibold text-gray-800">Transfers Included</div>
                  <div className="text-gray-700">{activitiesTransportation.transfer || 'Airport transfers included'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        {gallery.length > 0 && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <Camera className="text-[#465b2d] w-5 h-5 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Photo Gallery</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.map((img, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Other tab render functions would follow similar pattern...

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#465b2d] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading package details...</p>
        </div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Package Not Found</h1>
          <p className="text-gray-600 mb-4">Sorry, we couldn't find the package you're looking for.</p>
          <Link href="/packages" className="text-[#465b2d] hover:underline">
            ← Back to All Packages
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Tour Overview', icon: Globe },
    { id: 'day-by-day', label: 'Day by Day', icon: Calendar },
    { id: 'rates', label: 'Pricing', icon: Ticket },
    { id: 'inclusions', label: 'Inclusions', icon: Check },
    { id: 'getting-there', label: 'Getting There', icon: Map },
    { id: 'offered-by', label: 'Tour Operator', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-16 md:py-20"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${getData('gallery[0]', '/default-hero.jpg')})` 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            href="/packages" 
            className="inline-flex items-center text-white/90 hover:text-white mb-8 text-sm font-medium transition-colors"
          >
            <ChevronLeft className="mr-1 w-4 h-4" /> Back to All Packages
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Main Info */}
            <div className="flex-1 text-white">
              <span className="inline-block text-sm font-semibold text-yellow-300 mb-2 tracking-wider">
                PREMIUM SAFARI
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {getData('name', 'Safari Package')}
              </h1>
              <p className="text-lg text-white/85 max-w-3xl mb-6">
                {getData('full_description', 'Experience the ultimate African adventure')}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 text-sm">
                <div className="flex items-center">
                  <MapPin className="mr-1.5 w-4 h-4 text-white/70" />
                  <span>{getData('location', 'Tanzania')}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1.5 w-4 h-4 text-white/70" />
                  <span>{getData('duration', 0)} Days</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-1.5 w-4 h-4 text-white/70" />
                  <span>Max {getData('groupSize', '12')}</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-300 mr-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(getData('rating', 0)) ? 'fill-current' : 'text-yellow-200'}`}
                      />
                    ))}
                  </div>
                  <span>{getData('rating', 0)}/5 ({getData('reviewCount', 0)})</span>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-gray-900 w-full max-w-xs">
              <div className="text-center mb-5">
                <div className="text-3xl font-bold mb-1">${getData('price', 0)}</div>
                <div className="text-gray-600 text-sm">per person</div>
              </div>
              <button className="w-full bg-[#465b2d] text-white font-medium py-3 rounded-xl hover:bg-[#3a4a24] transition-colors mb-3">
                Book Now
              </button>
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="w-full flex items-center justify-center gap-2 text-gray-700 font-medium py-3 rounded-xl border border-gray-300 hover:bg-gray-50"
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'text-red-500 fill-current' : ''}`} />
                {isFavorite ? 'Saved' : 'Save Package'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <nav className="sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Package Details</h3>
              <ul className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center px-4 py-3 rounded-lg text-left text-sm font-medium ${
                          activeTab === tab.id
                            ? 'bg-[#465b2d]/10 text-[#465b2d] border-r-2 border-[#465b2d]'
                            : 'text-gray-600 hover:text-[#465b2d] hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="mr-3 w-4 h-4" />
                        {tab.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Main Panel */}
          <main className="lg:w-3/4">
            <div className="mb-16">
              {activeTab === 'overview' && renderOverviewTab()}
              {/* Add other tabs as needed */}
              {activeTab !== 'overview' && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-600">Tab content coming soon</h3>
                  <p className="text-gray-500 mt-2">This tab is under development</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsPage;