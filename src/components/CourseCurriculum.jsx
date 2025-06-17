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



export default function CourseCurriculum() {
  const modules = [
    {
      id: 1,
      title: "| Value of Money",
      description: "Understanding how money is earned, saved and spent - and why it matters.",
      bgColor: "bg-[#F7C342]",
      icon: "/Course_Design/1/Cash.svg"
    },
    {
      id: 2,
      title: "| Relationship with Money", 
      description: "Developing a healthy attitude towards money.",
      bgColor: "bg-[#39BB9C]",
      icon: "/Course_Design/1/coin_bulb.svg" 
    },
    {
      id: 3,
      title: "| Budgeting",
      description: "Allocating money for needs and wants - and also saving.",
      bgColor: "bg-[#4598CA]",
      icon: "/Course_Design/1/Calender.svg" 
    },
    {
      id: 4,
      title: "| Peer Pressure",
      description: "Developing resilience against peer demands - being financially strong.",
      bgColor: "bg-[#4598CA]",
      icon: "/Course_Design/1/Tossing_coing.svg"
    }
  ];

  return (
    <>
    <div className="bg-white py-12 md:py-16 lg:py-20 pt-40 -mt-5 lg:-mt-30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 font-['Poppins']" style={{
            backgroundColor: '#E3FFF5',
            color: '#39BB9C',
            fontSize: '22px',
            fontWeight: '400',
            lineHeight: '149%',
            letterSpacing: '-0.418px'
          }}>
            Course Curriculum
          </div>
          <div className="text-[#39BB9C] text-[35px] sm:text-[42px] md:text-[49px] font-normal leading-[149%] tracking-[-0.931px] font-['Mochiy_Pop_One'] mb-4">
          What Your Child Will Learn
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {modules.map((module) => (
            <div key={module.id} className="flex flex-col md:flex-row gap-6 items-start">
              <div className={`${module.bgColor} w-full md:w-64 h-40 md:h-36 rounded-xl flex flex-col items-center justify-center flex-shrink-0 p-4`}>
                <img 
                  src={module.icon} 
                  alt={module.title}
                  className="w-16 h-16 md:w-20 md:h-20 mb-2 filter brightness-0 invert"
                />
                <div className="text-white text-[16px] md:text-[18px] font-normal text-center leading-[149%] tracking-[-0.342px] font-['Mochiy_Pop_One']">
                  {module.title}
                </div>
              </div>
              
              <div className="flex-1 pt-0 md:pt-2">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mb-2">
                  <span className="text-gray-500 font-medium text-base md:text-lg">Module {module.id}</span>
                  <span className="text-[#39BB9C] text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[149%] tracking-[-0.456px] font-['Poppins']">
                    {module.title}
                  </span>
                </div>
                <p className="text-[#39BB9C] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[149%] tracking-[-0.304px] font-['Poppins']">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <img
        src="/effects/white.png"
        alt="black transition"
        className='w-full block relative -top-8 z-20'
      />
    </>
  );
}