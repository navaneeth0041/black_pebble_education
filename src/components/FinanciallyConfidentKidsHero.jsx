"use client";
import React from "react";
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

const mochiyPopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function FinanciallyConfidentKidsHero() {
  const buttons = [
    {
      text: "Book a Counseling Session",
      className: "bg-gradient-to-r from-[#08A69A] via-[#0ABE9D] to-[#69C9A1] hover:opacity-90 text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-full font-medium transition-all duration-200 text-sm whitespace-nowrap",
      onClick: () => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeeCFCunf99pwus2cnid2cGLyWrzv1LvKSDOMmqsLFmVp6yKA/viewform")
    },
    {
      text: "Be our Brand Ambassador",
      className: "bg-transparent border border-white hover:bg-white hover:text-gray-800 text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-full font-medium transition-all duration-200 text-sm whitespace-nowrap",
      onClick: () => {window.location='/brand-ambassador'}
    }
  ];

  return (
    <>
    <div className="bg-[#343434] text-white py-8 sm:py-16 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center ml-30 mb-4 lg:hidden">
              <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
                <img
                  src="/about/Group.svg"
                  alt="Calculator Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          {/* Content Section */}
          <div className="text-center lg:text-left lg:flex-1 w-full">
            <h1 className={`text-[25px] sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight ${mochiyPopOne.className}`}>
              Building the Future of
              <br />
              <span className="text-white">Financially Confident Kids</span>
            </h1>
            
            <p className={`mt-4 sm:mt-6 text-[20px] sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${poppins.className}`}>
At Black Pebble Education, we simplify money for young minds - one course at a time!            </p>
            
            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={button.className}
                  onClick={button.onClick}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
          
          {/* Icon Section - Hidden on mobile and small screens */}
          <div className="hidden lg:block lg:flex-shrink-0 -ml-[120px]">
            <div className="w-40 h-40 mt-[200px]">
              <img 
                src="/about/Group.svg" 
                alt="Brain with lightbulb - Financial learning" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-repeat-x bg-[url('/')]"></div>
    </div>
    <img
        src="/effects/black.png"
        alt="black transition"
        className='w-[200%] block relative -top-2 lg:-top-7 z-0'
      />
    </> 
  );
}