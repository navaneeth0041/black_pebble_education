"use client";

import React from "react";

export default function ValueOfMoneyHero() {
  const buttons = [
    {
      text: "Book a Counselling Session",
      className: "bg-gradient-to-r from-[#08A69A] via-[#0ABE9D] to-[#69C9A1] hover:bg-teal-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 text-lg",
      onClick: () => console.log("Book counselling clicked")
    },
    {
      text: "Be our Brand Ambassador",
      className: "bg-transparent border border-white hover:bg-white hover:text-gray-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 text-lg",
      onClick: () => console.log("Brand ambassador clicked")
    }
  ];

  return (
    <>
      <div className="bg-[#343434] text-white h-[70vh] relative overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-6">
              <h1 className="font-['Mochiy_Pop_One'] text-[42px] xs:text-[48px] sm:text-[52px] md:text-[65px] lg:text-[80px] xl:text-[95px] leading-[1.1] tracking-[-1.5px] font-normal">
                Value of Money
              </h1>
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 flex-shrink-0 hidden sm:block">
                <img
                  src="/Course_Design/Clip path group.svg"
                  alt="Piggy Bank"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <p className="mt-4 mb-8 sm:mb-6 text-[16px] xs:text-[17px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[26px] leading-[1.4] tracking-[-0.3px] text-gray-300 text-center lg:text-left font-medium font-poppins">
              Introduce your child to the right money mindset - Respect for money!
            </p>

            <div className="mt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              {buttons.map((button, index) => (
                <button 
                  key={index} 
                  className={`${button.className} w-full sm:w-auto text-xs sm:text-sm md:text-base px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full`} 
                  onClick={button.onClick}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Optional vector background placeholder */}
        <div className="absolute bottom-0 left-0 w-full h-[30px] bg-repeat-x bg-[url('/your-vector.svg')]"></div>
      </div>
      <img
        src="/effects/black.png"
        alt="black transition"
        className="w-full block relative -top-8 z-20"
      />
    </>
  );
}