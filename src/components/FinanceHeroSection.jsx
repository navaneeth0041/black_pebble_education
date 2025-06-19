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

export default function FinanceHeroSection({ 
  ageRange = "6-11 years",
  mindType = "Young",
  subtitle = "An interactive environment to learn important financial concepts"
}) {
  return (
<>
  <div className="min-h-[70vh] lg:min-h-screen bg-[#343434] flex items-center justify-start px-4 sm:px-6 md:px-8 lg:pl-28 overflow-x-hidden">
    <div className="w-full max-w-[1212px] relative">
      <div className="mb-12 sm:mb-10 md:mb-12">
        <div className="relative mb-6 sm:mb-8 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
          <h1 className={`${PopOne.className} text-[42px] xs:text-[48px] sm:text-[52px] md:text-[65px] lg:text-[80px] xl:text-[95px] leading-[1.1] tracking-[-1.5px] text-left text-white font-normal max-w-6xl`}>
            <span className="block relative">
              Finance Discussions for{' '}
              <span className="relative inline-block">
                Young
                <img
                  src="./Finance_clubs/Group.svg"
                  alt="Calculator Icon"
                  className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-[180px] w-28 sm:w-32 md:w-40 lg:w-60 h-auto object-contain rotate-[-11deg]"
                />
              </span>
            </span>
            <span className="block">Minds ({ageRange})</span>
          </h1>
        </div>

        <p className={`${poppins.className} text-[16px] xs:text-[17px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[26px] leading-[1.4] tracking-[-0.3px] text-gray-300 text-left font-medium font-poppins mb-8 sm:mb-10 max-w-3xl`}>
          {subtitle}
        </p>
      </div>

      <div className="mt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start">
        <button
          className="bg-gradient-to-r from-[#08A69A] via-[#0ABE9D] to-[#69C9A1] hover:bg-teal-600 text-white w-full sm:w-auto text-xs sm:text-sm md:text-base px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-medium transition-all duration-200"
        >
          Book a Counseling Session
        </button>
        <button
          className="bg-transparent border-2 border-white hover:border-gray-300 hover:bg-white/5 text-white hover:text-white font-medium px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full transition-all duration-200 text-xs sm:text-sm md:text-base w-full sm:w-auto"
        >
          Be our Brand Ambassador
        </button>
      </div>
    </div>
  </div>

  <img
    src="/effects/black.png"
    alt="black transition"
    className="w-[200%] block relative -top-7 z-0"
  />
</>

  );
}