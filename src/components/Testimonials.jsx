"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

const mochiyPopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "I couldn't believe how quickly my 11-year-old started talking about budgeting and saving after just a few sessions. She even helped plan our family grocery list to stay under budget! The program made finance fun and relatable — she's now thinking like a mini-CEO.",
      author: "Riya Malhotra, Parent of a 6th Grader",
      image: "/home_page_assets/5/iphone.svg",
    },
    {
      quote:
        "My son never liked math, but now he's calculating expenses on his own. This program sparked something amazing in him! He's become so confident with numbers and even started his own little savings jar.",
      author: "Carlos R., Parent of a 5th Grader",
      image: "/home_page_assets/5/iphone.svg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <div className="w-full bg-[#FBDD9C] px-12 ">
        <div className="lg:px-12 mx-auto py-14 px-6 -mt-5 lg:-mt-30 pt-40 min-h-[70vh] lg:min-h-[90vh] relative">

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-4 lg:gap-8 items-start h-full">
            
            {/* Left Side - Title and Comment */}
            <div className="flex flex-col items-start p-4">
              {/* Title */}
              <div className="mb-6">
                <h2 className={`${mochiyPopOne.className} px-10 text-xl lg:text-7xl font-bold text-[#F15B52] mb-3 flex items-center gap-4 leading-tight`}>
                  Kids Loved It.
                  <img src="/home_page_assets/5/Group.svg" alt="Phone Icon" className="w-12 h-12 lg:w-25 lg:h-25" />
                </h2>
                <h3 className={`${mochiyPopOne.className} px-9 text-xl lg:text-7xl font-bold text-[#F15B52] leading-tight whitespace-nowrap mb-8`}>
                  Parents Approved.
                </h3>
              </div>

              {/* Comment Box - Below "Parents Approved" */}
              <div className="bg-[#EF746C] text-white p-6 lg:p-10 rounded-2xl max-w-sm lg:max-w-md relative ml-auto lg:ml-80 mb-8">
                <p className={`${poppins.className} text-sm lg:text-base mb-6 leading-relaxed`}>"{currentTestimonial.quote}"</p>
                <p className={`${poppins.className} font-semibold text-xs lg:text-sm`}>— {currentTestimonial.author}</p>
              </div>
            </div>

            {/* Right Side - Videos */}
            <div className="flex justify-center lg:justify-start lg:pl-0 relative">
              <div className="relative w-96 lg:w-[500px] h-[500px] lg:h-[600px]">
                
                {/* Background Image */}
                <div className="absolute top-20 right-10 w-52 lg:w-64 h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl bg-gray-300 transition-all duration-500 ease-in-out">
                  <img 
                    src={currentTestimonial.image} 
                    alt="Phone thumbnail background"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Foreground Image */}
                <div className="absolute top-0 left-10 w-60 lg:w-72 h-[450px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 z-10 transition-all duration-500 ease-in-out">
                  <img 
                    src={currentTestimonial.image} 
                    alt="Phone thumbnail foreground"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col">
            
            {/* Title */}
            <div className="mb-8">
              <h2 className={`${mochiyPopOne.className} text-3xl font-bold text-[#F15B52] mb-3 flex items-center gap-4 leading-tight`}>
                Kids Loved It.
                <img src="/home_page_assets/5/Group.svg" alt="Phone Icon" className="w-8 h-8" />
              </h2>
              <h3 className={`${mochiyPopOne.className} text-3xl font-bold text-[#F15B52] leading-tight mb-8`}>
                Parents Approved.
              </h3>
            </div>

            {/* Image/Video */}
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-80">
                <div className="w-full h-4/5 rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                  <img 
                    src={currentTestimonial.image} 
                    alt="Phone thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#EF746C] text-white p-6 rounded-2xl mb-8">
              <p className={`${poppins.className} text-sm mb-4 leading-relaxed`}>"{currentTestimonial.quote}"</p>
              <p className={`${poppins.className} font-semibold text-xs`}>— {currentTestimonial.author}</p>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white text-black shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white text-black shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Bottom Controls - Desktop only */}
          <div className="hidden lg:flex absolute bottom-16 left-1/2 transform -translate-x-1/2 flex-col items-center gap-6">
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white text-black shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white text-black shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Transition Image */}
      <img
        src="/effects/yellow.png"
        alt="black transition"
        className='w-[200%] block relative -top-7 z-0'
      />
    </>
  );
}