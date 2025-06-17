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
      text: "Book a Counselling Session",
      className: "bg-gradient-to-r from-[#08A69A] via-[#0ABE9D] to-[#69C9A1] hover:opacity-90 text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-full font-medium transition-all duration-200 text-sm whitespace-nowrap",
      onClick: () => console.log("Book counselling clicked")
    },
    {
      text: "Be our Brand Ambassador",
      className: "bg-transparent border border-white hover:bg-white hover:text-gray-800 text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-full font-medium transition-all duration-200 text-sm whitespace-nowrap",
      onClick: () => console.log("Brand ambassador clicked")
    }
  ];

  return (
    <>
    <div className="bg-[#343434] text-white py-12 sm:py-16 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          {/* Content Section */}
          <div className="text-center lg:text-left lg:flex-1 w-full">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight ${mochiyPopOne.className}`}>
              Building the Future of
              <br />
              <span className="text-white">Financially Confident Kids</span>
            </h1>
            
            <p className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${poppins.className}`}>
              We simplify money for young minds - one course at a time!
            </p>
            
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
        className='w-[200%] block relative -top-7 z-0'
      />
    </> 
  );
}