'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Check, 
  ChevronRight, 
  Upload, 
  X, 
  Calendar,
  MapPin,
  Star,
  Users,
  DollarSign,
  FileText,
  Image,
  Settings,
  Plus,
  Trash2,
  Eye,
  Hotel,
  Activity,
  Shield,
  Tag,
  Map
} from 'lucide-react';

const TOUR_TYPES = ['Safari', 'Trekking', 'Cultural Tour', 'Adventure', 'Beach', 'Wildlife', 'Mountain'];
const COMFORT_LEVELS = ['Budget', 'Comfortable', 'Luxury', 'Ultra Luxury'];
const ACCOMMODATIONS = ['Luxury Lodge', 'Tented Camp', 'Budget Lodge', 'Mid-Range Resort', 'Hotel', 'Eco Camp'];
const DIFFICULTY_LEVELS = ['Easy', 'Moderate', 'Challenging', 'Expert'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Color constants
const COLORS = {
  primary: '#465b2d',
  primaryLight: '#5a7444',
  primaryDark: '#3a4a24',
  secondary: '#8a9a5b',
  accent: '#a8b98a'
};

export default function NewPackagePage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  const steps = [
    { name: 'Basic Info', icon: FileText },
    { name: 'Details', icon: Settings },
    { name: 'Itinerary', icon: MapPin },
    { name: 'Accommodation', icon: Hotel },
    { name: 'Activities', icon: Activity },
    { name: 'Additional Details', icon: Map },
    { name: 'Pricing', icon: DollarSign },
    { name: 'Media', icon: Image },
    { name: 'Policies', icon: Shield },
    { name: 'Review', icon: Eye }
  ];

  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    slug: '',
    duration: 5,
    price: '',
    short_description: '',
    description: '',
    full_description: '',
    location: 'Tanzania',
    
    // Details
    tour_type: 'Safari',
    comfort_level: 'Comfortable',
    accommodation: 'Luxury Lodge',
    best_season: [],
    difficulty_level: 'Moderate',
    destinations: [],
    highlights: [],
    
    // Itinerary
    itinerary: Array.from({ length: 5 }, (_, i) => ({
      day: i + 1,
      title: '',
      description: '',
      meals: { breakfast: false, lunch: false, dinner: false },
      accommodation: ''
    })),
    
    // Accommodation
    accommodation_details: {
      note: '',
      inclusions: []
    },
    
    // Activities
    activities: [],
    included_activities: [],
    
    // Additional Details
    groupSize: '',
    tourFeatures: [],
    activitiesTransportation: {
      activities: [],
      vehicle: '',
      transfer: ''
    },
    inclusions: {
      included: [],
      excluded: []
    },
    gettingThere: {
      description: '',
      details: []
    },
    tourOperator: 'Soul of Tanzania',
    
    // Pricing
    pricing: {
      base_price: '',
      seasonal_pricing: [
        { season: 'Low', price: '', start_month: 'January', end_month: 'March' },
        { season: 'Shoulder', price: '', start_month: 'April', end_month: 'June' },
        { season: 'High', price: '', start_month: 'July', end_month: 'December' }
      ],
      group_discounts: [
        { min_people: 2, discount: 10 },
        { min_people: 4, discount: 15 },
        { min_people: 6, discount: 20 }
      ]
    },
    
    // Media
    image: '',
    gallery: [],
    
    // Policies
    policies: {
      cancellation: '',
      health_safety: '',
      insurance: ''
    },
    
    // Additional
    rating: 4.8,
    review_count: 0,
    reviewCount: 0,
    group_size_min: 1,
    group_size_max: 6,
    featured: false,
    popular: false,
    status: 'draft'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'name' && !prev.slug && {
        slug: value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      }),
      ...(name === 'group_size_min' || name === 'group_size_max' ? {
        groupSize: `${name === 'group_size_min' ? value : prev.group_size_min}-${name === 'group_size_max' ? value : prev.group_size_max} People`
      } : {})
    }));
  };

  const handleNestedChange = (path, value) => {
    setFormData(prev => {
      const keys = path.split('.');
      const updated = { ...prev };
      let current = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]] = { ...current[keys[i]] };
      }
      current[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  const handleArrayField = (field, action, value, index = null) => {
    setFormData(prev => {
      const currentArray = prev[field] || [];
      let newArray;
      if (action === 'add') {
        newArray = [...currentArray, value];
      } else if (action === 'remove') {
        newArray = currentArray.filter((_, i) => i !== index);
      } else if (action === 'update') {
        newArray = currentArray.map((item, i) => i === index ? value : item);
      } else if (action === 'toggle') {
        newArray = currentArray.includes(value)
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value];
      }
      return { ...prev, [field]: newArray };
    });
  };

  const handleImageUpload = async (event, type = 'main') => {
    const file = event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }
    setUploading(true);
    setError('');
    try {
      const formDataUpload = new FormData();
      formDataUpload.append('file', file);
      formDataUpload.append('type', type);
      const response = await fetch('/admin/packages/api/upload', {
        method: 'POST',
        body: formDataUpload,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Upload failed');
      }
      if (type === 'main') {
        setFormData(prev => ({ ...prev, image: data.url }));
      } else {
        setFormData(prev => ({ ...prev, gallery: [...prev.gallery, data.url] }));
      }
      setSuccess('Image uploaded successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to upload image: ' + err.message);
    } finally {
      setUploading(false);
      event.target.value = '';
    }
  };

  const transformFormData = (data) => {
    // Auto-generate groupSize from min/max
    const groupSize = `${data.group_size_min}-${data.group_size_max} People`;
    
    // Transform itinerary to route days
    const routeDays = data.itinerary.map(day => ({
      day: day.day,
      location: day.title.split(' in ').pop() || day.title
    }));

    // Transform activities for activitiesTransportation
    const activitiesTransportation = {
      activities: data.activities,
      vehicle: data.activitiesTransportation.vehicle,
      transfer: data.activitiesTransportation.transfer
    };

    // Transform accommodation schedule
    const accommodationSchedule = data.itinerary.map(day => ({
      day: `Day ${day.day}`,
      accommodation: day.accommodation,
      accommodationType: data.accommodation,
      meals: Object.entries(day.meals)
        .filter(([_, included]) => included)
        .map(([meal]) => meal.charAt(0).toUpperCase() + meal.slice(1))
        .join(', ') || 'None'
    }));

    // Transform pricing for rates
    const ratesPricing = data.pricing.seasonal_pricing
      .filter(season => season.price)
      .map(season => ({
        period: season.season,
        solo: `$${parseInt(season.price) * 1.2}`,
        oneRoomTwoPeople: `$${season.price}`,
        oneRoomFourPeople: `$${parseInt(season.price) * 0.95}`,
        threeRoomsSixPeople: `$${parseInt(season.price) * 0.9}`
      }));

    return {
      ...data,
      groupSize,
      route: { days: routeDays },
      activitiesTransportation,
      accommodationMeals: {
        note: data.accommodation_details.note,
        schedule: accommodationSchedule
      },
      rates: { pricing: ratesPricing },
      reviewCount: data.review_count,
      full_description: data.full_description || data.description,
      tourFeatures: data.tourFeatures.length > 0 ? data.tourFeatures : data.highlights,
      inclusions: {
        included: data.inclusions.included.length > 0 ? data.inclusions.included : data.included_activities,
        excluded: data.inclusions.excluded
      },
      gettingThere: {
        description: data.gettingThere.description || `Travel to ${data.location} for your adventure.`,
        details: data.gettingThere.details.length > 0 ? data.gettingThere.details : [
          'International flights to major airports',
          'Airport transfers included',
          'Domestic flights if required'
        ]
      }
    };
  };

  const handleSaveDraft = async () => {
    if (!formData.name.trim()) {
      setError('Package name is required');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const transformedData = transformFormData(formData);
      const response = await fetch('/admin/packages/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...transformedData,
          pricing: {
            ...transformedData.pricing,
            base_price: transformedData.price
          },
          status: 'draft',
          is_draft: true
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save draft');
      }

      setSuccess('Draft saved successfully!');
      setTimeout(() => router.push('/admin/packages'), 1500);
    } catch (err) {
      setError('Failed to save draft: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePublish = async () => {
    if (!formData.name.trim()) {
      setError('Package name is required');
      return;
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      setError('Valid package price is required');
      return;
    }

    if (!confirm('Are you sure you want to publish this package? It will be visible to customers.')) {
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const transformedData = transformFormData(formData);
      const response = await fetch('/admin/packages/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...transformedData,
          pricing: {
            ...transformedData.pricing,
            base_price: transformedData.price
          },
          status: 'published',
          is_draft: false,
          published_at: new Date().toISOString()
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to publish package');
      }

      setSuccess('Package published successfully!');
      setTimeout(() => router.push('/admin/packages'), 1500);
    } catch (err) {
      setError('Failed to publish package: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const addItineraryDay = () => {
    setFormData(prev => ({
      ...prev,
      itinerary: [
        ...prev.itinerary,
        {
          day: prev.itinerary.length + 1,
          title: '',
          description: '',
          meals: { breakfast: false, lunch: false, dinner: false },
          accommodation: ''
        }
      ]
    }));
  };

  const removeItineraryDay = (index) => {
    setFormData(prev => ({
      ...prev,
      itinerary: prev.itinerary.filter((_, i) => i !== index).map((day, idx) => ({
        ...day,
        day: idx + 1
      }))
    }));
  };

  const updateItineraryDay = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      itinerary: prev.itinerary.map((day, i) => 
        i === index ? { ...day, [field]: value } : day
      )
    }));
  };

  const updateMeal = (dayIndex, meal, checked) => {
    setFormData(prev => ({
      ...prev,
      itinerary: prev.itinerary.map((day, i) => 
        i === dayIndex ? { 
          ...day, 
          meals: { ...day.meals, [meal]: checked } 
        } : day
      )
    }));
  };

  const renderStep = () => {
    const StepIcon = steps[activeStep].icon;
    const baseInputClass = "w-full px-3 py-2 border border-gray-300 rounded-lg transition-colors focus:ring-2 focus:ring-[#465b2d] focus:border-transparent";

    switch(activeStep) {
      case 0: // Basic Info
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.primary}20` }}>
                <StepIcon className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
                <p className="text-sm text-gray-600">Enter the basic details of your package</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Package Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={baseInputClass}
                  placeholder="Serengeti Safari Adventure"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className={baseInputClass}
                  placeholder="serengeti-safari-adventure"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (Days)
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className={baseInputClass}
                >
                  {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
                    <option key={day} value={day}>{day} days</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price (USD) *
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={(e) => {
                      handleChange(e);
                      handleNestedChange('pricing.base_price', e.target.value);
                    }}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#465b2d] focus:border-transparent transition-colors"
                    placeholder="2499.00"
                    step="0.01"
                    min="0"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">This is the base price per person</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tour Type
                </label>
                <select
                  name="tour_type"
                  value={formData.tour_type}
                  onChange={handleChange}
                  className={baseInputClass}
                >
                  {TOUR_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Short Description
              </label>
              <textarea
                name="short_description"
                value={formData.short_description}
                onChange={handleChange}
                rows="2"
                className={baseInputClass}
                placeholder="Brief description for cards and listings"
                maxLength="160"
              />
              <div className="text-xs text-gray-500 text-right mt-1">
                {formData.short_description.length}/160
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className={baseInputClass}
                placeholder="Detailed package description..."
              />
            </div>
          </div>
        );

      case 1: // Details
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.primary}20` }}>
                <StepIcon className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Package Details</h3>
                <p className="text-sm text-gray-600">Configure the package specifications</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comfort Level
                </label>
                <select
                  name="comfort_level"
                  value={formData.comfort_level}
                  onChange={handleChange}
                  className={baseInputClass}
                >
                  {COMFORT_LEVELS.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Accommodation
                </label>
                <select
                  name="accommodation"
                  value={formData.accommodation}
                  onChange={handleChange}
                  className={baseInputClass}
                >
                  {ACCOMMODATIONS.map(acc => (
                    <option key={acc} value={acc}>{acc}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level
                </label>
                <select
                  name="difficulty_level"
                  value={formData.difficulty_level}
                  onChange={handleChange}
                  className={baseInputClass}
                >
                  {DIFFICULTY_LEVELS.map(diff => (
                    <option key={diff} value={diff}>{diff}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Group Size
                </label>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-1">Minimum</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="number"
                        name="group_size_min"
                        value={formData.group_size_min}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#465b2d] focus:border-transparent transition-colors"
                        min="1"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-1">Maximum</label>
                    <input
                      type="number"
                      name="group_size_max"
                      value={formData.group_size_max}
                      onChange={handleChange}
                      className={baseInputClass}
                      min="1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Best Time to Visit
              </label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {MONTHS.map(month => (
                  <button
                    key={month}
                    type="button"
                    onClick={() => handleArrayField('best_season', 'toggle', month)}
                    className={`p-2 text-sm rounded-lg border transition-all ${
                      formData.best_season.includes(month)
                        ? 'text-white border-transparent'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }`}
                    style={formData.best_season.includes(month) ? 
                      { backgroundColor: COLORS.primary } : 
                      {}
                    }
                  >
                    {month.substring(0, 3)}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destinations
              </label>
              <div className="space-y-2">
                {formData.destinations.map((destination, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => handleArrayField('destinations', 'update', e.target.value, index)}
                      className={baseInputClass}
                      placeholder="Enter destination"
                    />
                    <button
                      type="button"
                      onClick={() => handleArrayField('destinations', 'remove', null, index)}
                      className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleArrayField('destinations', 'add', '')}
                  className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Destination
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Highlights
              </label>
              <div className="space-y-2">
                {formData.highlights.map((highlight, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={highlight}
                      onChange={(e) => handleArrayField('highlights', 'update', e.target.value, index)}
                      className={baseInputClass}
                      placeholder="Enter highlight"
                    />
                    <button
                      type="button"
                      onClick={() => handleArrayField('highlights', 'remove', null, index)}
                      className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleArrayField('highlights', 'add', '')}
                  className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Highlight
                </button>
              </div>
            </div>
          </div>
        );

      case 2: // Itinerary
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.primary}20` }}>
                <StepIcon className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Daily Itinerary</h3>
                <p className="text-sm text-gray-600">Plan your daily schedule and activities</p>
              </div>
            </div>
            <div className="space-y-4">
              {formData.itinerary.map((day, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                           style={{ backgroundColor: COLORS.primary }}>
                        {day.day}
                      </div>
                      <h4 className="font-medium text-gray-900">Day {day.day}</h4>
                    </div>
                    {formData.itinerary.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItineraryDay(index)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Day Title
                      </label>
                      <input
                        type="text"
                        value={day.title}
                        onChange={(e) => updateItineraryDay(index, 'title', e.target.value)}
                        className={baseInputClass}
                        placeholder="e.g., Arrival in Arusha"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        value={day.description}
                        onChange={(e) => updateItineraryDay(index, 'description', e.target.value)}
                        rows="3"
                        className={baseInputClass}
                        placeholder="Describe the day's activities and schedule..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meals Included
                      </label>
                      <div className="flex gap-4">
                        {['breakfast', 'lunch', 'dinner'].map(meal => (
                          <label key={meal} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={day.meals[meal]}
                              onChange={(e) => updateMeal(index, meal, e.target.checked)}
                              className="rounded border-gray-300 transition-colors"
                              style={{ accentColor: COLORS.primary }}
                            />
                            <span className="text-sm text-gray-700 capitalize">{meal}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Accommodation
                      </label>
                      <input
                        type="text"
                        value={day.accommodation}
                        onChange={(e) => updateItineraryDay(index, 'accommodation', e.target.value)}
                        className={baseInputClass}
                        placeholder="e.g., Luxury Lodge"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addItineraryDay}
                className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Another Day
              </button>
            </div>
          </div>
        );

      case 3: // Accommodation
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.primary}20` }}>
                <StepIcon className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Accommodation Details</h3>
                <p className="text-sm text-gray-600">Specify accommodation standards and inclusions</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Accommodation Note
              </label>
              <textarea
                value={formData.accommodation_details.note}
                onChange={(e) => handleNestedChange('accommodation_details.note', e.target.value)}
                rows="3"
                className={baseInputClass}
                placeholder="Describe the accommodation standards, facilities, and special features..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Accommodation Inclusions
              </label>
              <div className="space-y-2">
                {formData.accommodation_details.inclusions.map((inclusion, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={inclusion}
                      onChange={(e) => {
                        const newInclusions = [...formData.accommodation_details.inclusions];
                        newInclusions[index] = e.target.value;
                        handleNestedChange('accommodation_details.inclusions', newInclusions);
                      }}
                      className={baseInputClass}
                      placeholder="e.g., Private bathroom, Air conditioning, WiFi"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newInclusions = formData.accommodation_details.inclusions.filter((_, i) => i !== index);
                        handleNestedChange('accommodation_details.inclusions', newInclusions);
                      }}
                      className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const newInclusions = [...formData.accommodation_details.inclusions, ''];
                    handleNestedChange('accommodation_details.inclusions', newInclusions);
                  }}
                  className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Inclusion
                </button>
              </div>
            </div>
          </div>
        );

      case 4: // Activities
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.primary}20` }}>
                <StepIcon className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Activities & Inclusions</h3>
                <p className="text-sm text-gray-600">List all activities and what's included</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Activities
              </label>
              <div className="space-y-2">
                {formData.activities.map((activity, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={activity}
                      onChange={(e) => handleArrayField('activities', 'update', e.target.value, index)}
                      className={baseInputClass}
                      placeholder="e.g., Game drives, Nature walks, Cultural visits"
                    />
                    <button
                      type="button"
                      onClick={() => handleArrayField('activities', 'remove', null, index)}
                      className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleArrayField('activities', 'add', '')}
                  className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Activity
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Included Activities
              </label>
              <div className="space-y-2">
                {formData.included_activities.map((activity, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={activity}
                      onChange={(e) => handleArrayField('included_activities', 'update', e.target.value, index)}
                      className={baseInputClass}
                      placeholder="e.g., All park fees, Professional guide, Transportation"
                    />
                    <button
                      type="button"
                      onClick={() => handleArrayField('included_activities', 'remove', null, index)}
                      className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleArrayField('included_activities', 'add', '')}
                  className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Included Activity
                </button>
              </div>
            </div>
          </div>
        );
case 5: // Additional Details
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.primary}20` }}>
          <StepIcon className="w-6 h-6" style={{ color: COLORS.primary }} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Additional Package Details</h3>
          <p className="text-sm text-gray-600">Enhanced information for detailed package view</p>
        </div>
      </div>

      {/* Full Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Description (Hero Section)
        </label>
        <textarea
          value={formData.full_description}
          onChange={(e) => handleChange({ target: { name: 'full_description', value: e.target.value } })}
          rows="4"
          className={baseInputClass}
          placeholder="Detailed description for the hero section of your package page..."
        />
        <p className="text-xs text-gray-500 mt-1">This appears in the main hero section below the package name</p>
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Main Location
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className={baseInputClass}
          placeholder="e.g., Tanzania, Kenya, South Africa"
        />
      </div>

      {/* Tour Features */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tour Features
        </label>
        <div className="space-y-2">
          {formData.tourFeatures.map((feature, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={feature}
                onChange={(e) => handleArrayField('tourFeatures', 'update', e.target.value, index)}
                className={baseInputClass}
                placeholder="e.g., Expert Local Guides, Luxury Accommodation"
              />
              <button
                type="button"
                onClick={() => handleArrayField('tourFeatures', 'remove', null, index)}
                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleArrayField('tourFeatures', 'add', '')}
            className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Tour Feature
          </button>
        </div>
      </div>

      {/* Transportation Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Type
          </label>
          <input
            type="text"
            value={formData.activitiesTransportation.vehicle}
            onChange={(e) => handleNestedChange('activitiesTransportation.vehicle', e.target.value)}
            className={baseInputClass}
            placeholder="e.g., 4x4 Land Cruiser with Pop-up Roof"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transfer Details
          </label>
          <input
            type="text"
            value={formData.activitiesTransportation.transfer}
            onChange={(e) => handleNestedChange('activitiesTransportation.transfer', e.target.value)}
            className={baseInputClass}
            placeholder="e.g., All airport transfers included"
          />
        </div>
      </div>

      {/* Inclusions & Exclusions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What's Included
          </label>
          <div className="space-y-2">
            {formData.inclusions.included.map((item, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const newIncluded = [...formData.inclusions.included];
                    newIncluded[index] = e.target.value;
                    handleNestedChange('inclusions.included', newIncluded);
                  }}
                  className={baseInputClass}
                  placeholder="e.g., All park fees, Professional guide"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newIncluded = formData.inclusions.included.filter((_, i) => i !== index);
                    handleNestedChange('inclusions.included', newIncluded);
                  }}
                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                const newIncluded = [...formData.inclusions.included, ''];
                handleNestedChange('inclusions.included', newIncluded);
              }}
              className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Inclusion
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What's Not Included
          </label>
          <div className="space-y-2">
            {formData.inclusions.excluded.map((item, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const newExcluded = [...formData.inclusions.excluded];
                    newExcluded[index] = e.target.value;
                    handleNestedChange('inclusions.excluded', newExcluded);
                  }}
                  className={baseInputClass}
                  placeholder="e.g., International flights, Travel insurance"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newExcluded = formData.inclusions.excluded.filter((_, i) => i !== index);
                    handleNestedChange('inclusions.excluded', newExcluded);
                  }}
                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                const newExcluded = [...formData.inclusions.excluded, ''];
                handleNestedChange('inclusions.excluded', newExcluded);
              }}
              className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Exclusion
            </button>
          </div>
        </div>
      </div>

      {/* Getting There Information */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Getting There Description
        </label>
        <textarea
          value={formData.gettingThere.description}
          onChange={(e) => handleNestedChange('gettingThere.description', e.target.value)}
          rows="3"
          className={baseInputClass}
          placeholder="Describe how travelers get to the starting point of the tour..."
        />
      </div>

      {/* Tour Operator */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tour Operator Name
        </label>
        <input
          type="text"
          name="tourOperator"
          value={formData.tourOperator}
          onChange={handleChange}
          className={baseInputClass}
          placeholder="e.g., Soul of Tanzania"
        />
      </div>

      {/* ✅ Package Tags – Now at top level */}
      <div className="mt-6">
        <h4 className="text-md font-medium text-gray-900 mb-3">Package Tags</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-3 cursor-pointer">
              <Tag className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Mark as Featured Package</span>
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                className="sr-only"
              />
              <div
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                  formData.featured ? 'bg-[#465b2d]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform ${
                    formData.featured ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-3 cursor-pointer">
              <Star className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Mark as Popular Package</span>
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.popular}
                onChange={(e) => setFormData(prev => ({ ...prev, popular: e.target.checked }))}
                className="sr-only"
              />
              <div
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                  formData.popular ? 'bg-[#465b2d]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform ${
                    formData.popular ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

      case 6: // Pricing
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.primary}20` }}>
                <StepIcon className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Pricing Structure</h3>
                <p className="text-sm text-gray-600">Set up your pricing and discounts</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Base Price (USD) *
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, price: e.target.value }));
                      handleNestedChange('pricing.base_price', e.target.value);
                    }}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#465b2d] focus:border-transparent transition-colors"
                    placeholder="2499.00"
                    step="0.01"
                    min="0"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">This will be displayed as the main package price</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currency
                </label>
                <select 
                  className={baseInputClass}
                  defaultValue="USD"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
            </div>

            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Seasonal Pricing</h4>
              <div className="space-y-4">
                {formData.pricing.seasonal_pricing.map((season, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Season</label>
                      <input
                        type="text"
                        value={season.season}
                        onChange={(e) => {
                          const newPricing = [...formData.pricing.seasonal_pricing];
                          newPricing[index] = { ...newPricing[index], season: e.target.value };
                          handleNestedChange('pricing.seasonal_pricing', newPricing);
                        }}
                        className={baseInputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="number"
                          value={season.price}
                          onChange={(e) => {
                            const newPricing = [...formData.pricing.seasonal_pricing];
                            newPricing[index] = { ...newPricing[index], price: e.target.value };
                            handleNestedChange('pricing.seasonal_pricing', newPricing);
                          }}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#465b2d] focus:border-transparent transition-colors"
                          step="0.01"
                          min="0"
                          placeholder="Optional"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Start Month</label>
                      <select 
                        value={season.start_month}
                        onChange={(e) => {
                          const newPricing = [...formData.pricing.seasonal_pricing];
                          newPricing[index] = { ...newPricing[index], start_month: e.target.value };
                          handleNestedChange('pricing.seasonal_pricing', newPricing);
                        }}
                        className={baseInputClass}
                      >
                        {MONTHS.map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">End Month</label>
                      <select 
                        value={season.end_month}
                        onChange={(e) => {
                          const newPricing = [...formData.pricing.seasonal_pricing];
                          newPricing[index] = { ...newPricing[index], end_month: e.target.value };
                          handleNestedChange('pricing.seasonal_pricing', newPricing);
                        }}
                        className={baseInputClass}
                      >
                        {MONTHS.map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Seasonal pricing is optional. If left empty, the base price will be used.
              </p>
            </div>

            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Group Discounts</h4>
              <div className="space-y-3">
                {formData.pricing.group_discounts.map((discount, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-1">Minimum People</label>
                      <input
                        type="number"
                        value={discount.min_people}
                        onChange={(e) => {
                          const newDiscounts = [...formData.pricing.group_discounts];
                          newDiscounts[index] = { ...newDiscounts[index], min_people: parseInt(e.target.value) || 0 };
                          handleNestedChange('pricing.group_discounts', newDiscounts);
                        }}
                        className={baseInputClass}
                        min="2"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-1">Discount %</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={discount.discount}
                          onChange={(e) => {
                            const newDiscounts = [...formData.pricing.group_discounts];
                            newDiscounts[index] = { ...newDiscounts[index], discount: parseInt(e.target.value) || 0 };
                            handleNestedChange('pricing.group_discounts', newDiscounts);
                          }}
                          className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#465b2d] focus:border-transparent transition-colors"
                          min="0"
                          max="100"
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">%</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const newDiscounts = formData.pricing.group_discounts.filter((_, i) => i !== index);
                        handleNestedChange('pricing.group_discounts', newDiscounts);
                      }}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-5"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={() => {
                    const newDiscounts = [
                      ...formData.pricing.group_discounts,
                      { min_people: 2, discount: 10 }
                    ];
                    handleNestedChange('pricing.group_discounts', newDiscounts);
                  }}
                  className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Group Discount
                </button>
              </div>
            </div>

            {/* Additional Pricing Options */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Additional Pricing Options</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 mb-2">
                    <input type="checkbox" className="rounded border-gray-300 transition-colors" style={{ accentColor: COLORS.primary }} />
                    <span className="text-sm text-gray-700">Single supplement fee</span>
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="number"
                      placeholder="Single supplement amount"
                      className={baseInputClass}
                      step="0.01"
                      min="0"
                    />
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 mb-2">
                    <input type="checkbox" className="rounded border-gray-300 transition-colors" style={{ accentColor: COLORS.primary }} />
                    <span className="text-sm text-gray-700">Child discount available</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Child discount %"
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#465b2d] focus:border-transparent transition-colors"
                      min="0"
                      max="100"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 7: // Media
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.primary}20` }}>
                <StepIcon className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Media Gallery</h3>
                <p className="text-sm text-gray-600">Upload images for your package</p>
              </div>
            </div>

            {/* Main Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Main Image</label>
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 transition-colors hover:border-gray-400">
                {formData.image ? (
                  <div className="relative">
                    <img
                      src={formData.image}
                      alt="Package preview"
                      className="w-64 h-48 object-cover rounded-lg shadow-md"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                      aria-label="Remove main image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Image className="w-12 h-12 text-gray-400 mb-4" />
                    <p className="text-gray-500 mb-2 text-center">
                      Upload a main image for your package<br />
                      <span className="text-xs">Recommended: 1200x800 pixels</span>
                    </p>
                    <label
                      className="px-4 py-2 text-white rounded-lg cursor-pointer transition-colors flex items-center gap-2"
                      style={{ backgroundColor: COLORS.primary }}
                      onMouseOver={(e) => { e.target.style.backgroundColor = COLORS.primaryLight; }}
                      onMouseOut={(e) => { e.target.style.backgroundColor = COLORS.primary; }}
                    >
                      <Upload className="w-4 h-4" />
                      {uploading ? 'Uploading...' : 'Choose Image'}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, 'main')}
                        className="hidden"
                        disabled={uploading}
                      />
                    </label>
                  </>
                )}
              </div>
            </div>

            {/* Gallery Images */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Gallery Images</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {formData.gallery.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg shadow-sm group-hover:opacity-75 transition-opacity"
                    />
                    <button
                      type="button"
                      onClick={() => handleArrayField('gallery', 'remove', null, index)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                      aria-label={`Remove image ${index + 1}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <label
                  className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors h-24"
                  onMouseOver={(e) => { e.target.style.borderColor = COLORS.primary; }}
                  onMouseOut={(e) => { e.target.style.borderColor = '#d1d5db'; }}
                >
                  {uploading ? (
                    <div className="text-gray-400">
                      <Upload className="w-6 h-6 animate-pulse" />
                    </div>
                  ) : (
                    <>
                      <Plus className="w-6 h-6 text-gray-400" />
                      <span className="text-xs text-gray-500 mt-1">Add Image</span>
                      <input
                        ref={galleryInputRef}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, 'gallery')}
                        className="hidden"
                        disabled={uploading}
                      />
                    </>
                  )}
                </label>
              </div>
              <p className="text-xs text-gray-500">
                Add up to 10 images to showcase your package. Supported formats: JPG, PNG, WebP. Max size: 5MB per image.
              </p>
            </div>
          </div>
        );

      case 8: // Policies
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.primary}20` }}>
                <StepIcon className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Policies & Safety</h3>
                <p className="text-sm text-gray-600">Set cancellation and safety policies</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cancellation Policy
              </label>
              <textarea
                value={formData.policies.cancellation}
                onChange={(e) => handleNestedChange('policies.cancellation', e.target.value)}
                rows="4"
                className={baseInputClass}
                placeholder="Describe your cancellation policy, refund terms, and conditions..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Health & Safety Information
              </label>
              <textarea
                value={formData.policies.health_safety}
                onChange={(e) => handleNestedChange('policies.health_safety', e.target.value)}
                rows="4"
                className={baseInputClass}
                placeholder="Include health requirements, safety measures, vaccination info..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Insurance Information
              </label>
              <textarea
                value={formData.policies.insurance}
                onChange={(e) => handleNestedChange('policies.insurance', e.target.value)}
                rows="3"
                className={baseInputClass}
                placeholder="Describe insurance requirements and recommendations..."
              />
            </div>
          </div>
        );

      case 9: // Review
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.primary}20` }}>
                <StepIcon className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Review & Publish</h3>
                <p className="text-sm text-gray-600">Review your package details before publishing</p>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Left Column - Package Details */}
              <div className="xl:col-span-2 space-y-6">
                {/* Package Summary */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" style={{ color: COLORS.primary }} />
                    Package Summary
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Package Name</dt>
                        <dd className="text-sm text-gray-900 mt-1 font-semibold">{formData.name || 'Not set'}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Duration</dt>
                        <dd className="text-sm text-gray-900 mt-1">{formData.duration} days / {formData.duration - 1} nights</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Price</dt>
                        <dd className="text-sm text-gray-900 mt-1 font-semibold">${parseFloat(formData.price || 0).toLocaleString()} per person</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Tour Type</dt>
                        <dd className="text-sm text-gray-900 mt-1">{formData.tour_type}</dd>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Difficulty Level</dt>
                        <dd className="text-sm text-gray-900 mt-1">{formData.difficulty_level}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Group Size</dt>
                        <dd className="text-sm text-gray-900 mt-1">
                          {formData.group_size_min} - {formData.group_size_max} people
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Comfort Level</dt>
                        <dd className="text-sm text-gray-900 mt-1">{formData.comfort_level}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Accommodation</dt>
                        <dd className="text-sm text-gray-900 mt-1">{formData.accommodation}</dd>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing & Discounts */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" style={{ color: COLORS.primary }} />
                    Pricing & Discounts
                  </h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Seasonal Pricing</h5>
                        <div className="space-y-2">
                          {formData.pricing.seasonal_pricing.map((season, index) => (
                            season.price && (
                              <div key={index} className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">{season.season} Season</span>
                                <span className="font-medium">${parseFloat(season.price).toLocaleString()}</span>
                              </div>
                            )
                          ))}
                          {!formData.pricing.seasonal_pricing.some(s => s.price) && (
                            <p className="text-sm text-gray-500">No seasonal pricing configured</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Group Discounts</h5>
                        <div className="space-y-2">
                          {formData.pricing.group_discounts.map((discount, index) => (
                            <div key={index} className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">{discount.min_people}+ people</span>
                              <span className="font-medium text-green-600">{discount.discount}% off</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Itinerary Overview */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" style={{ color: COLORS.primary }} />
                    Itinerary Overview ({formData.itinerary.length} days)
                  </h4>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {formData.itinerary.map((day, index) => (
                      <div key={index} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                             style={{ backgroundColor: COLORS.primary }}>
                          {day.day}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-medium text-gray-900 truncate">
                            {day.title || `Day ${day.day}`}
                          </h5>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {day.description || 'No description provided'}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Hotel className="w-3 h-3" />
                              {day.accommodation || 'No accommodation'}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              {day.meals.breakfast && <span className="bg-green-100 text-green-800 px-1 rounded">B</span>}
                              {day.meals.lunch && <span className="bg-blue-100 text-blue-800 px-1 rounded">L</span>}
                              {day.meals.dinner && <span className="bg-orange-100 text-orange-800 px-1 rounded">D</span>}
                              {!day.meals.breakfast && !day.meals.lunch && !day.meals.dinner && 'No meals'}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Stats & Actions */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5" style={{ color: COLORS.primary }} />
                    Package Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-xl font-bold" style={{ color: COLORS.primary }}>
                        {formData.itinerary.length}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Days</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-xl font-bold" style={{ color: COLORS.primary }}>
                        {formData.destinations.length}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Destinations</div>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                      <div className="text-xl font-bold" style={{ color: COLORS.primary }}>
                        {formData.activities.length}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Activities</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-xl font-bold" style={{ color: COLORS.primary }}>
                        {formData.gallery.length + (formData.image ? 1 : 0)}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Images</div>
                    </div>
                  </div>
                </div>

                {/* Package Settings */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5" style={{ color: COLORS.primary }} />
                    Package Settings
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Tag className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700">Featured Package</span>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        formData.featured 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {formData.featured ? 'Yes' : 'No'}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Star className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700">Popular Package</span>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        formData.popular 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {formData.popular ? 'Yes' : 'No'}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700">Best Season</span>
                      </div>
                      <div className="text-xs text-gray-600 text-right">
                        {formData.best_season.length > 0 
                          ? formData.best_season.map(m => m.substring(0, 3)).join(', ')
                          : 'Not set'
                        }
                      </div>
                    </div>
                  </div>
                </div>

                {/* Media Preview */}
                {formData.image && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Image className="w-5 h-5" style={{ color: COLORS.primary }} />
                      Main Image
                    </h4>
                    <div className="aspect-video rounded-lg overflow-hidden border">
                      <img 
                        src={formData.image} 
                        alt="Package preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      {formData.gallery.length} additional images in gallery
                    </p>
                  </div>
                )}

                {/* Publishing Alert */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Shield className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Ready to Publish</h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p className="mb-2">Once published, this package will be visible to customers on your website.</p>
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>All information is accurate and complete</li>
                          <li>Pricing is correctly configured</li>
                          <li>Images are properly uploaded</li>
                          <li>Itinerary details are finalized</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Validation Status */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Validation Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Package Name</span>
                      {formData.name ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Price</span>
                      {formData.price && parseFloat(formData.price) > 0 ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Description</span>
                      {formData.description ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Main Image</span>
                      {formData.image ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/admin/packages" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Packages
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Create New Package</h1>
              <p className="text-sm text-gray-600 mt-1">Add a new safari package to your offerings</p>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <div className="mt-1 text-sm text-red-700">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-green-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Success</h3>
                <div className="mt-1 text-sm text-green-700">
                  <p>{success}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.name} className="flex items-center flex-1">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                      activeStep === index
                        ? 'text-white shadow-lg'
                        : activeStep > index
                        ? 'text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                    style={activeStep >= index ? 
                      { backgroundColor: activeStep === index ? COLORS.primary : COLORS.secondary } : 
                      {}
                    }
                  >
                    {activeStep > index ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </button>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-colors ${
                        activeStep > index ? '' : 'bg-gray-200'
                      }`}
                      style={activeStep > index ? { backgroundColor: COLORS.secondary } : {}}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-between mt-2">
            {steps.map((step, index) => (
              <span
                key={step.name}
                className={`text-xs transition-colors ${
                  activeStep === index ? 'font-medium' : 'text-gray-500'
                }`}
                style={activeStep === index ? { color: COLORS.primary } : {}}
              >
                {step.name}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 md:p-8">
            {renderStep()}
          </div>
          <div className="px-6 md:px-8 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
            <button
              type="button"
              onClick={() => setActiveStep(activeStep - 1)}
              disabled={activeStep === 0}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <div className="flex items-center gap-3">
              {activeStep === steps.length - 1 ? (
                <>
                  <button
                    type="button"
                    onClick={handleSaveDraft}
                    disabled={loading}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors"
                  >
                    {loading ? 'Saving...' : 'Save Draft'}
                  </button>
                  <button
                    type="button"
                    onClick={handlePublish}
                    disabled={loading}
                    className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg text-white disabled:opacity-50 transition-colors"
                    style={{ backgroundColor: COLORS.primary }}
                    onMouseOver={(e) => e.target.style.backgroundColor = COLORS.primaryLight}
                    onMouseOut={(e) => e.target.style.backgroundColor = COLORS.primary}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Publishing...
                      </>
                    ) : (
                      'Publish Package'
                    )}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg text-white transition-colors"
                  style={{ backgroundColor: COLORS.primary }}
                  onMouseOver={(e) => e.target.style.backgroundColor = COLORS.primaryLight}
                  onMouseOut={(e) => e.target.style.backgroundColor = COLORS.primary}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}