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
    <div className="bg-[#4598CA] text-white py-12 md:py-16 lg:py-30 relative overflow-hidden min-h-[70vh] -mt-5 lg:-mt-30 pt-40">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Section - Title and Decorative Element */}
          <div className="lg:flex-1 flex flex-col items-start">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight ${mochiyPopOne.variable}`}>
              Why Choose
              <br />
              Us?
            </h2>
       <div className="p-18 absolute bottom-0 left-0 sm:left-3 md:left-4 w-[280px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[450px] md:h-[320px] lg:w-[700px] lg:h-[500px] z-0">
               <Image
                 src="/about/Group-1.svg"
                 alt=""
                 fill
                 className="object-contain object-bottom"
               />
             </div>

            {/* Decorative Thread/Line Asset */}
        {/*  <div className="mt-8 lg:mt-10 max-w-[600px] mx-auto">
            <img 
              src="/about/Group-1.svg" 
              alt="Decorative thread design" 
              className="w-full h-auto object-contain opacity-80"
            />
            </div>*/}
          </div>

          {/* Right Section - Features List */}
          <div className="lg:flex-1">
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* Bullet Point */}
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  
                  {/* Feature Text */}
                  <p className={` ${poppins.variable} text-lg md:text-3xl leading-relaxed`}>
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
        className='w-[200%] block relative -top-8 z-0'
      />
    </> 
  );
}