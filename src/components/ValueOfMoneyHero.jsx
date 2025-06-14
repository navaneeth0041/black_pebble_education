"use client";
import React from "react";

export default function ValueOfMoneyHero() {
  const buttons = [
    {
      text: "Book a Counselling Session",
      className: "bg-gradient-to-r from-[#08A69A] via-[#0ABE9D] to-[#69C9A1] hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200",
      onClick: () => console.log("Book counselling clicked")
    },
    {
      text: "Be our Brand Ambassador",
      className: "bg-transparent border border-white hover:bg-white hover:text-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-200",
      onClick: () => console.log("Brand ambassador clicked")
    }
  ];

  return (
    <>
    <div className="bg-[#343434] text-white py-8 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Value of Money
            </h1>
            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
              <img 
                src="/Course_Design/Clip path group.svg" 
                alt="Piggy Bank" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Introduce your child to the right money mindset - Respect for money!
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={button.className}
                onClick={button.onClick}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-repeat-x bg-[url('/')]"></div> 
      {/* Vector placeholder */}
    </div>
    <img
        src="/effects/black.png"
        alt="black transition"
        className='w-full block relative -top-8 z-20'
      />
    </>
  );
}