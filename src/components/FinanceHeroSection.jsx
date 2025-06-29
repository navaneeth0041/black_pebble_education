'use client';
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
  subtitle = "An interactive environment to learn important financial concepts",
  onPrimaryClick = () => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeeCFCunf99pwus2cnid2cGLyWrzv1LvKSDOMmqsLFmVp6yKA/viewform"),
  onSecondaryClick = () => {window.location='/brand-ambassador'}
}) {
  return (
    <>
      <section className="bg-[#343434] text-white h-[60vh] lg:h-[70vh] relative overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 w-full">
          <div className="text-center lg:text-left">
            <div className="flex justify-center ml-30 mb-4 lg:hidden">
              <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
                <img
                  src="./Finance_clubs/Group.svg"
                  alt="Calculator Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 mb-8 sm:mb-6">
              <h1 className={`${PopOne.className} lg:pl-0 pl-1 text-[25px] sm:text-4xl md:text-4xl lg:text-7xl leading-snug tracking-tight lg:text-left text-white mb-2 sm:mb-4 max-w-5xl`}>
                Finance Discussions for<br />
                <span className="text-white">{mindType} Minds ({ageRange})</span>
              </h1>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 flex-shrink-0 hidden sm:block lg:mt-12 xl:mt-16">
                <img
                  src="./Finance_clubs/Group.svg"
                  alt="Calculator Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <p className="mt-4 mb-8 sm:mb-6 text-[18px] xs:text-[17px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[24px] leading-[1.4] tracking-[-0.3px] text-gray-300 text-center lg:text-left font-medium font-poppins">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
            <button
              onClick={onPrimaryClick}
              className={`${poppins.className} bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] hover:from-[#077A83] hover:via-[#08A88B] hover:to-[#6DB892] text-white w-full sm:w-auto text-lg sm:text-sm md:text-base px-7 py-4 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25 w-full sm:w-auto text-sm sm:text-base border border-black/20`}
            >
              Book a Counseling Session
            </button>
            <button
              onClick={onSecondaryClick}
              className={`${poppins.className} bg-transparent border-2 border-white hover:border-gray-300 hover:bg-white/5 text-white w-full sm:w-auto text-lg sm:text-sm md:text-base px-7 py-4 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base`}
            >
              Be our Brand Ambassador
            </button>
          </div>
        </div>
      </section>

      <img
        src="/effects/black.png"
        alt="black transition"
        className="w-full block relative -top-2 lg:-top-7 z-0"
      />
    </>
  );
}
