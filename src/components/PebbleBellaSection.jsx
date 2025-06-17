"use client"
import React from 'react';
import Image from 'next/image';
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

const PebbleBellaSection = () => {
  const qualities = [
    {
      title: "Go-getters",
      description: "You achieve your goals confidently & fearlessly."
    },
    {
      title: "Marketing Maestros", 
      description: "You live and breathe social media & watch every ad for fun."
    },
    {
      title: "Energy Multipliers",
      description: "Your energy is contagious & you can enliven any dull moment."
    },
    {
      title: "Social Butterflies",
      description: "You are charismatic, outgoing, and a people person."
    },
    {
      title: "Education Champions",
      description: "You believe in the transformative power of knowledge & training."
    },
    {
      title: "Pebble Patriots",
      description: "You are a die-hard fan of Black Pebble Education & will continue to be."
    }
  ];

  return (
    <>
    <section className={`w-full pt-40 -mt-5 lg:-mt-30 min-h-[60vh] lg:min-h-screen bg-white py-8 md:py-16 lg:py-30 ${mochiyPopOne.variable} ${poppins.variable}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 leading-tight ${mochiyPopOne.className}`}>
              <span className="text-[#7AD3BE] opacity-60">Who We Want as</span><br />
              <span className="text-[#39BB9C]">Pebble Bella</span>
            </h2>
            
            <div className="space-y-6 lg:space-y-8">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Checkbox Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <Image
                      src="./brand_ambassor_assets/checkbox.svg"
                      alt="Checkmark"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-[#39BB9C] font-bold text-lg md:text-xl mb-2 leading-tight ${poppins.className}`}>
                      {quality.title}
                    </h3>
                    <p className={`text-[#39BB9C] text-sm md:text-base leading-relaxed ${poppins.className}`}>
                      {quality.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pebble-bella-family.svg"
                alt="Family learning together - father and daughter with piggy bank"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <img
        src="/effects/white.png"
        alt="black transition"
        className='w-full block relative -top-8 z-20'
      />
    </> 
  );
};

export default PebbleBellaSection;