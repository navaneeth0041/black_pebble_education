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
    <div className="bg-white max-h-[90vh] lg:max-h-[70vh] py-10">
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
                  className="w-18 h-18 lg:w-30 lg:h-30 object-contain"
                />
              </div>
              
              {/* Main Heading */}
              <div className="text-[#39BB9C]">
                <span className={`${mochiyPopOne.className} block text-3xl md:text-6xl font-normal leading-tight whitespace-nowrap`}>
                  The consequences of
                </span>
                <span className={`${mochiyPopOne.className} block text-3xl md:text-6xl  font-normal leading-tight whitespace-nowrap`}>
                  Financial Illiteracy
                </span>
                <span className={`${mochiyPopOne.className} block text-3xl md:text-6xl font-normal leading-tight whitespace-nowrap`}>

                  are Stark
                </span>
              </div>
              
              {/* Subtitle */}
              <p className={`${poppins.className} text-2xl lg:text-3xl text-[#39BB9C] font-normal opacity-70`}>

                Poor Financial Knowledge
              </p>
            </div>

            {/* Right Section - Image */}
            <div className="lg:w-1/2 w-full relative">
              <div className="relative flex justify-end items-center pl-4 lg:pl-18">
                
                {/* Main Family Image */}
                <div className="rounded-2xl overflow-hidden w-full max-w-xl pb-30 sm:py-10 lg:py-14 lg:max-w-2xl relative z-10 mx-auto">

                  <img 
                    src="./home_page_assets/3/Frame 69.svg" 
                    alt="Family learning about finances"
                    className="w-full h-auto object-cover"
                  />
                  {/* 27% SVG - Positioned overlapping at bottom center for mobile */}
                  <div className="block lg:hidden absolute left-1/2 -bottom-10 pb-20 transform -translate-x-1/2 z-20">
                    <img
                      src="./home_page_assets/3/Frame 164.svg"
                      alt="27% Financially literate adults in India"
                      className="w-40 h-40 sm:w-52 sm:h-52 object-contain"
                    />
                  </div>
                </div>
                
                {/* 27% SVG - Positioned overlapping for desktop (left overlap) */}
                <div className="hidden lg:block absolute lg:-bottom-16 lg:-left-5 z-20">
                  <img
                    src="./home_page_assets/3/Frame 164.svg"
                    alt="27% Financially literate adults in India"
                    className="w-80 h-80 xl:w-[20rem] xl:h-[20rem] object-contain"
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
