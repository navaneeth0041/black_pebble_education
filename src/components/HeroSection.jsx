'use client';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Pure Black Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto pt-20">
          
          {/* Main Heading */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-candal font-bold text-white leading-tight mb-6 tracking-wide">
              Be a Pebble Bella!
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-lg sm:text-xl lg:text-2xl font-poppins font-normal text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Love what we do? Be our Brand Ambassador, Bella!
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="inline-flex items-center px-8 py-4 bg-brand-orange text-white font-poppins font-semibold text-lg rounded-full hover:bg-brand-orange/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
              <span>Join Now</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-brand-orange rounded-full animate-pulse-slow opacity-60"></div>
          <div className="absolute top-1/3 right-16 w-3 h-3 bg-brand-teal rounded-full animate-float opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-brand-blue rounded-full animate-pulse-slow opacity-50"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-brand-green rounded-full animate-bounce-slow opacity-30"></div>
        </div>
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;