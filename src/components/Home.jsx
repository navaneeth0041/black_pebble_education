import React from 'react';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

const PopOne = Mochiy_Pop_One({
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
    <>
    <div className="min-h-[70vh] lg:min-h-screen bg-[#343434] flex flex-col items-center justify-center sm:p-6 md:p-8 overflow-x-hidden relative z-10">
      <div className="sm:max-w-md md:max-w-2xl lg:max-w-4xl w-full text-center relative">
      <div className="mb-12 sm:mb-10 md:mb-12">
          <div className="relative inline-block mb-3 sm:mb-6">
            <div className="hidden sm:block absolute -right-12 md:-right-16 lg:-right-18 bottom-2 md:bottom-4 lg:bottom-6 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
              <img
                src="/home_page_assets/8/Clip path group.svg"
                alt="Hand Icon"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="hidden sm:block absolute -left-3 md:-left-5 lg:-left-5 top-2 md:top-4 lg:top-6 w-12 h-12 md:w-16 md:h-16 lg:w-25 lg:h-20 xl:w-20 xl:h-24">
              <img
                src="/home_page_assets/8/Group 54.svg"
                alt="Coins Icon"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className={`${PopOne.className} text-4xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight sm:leading-tight md:leading-[83.44px] tracking-[-0.019em] text-center text-white mb-2 sm:mb-4`}>
              <span className="block sm:inline">Shaping</span>
              <span className="block sm:inline">&nbsp;Tomorrow's</span>
            </h1>

            <div className="text-3xl sm:text-3xl md:text-4xl lg:text-[56px] leading-tight sm:leading-tight md:leading-[83.44px] tracking-[-0.019em] text-center">
              <span className={`${PopOne.className}`} style={{ color: '#BBE6FF' }}>CEOs</span>
              <span className="text-white">, </span>
              <div className="block sm:inline">
                <span className={`${PopOne.className}`} style={{ color: '#A5FFCE' }}>INVESTORS</span>
                <span className="text-white"> & </span>
              </div>
              <div className="block sm:inline">
                <span className={`${PopOne.className}`} style={{ color: '#A5FFCE' }}>ENTREPRENEURS</span>
              </div>
            </div>
          </div>

          <div className={`${poppins.className} text-2xl sm:text-xl md:text-2xl lg:text-[43px] leading-[149%] tracking-[-0.019em] text-center text-white mb-4 sm:mb-6`}>
            One Lesson at a Time
          </div>

          <p className={`${poppins.className} text-white text-sm sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed px-2 sm:px-4`}>
            Practical financial education designed to empower kids (6-11 yrs) 
            and teens (12-17 yrs) with skills they won't learn in school.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <button className={`${poppins.className} bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25 w-full sm:w-auto text-sm sm:text-base`}>
                Book a Counseling Session
            </button>
            <button className={`${poppins.className} bg-transparent border-2 border-white hover:border-gray-400 text-white hover:text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base`}>
                Be our Brand Ambassador
            </button>
        </div>

      </div>
    </div>
    <img
        src="/effects/black.png"
        alt="black transition"
        className='w-[200%] block relative -top-7 z-0'
      />
    </>  
  );
}