"use client"
import { useEffect, useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import HeroSection from './Hero';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import PlanYourSafari from './PlanYourSafari';
import TopDestinations from './TopDestinations';
import PopularSafaris from './PopularSafaris';
import TestimonialSection from './TestimonialSection';
import GetInspiredSection from './GetInspiredSection';
import FAQSection from './FAQSection';
import TailorMadeTrip from './TailorMadeTripEnhanced';

const HomePage = ({ packages = [] }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gray-200/30">
        <div
          className="h-full bg-gradient-to-r from-[#FF7D5A] to-[#774433] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#FF7D5A] hover:bg-[#DDA885] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-xl ${scrollProgress > 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Hero - No animation wrapper, has its own */}
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
      </div>
      {/* How It Works */}
      <AnimatedSection animation="fadeUp" duration={1000} delay={100}>
        <HowItWorks />
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection animation="fadeUp" duration={1000}>
        <WhyChooseUs />
      </AnimatedSection>



      {/* Plan Your Safari */}
      <AnimatedSection animation="scaleUp" duration={1000}>
        <PlanYourSafari />
      </AnimatedSection>

      {/* Top Destinations */}
      <AnimatedSection animation="fadeUp" duration={1000}>
        <TopDestinations />
      </AnimatedSection>

      {/* Popular Safaris */}
      <AnimatedSection animation="fadeLeft" duration={1000}>
        <PopularSafaris packages={packages} />
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection animation="fadeUp" duration={1000}>
        <TestimonialSection />
      </AnimatedSection>

      {/* Get Inspired / Blog */}
      <AnimatedSection animation="fadeUp" duration={1000}>
        <GetInspiredSection />
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection animation="fadeUp" duration={1000}>
        <FAQSection />
      </AnimatedSection>

      {/* Tailor Made Trip */}
      <AnimatedSection animation="scaleUp" duration={1000}>
        <TailorMadeTrip />
      </AnimatedSection>
    </div>
  );
};

export default HomePage;

