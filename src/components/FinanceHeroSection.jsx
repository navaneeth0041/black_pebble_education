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
    <div className="min-h-[70vh] lg:min-h-screen bg-[#343434] flex items-center justify-start sm:p-6 md:p-8 lg:pl-28 overflow-x-hidden">
      <div className="w-full max-w-[1212px] relative">
        
        {/* Navigation placeholder - replace with your Navigation component */}
        {/* <Navigation variant="inline" /> */}
        
        <div className="mb-12 sm:mb-10 md:mb-12">
          <div className="relative mb-6 sm:mb-8">
            
            {/* Main Heading - Left aligned and larger */}
        <h1 className={`${PopOne.className} text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[90px] leading-tight sm:leading-tight md:leading-[136%] tracking-[-1.235px] text-left text-white mb-2 sm:mb-4 max-w-6xl`}>
  <span className="block relative whitespace-nowrap">
    Finance Discussions for <span className="relative inline-block">
      {mindType}
      {/* Icon positioned absolutely under the mind type */}
      <img
        src="./Finance_clubs/Group.svg" // Your actual icon path
        alt="Calculator Icon"
        className="hidden lg:block absolute left-1/100 transform -translate-x-1/2 top-[180px] w-60 h-60 object-contain rotate-[-11deg]"
      />
    </span>
  </span>
  <span className="block">Minds ({ageRange})</span>
</h1>
          </div>
          {/* Subtitle - Left aligned */}
          <p className={`${poppins.className} text-white text-base sm:text-lg md:text-xl font-medium leading-[150%] tracking-[-0.342px] text-left mb-8 sm:mb-10 max-w-2xl`}>
            {subtitle}
          </p>
        </div>
        {/* Action Buttons - Left aligned */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
          <button className={`${poppins.className} bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] hover:from-[#077A83] hover:via-[#08A88B] hover:to-[#6DB892] text-white font-medium px-6 sm:px-8 py-3 rounded-[59px] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25 w-full sm:w-auto text-sm sm:text-base border border-black/20`}>
            Book a Counseling Session
          </button>
          <button className={`${poppins.className} bg-transparent border-2 border-white hover:border-gray-300 hover:bg-white/5 text-white hover:text-white font-medium px-6 sm:px-8 py-3 rounded-[59px] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base`}>
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