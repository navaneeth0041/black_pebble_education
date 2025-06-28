"use client";

import React from "react";
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

const mochiyPopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

export default function ValueOfMoneyHero({
  title = "Value of Money",
  subtitle = "Introduce your child to the right money mindset - Respect for money!",
  iconSrc = "/Course_Design/Clip path group.svg",
  iconAlt = "Course Icon",
  primaryButtonText = "Book a Counseling Session",
  secondaryButtonText = "Be our Brand Ambassador",
  onPrimaryClick = () => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeeCFCunf99pwus2cnid2cGLyWrzv1LvKSDOMmqsLFmVp6yKA/viewform"),
  onSecondaryClick = () => {window.location='/brand-ambassador'}
}) {
  return (
    <>
      <div className="bg-[#343434] text-white h-[60vh] lg:h-[70vh] relative overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center lg:text-left">
            {/* Mobile: Icon above title, positioned more to left and bigger */}
            <div className="flex justify-center ml-30 mb-4 lg:hidden">
              <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
                <img
                  src={iconSrc}
                  alt={iconAlt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Desktop: Title and icon side by side */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-6">
              <h1 className={`${mochiyPopOne.className} text-[40px] xs:text-[62px] sm:text-[52px] md:text-[65px] lg:text-[80px] xl:text-[95px] leading-[1.1] tracking-[-1.5px] font-normal`}>
                {title}
              </h1>
              {/* Desktop: Icon next to title */}
              <div className="w-20 h-20 xl:w-24 xl:h-24 flex-shrink-0 hidden lg:block">
                <img
                  src={iconSrc}
                  alt={iconAlt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <p className="mt-4 mb-8 sm:mb-6 text-[23px] xs:text-[26px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[26px] leading-[1.4] tracking-[-0.3px] text-gray-300 text-center lg:text-left font-medium font-poppins">
              {subtitle}
            </p>

            <div className="mt-2 flex flex-col sm:flex-row gap-4 sm:gap-4 justify-start lg:justify-start">
              <button 
                className="bg-gradient-to-r from-[#08A69A] via-[#0ABE9D] to-[#69C9A1] hover:bg-teal-600 text-white w-full sm:w-auto text-lg sm:text-sm md:text-base px-7 py-4 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-medium transition-all duration-200"
                onClick={onPrimaryClick}
              >
                {primaryButtonText}
              </button>
              <button 
                className="bg-transparent border border-white hover:bg-white hover:text-gray-800 text-white w-full sm:w-auto text-lg sm:text-sm md:text-base px-7 py-4 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-medium transition-all duration-200"
                onClick={onSecondaryClick}
              >
                {secondaryButtonText}
              </button>
            </div>
          </div>
        </div>

        {/* Optional vector background placeholder */}
        <div className="absolute bottom-0 left-0 w-full h-[30px] bg-repeat-x bg-[url('/your-vector.svg')]"></div>
      </div>
      <img
        src="/effects/black.png"
        alt="black transition"
        className="w-full block relative -top-2 lg:-top-7 z-20"
      />
    </>
  );
}