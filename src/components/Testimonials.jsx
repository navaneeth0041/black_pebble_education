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
      <div className="w-full bg-[#FBDD9C]">
        <div className="mx-auto py-8 -mt-5 lg:-mt-25 pt-16 min-h-[60vh] lg:min-h-[70vh] relative overflow-visible">
          
          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-col h-full">
            
            {/* Top Section - Title */}
            <div className="flex-shrink-0  pt-4 xl:pt-8 pl-4 lg:pl-25">
              <h2 className={`${mochiyPopOne.className} text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#F15B52] mb-3 flex items-center gap-4 leading-tight`}>
                {title1}
                <img 
                  src={titleIcon} 
                  alt="Phone Icon" 
                  className="w-10 h-10 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 rotate-13" 
                />
              </h2>
              <h3 className={`${mochiyPopOne.className} text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#F15B52] leading-tight mb-8`}>
                {title2}
              </h3>
            </div>

            {/* Middle Section - Testimonial Cards Carousel */}
            <div className="flex-1 flex items-start px-8 xl:px-16 overflow-hidden mb-8">
              <div className="relative w-full">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentIndex * 70}%)`,
                    marginLeft: '25%'
                  }}
                >
                  {testimonials.map((testimonial, index) => {
  // Determine card size and opacity
  let cardClass = "flex-shrink-0 mr-6 transition-all duration-300 flex items-center"; // Added flex and items-center
  let cardWidth = "w-[420px] xl:w-[490px] 2xl:w-[550px]";
  let opacity = "opacity-75 scale-90";
  let cardHeight = "h-64 xl:h-80 2xl:h-96"; // Default height

  if (index === currentIndex) {
    cardWidth = "w-[420px] xl:w-[490px] 2xl:w-[550px]";
    opacity = "opacity-100 scale-100 z-10";
    cardHeight = "h-64 xl:h-80 2xl:h-96"; // Full height for current
  } else if (
    index === (currentIndex + 1) % testimonials.length ||
    index === (currentIndex - 1 + testimonials.length) % testimonials.length
  ) {
    // Next or previous card
    cardWidth = "w-[420px] xl:w-[490px] 2xl:w-[550px]";
    opacity = "opacity-60 scale-90 z-0";
    cardHeight = "h-54 xl:h-70 2xl:h-86"; // Reduced height, even smaller
  } else {
    // All other cards (gone)
    cardWidth = "w-[320px] xl:w-[350px] 2xl:w-[400px]";
    opacity = "opacity-40 scale-75 z-0";
    cardHeight = "h-24 xl:h-28 2xl:h-32"; // Even smaller height
  }
  return (
    <div
      key={index}
      className={`${cardClass} ${cardWidth} ${opacity}`}
      style={{
        pointerEvents: index === currentIndex ? 'auto' : 'none',
        alignItems: 'center', // Vertically center the card content
        display: 'flex'
      }}
    >
      <div className={`bg-white p-6 xl:p-8 2xl:p-10 rounded-4xl shadow-lg flex flex-col ${cardHeight} justify-center`}>
        {/* Star Rating - Centered and Bigger */}
        <div className="flex gap-1 mb-4 justify-center">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[#FFD700] text-2xl xl:text-3xl 2xl:text-4xl">★</span>
          ))}
        </div>
        <p className={`${poppins.className} text-base xl:text-lg 2xl:text-xl mb-4 leading-relaxed text-[#F15B52] flex-1 overflow-hidden`}>
          "{testimonial.quote}"
        </p>
        <p className={`${poppins.className} font-semibold text-sm xl:text-base 2xl:text-lg text-[#F15B52] mt-auto`}>
          — {testimonial.author}
        </p>
      </div>
    </div>
  );
})}
                </div>
              </div>
            </div>

            {/* Bottom Section - Navigation Arrows */}
            <div className="flex justify-center pb-8">
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white text-gray-600 shadow-xl hover:shadow-2xl transition-all hover:bg-gray-50 border border-gray-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white text-gray-600 shadow-xl hover:shadow-2xl transition-all hover:bg-gray-50 border border-gray-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col">
            
            {/* Title */}
            <div className="mb-6 text-center">
              <h2 className={`${mochiyPopOne.className} text-3xl sm:text-4xl font-bold text-[#F15B52] mb-2 flex items-center justify-center gap-4 leading-tight`}>
                {title1}
                <img src={titleIcon} alt="Phone Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
              </h2>
              <h3 className={`${mochiyPopOne.className} text-3xl sm:text-4xl font-bold text-[#F15B52] leading-tight`}>
                {title2}
              </h3>
            </div>
            
            {/* Testimonial Card */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl mb-6 shadow-lg">
              {/* Star Rating */}
              <div className="flex gap-1 mb-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#FFD700] text-lg">★</span>
                ))}
              </div>
              
              <p className={`${poppins.className} text-sm sm:text-base mb-3 leading-relaxed text-gray-700 text-center`}>
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
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white text-gray-600 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Transition Image */}
      <img
        src="/effects/yellow.png"
        alt="yellow transition"
        className='w-[200%] block relative -top-9 z-20'
      />
    </>
  );
}