// frontend/components/Header.js

"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState('southern');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const closeAllDropdowns = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Destinations Data
  const destinationsData = {
    southern: {
      countries: [
        { name: 'South Africa', href: '/destinations/south-africa' },
        { name: 'Botswana', href: '/destinations/botswana' },
        { name: 'Namibia', href: '/destinations/namibia' },
        { name: 'Zambia', href: '/destinations/zambia' },
        { name: 'Zimbabwe', href: '/destinations/zimbabwe' },
        { name: 'Mozambique', href: '/destinations/mozambique' },
        { name: 'Malawi', href: '/destinations/malawi' },
      ],
      topDestinations: [
        { name: 'Cape Town', href: '/destinations/cape-town' },
        { name: 'Kruger Park & Sabi Sands', href: '/destinations/kruger-park' },
        { name: 'Chobe National Park', href: '/destinations/chobe' },
        { name: 'Lower Zambezi', href: '/destinations/lower-zambezi' },
        { name: 'Okavango Delta', href: '/destinations/okavango-delta' },
        { name: 'Garden Route', href: '/destinations/garden-route' },
        { name: 'Victoria Falls Zimbabwe', href: '/destinations/victoria-falls' },
      ]
    },
    east: {
      countries: [
        { name: 'Kenya', href: '/destinations/kenya' },
        { name: 'Tanzania', href: '/destinations/tanzania' },
        { name: 'Rwanda', href: '/destinations/rwanda' },
        { name: 'Uganda', href: '/destinations/uganda' },
      ],
      topDestinations: [
        { name: 'Masai Mara', href: '/destinations/masai-mara' },
        { name: 'Serengeti National Park', href: '/parks/serengeti-national-park' },
        { name: 'Ngorongoro Crater', href: '/parks/ngorongoro-crater' },
        { name: 'Volcanoes National Park', href: '/destinations/volcanoes-national-park' },
        { name: 'Zanzibar Archipelago', href: '/zanzibar' },
      ]
    }
  };

  // Tours Data
  const toursData = {
    byType: [
      { name: 'Safari Tours', href: '/packages' },
      { name: 'Beach Holidays', href: '/zanzibar' },
      { name: 'Mountain Climbing', href: '/kilimanjaro' },
      { name: 'Cultural Tours', href: '/packages?type=cultural' },
      { name: 'Honeymoon Packages', href: '/packages?type=honeymoon' },
      { name: 'Family Safaris', href: '/packages?type=family' },
    ],
    popular: [
      { name: 'Serengeti Migration Safari', href: '/packages/serengeti-migration' },
      { name: 'Big Five Safari', href: '/packages/big-five' },
      { name: 'Kilimanjaro Machame Route', href: '/kilimanjaro/machame' },
      { name: 'Zanzibar Beach Escape', href: '/zanzibar/beach-escape' },
      { name: 'Tanzania Grand Tour', href: '/packages/grand-tour' },
    ]
  };

  const mainNavItems = [
    { name: 'DESTINATIONS', type: 'destinations' },
    { name: 'TOURS', type: 'tours' },
    { name: 'EXPERIENCES', href: '/experiences' },
    { name: 'TRAVEL CALENDAR', href: '/travel-proposal' },
    { name: 'BLOG', href: '/blog' },
    { name: 'ABOUT US', href: '/about' },
  ];

  const topNavItems = [
    { name: 'Blog', href: '/blog' },
    {
      name: 'Practical Information', href: "/info",
      dropdown: [
        { name: 'Visa Requirements', href: '/info/visa' },
        { name: 'Health & Safety', href: '/info/health' },
        { name: 'Packing List', href: '/info/packing' },
        { name: 'Travel Tips', href: '/info/tips' }
      ]
    },
    {
      name: 'About Us',
      dropdown: [
        { name: 'Our Team', href: '/about/team' },
        { name: 'Our Mission', href: '/about/mission' },
        { name: 'Testimonials', href: '/about/testimonials' },
        { name: 'Sustainability', href: '/about/sustainability' }
      ]
    }
  ];

  // Mega Dropdown Component (Desktop Only)
  const MegaDropdown = ({ items, title }) => {
    // Close dropdowns if viewport becomes mobile
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 1024) {
          // Not used anymore – safe to ignore
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <div className="absolute left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform origin-top">
        <div className="max-w-7xl mx-auto p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                <h4 className="font-bold text-lg text-[#465b2d] border-b border-[#465b2d]/20 pb-2">
                  {section.title}
                </h4>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="block text-gray-700 hover:text-[#465b2d] transition-colors duration-200 group/item"
                      onClick={closeAllDropdowns}
                    >
                      <span className="group-hover/item:ml-2 transition-all duration-200">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Need help choosing?</span>
              <Link
                href="/contact"
                className="bg-[#465b2d] text-white px-6 py-2 rounded-lg hover:bg-[#3a4a24] transition-colors duration-200"
                onClick={closeAllDropdowns}
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Search Popup Component with Blur Background
  const SearchPopup = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const searchRef = useRef(null);

    // Close search when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setIsSearchOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div className="fixed inset-0 z-60 flex items-start justify-center pt-20">
        {/* Refined Blur Background */}
        <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm" />

        {/* Search Content */}
        <div
          ref={searchRef}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 transform transition-all duration-300 scale-100 border border-gray-200"
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">Search Our Website</h3>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <FaTimes className="text-gray-600 text-lg" />
              </button>
            </div>
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search for safaris, destinations, itineraries..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#465b2d] focus:border-transparent text-lg placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          <div className="p-6 max-h-96 overflow-y-auto">
            <div className="space-y-4">
              <h4 className="font-bold text-gray-700">Popular Searches</h4>
              <div className="flex flex-wrap gap-2">
                {['Safari Packages', 'Kilimanjaro Trek', 'Zanzibar Beach', 'Serengeti Migration', 'Luxury Safari', 'Family Safari', 'Budget Tours', 'Wildlife Photography'].map((term, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(term)}
                    className="px-4 py-2 bg-gray-100 hover:bg-[#465b2d] hover:text-white text-gray-700 rounded-full transition-colors duration-200 text-sm"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
            {searchQuery && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-700 mb-4">Search Results for "{searchQuery}"</h4>
                <div className="space-y-3">
                  <Link href="/safaris" className="block p-3 hover:bg-[#465b2d]/10 rounded-lg cursor-pointer transition-colors duration-200">
                    <div className="font-medium text-gray-800">Safari Packages</div>
                    <div className="text-sm text-gray-600 mt-1">Explore our range of safari experiences in Tanzania's best national parks</div>
                  </Link>
                  <Link href="/kilimanjaro" className="block p-3 hover:bg-[#465b2d]/10 rounded-lg cursor-pointer transition-colors duration-200">
                    <div className="font-medium text-gray-800">Kilimanjaro Climbing Routes</div>
                    <div className="text-sm text-gray-600 mt-1">Choose your path to the roof of Africa with expert guides</div>
                  </Link>
                  <Link href="/itineraries/7-day-safari" className="block p-3 hover:bg-[#465b2d]/10 rounded-lg cursor-pointer transition-colors duration-200">
                    <div className="font-medium text-gray-800">7-Day Classic Safari</div>
                    <div className="text-sm text-gray-600 mt-1">Perfect introduction to Tanzania's wildlife and landscapes</div>
                  </Link>
                </div>
              </div>
            )}
            {!searchQuery && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-700 mb-4">Quick Links</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/safaris" className="p-3 bg-gray-50 hover:bg-[#465b2d]/10 rounded-lg transition-colors duration-200">
                    <div className="font-medium text-gray-800">All Safaris</div>
                  </Link>
                  <Link href="/kilimanjaro" className="p-3 bg-gray-50 hover:bg-[#465b2d]/10 rounded-lg transition-colors duration-200">
                    <div className="font-medium text-gray-800">Kilimanjaro</div>
                  </Link>
                  <Link href="/zanzibar" className="p-3 bg-gray-50 hover:bg-[#465b2d]/10 rounded-lg transition-colors duration-200">
                    <div className="font-medium text-gray-800">Zanzibar</div>
                  </Link>
                  <Link href="/contact" className="p-3 bg-gray-50 hover:bg-[#465b2d]/10 rounded-lg transition-colors duration-200">
                    <div className="font-medium text-gray-800">Contact Us</div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Main Navigation - Fixed Transparent Header */}
      <header className={`font-sans transition-all duration-500 fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-gradient-to-b from-black/50 via-black/30 to-transparent'}`}>
        {/* Top Contact Bar - Only visible on scroll */}
        <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-10">
              {/* Left - Contact Info */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="tel:+255767140150" className="flex items-center space-x-2 text-xs text-white/80 hover:text-[#FF7D5A] transition-all duration-300 group">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#FF7D5A]/20 transition-colors">
                    <FaPhone className="text-[10px]" />
                  </span>
                  <span className="font-light tracking-wide">+255 767 140 150</span>
                </a>
                <a href="mailto:info@asiliexplorer.com" className="flex items-center space-x-2 text-xs text-white/80 hover:text-[#FF7D5A] transition-all duration-300 group">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#FF7D5A]/20 transition-colors">
                    <FaEnvelope className="text-[10px]" />
                  </span>
                  <span className="font-light tracking-wide">info@asiliexplorer.com</span>
                </a>
              </div>

              {/* Right - Social Icons */}
              <div className="hidden md:flex items-center space-x-1">
                {[
                  { icon: FaFacebookF, href: "https://facebook.com" },
                  { icon: FaInstagram, href: "https://instagram.com" },
                  { icon: FaYoutube, href: "https://youtube.com" },
                ].map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center text-white/70 hover:text-[#FF7D5A] rounded-full hover:bg-white/10 transition-all duration-300">
                    <social.icon className="text-xs" />
                  </a>
                ))}                <div className="w-px h-4 bg-white/20 mx-2"></div>
                <a href="/admin/login" className="text-xs text-white/80 hover:text-[#FF7D5A] font-medium transition-colors duration-300">
                  Admin
                </a>              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'} ${isScrolled ? 'min-h-[56px]' : 'min-h-[96px] sm:min-h-[112px]'} flex items-center`}>
          <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
            
            {/* Logo Section */}
            <div onClick={closeAllDropdowns} className="flex-shrink-0 z-10 relative min-w-0">
              <Logo 
                showText={!isScrolled} 
                size="default" 
                isScrolled={isScrolled}
                className="transition-all duration-300"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              {mainNavItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => (item.type === 'destinations' || item.type === 'tours') && handleDropdownEnter(item.type)}
                  onMouseLeave={() => (item.type === 'destinations' || item.type === 'tours') && handleDropdownLeave()}
                >
                  {(item.type === 'destinations' || item.type === 'tours') ? (
                    <>
                      <button className={`relative flex items-center space-x-1.5 px-4 py-2.5 font-medium text-[13px] uppercase tracking-[0.15em] transition-all duration-300 group ${isScrolled ? 'text-gray-700 hover:text-[#FF7D5A]' : 'text-white/90 hover:text-white'}`}>
                        <span className="relative">
                          {item.name}
                          <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#FF7D5A] transition-all duration-300 ${activeDropdown === item.type ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </span>
                        <FaChevronDown className={`text-[9px] transition-transform duration-300 ${activeDropdown === item.type ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Destinations Mega Menu */}
                      {item.type === 'destinations' && activeDropdown === 'destinations' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 z-50 animate-fadeIn overflow-hidden">
                          {/* Tabs */}
                          <div className="flex border-b border-gray-100">
                            <button
                              className={`flex-1 px-6 py-4 text-sm font-bold transition-all duration-300 relative ${activeTab === 'southern' ? 'text-[#FF7D5A]' : 'text-gray-500 hover:text-gray-700'}`}
                              onClick={() => setActiveTab('southern')}
                            >
                              Southern Africa
                              {activeTab === 'southern' && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#FF7D5A] rounded-full" />}
                            </button>
                            <button
                              className={`flex-1 px-6 py-4 text-sm font-bold transition-all duration-300 relative ${activeTab === 'east' ? 'text-[#FF7D5A]' : 'text-gray-500 hover:text-gray-700'}`}
                              onClick={() => setActiveTab('east')}
                            >
                              East Africa
                              {activeTab === 'east' && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#FF7D5A] rounded-full" />}
                            </button>
                          </div>
                          {/* Content */}
                          <div className="p-8 grid grid-cols-2 gap-12">
                            <div>
                              <h4 className="text-[11px] font-bold text-[#FF7D5A] uppercase tracking-[0.2em] mb-5 flex items-center">
                                <span className="w-6 h-[1px] bg-[#FF7D5A]/50 mr-3"></span>
                                Countries
                              </h4>
                              <ul className="space-y-1">
                                {destinationsData[activeTab].countries.map((country, idx) => (
                                  <li key={idx}>
                                    <Link
                                      href={country.href}
                                      className="flex items-center py-2 text-gray-600 hover:text-[#FF7D5A] transition-all duration-200 text-sm group"
                                      onClick={closeAllDropdowns}
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#FF7D5A] mr-3 transition-all duration-200 group-hover:scale-125"></span>
                                      <span className="group-hover:translate-x-1 transition-transform duration-200">{country.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-[11px] font-bold text-[#FF7D5A] uppercase tracking-[0.2em] mb-5 flex items-center">
                                <span className="w-6 h-[1px] bg-[#FF7D5A]/50 mr-3"></span>
                                Top Destinations
                              </h4>
                              <ul className="space-y-1">
                                {destinationsData[activeTab].topDestinations.map((dest, idx) => (
                                  <li key={idx}>
                                    <Link
                                      href={dest.href}
                                      className="flex items-center py-2 text-gray-600 hover:text-[#FF7D5A] transition-all duration-200 text-sm group"
                                      onClick={closeAllDropdowns}
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#FF7D5A] mr-3 transition-all duration-200 group-hover:scale-125"></span>
                                      <span className="group-hover:translate-x-1 transition-transform duration-200">{dest.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tours Mega Menu */}
                      {item.type === 'tours' && activeDropdown === 'tours' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 z-50 animate-fadeIn overflow-hidden">
                          <div className="p-8 grid grid-cols-2 gap-12">
                            <div>
                              <h4 className="text-[11px] font-bold text-[#FF7D5A] uppercase tracking-[0.2em] mb-5 flex items-center">
                                <span className="w-6 h-[1px] bg-[#FF7D5A]/50 mr-3"></span>
                                By Type
                              </h4>
                              <ul className="space-y-1">
                                {toursData.byType.map((tour, idx) => (
                                  <li key={idx}>
                                    <Link
                                      href={tour.href}
                                      className="flex items-center py-2 text-gray-600 hover:text-[#FF7D5A] transition-all duration-200 text-sm group"
                                      onClick={closeAllDropdowns}
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#FF7D5A] mr-3 transition-all duration-200 group-hover:scale-125"></span>
                                      <span className="group-hover:translate-x-1 transition-transform duration-200">{tour.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-[11px] font-bold text-[#FF7D5A] uppercase tracking-[0.2em] mb-5 flex items-center">
                                <span className="w-6 h-[1px] bg-[#FF7D5A]/50 mr-3"></span>
                                Popular Tours
                              </h4>
                              <ul className="space-y-1">
                                {toursData.popular.map((tour, idx) => (
                                  <li key={idx}>
                                    <Link
                                      href={tour.href}
                                      className="flex items-center py-2 text-gray-600 hover:text-[#FF7D5A] transition-all duration-200 text-sm group"
                                      onClick={closeAllDropdowns}
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#FF7D5A] mr-3 transition-all duration-200 group-hover:scale-125"></span>
                                      <span className="group-hover:translate-x-1 transition-transform duration-200">{tour.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className={`relative px-4 py-2.5 font-medium text-[13px] uppercase tracking-[0.15em] transition-all duration-300 group ${isScrolled ? 'text-gray-700 hover:text-[#FF7D5A]' : 'text-white/90 hover:text-white'}`}
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF7D5A] group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone Icon */}
              <a href="tel:+255767140150" className={`hidden xl:flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${isScrolled ? 'border-gray-300 text-gray-600 hover:border-[#FF7D5A] hover:text-[#FF7D5A] hover:bg-[#FF7D5A]/5' : 'border-white/30 text-white hover:border-[#FF7D5A] hover:bg-white/10'}`}>
                <FaPhone className="text-sm" />
              </a>

              <Link
                href='/travel-proposal'
                className={`relative overflow-hidden px-7 py-3 font-bold text-[13px] uppercase tracking-[0.1em] transition-all duration-500 group ${isScrolled ? 'bg-[#FF7D5A] text-white hover:shadow-lg hover:shadow-[#FF7D5A]/30' : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-[#FF7D5A] hover:border-[#FF7D5A]'}`}
              >
                <span className="relative z-10">Enquire Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7D5A] to-[#DDA885] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`xl:hidden p-2.5 rounded-lg transition-all duration-300 z-10 relative ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Full Overlay) */}
        <div className={`xl:hidden fixed inset-0 bg-white z-50 transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <div className="h-full overflow-y-auto">
            <div className="p-6 min-h-full flex flex-col">

              {/* Close Button */}
              <div className="flex justify-between items-center mb-10">
                <div onClick={closeAllDropdowns}>
                  <Logo 
                    showText={true} 
                    size="small"
                    className="flex-shrink-0"
                  />
                </div>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#FF7D5A] hover:text-white transition-all duration-300"
                  onClick={closeAllDropdowns}
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <div className="flex-1 space-y-1">
                {mainNavItems.map((item, index) => (
                  <div key={index} className={`border-b border-gray-100 transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                    {(item.type === 'destinations' || item.type === 'tours') ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full text-gray-800 font-medium text-[15px] uppercase tracking-[0.1em] py-4 group"
                          onClick={() => setActiveDropdown(activeDropdown === `mobile-${item.type}` ? null : `mobile-${item.type}`)}
                        >
                          <span className="group-hover:text-[#FF7D5A] transition-colors">{item.name}</span>
                          <span className={`w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#FF7D5A]/10 flex items-center justify-center transition-all duration-300 ${activeDropdown === `mobile-${item.type}` ? 'rotate-180 bg-[#FF7D5A]/10' : ''}`}>
                            <FaChevronDown className={`text-xs ${activeDropdown === `mobile-${item.type}` ? 'text-[#FF7D5A]' : 'text-gray-400'}`} />
                          </span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === `mobile-${item.type}` ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="pl-4 pb-4 space-y-2">
                            {item.type === 'destinations' && (
                              <>
                                <p className="text-xs font-bold text-[#FF7D5A] uppercase tracking-wider pt-2 pb-1">Countries</p>
                                {destinationsData[activeTab].countries.map((country, idx) => (
                                  <Link
                                    key={idx}
                                    href={country.href}
                                    className="flex items-center py-2.5 text-gray-500 hover:text-[#FF7D5A] transition-all duration-200 text-sm group"
                                    onClick={closeAllDropdowns}
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#FF7D5A] mr-3 transition-colors" />
                                    {country.name}
                                  </Link>
                                ))}
                              </>
                            )}
                            {item.type === 'tours' && (
                              <>
                                {toursData.byType.map((tour, idx) => (
                                  <Link
                                    key={idx}
                                    href={tour.href}
                                    className="flex items-center py-2.5 text-gray-500 hover:text-[#FF7D5A] transition-all duration-200 text-sm group"
                                    onClick={closeAllDropdowns}
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#FF7D5A] mr-3 transition-colors" />
                                    {tour.name}
                                  </Link>
                                ))}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        className="block text-gray-800 font-medium text-[15px] uppercase tracking-[0.1em] py-4 hover:text-[#FF7D5A] transition-colors"
                        onClick={closeAllDropdowns}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <div className="mt-8">
                <Link
                  href="/travel-proposal"
                  className="block w-full bg-gradient-to-r from-[#FF7D5A] to-[#DDA885] text-white text-center py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7D5A]/30 rounded-lg"
                  onClick={closeAllDropdowns}
                >
                  Enquire Now
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                <a href="tel:+255767140150" className="flex items-center space-x-4 text-gray-600 hover:text-[#FF7D5A] transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#FF7D5A]/10 flex items-center justify-center transition-colors">
                    <FaPhone className="text-sm" />
                  </span>
                  <span className="font-medium">+255 767 140 150</span>
                </a>
                <a href="mailto:info@asiliexplorer.com" className="flex items-center space-x-4 text-gray-600 hover:text-[#FF7D5A] transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#FF7D5A]/10 flex items-center justify-center transition-colors">
                    <FaEnvelope className="text-sm" />
                  </span>
                  <span className="font-medium">info@asiliexplorer.com</span>
                </a>
              </div>

              {/* Mobile Social Icons */}
              <div className="mt-6 flex items-center justify-center space-x-3">
                {[
                  { icon: FaFacebookF, href: "https://facebook.com" },
                  { icon: FaTwitter, href: "https://twitter.com" },
                  { icon: FaInstagram, href: "https://instagram.com" },
                  { icon: FaYoutube, href: "https://youtube.com" },
                ].map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-[#FF7D5A] text-gray-500 hover:text-white rounded-full transition-all duration-300">
                    <social.icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Search Popup with Blur Background */}
        {isSearchOpen && <SearchPopup />}
      </header>
    </>
  );
};

export default Header;