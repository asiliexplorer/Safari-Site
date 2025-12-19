"use client"
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const Footer = () => {
  const [email, setEmail] = useState('');

  const quickLinks = [
    { title: "Safari Packages", href: "/packages" },
    { title: "Destinations", href: "/destinations" },
    { title: "Kilimanjaro Climbing", href: "/kilimanjaro" },
    { title: "Zanzibar Holidays", href: "/zanzibar" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" }
  ];

  const safariTypes = [
    { title: "Tanzania Safari", href: "/packages?type=safari" },
    { title: "Safari + Beach", href: "/packages?type=safari-beach" },
    { title: "Honeymoon Safari", href: "/packages?type=honeymoon" },
    { title: "Family Safari", href: "/packages?type=family" },
    { title: "Luxury Safari", href: "/packages?type=luxury" },
    { title: "Budget Safari", href: "/packages?type=budget" }
  ];

  const travelInfo = [
    { title: "Best Time to Visit", href: "/travel-info/best-time" },
    { title: "Visa Requirements", href: "/travel-info/visa" },
    { title: "Health & Safety", href: "/travel-info/health" },
    { title: "Packing Guide", href: "/travel-info/packing" },
    { title: "Travel Insurance", href: "/travel-info/insurance" },
    { title: "FAQs", href: "/faqs" }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/asiliexplorer",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com/asiliexplorer",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "https://youtube.com/asiliexplorer",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "TripAdvisor",
      href: "https://tripadvisor.com/asiliexplorer",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM6.003 17.212a3.998 3.998 0 1 1 0-7.996 3.998 3.998 0 0 1 0 7.996zm11.994 0a3.998 3.998 0 1 1 0-7.996 3.998 3.998 0 0 1 0 7.996zM6.003 11.216a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm11.994 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/255767140150",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Top CTA Section */}
      <div className="bg-gradient-to-br from-[#F7EECB] via-white to-[#DDA885]/30 py-12 px-4 border-t border-[#DDA885]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-serif text-[#774433] mb-2">
                Ready to Start Your Safari Adventure?
              </h3>
              <p className="text-[#774433]/70">
                Let our experts craft your perfect African journey
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tailor-made"
                className="inline-flex items-center justify-center gap-2 bg-[#FF7D5A] hover:bg-[#DDA885] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#FF7D5A]/30"
              >
                <span>Plan Your Trip</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+255767140150"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#774433] font-bold py-4 px-8 rounded-full transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-white pt-16 pb-8 px-4 relative border-t border-gray-200">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23774433' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="mb-6">
                <Logo 
                  showText={true} 
                  size="default"
                  textColor="#774433"
                  className="justify-start"
                />
              </div>

              <p className="text-gray-600 mb-6 max-w-sm">
                Experience the magic of Africa with our expertly crafted safaris.
                From the Serengeti plains to Kilimanjaro's peak, we create unforgettable adventures.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="tel:+255767140150" className="flex items-center gap-3 text-gray-700 hover:text-[#FF7D5A] transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#FF7D5A]/10 flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-[#FF7D5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">+255 767 140 150</span>
                </a>
                <a href="mailto:info@asiliexplorer.com" className="flex items-center gap-3 text-gray-700 hover:text-[#FF7D5A] transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#FF7D5A]/10 flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-[#FF7D5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>info@asiliexplorer.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>Arusha, Tanzania</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#FF7D5A] flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#774433] font-bold mb-5 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#FF7D5A]"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#FF7D5A] transition-colors flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safari Types */}
            <div>
              <h4 className="text-[#774433] font-bold mb-5 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#FF7D5A]"></span>
                Safari Types
              </h4>
              <ul className="space-y-3">
                {safariTypes.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#FF7D5A] transition-colors flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel Info */}
            <div>
              <h4 className="text-[#774433] font-bold mb-5 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#FF7D5A]"></span>
                Travel Info
              </h4>
              <ul className="space-y-3">
                {travelInfo.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#FF7D5A] transition-colors flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-12 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-[#774433] text-xl font-serif mb-2">Subscribe to Our Newsletter</h4>
                <p className="text-gray-600 text-sm">
                  Get travel inspiration, safari tips, and exclusive offers delivered to your inbox.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3 rounded-full bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF7D5A] transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#FF7D5A] hover:bg-[#DDA885] text-white font-bold rounded-full transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 py-8 border-t border-b border-gray-200">
            {[
              { icon: "🛡️", text: "Licensed Tour Operator" },
              { icon: "⭐", text: "TripAdvisor Excellence" },
              { icon: "✅", text: "Verified Reviews" },
              { icon: "🌍", text: "Responsible Tourism" },
              { icon: "💳", text: "Secure Payments" }
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600">
                <span className="text-xl">{badge.icon}</span>
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
            <p>© 2025 Asili Explorer Safaris. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ThemeSwitcher />
              <div className="h-4 w-px bg-gray-300"></div>
              <Link href="/privacy" className="hover:text-[#FF7D5A] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#FF7D5A] transition-colors">Terms & Conditions</Link>
              <Link href="/cookies" className="hover:text-[#FF7D5A] transition-colors">Cookie Policy</Link>
              <Link href="/sitemap" className="hover:text-[#FF7D5A] transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;