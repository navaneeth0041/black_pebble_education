import React from 'react';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

// Configure the fonts
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

export default function Home1() {
  return (
    <div className="min-h-screen bg-[#343434] flex items-center justify-center p-2 sm:p-6 md:p-8 overflow-x-hidden">
      <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl w-full text-center relative">
      <div className="mb-12 sm:mb-10 md:mb-12">
          <div className="relative inline-block mb-3 sm:mb-6">
            <div className="hidden sm:block absolute -left-16 md:-left-20 lg:-left-24 top-2 md:top-4 lg:top-6 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
              <img
                src="/home_page_assets/8/Clip path group.svg"
                alt="Hand Icon"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="hidden sm:block absolute -right-16 md:-right-20 lg:-right-24 bottom-2 md:bottom-4 lg:bottom-6 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
              <img
                src="/home_page_assets/8/Group 54.svg"
                alt="Coins Icon"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className={`${mochiyPopOne.className} text-4xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight sm:leading-tight md:leading-[83.44px] tracking-[-0.019em] text-center text-white mb-2 sm:mb-4`}>
              Shaping Tomorrow's
            </h1>

            <div className={`${mochiyPopOne.className} text-3xl sm:text-3xl md:text-4xl lg:text-[56px] leading-tight sm:leading-tight md:leading-[83.44px] tracking-[-0.019em] text-center`}>
              <span style={{ color: '#BBE6FF' }}>CEOs</span>
              <span className="text-white">, </span>
              <div className="block sm:inline">
                <span style={{ color: '#A5FFCE' }}>INVESTORS</span>
                <span className="text-white"> & </span>
              </div>
              <div className="block sm:inline">
                <span style={{ color: '#A5FFCE' }}>ENTREPRENEURS</span>
              </div>
            </div>
          </div>

          <div className={`${poppins.className} text-2xl sm:text-xl md:text-2xl lg:text-[43px] leading-[149%] tracking-[-0.019em] text-center text-white mb-4 sm:mb-6`}>
            One Lesson at a Time
          </div>

          <p className={`${poppins.className} text-gray-300 text-sm sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed px-2 sm:px-4`}>
            Practical financial education designed to empower kids (6-11 yrs) 
            and teens (12-17 yrs) with skills they won't learn in school.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <button className={`${poppins.className} bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25 w-full sm:w-auto text-sm sm:text-base`}>
                Book a Counseling Session
            </button>
            <button className={`${poppins.className} bg-transparent border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base`}>
                Be our Brand Ambassador
            </button>
            </div>

      </div>
    </div>
  );
}