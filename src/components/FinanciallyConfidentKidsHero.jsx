"use client";
import React from "react";

export default function FinanciallyConfidentKidsHero() {
  const buttons = [
    {
      text: "Book a Counselling Session",
      className: "bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200",
      onClick: () => console.log("Book counselling clicked")
    },
    {
      text: "Be our Brand Ambassador",
      className: "bg-transparent border border-white hover:bg-white hover:text-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200",
      onClick: () => console.log("Brand ambassador clicked")
    }
  ];

  return (
    <div className="bg-[#2f2f2f] text-white py-8 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          {/* Content Section */}
          <div className="text-center lg:text-left lg:flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building the Future of
              <br />
              <span className="text-white">Financially Confident Kids</span>
            </h1>
            
            <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
              We simplify money for young minds - one course at a time!
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

          {/* Icon Section */}
          <div className="lg:flex-shrink-0 ">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mt-35">
              <img 
                src="/about/Group.svg" 
                alt="Brain with lightbulb - Financial learning" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-repeat-x bg-[url('/')]"></div>
    </div>
  );
}