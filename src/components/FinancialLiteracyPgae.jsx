'use client'
import React, { useState, useEffect } from 'react';

export default function FinancialLiteracyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data for the rotating content
  const contentData = [
    {
      subtitle: "Poor Financial Knowledge",
      image: "./home_page_assets/3/27photo.png",
      statisticImage: "./home_page_assets/3/Frame 164.svg",
      alt: "Family learning about finances"
    },
    {
      subtitle: "Financial Insecurity", 
      image: "./home_page_assets/3/69photo.png",
      statisticImage: "./home_page_assets/3/69.png",
      alt: "Person counting money and coins"
    },
    {
      subtitle: "Financial Setbacks",
      image: "./home_page_assets/3/47photo.png",
      statisticImage: "./home_page_assets/3/47.svg",
      alt: "Mother and daughter learning together"
    },
    {
      subtitle: "Financial Frauds",
      image: "./home_page_assets/3/24photo.png",
      statisticImage: "./home_page_assets/3/24.png",
      alt: "Children studying and learning"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 3500); // 3.5 seconds

    return () => clearInterval(interval);
  }, [contentData.length]);

  const currentContent = contentData[currentIndex];

  return (
    <>
      <div className="bg-white max-h-[90vh]">
        <div className="px-4 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between py-10 gap-8 lg:gap-16 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-8rem)]">
              {/* Left Section - Content */}
              <div className="w-full lg:w-1/2 flex-shrink-0 space-y-6 flex flex-col items-center lg:items-start text-left justify-center lg:justify-start">
                {/* Bar Chart Icon - Centered container but left-aligned content */}
                <div className="flex justify-start w-full max-w-xs lg:max-w-none">
                  <img
                    src="./home_page_assets/3/Group.svg"
                    alt="Financial Chart Icon"
                    className="w-16 h-16 md:w-18 md:h-18 lg:w-24 lg:h-24 xl:w-30 xl:h-30 object-contain"
                  />
                </div>
                
                {/* Main Heading - Centered container but left-aligned text */}
                <div className="text-[#39BB9C] w-full max-w-xs lg:max-w-none">
                  <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    The consequences
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    of Financial
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    Illiteracy are Stark
                  </span>
                </div>
                
                {/* Dynamic Subtitle with smooth transition - Centered container but left-aligned and bigger */}
                <div className="transition-all duration-500 ease-in-out w-full max-w-xs lg:max-w-none">
                  <p className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-[#39BB9C] font-normal opacity-70">
                    {currentContent.subtitle}
                  </p>
                </div>
              </div>
              
              {/* Right Section - Dynamic Image and Statistic */}
              <div className="lg:w-1/2 w-full relative">
                <div className="relative flex justify-center lg:justify-end items-center pl-4 lg:pl-18">
                  {/* Main Image with smooth transition */}
                  <div className="rounded-2xl overflow-hidden w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl pb-24 md:pb-28 lg:py-14 relative z-10 mx-auto transition-all duration-500 ease-in-out">
                    <img
                      key={currentIndex} // Force re-render for smooth transition
                      src={currentContent.image}
                      alt={currentContent.alt}
                      className="w-full h-72 md:h-80 lg:h-96 object-cover transition-opacity duration-500"
                    />
                    
                    {/* Dynamic Statistic Image - Mobile - BIGGER AND CENTERED */}
                    <div className="block lg:hidden absolute left-1/2 -bottom-12 pb-16 md:pb-20 transform -translate-x-1/2 z-20">
                      <img
                        src={currentContent.statisticImage}
                        alt={`${currentContent.statistic} ${currentContent.description}`}
                        className="w-52 h-52 md:w-64 md:h-64 object-contain transition-all duration-500 ease-in-out"
                      />
                    </div>
                  </div>
                  
                  {/* Dynamic Statistic Image - Desktop - BIGGER */}
                  <div className="hidden lg:block absolute lg:-bottom-16 xl:-bottom-20 lg:-left-8 xl:-left-10 z-20">
                    <img
                      src={currentContent.statisticImage}
                      alt={`${currentContent.statistic} ${currentContent.description}`}
                      className="w-80 h-80 lg:w-68 lg:h-68 xl:w-75 xl:h-75 2xl:w-[24rem] 2xl:h-[24rem] object-contain transition-all duration-500 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Transition Effect */}
      <img
        src="/effects/white.png"
        alt="white transition"
        className='w-[200%] block relative -top-5 lg:-top-7 z-0'
      />
    </>
  );
}