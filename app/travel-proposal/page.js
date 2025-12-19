// app/travel-proposal/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import {
  Calendar, User, Mail, Phone, MapPin, MessageSquare,
  ChevronLeft, Check, Star, Shield, Clock, Award, Headphones, X
} from 'lucide-react';

const COLORS = {
  primary: '#465b2d',
  light: '#f8f9f7',
};

// Age ranges instead of individual ages
const AGE_RANGES = [
  { value: '18-25', label: '18–25 years' },
  { value: '26-35', label: '26–35 years' },
  { value: '36-45', label: '36–45 years' },
  { value: '46-55', label: '46–55 years' },
  { value: '56-65', label: '56–65 years' },
  { value: '66+', label: '66+ years' },
  { value: 'mixed', label: 'Mixed ages' }
];

// Success Modal Component
function SuccessModal({ isOpen, onClose, userEmail, userPhone }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="bg-[#465b2d] text-white p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-emerald-200 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4">
            <Check size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-center">Thank You!</h3>
          <p className="text-emerald-100 text-center mt-2">Your information has been submitted successfully</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="text-center">
            <Mail className="w-12 h-12 text-[#465b2d] mx-auto mb-3" />
            <p className="text-gray-700 mb-2">
              We've received your travel proposal request at:
            </p>
            <p className="font-semibold text-[#465b2d] text-lg break-all">
              {userEmail}
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-[#465b2d] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">Response Time</p>
                <p className="text-sm text-gray-600">
                  Our team will respond to your inquiry within <span className="font-semibold text-[#465b2d]">8 hours</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Headphones className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">We'll Contact You</p>
                <p className="text-sm text-gray-600">
                  We will connect with you via email and phone at:
                  <span className="font-semibold text-blue-600 block mt-1">
                    {userPhone}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mt-4">
            <Shield className="w-4 h-4" />
            <span>Your information is secure with us</span>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4">
          <button
            onClick={onClose}
            className="w-full bg-[#465b2d] text-white py-3 rounded-lg font-medium hover:bg-[#3a4a24] transition-colors"
          >
            Continue Exploring
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TravelProposalPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    activities: [],
    days: 12,
    travelWith: '',
    arrivalDate: '',
    budget: 4500,
    // Step 2
    adults: 2,
    children: 0,
    adultAgeRange: '', // ✅ Replaces individual ages
    // Step 3
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    alternatePhone: '',
    country: 'United States',
    notes: '',
    newsletter: false,
    coupon: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const steps = [
    { number: 1, title: 'Plan', icon: Calendar },
    { number: 2, title: 'Travelers', icon: User },
    { number: 3, title: 'Contact', icon: Mail }
  ];

  // Validation
  const validateStep = (step) => {
    const newErrors = {};
    switch (step) {
      case 1:
        if (formData.activities.length === 0) newErrors.activities = "Select at least one activity";
        if (!formData.arrivalDate) newErrors.arrivalDate = "Select arrival date";
        if (!formData.travelWith) newErrors.travelWith = "Select travel type";
        break;
      case 2:
        if (formData.adults < 1) newErrors.adults = "At least 1 adult required";
        if (!formData.adultAgeRange) newErrors.adultAgeRange = "Select age range";
        break;
      case 3:
        if (!formData.firstName.trim()) newErrors.firstName = "First name required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
        if (!formData.email.trim()) newErrors.email = "Email required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
        if (!formData.phone.trim()) newErrors.phone = "Phone required";
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'activities') {
        setFormData(prev => {
          const activities = checked 
            ? [...prev.activities, value]
            : prev.activities.filter(a => a !== value);
          return { ...prev, activities };
        });
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleNumberChange = (field, delta) => {
    const newValue = Math.max(0, (formData[field] || 0) + delta);
    if ((field === 'adults' || field === 'children') && newValue > 10) return;
    setFormData(prev => ({ ...prev, [field]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    try {
      // ✅ Send the correct data structure
      const payload = {
        // Step 1
        activities: formData.activities,
        days: formData.days,
        travel_with: formData.travelWith,
        arrival_date: formData.arrivalDate,
        budget: formData.budget,

        // Step 2
        adults: formData.adults,
        children: formData.children,
        adult_ages: [formData.adultAgeRange], // ✅ array with one range string

        // Step 3
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        alternate_phone: formData.alternatePhone,
        country: formData.country,
        notes: formData.notes,
        newsletter: formData.newsletter,
        coupon: formData.coupon
      };

      const res = await fetch('/api/proposals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        // Show success modal instead of toast
        setShowSuccessModal(true);
        
        // Reset form
        setFormData({
          activities: [], days: 12, travelWith: '', arrivalDate: '', budget: 4500,
          adults: 2, children: 0, adultAgeRange: '', // ✅ reset new field
          firstName: '', lastName: '', email: '', phone: '', alternatePhone: '',
          country: 'United States', notes: '', newsletter: false, coupon: ''
        });
        setCurrentStep(1);
      } else {
        const err = await res.json();
        toast.error(err.error || "Submission failed");
      }
    } catch (err) {
      toast.error("Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderError = (field) => errors[field] && (
    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
  );

  // Activities
  const activities = [
    { value: 'safari', label: 'Wildlife Safari', desc: 'Game drives in Serengeti, Ngorongoro' },
    { value: 'beach', label: 'Zanzibar Beach', desc: 'White sand beaches & turquoise water' },
    { value: 'kilimanjaro', label: 'Kilimanjaro Climb', desc: 'Summit Africa highest peak' },
    { value: 'migration', label: 'Great Migration', desc: 'Witness wildebeest river crossings' }
  ];

  // Companions
  const companions = [
    { value: 'honeymoon', label: 'Honeymoon' },
    { value: 'family', label: 'Family' },
    { value: 'couple', label: 'Couple' },
    { value: 'solo', label: 'Solo' },
    { value: 'friends', label: 'Friends' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/10 py-8">
      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        userEmail={formData.email}
        userPhone={formData.phone}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex justify-center">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex flex-col items-center transition-all duration-300 ${
                  currentStep >= step.number ? 'text-[#465b2d]' : 'text-gray-400'
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                    currentStep >= step.number 
                      ? 'bg-[#465b2d] border-[#465b2d] text-white shadow-md' 
                      : 'border-gray-300 bg-white'
                  }`}>
                    {currentStep > step.number ? <Check size={18} /> : <step.icon size={18} />}
                  </div>
                  <span className="text-sm font-medium mt-2 hidden sm:block">{step.title}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-1 ${currentStep > step.number ? 'bg-[#465b2d]' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-[#465b2d] text-white p-6">
                <h2 className="text-xl font-bold">Custom Safari Proposal</h2>
                <p className="text-emerald-100 text-sm mt-1">
                  Get a personalized itinerary within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                {/* Step 1: Preferences */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Your Dream Safari</h3>

                    {/* Activities */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        What interests you? *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {activities.map(act => (
                          <label key={act.value} className={`p-3 rounded-lg border cursor-pointer ${
                            formData.activities.includes(act.value)
                              ? 'border-[#465b2d] bg-emerald-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}>
                            <input
                              type="checkbox"
                              name="activities"
                              value={act.value}
                              checked={formData.activities.includes(act.value)}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className="font-medium text-gray-900">{act.label}</div>
                            <div className="text-xs text-gray-600 mt-1">{act.desc}</div>
                          </label>
                        ))}
                      </div>
                      {renderError('activities')}
                    </div>

                    {/* Days & Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Trip Duration: <span className="font-semibold text-[#465b2d]">{formData.days} days</span>
                        </label>
                        <input
                          type="range"
                          min="3"
                          max="21"
                          value={formData.days}
                          onChange={e => setFormData(p => ({ ...p, days: +e.target.value }))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#465b2d]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget: <span className="font-semibold text-[#465b2d]">${formData.budget.toLocaleString()}</span>
                        </label>
                        <input
                          type="range"
                          min="1500"
                          max="7500"
                          step="500"
                          value={formData.budget}
                          onChange={e => setFormData(p => ({ ...p, budget: +e.target.value }))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#465b2d]"
                        />
                      </div>
                    </div>

                    {/* Companions & Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Traveling With? *
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {companions.map(comp => (
                            <label key={comp.value} className="cursor-pointer">
                              <input
                                type="radio"
                                name="travelWith"
                                value={comp.value}
                                checked={formData.travelWith === comp.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <div className={`text-center py-2 px-2 text-sm rounded-lg border ${
                                formData.travelWith === comp.value
                                  ? 'border-[#465b2d] bg-emerald-50 text-[#465b2d]'
                                  : 'border-gray-200'
                              }`}>
                                {comp.label}
                              </div>
                            </label>
                          ))}
                        </div>
                        {renderError('travelWith')}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Arrival Date *
                        </label>
                        <input
                          type="date"
                          name="arrivalDate"
                          value={formData.arrivalDate}
                          onChange={handleChange}
                          className="w-full p-2.5 border border-gray-300 rounded-lg"
                        />
                        {renderError('arrivalDate')}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Travelers */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Travel Group</h3>

                    {/* Adults & Children */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Adults *
                        </label>
                        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                          <button 
                            type="button" 
                            onClick={() => handleNumberChange('adults', -1)} 
                            disabled={formData.adults <= 1}
                            className="w-8 h-8 rounded-full bg-white border border-gray-300 disabled:opacity-50 flex items-center justify-center"
                          >
                            −
                          </button>
                          <span className="font-semibold text-gray-900">{formData.adults}</span>
                          <button 
                            type="button" 
                            onClick={() => handleNumberChange('adults', 1)} 
                            disabled={formData.adults >= 10}
                            className="w-8 h-8 rounded-full bg-white border border-gray-300 disabled:opacity-50 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        {renderError('adults')}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Children
                        </label>
                        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                          <button 
                            type="button" 
                            onClick={() => handleNumberChange('children', -1)} 
                            disabled={formData.children <= 0}
                            className="w-8 h-8 rounded-full bg-white border border-gray-300 disabled:opacity-50 flex items-center justify-center"
                          >
                            −
                          </button>
                          <span className="font-semibold text-gray-900">{formData.children}</span>
                          <button 
                            type="button" 
                            onClick={() => handleNumberChange('children', 1)} 
                            disabled={formData.children >= 10}
                            className="w-8 h-8 rounded-full bg-white border border-gray-300 disabled:opacity-50 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Age Range */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adult Age Range *
                      </label>
                      <select
                        name="adultAgeRange"
                        value={formData.adultAgeRange}
                        onChange={handleChange}
                        className="w-full p-2.5 border border-gray-300 rounded-lg"
                      >
                        <option value="">Select age group</option>
                        {AGE_RANGES.map(range => (
                          <option key={range.value} value={range.value}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                      {renderError('adultAgeRange')}
                    </div>
                  </div>
                )}

                {/* Step 3: Contact */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Contact Details</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          name="firstName"
                          placeholder="First Name *"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {renderError('firstName')}
                      </div>
                      <div>
                        <input
                          name="lastName"
                          placeholder="Last Name *"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {renderError('lastName')}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          name="email"
                          type="email"
                          placeholder="Email *"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {renderError('email')}
                      </div>
                      <div>
                        <input
                          name="phone"
                          placeholder="Phone *"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {renderError('phone')}
                      </div>
                    </div>

                    <input
                      name="alternatePhone"
                      placeholder="Alternate Phone (optional)"
                      value={formData.alternatePhone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />

                    <textarea
                      name="notes"
                      placeholder="Special requests, dietary needs, or travel notes..."
                      value={formData.notes}
                      onChange={handleChange}
                      rows="3"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="mr-2 w-4 h-4 text-[#465b2d] rounded"
                      />
                      <span className="text-sm text-gray-700">Receive travel inspiration & offers</span>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between pt-6 mt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(s => Math.max(1, s - 1))}
                    disabled={currentStep === 1}
                    className="px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 disabled:opacity-50"
                  >
                    Back
                  </button>
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={() => validateStep(currentStep) && setCurrentStep(s => s + 1)}
                      className="px-4 py-2.5 bg-[#465b2d] text-white rounded-lg font-medium"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2.5 bg-[#465b2d] text-white rounded-lg font-medium disabled:opacity-70 flex items-center"
                    >
                      {isSubmitting ? 'Submitting...' : 'Send Proposal Request'}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl shadow border">
              <h3 className="font-semibold text-gray-900 mb-3">Why Choose Us?</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Check className="text-[#465b2d] mr-2 mt-0.5 w-4 h-4" /> 15+ years local expertise
                </li>
                <li className="flex items-start">
                  <Check className="text-[#465b2d] mr-2 mt-0.5 w-4 h-4" /> Best price guarantee
                </li>
                <li className="flex items-start">
                  <Check className="text-[#465b2d] mr-2 mt-0.5 w-4 h-4" /> 24/7 travel support
                </li>
                <li className="flex items-start">
                  <Check className="text-[#465b2d] mr-2 mt-0.5 w-4 h-4" /> 24-hour response time
                </li>
              </ul>
            </div>

            <div className="bg-[#465b2d] text-white p-5 rounded-2xl">
              <h3 className="font-semibold mb-3 text-center">Need Help?</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Phone className="mr-2 w-4 h-4" /> +255 784 123 456
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 w-4 h-4" /> info@asiliexplorer.com
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 w-4 h-4" /> Arusha, Tanzania
                </div>
              </div>
              <div className="mt-4 p-2 bg-black/20 text-center rounded text-xs">
                We respond within 24 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}