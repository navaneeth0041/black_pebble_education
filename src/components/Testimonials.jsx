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

export default function Testimonials({ 
  title1 = "Kids Loved It.",
  title2 = "Parents Approved.",
  titleIcon = "/home_page_assets/5/Group.svg",
  testimonials = [
    {
      quote: "I was amazed at how my 11-year-old learned budgeting after a few sessions. The program made finance fun — she's thinking like a mini-CEO.",
      author: "Riya Malhotra, Parent of a 6th Grader",
    },
    {
      quote: "After just a couple of sessions, my daughter is already budgeting like an expert! She's even making grocery list to keep within our program made learning fun!",
      author: "Sarah Johnson, Parent at Grader",
    },
    {
      quote: "After just a couple of sessions, my daughter is already budgeting like an expert! She's even making grocery list to keep within our program made learning fun!",
      author: "Sarah Johnson, Parent at Grader",
    },
  ]
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <div className="w-full bg-[#FBDD9C] px-4 lg:px-12">
        <div className="mx-auto py-14 px-6 -mt-5 lg:-mt-22 xl:-mt-30 pt-30 min-h-[70vh] lg:min-h-screen relative overflow-visible">
          
          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-col h-full">
            
            {/* Top Section - Title */}
            <div className="flex-shrink-0 px-8 xl:px-16 pt-8 xl:pt-16">
              <h2 className={`${mochiyPopOne.className} text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#F15B52] mb-4 flex items-center gap-6 leading-tight`}>
                {title1}
                <img src={titleIcon} alt="Phone Icon" className="w-12 h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20" />
              </h2>
              <h3 className={`${mochiyPopOne.className} text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#F15B52] leading-tight mb-8`}>
                {title2}
              </h3>
            </div>

            {/* Middle Section - Testimonial Cards Carousel */}
            <div className="flex-1 flex items-start px-8 xl:px-16 overflow-hidden mb-12">
              <div className="relative w-full">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentIndex * 70}%)`,
                    marginLeft: '25%'
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex-shrink-0 w-[450px] xl:w-[520px] 2xl:w-[600px] mr-6">
                      <div className="bg-white p-8 xl:p-10 2xl:p-12 rounded-2xl shadow-lg h-96 xl:h-[450px] 2xl:h-[500px] flex flex-col">
                        {/* Star Rating - Centered and Bigger */}
                        <div className="flex gap-2 mb-6 justify-center">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-[#FFD700] text-4xl xl:text-5xl 2xl:text-6xl">★</span>
                          ))}
                        </div>
                        
                        <p className={`${poppins.className} text-lg xl:text-xl 2xl:text-2xl mb-6 leading-relaxed text-[#F15B52] flex-1 overflow-hidden`}>
                          "{testimonial.quote}"
                        </p>
                        <p className={`${poppins.className} font-semibold text-base xl:text-lg 2xl:text-xl text-[#F15B52] mt-auto`}>
                          — {testimonial.author}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Section - Navigation Arrows */}
            <div className="flex justify-center pb-16">
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="p-4 rounded-full bg-white text-gray-600 shadow-xl hover:shadow-2xl transition-all hover:bg-gray-50 border border-gray-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-4 rounded-full bg-white text-gray-600 shadow-xl hover:shadow-2xl transition-all hover:bg-gray-50 border border-gray-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col">
            
            {/* Title */}
            <div className="mb-8 text-center">
              <h2 className={`${mochiyPopOne.className} text-3xl sm:text-4xl font-bold text-[#F15B52] mb-3 flex items-center justify-center gap-4 leading-tight`}>
                {title1}
                <img src={titleIcon} alt="Phone Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
              </h2>
              <h3 className={`${mochiyPopOne.className} text-3xl sm:text-4xl font-bold text-[#F15B52] leading-tight`}>
                {title2}
              </h3>
            </div>
            
            {/* Testimonial Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl mb-8 shadow-lg">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#FFD700] text-lg">★</span>
                ))}
              </div>
              
              <p className={`${poppins.className} text-sm sm:text-base mb-4 leading-relaxed text-gray-700 text-center`}>
                "{currentTestimonial.quote}"
              </p>
              <p className={`${poppins.className} font-semibold text-xs sm:text-sm text-[#F15B52] text-center`}>
                — {currentTestimonial.author}
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white text-gray-600 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white text-gray-600 shadow-lg hover:shadow-xl transition-all"
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
        alt="yellow transition"
        className='w-[200%] block relative -top-7 z-20'
      />
    </>
  );
}