"use client";
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
      <div className="bg-[#343434] text-[#09BE9D] min-h-screen -mt-5 lg:-mt-33 pt-20 py-12 z-30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section - Title and Photo */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mb-16">
            
            {/* Left - Title and Main Content */}
            <div className="flex-1 lg:max-w-2xl">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 ${mochiyPopOne.className}`}>
                Meet the Founder
              </h2>

              <div className={`space-y-6 text-base lg:text-lg leading-relaxed ${poppins.className}`}>
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

            {/* Right - Photo Frame */}
            <div className="flex-shrink-0 lg:ml-auto lg:mr-16">
              <div className="bg-white rounded-lg p-6 w-80 h-96 transform -rotate-12 shadow-lg">
                <div className={`text-[#09BE9D] text-sm font-medium mb-4 text-center ${poppins.className}`}>
                  Founder of Black Pebble Education
                </div>
                <div className="bg-gray-200 h-72 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/about/frame.svg" 
                    alt="Founder of Black Pebble Education" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Professional Journey */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            
            {/* Left - Journey Title */}
            <div className="flex-shrink-0 lg:w-80">
              <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ${mochiyPopOne.className}`}>
                For the curious parents, here's<br />
                my professional journey :
              </h3>
            </div>

            {/* Right - Achievements and Final Statement */}
            <div className="flex-1 space-y-8 lg:pl-16 lg:ml-8">
              {/* Achievements List */}
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#09BE9D] rounded-full mt-3 flex-shrink-0"></div>
                    <span className={`text-base lg:text-lg leading-relaxed ${poppins.className}`}>
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Commitment Statement */}
              <p className={`text-base lg:text-lg leading-relaxed pt-4 ${poppins.className}`}>
                When you choose Black Pebble Education, be assured, you're subscribing to utmost professionalism and unmatched commitment.
              </p>
            </div>
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