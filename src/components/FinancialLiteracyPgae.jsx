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
    <>
      <div className="bg-white max-h-[90vh]">
        <div className="px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between py-10 gap-8 lg:gap-16 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-8rem)]">
              {/* Left Section - Content */}
              <div className="w-full lg:w-1/2 flex-shrink-0 space-y-6">
                {/* Bar Chart Icon */}
                <div>
                  <img
                    src="./home_page_assets/3/Group.svg"
                    alt="Financial Chart Icon"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-24 lg:h-24 xl:w-30 xl:h-30 object-contain"
                  />
                </div>
                {/* Main Heading */}
                <div className="text-[#39BB9C]">
                  <span className={`${mochiyPopOne.className} block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight whitespace-nowrap`}>
                    The consequences
                  </span>
                  <span className={`${mochiyPopOne.className} block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight whitespace-nowrap`}>
                    of Financial
                  </span>
                  <span className={`${mochiyPopOne.className} block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight whitespace-nowrap`}>
                    Illiteracy are Stark
                  </span>
                </div>
                {/* Subtitle */}
                <p className={`${poppins.className} text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-[#39BB9C] font-normal opacity-70`}>
                  Poor Financial Knowledge
                </p>
              </div>
              
              {/* Right Section - Image */}
              <div className="lg:w-1/2 w-full relative">
                <div className="relative flex justify-end items-center pl-4 lg:pl-18">
                  {/* Main Family Image */}
                  <div className="rounded-2xl overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl pb-20 sm:pb-24 md:pb-28 lg:py-14 relative z-10 mx-auto">
                    <img
                      src="./home_page_assets/3/Frame 69.svg"
                      alt="Family learning about finances"
                      className="w-full h-auto object-cover"
                    />
                    
                    {/* 27% SVG - Positioned overlapping at bottom center for mobile */}
                    <div className="block lg:hidden absolute left-1/2 -bottom-8 sm:-bottom-10 md:-bottom-12 pb-12 sm:pb-16 md:pb-20 transform -translate-x-1/2 z-20">
                      <img
                        src="./home_page_assets/3/Frame 164.svg"
                        alt="27% Financially literate adults in India"
                        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* 27% SVG - Positioned overlapping for desktop (left overlap) */}
                  <div className="hidden lg:block absolute lg:-bottom-12 xl:-bottom-16 lg:-left-3 xl:-left-5 z-20">
                    <img
                      src="./home_page_assets/3/Frame 164.svg"
                      alt="27% Financially literate adults in India"
                      className="w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-80 2xl:h-80 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <img
        src="/effects/white.png"
        alt="black transition"
        className='w-[200%] block relative -top-7 z-0'
      />
    </>
  );
}