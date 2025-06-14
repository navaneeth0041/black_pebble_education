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

export default function MeetTheFounderSection() {
  const achievements = [
    "Master's degree from #1 University in Canada",
    "Assisted the Board of Directors at the top Canadian Bank in Retail Finance",
    "Assisted Mumbai's leading Chartered Accountant in Personal Finance",
    "Worked at #1 Indian Wealth Management firm as a portfolio analyst",
    "Managed investments of UHNIs in India and the USA",
    "A decade of experience in content creation and UX"
  ];

  return (
    <>
    <div className="bg-[#343434] text-[#09BE9D]  md:py-16 lg:py-30 min-h-screen -mt-5 lg:-mt-33 pt-40 py-12 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:hidden flex justify-center">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
              <div className="text-[#09BE9D] text-sm font-medium mb-4 text-center">
                Founder of Black Pebble Education
              </div>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <img 
                  src="/about/frame.svg" 
                  alt="Founder of Black Pebble Education" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Left Section - Content */}
          <div className="lg:w-2/3">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight ${PopOne.variable}`}>
              Meet the Founder
            </h2>

            <div className={`space-y-6 text-lg leading-relaxed ${poppins.variable}`}>
              <p>
                My professional journey has been a mix of technology, finance, content, and design. I feel that everything I have learnt over the past decades has culminated in founding Black Pebble Education.
              </p>

              <p>
                I am the creator of all the courses. I've poured all of my life experience into bringing content and course delivery that promises maximum impact.
              </p>

              <p>
                The founding principles of Black Pebble Education reflect the knowledge & wisdom acquired through international work experience blended with the needs of changing economic dynamics.
              </p>
            </div>
          </div>

          {/* Right Section - Photo Frame (Desktop Only) */}
          <div className="hidden lg:flex lg:w-1/3 justify-center lg:justify-end">
            <div className="bg-white rounded-lg p-6 max-w-sm">
              <div className="text-teal-400 text-sm font-medium mb-4 text-center">
                Founder of Black Pebble Education
              </div>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <img 
                  src="/about/frame.svg" 
                  alt="Founder of Black Pebble Education" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Professional Journey Section */}
        <div className="mt-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left - Section Title */}
            <div className="lg:w-2/5">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                For the curious parents, here's my professional journey :
              </h3>
            </div>

            {/* Right - Achievements List */}
            <div className="lg:w-3/5">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-base leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="mt-12 pt-8">
          <p className="text-lg leading-relaxed">
            When you choose Black Pebble Education, be assured, you're subscribing to utmost professionalism and unmatched commitment.
          </p>
        </div>
      </div>
    </div>
    <img
        src="/effects/black.png"
        alt="black transition"
        className='w-full block relative -top-8 z-20'
      />
    </> 

  );
}