"use client";
import React from "react";
import Image from "next/image";

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

export default function WhyChooseUsSection() {
  const features = [
    {
      text: "Kids build lifelong habits early — we believe financial literacy should start as early as possible."
    },
    {
      text: "Our interactive lessons, playful analogies, and hands-on learning make education stick."
    },
    {
      text: "Every topic we teach connects to real-world experiences — like pocket money, saving, or spending at a store."
    },
    {
      text: "Kids learn best when they do — we integrate worksheets, exercises, and activities to build confidence."
    }
  ];

  return (
    <>
    <div className="bg-[#4598CA] text-white py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] -mt-5 lg:-mt-30">
      {/* Decorative Thread/Line Asset - Hidden on small screens */}
      <div className="hidden lg:block absolute bottom-0 left-0 sm:left-3 md:left-4 w-[280px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[450px] md:h-[320px] lg:w-[700px] lg:h-[500px] z-0">
        <Image
          src="/about/Group-1.svg"
          alt="Decorative thread design"
          fill
          className="object-contain object-left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12 h-full pt-8 sm:pt-12 lg:pt-16">
          
          {/* Left Section - Title */}
          <div className="lg:flex-1 flex flex-col items-start relative z-10">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight ${mochiyPopOne.className}`}>
              Why Choose
              <br />
              Us?
            </h2>
          </div>

          {/* Right Section - Features List */}
          <div className="lg:flex-1 relative z-10">
            <ul className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  {/* Bullet Point */}
                  <div className="w-2 h-2 bg-white rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  
                  {/* Feature Text */}
                  <p className={`${poppins.className} text-lg sm:text-xl md:text-2xl lg:text-2xl leading-relaxed`}>
                    {feature.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <img
        src="/effects/blue.png"
        alt="black transition"
        className='w-[200%] block relative -top-9 z-20'
      />
    </> 
  );
}