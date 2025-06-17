"use client";
import React from "react";
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

const PopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function MissionMethodModeSection() {
  return (
    <>
      <div className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 -mt-3 sm:-mt-6 md:-mt-10 lg:-mt-20 xl:-mt-28">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-0">
          
          {/* Image Section - Bottom on mobile, Left on desktop */}
<div className="w-full lg:w-2/5 order-2 lg:order-1 flex items-center lg:items-start justify-center lg:justify-end">
  <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 lg:pr-6 xl:pr-10 lg:mt-10 xl:mt-14">

              <img
                src="/about/Parent_child.svg"
                alt="Father and child learning about money together"
                className="h-full w-full object-cover max-h-[40vh] xs:max-h-[45vh] sm:max-h-[50vh] md:max-h-[55vh] lg:max-h-[65vh] xl:max-h-[70vh] min-h-[200px] xs:min-h-[220px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[350px] xl:min-h-[400px] rounded-xl lg:rounded-r-2xl lg:rounded-l-none shadow-lg lg:shadow-xl"
              />
            </div>
          </div>

          {/* Text Content Section - Top on mobile, Right on desktop */}
          <div className="w-full lg:w-3/5 order-1 lg:order-2 px-4 sm:px-6 md:px-8 lg:pl-10 xl:pl-14 2xl:pl-20 lg:pr-6 xl:pr-10 flex items-center">
            <div className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-10 max-w-none lg:max-w-3xl xl:max-w-4xl">
              <h2 className={`${PopOne.className} text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#39BB9C] leading-tight`}>
                <span className="block sm:inline">Our Mission, Method &</span>
                <br className="hidden sm:block" />
                <span className="block sm:inline">Mode</span>
              </h2>
              
              <div className={`space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 text-[#39BB9C] ${poppins.className}`}>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed font-medium">
                  Our mission is to cultivate a generation that is financially savvy and confident.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed font-medium">
                  We break down complex money concepts into simple, relatable ideas that resonate with children. We provide age-appropriate resources that make financial education fun and accessible.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed font-medium">
                  We incorporate stories, videos, and real-life scenarios to help young learners understand the importance of budgeting, saving, investing, and other financial concepts.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed font-medium">
                  Our goal is to inspire curiosity and foster a positive attitude towards money, empowering children to take control of their financial futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/effects/white.png"
        alt="white transition"
        className="w-full block relative -top-7 z-20"
      />
    </>
  );
}
