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
    <>
    <div className="bg-[#343434] min-h-[30vh] text-white py-15 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-8 lg:pl-0">
        <div className="text-left">
          <h1 className={`text-[30px] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight ${mochiyPopOne.className}`}
              style={{ whiteSpace: 'nowrap', overflowWrap: 'normal' }}>
            Be a Pebble Bella!
          </h1>
          <p className={`mt-3 sm:mt-4 text-[23px] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed ${poppins.className}`}>
            Love what we do? Be our Brand Ambassador, Bella!
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-repeat-x bg-[url('/')]"></div> 
      {/* Someone need to add the vector here */}
    </div>
    <img
        src="/effects/black.png"
        alt="black transition"
        className='w-full block relative -top-2 lg:-top-8 z-20'
      />
    </> 
  );
}