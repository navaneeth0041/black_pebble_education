import React from 'react';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

const mochiyPopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function FinancialLiteracyPage() {
  return (
    <div className="w-full bg-[#E8F4F8] min-h-screen">
      {/* Uniform padding for all screen sizes */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Center content vertically in viewport */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-8rem)]">
            
            {/* Left Section - Content */}
            <div className="lg:w-1/2 flex-shrink-0 space-y-6">
              
              {/* Bar Chart Icon */}
              <div>
                <img
                  src="./home_page_assets/3/Group.svg"
                  alt="Financial Chart Icon"
                  className="w-18 h-18 sm:w-22 sm:h-22 lg:w-26 lg:h-26 object-contain"
                />
              </div>
              
              {/* Main Heading */}
              <div className="text-teal-500">
                <span className={`${mochiyPopOne.className} block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight whitespace-nowrap`}>
                  The consequences of
                </span>
                <span className={`${mochiyPopOne.className} block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight whitespace-nowrap`}>
                  Financial Illiteracy
                </span>
                <span className={`${mochiyPopOne.className} block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight whitespace-nowrap`}>
                  are Stark
                </span>
              </div>
              
              {/* Subtitle */}
              <p className={`${poppins.className} text-lg sm:text-xl lg:text-2xl text-teal-500 font-normal opacity-70`}>
                Poor Financial Knowledge
              </p>
            </div>

            {/* Right Section - Image */}
            <div className="lg:w-1/2 w-full relative">
              {/* Container with extra padding-left to push images right */}
              <div className="relative flex justify-end items-center pl-8 sm:pl-12 lg:pl-20 xl:pl-32">
                
                {/* Main Family Image */}
                <div className="rounded-2xl overflow-hidden w-full max-w-sm sm:max-w-md relative z-10">
                  <img 
                    src="./home_page_assets/3/Frame 69.svg" 
                    alt="Family learning about finances"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* 27% SVG - Positioned overlapping */}
                <div className="absolute -bottom-8 -left-4 sm:-bottom-12 sm:-left-8 lg:-bottom-16 lg:-left-5 z-20">
                  <img
                    src="./home_page_assets/3/Frame 164.svg"
                    alt="27% Financially literate adults in India"
                    className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
