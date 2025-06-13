import React from "react";
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

const mochiyPopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function HeroSection() {
  return (
    <div className="bg-[#343434] lg:min-h-[30vh] text-white py-8 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center lg:text-left">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${mochiyPopOne.className}`}>
            Be a Pebble Bella!
          </h1>
          <p className={`mt-4 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed ${poppins.className}`}>
            Love what we do? Be our Brand Ambassador, Bella!
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-repeat-x bg-[url('/')]"></div> 
      {/* Someone need to add the vector here */}
    </div>
  );
}
