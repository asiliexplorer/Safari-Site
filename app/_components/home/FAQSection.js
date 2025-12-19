"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: "All", label: "All Questions", icon: "❓", color: "from-gray-500 to-gray-600" },
    { id: "Booking", label: "Booking & Payment", icon: "💳", color: "from-blue-500 to-indigo-600" },
    { id: "Safari", label: "Safari Experience", icon: "🦁", color: "from-amber-500 to-orange-600" },
    { id: "Travel", label: "Travel & Logistics", icon: "✈️", color: "from-emerald-500 to-teal-600" },
    { id: "Health", label: "Health & Safety", icon: "🏥", color: "from-red-500 to-rose-600" }
  ];

  const faqs = [
    {
      question: "What's Covered in Your Safari Packages?",
      answer: "Our comprehensive safari packages include park entrance fees, game drives in custom 4x4 vehicles with pop-up roofs, professional English-speaking guides, quality accommodation (lodge, tented camp, or hotel), all meals as specified, bottled water during game drives, and airport transfers. Premium packages also include domestic flights, hot air balloon safaris, and exclusive bush dining experiences.",
      category: "Booking",
      icon: "📦"
    },
    {
      question: "Do I Need a Visa to Travel to Tanzania?",
      answer: "Yes, most visitors require a tourist visa. The easiest option is applying online through the official Tanzanian e-Visa portal (eservices.immigration.go.tz) before your trip. Single-entry visas cost $50 USD for most nationalities. Visa on arrival is also available at Kilimanjaro and Dar es Salaam airports, but we recommend e-Visa for a smoother entry experience.",
      category: "Travel",
      icon: "🛂"
    },
    {
      question: "Can I Personalize My Safari Experience?",
      answer: "Absolutely! Customization is our specialty. We work with you to create your dream safari - modify itineraries, handpick accommodations from budget to ultra-luxury, add unique activities (walking safaris, night drives, cultural visits), adjust trip duration, or design completely bespoke experiences. Every detail is tailored to your preferences and budget.",
      category: "Booking",
      icon: "✨"
    },
    {
      question: "What Should I Bring on a Tanzania Safari?",
      answer: "Pack light, neutral-colored clothing (khaki, olive, beige). Essentials include: comfortable walking shoes, warm fleece/jacket for cool mornings, wide-brim hat, quality sunglasses, SPF 50+ sunscreen, DEET insect repellent, prescription medications, camera with extra batteries/memory cards, binoculars, reusable water bottle, and a small daypack. We provide a detailed packing list upon booking.",
      category: "Safari",
      icon: "🎒"
    },
    {
      question: "When's the Best Time for a Tanzania Safari?",
      answer: "It depends on what you want to see! For the Great Migration river crossings: July-October. Dry season (June-October) offers excellent game viewing with animals gathered around water sources. Green season (November-May) features lush landscapes, baby animals, birdwatching, and fewer crowds at lower prices. Every season offers unique experiences.",
      category: "Safari",
      icon: "📅"
    },
    {
      question: "Are Your Safaris Suitable for Families with Children?",
      answer: "Yes! We design family-friendly safaris with child-appropriate activities, family rooms/tents, flexible schedules, and guides experienced in engaging young adventurers. Some lodges offer kids' clubs, swimming pools, and educational programs. We recommend children 6+ for optimal safari experience, though younger children are welcome at select properties.",
      category: "Safari",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      question: "Will I See the Big Five on Your Safaris?",
      answer: "While wildlife sightings can never be guaranteed, our expertly crafted itineraries maximize your chances significantly. We focus on parks renowned for Big Five concentrations: Serengeti (lions, leopards, elephants, buffalo), Ngorongoro Crater (rhinos, lions), and Tarangire (massive elephant herds). Most guests on our multi-day safaris see 4-5 of the Big Five.",
      category: "Safari",
      icon: "🦏"
    },
    {
      question: "What's Your Cancellation and Refund Policy?",
      answer: "We understand plans change. Our standard policy: 60+ days before departure = full refund minus admin fee. 30-59 days = 50% refund. Under 30 days = no refund (lodge deposits are non-refundable). We strongly recommend comprehensive travel insurance that covers trip cancellation, medical emergencies, and evacuation.",
      category: "Booking",
      icon: "📋"
    },
    {
      question: "Do You Offer Flexible Payment Plans?",
      answer: "Yes! We make your dream safari accessible with flexible payments. Standard structure: 30% deposit to confirm booking, remaining 70% due 60 days before departure. For bookings made within 60 days, full payment is required. Custom payment schedules available for longer trips or group bookings. We accept credit cards, bank transfers, and PayPal.",
      category: "Booking",
      icon: "💰"
    },
    {
      question: "What Vaccinations Are Required for Tanzania?",
      answer: "Yellow fever vaccination is mandatory if arriving from or transiting through endemic countries. Recommended vaccinations include: Hepatitis A & B, Typhoid, and ensuring routine vaccines are current. Anti-malaria prophylaxis is strongly advised. Visit a travel clinic 4-6 weeks before departure. We provide a health advisory document with your booking confirmation.",
      category: "Health",
      icon: "💉"
    },
    {
      question: "How Do Airport Transfers Work?",
      answer: "Airport transfers are seamlessly included in most packages. Our professional drivers greet you at Kilimanjaro International (JRO) or Julius Nyerere International (DAR) airports with a personalized sign. Comfortable, air-conditioned vehicles transport you to your first accommodation or directly to the safari starting point. 24/7 support for flight delays.",
      category: "Travel",
      icon: "🚐"
    },
    {
      question: "What's the Typical Group Size?",
      answer: "For private safaris, it's exclusively your group in your own vehicle with dedicated guide. Shared/group safaris typically have 4-6 guests per vehicle maximum, ensuring everyone has a window seat and space for photography. Small group sizes guarantee personalized attention, flexibility, and an intimate wildlife experience.",
      category: "Safari",
      icon: "👥"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = activeCategory === "All"
    ? faqs.filter(faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    : faqs.filter(faq => faq.category === activeCategory && (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase())));

  return (
    <section ref={sectionRef} className="py-28 px-4 bg-gradient-to-b from-white via-[#F7EECB]/8 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7D5A]/1 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#774433]/1 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#FF7D5A]/0.5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['❓', '💡', '🎯', '✨', '📚'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-2 animate-float"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + i}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Large Question Mark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.005] pointer-events-none">
        <span className="text-[40rem] font-serif text-[#774433]">?</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Enhanced */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#FF7D5A]"></span>
            <span className="text-[#FF7D5A] text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF7D5A] rounded-full animate-pulse"></span>
              Got Questions?
            </span>
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#FF7D5A]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#1a1a1a] mb-6">
            Frequently Asked <span className="text-[#FF7D5A] relative inline-block">
              Questions
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 4 50 7 100 7C150 7 150 1 200 1" stroke="#FF7D5A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to know about planning your perfect African safari adventure.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-full bg-white border border-gray-200 focus:border-[#FF7D5A] focus:ring-2 focus:ring-[#FF7D5A]/20 outline-none transition-all shadow-md"
              />
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Tabs - Enhanced */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenIndex(0);
              }}
              className={`group flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#774433] text-white shadow-lg shadow-[#774433]/30"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#FF7D5A]/30"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className={`text-lg transition-transform duration-300 ${activeCategory === category.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {category.icon}
              </span>
              <span>{category.label}</span>
              {activeCategory === category.id && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {filteredFaqs.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* FAQ Content - Enhanced */}
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-md">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No questions found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden transition-all duration-500 ${
                    openIndex === index
                      ? 'shadow-xl shadow-[#774433]/10 ring-2 ring-[#FF7D5A]/30 scale-[1.01]'
                      : 'shadow-md hover:shadow-lg hover:scale-[1.005]'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center gap-4 text-left focus:outline-none group"
                    aria-expanded={openIndex === index}
                  >
                    {/* Icon */}
                    <span className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-gradient-to-br from-[#FF7D5A] to-[#DDA885] shadow-lg shadow-[#FF7D5A]/30'
                        : 'bg-[#F7EECB] group-hover:bg-[#FF7D5A]/20'
                    }`}>
                      {faq.icon}
                    </span>

                    {/* Question Text */}
                    <h3 className={`flex-1 text-lg font-bold transition-colors duration-300 ${
                      openIndex === index ? 'text-[#774433]' : 'text-gray-800 group-hover:text-[#774433]'
                    }`}>
                      {faq.question}
                    </h3>

                    {/* Category Badge */}
                    <span className="hidden md:block px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                      {faq.category}
                    </span>

                    {/* Toggle Icon */}
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-[#774433] rotate-180'
                        : 'bg-gray-100 group-hover:bg-[#774433]/10'
                    }`}>
                      <svg
                        className={`w-5 h-5 transition-colors duration-300 ${
                          openIndex === index ? 'text-white' : 'text-gray-500'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}>
                    <div className="px-6 pb-6 pt-0">
                      <div className="pl-[4.5rem]">
                        <div className="w-16 h-1 bg-gradient-to-r from-[#FF7D5A] to-[#774433] rounded-full mb-4"></div>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                        {/* Helpful buttons */}
                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-4">
                          <span className="text-sm text-gray-500">Was this helpful?</span>
                          <button className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full hover:bg-green-100 transition-colors flex items-center gap-1">
                            👍 Yes
                          </button>
                          <button className="px-3 py-1 bg-red-50 text-red-600 text-sm rounded-full hover:bg-red-100 transition-colors flex items-center gap-1">
                            👎 No
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Row - Enhanced */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {[
            { number: "500+", label: "Questions Answered", icon: "💬", color: "from-blue-500 to-indigo-600" },
            { number: "98%", label: "Customer Satisfaction", icon: "😊", color: "from-amber-500 to-orange-600" },
            { number: "24/7", label: "Support Available", icon: "🕐", color: "from-emerald-500 to-teal-600" },
            { number: "15min", label: "Avg Response Time", icon: "⚡", color: "from-violet-500 to-purple-600" }
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FF7D5A]/30 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <span className="text-3xl font-bold text-[#774433] block">{stat.number}</span>
              <span className="text-gray-500 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Contact CTA - Enhanced */}
        <div className={`mt-20 bg-gradient-to-br from-white via-[#F7EECB]/15 to-white rounded-3xl p-8 md:p-12 relative overflow-hidden border border-gray-200/50 shadow-lg transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <span className="text-[#FF7D5A] text-sm uppercase tracking-wider font-bold mb-2 block">💬 Need More Help?</span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#774433] mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 max-w-md">
                Our safari experts are ready to help you plan your perfect African adventure. Get in touch today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-[#FF7D5A] hover:bg-[#DDA885] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#FF7D5A]/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat With Us
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+255123456789"
                className="group inline-flex items-center justify-center gap-2 border-2 border-[#774433]/30 hover:bg-[#774433] hover:text-white text-[#774433] font-bold py-4 px-8 rounded-full transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
              <a
                href="https://wa.me/255123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;