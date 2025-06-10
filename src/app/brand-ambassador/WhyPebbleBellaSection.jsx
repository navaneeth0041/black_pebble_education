"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const candal = Candal-Regular({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
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
    <section
      className={`w-full bg-[#E8F8F6] py-16 md:py-24 relative overflow-hidden ${candal.variable} ${poppins.variable}`}
    >
      {/* Decorative String */}
      <div className="absolute bottom-12 left-4 w-[300px] h-[220px] md:w-[500px] md:h-[340px] opacity-90 z-0">
        <Image
          src="./brand_ambassor_assets/string.svg"
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: Heading */}
          <div className="text-left">
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#00A896] leading-tight ${candal.className}`}
            >
              Why be a <br />
              Pebble Bella
            </h2>
          </div>

          {/* Right: Benefits */}
          <div className="space-y-10 md:space-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-6 md:gap-7">
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={70}
                    height={70}
                    className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3
                    className={`text-[#00A896] font-semibold text-[1.5rem] md:text-[1.75rem] mb-3 leading-snug ${poppins.className}`}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className={`text-[#00A896] text-[1.05rem] md:text-[1.2rem] leading-relaxed ${poppins.className}`}
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
  );
};

export default WhyPebbleBellaSection;
