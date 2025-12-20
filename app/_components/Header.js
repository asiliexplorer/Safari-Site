// frontend/components/Header.js

"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items
  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Packages', href: '/packages' },
    { name: 'Kilimanjaro', href: '/kilimanjaro' },
    { name: 'Zanzibar', href: '/zanzibar' },
    { name: 'Parks', href: '/parks' },
    { name: 'Info', href: '/info' },
    { name: 'Blog', href: '/blog' },
  ];

  // Only the new header implementation should be returned
  return (
    <header className="font-sans fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md shadow-md h-12 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center min-w-0">
          <Logo size="default" showText={true} isScrolled={false} className="transition-all duration-300" />
        </Link>
        {/* Navigation */}
        <nav className="hidden md:flex gap-4">
          {mainNavItems.map((item, idx) => (
            <Link key={idx} href={item.href || '#'} className="text-sm font-medium text-gray-700 hover:text-[#FF7D5A] px-2 py-1 rounded transition-colors duration-200">
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Contact & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Link href="/admin/login" className="hidden md:flex items-center justify-center px-3 py-1.5 rounded-md border border-gray-300 text-gray-600 hover:border-[#FF7D5A] hover:text-[#FF7D5A] hover:bg-[#FF7D5A]/10 transition-all duration-300 text-sm font-medium">
            Admin
          </Link>
          <a href="tel:+255767140150" className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:border-[#FF7D5A] hover:text-[#FF7D5A] hover:bg-[#FF7D5A]/10 transition-all duration-300">
            <FaPhone className="text-base" />
          </a>
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-300 z-10 relative text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
