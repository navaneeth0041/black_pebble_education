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
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

const WhyPebbleBellaSection = () => {
  const benefits = [
    {
      icon: "./brand_ambassor_assets/coin.svg",
      title: "Earn Commission",
      description:
        "For every student enrolled through you, you get a commission of 15% of the revenue. The deal is valid for a lifetime!",
    },
    {
      icon: "./brand_ambassor_assets/announcement.svg",
      title: "Learn Marketing",
      description:
        "If you love marketing, put all your skills to good use by promoting our brand. Learn and grow with us!",
    },
    {
      icon: "./brand_ambassor_assets/people.svg",
      title: "Bella Community",
      description:
        "You'll meet other Pebble Bella in our online quarterly meeting. Make friends from across the country!",
    },
  ];

  return (
    <>
    <section
      className={`min-h-[60vh] md:min-h-screen bg-[#E1FFF4] py-16 pt-40 -mt-5 lg:-mt-30 relative overflow-hidden ${mochiyPopOne.variable} ${poppins.variable}`}
    >
      {/* Decorative String - Touching bottom of screen */}
      <div className=" absolute bottom-0 left-0 sm:left-3 md:left-4 w-[280px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[450px] md:h-[320px] lg:w-[700px] lg:h-[500px] z-0">
        <Image
          src="./brand_ambassor_assets/string.svg"
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
          {/* Left: Heading - Moved right and up */}
          <div className="pt-4 md:pt-8 lg:pt-12 xl:pt-16 px-8 sm:px-12 md:px-16 lg:px-24 ml-4 sm:ml-8 md:ml-12">
            <h2
              className={`text-left text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#08B39C] leading-tight ${mochiyPopOne.className}`}
            >
              Why be a <br />
              Pebble Bella
            </h2>
          </div>

          {/* Right: Benefits - Bigger text and spacing */}
          <div className="space-y-12 md:space-y-16 lg:space-y-20 py-8 pr-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6 md:gap-8 lg:gap-8">
                {/* Icon - Responsive sizing */}
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={120}
                    height={120}
                    className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] lg:w-[150px] lg:h-[150px]"
                  />
                </div>
                {/* Text - Bigger and more responsive */}
                <div className="flex-1">
                  <h3
                    className={`text-[#08B39C] font-semibold text-[1.4rem] sm:text-[1.6rem] md:text-[1.9rem] lg:text-3xl mb-3 md:mb-4 lg:mb-5 leading-snug ${poppins.className}`}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className={`text-[#08B39C] text-[1.1rem] sm:text-[1.2rem] md:text-[1.35rem] lg:text-3xl font-semibold leading-relaxed ${poppins.className}`}
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <img
        src="/effects/bellalast.png"
        alt="black transition"
        className='w-full block relative -top-8 z-20'
      />
    </> 
  );
};

export default WhyPebbleBellaSection;