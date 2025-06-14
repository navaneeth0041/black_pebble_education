'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock font objects for the component to work
const mochiyPopOne = {
  className: 'font-bold'
};

const poppins = {
  className: 'font-sans'
};

const TestimonialCard = ({ 
  testimonial, 
  parentName, 
  childAge, 
  rating = 5, 
  bgColor = "bg-white",
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`${bgColor} rounded-3xl p-6 shadow-lg border border-gray-100 h-full relative overflow-hidden transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {/* Star rating */}
      <div className="flex mb-4 gap-1">
        {[...Array(5)].map((_, i) => (
          <img 
            key={i} 
            src={i < rating ? "/Course_Design/2/Star 1.svg" : "/Course_Design/2/Star 5.svg"}
            alt={i < rating ? "Rated star" : "Unrated star"}
            className="w-4 h-4"
          />
        ))}
      </div>

      {/* Testimonial text */}
      <p style={{
        color: '#F15B52',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '149%',
        letterSpacing: '-0.3px'
      }} className="mb-6">
        {testimonial}
      </p>

      {/* Parent info */}
      <div className="mt-auto">
      <p
  style={{
    color: '#F15B52',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '149%',
    letterSpacing: '-0.3px',
  }}
>
  {parentName}
</p>
{childAge && (
  <p
    style={{
      color: '#F15B52',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '149%',
      letterSpacing: '-0.3px',
    }}
  >
    {childAge}
  </p>
)}

      </div>
    </div>
  );
};

const TestimonialPage = () => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonialData = [
    {
      testimonial: "I was amazed at how fast my 11-year-old learned budgeting after a few sessions. She even helped with our grocery list to stay under budget! The program made finance fun — she's thinking like a mini-CEO.",
      parentName: "— Riya Malhotra, Parent of a 6th Grader",
      childAge: "",
      rating: 5,
      bgColor: "bg-white"
    },
    {
      testimonial: "After just a couple of sessions, my daughter is already budgeting her pocket money! She even took charge of our grocery list to keep us on track. This program makes learning finance enjoyable and practical!",
      parentName: "— Sarah Johnson, Parent of a 5th Grader",
      childAge: "",
      rating: 5,
      bgColor: "bg-white"
    },
    {
      testimonial: "My son now asks thoughtful questions about money and has started saving for his own goals. The interactive lessons kept him engaged throughout!",
      parentName: "— Mike Chen, Parent of a 4th Grader",
      childAge: "",
      rating: 5,
      bgColor: "bg-white"
    }
  ];

  const updateScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
      updateScrollButtons();
    }
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = 400;
      containerRef.current.scrollBy({ 
        left: -scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = 400;
      containerRef.current.scrollBy({ 
        left: scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="w-full py-16 px-6" style={{ backgroundColor: '#FBDD9C' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - LEFT ALIGNED */}
        <div className="flex flex-col items-start text-left mb-12">
          {/* Title */}
          <div className="mb-6">
            <h2 className={`${mochiyPopOne.className} text-4xl lg:text-7xl font-bold text-[#F15B52] mb-3 flex items-center gap-4 leading-tight`}>
              Kids Loved It.
              <img src="/home_page_assets/5/Group.svg" alt="Phone Icon" className="w-12 h-12 lg:w-25 lg:h-25" />
            </h2>
            <h3 className={`${mochiyPopOne.className} text-4xl lg:text-7xl font-bold text-[#F15B52] leading-tight`}>
              Parents Approved.
            </h3>
          </div>
        </div>

        {/* Testimonials Scroll Container - START FROM LEFT */}
        <div className="relative">
          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 scroll-smooth px-6 justify-center"
            onScroll={updateScrollButtons}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {testimonialData.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: 'min(400px, 85vw)',
                  marginRight: index === testimonialData.length - 1 ? '0' : '1.5rem',
                  height: '300px'
                }}
              >
                <TestimonialCard 
                  testimonial={testimonial.testimonial}
                  parentName={testimonial.parentName}
                  childAge={testimonial.childAge}
                  rating={testimonial.rating}
                  bgColor={testimonial.bgColor}
                  delay={index * 150}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons - ALWAYS VISIBLE */}
          <div className="flex justify-center mt-8 space-x-4 relative z-10">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 relative z-20 ${
                canScrollLeft 
                  ? 'bg-[#F15B52] hover:bg-[#e04e45] cursor-pointer shadow-2xl transform hover:scale-110' 
                  : 'bg-gray-400 cursor-not-allowed opacity-50 shadow-lg'
              }`}
              style={{ display: 'flex !important', visibility: 'visible !important' }}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-7 h-7" color="white" strokeWidth={3} />
            </button>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 relative z-20 ${
                canScrollRight 
                  ? 'bg-[#F15B52] hover:bg-[#e04e45] cursor-pointer shadow-2xl transform hover:scale-110' 
                  : 'bg-gray-400 cursor-not-allowed opacity-50 shadow-lg'
              }`}
              style={{ display: 'flex !important', visibility: 'visible !important' }}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-7 h-7" color="white" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;