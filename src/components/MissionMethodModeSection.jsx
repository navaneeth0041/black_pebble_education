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
    <div className="bg-white py-12 md:py-16 lg:py-25 -mt-5 lg:-mt-30 pt-40">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex">
          {/* Image - covering half the width, matching content height */}
          <div className="w-1/2 pr-8">
            <div className="h-full rounded-lg overflow-hidden shadow-lg">
              <img
                src="/about/Parent_child.svg"
                alt="Father and child learning about money together"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content Section - takes other half */}
          <div className="w-1/2 pl-8">
            <h2 className={`${PopOne.variable} text-3xl md:text-4xl lg:text-7xl font-bold text-[#39BB9C] mb-6 leading-tight`}>
              Our Mission, Method & Mode
            </h2>
            <div className={`space-y-6 text-[#39BB9C] ${poppins.variable} font-semibold`}>
              <p className="text-2xl leading-relaxed">
                Our mission is to cultivate a generation that is financially savvy and confident.
              </p>
              <p className="text-2xl leading-relaxed">
                We break down complex money concepts into simple, relatable ideas that resonate with children. We provide age-appropriate resources that make financial education fun and accessible.
              </p>
              <p className="text-2xl leading-relaxed">
                We incorporate stories, videos, and real-life scenarios to help young learners understand the importance of budgeting, saving, investing, and other financial concepts.
              </p>
              <p className="text-2xl leading-relaxed">
                Our goal is to inspire curiosity and foster a positive attitude towards money, empowering children to take control of their financial futures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
        src="/effects/white.png"
        alt="black transition"
        className='w-[200%] block relative -top-7 z-20'
      />
    </> 
  );
}