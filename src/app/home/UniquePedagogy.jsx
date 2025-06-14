"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const UniquePedagogy = () => {
  const [currentSlide, setCurrentSlide] = useState(2); // Start with middle card active

  const pedagogyCards = [
    {
      title: "Gender-inclusive",
      image: "/home_page_assets/2/Frame 118.svg",
      alt: "Child smiling at camera",
      description: "Our curriculum is designed to be inclusive and accessible to all genders, ensuring equal opportunities for learning.",
      isHighlight: false,
    },
    {
      title: "Context-relevant",
      image: "/home_page_assets/2/Frame 117.svg", 
      alt: "Children working together on activities",
      description: "Content tailored to real-world scenarios that children can relate to and apply in their daily lives.",
      isHighlight: false,
    },
    {
      title: "Culture-sensitive",
      image: "/home_page_assets/2/Frame 215.svg",
      alt: "Hands working on craft project", 
      description: "Specially crafted to respect and incorporate the diverse cultural backgrounds of Indian families.",
      isHighlight: true,
    },
    {
      title: "Enhances life skills",
      image: "/home_page_assets/2/Frame 115.svg",
      alt: "Child playing outdoors",
      description: "Beyond financial literacy, our approach develops critical thinking and practical life skills.",
      isHighlight: false,
    },
    {
      title: "Multiple perspectives",
      image: "/home_page_assets/2/Frame 116.svg",
      alt: "Child with colorful face paint",
      description: "Transforms the way children think about money and financial decisions from various viewpoints.",
      isHighlight: false,
    },
  ];

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % pedagogyCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pedagogyCards.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pedagogyCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + pedagogyCards.length) % pedagogyCards.length,
    );
  };

  // Get the cards to display (5 total: 2 previous + current + 2 next)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index =
        (currentSlide + i + pedagogyCards.length) % pedagogyCards.length;
      cards.push({
        ...pedagogyCards[index],
        position: i,
        index,
      });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <>
    <section className="text-white pt-40 pb-40 overflow-hidden min-h-[60vh] lg:min-h-screen -mt-5 lg:-mt-30" style={{backgroundColor: '#343434'}}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 relative">
            <img
              src="/home_page_assets/2/Clip path group.svg"
              alt="Unique Pedagogy Icon"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Title */}
        <h2
          className="text-3xl md:text-6xl lg:text-7xl font-bold py-2 mb-6"
          style={{ color: '#09be9d', fontFamily: 'Poppins, sans-serif' }}
        >
          <span className="block md:inline">Our Unique</span>
          <span className="block md:inline"> Pedagogy</span>
        </h2>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12 py-2 md:py-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <p className="text-lg lg:text-xl leading-relaxed" style={{color: '#39BB9C'}}>
            Our <span className="font-semibold" style={{color: '#FFE4A1'}}>research-backed</span> and{' '}
            <span className="font-semibold" style={{color: '#FFE4A1'}}>IP-protected</span>{' '}
            Teaching Methodology is designed for
            maximum learning and retention. The content of our courses accounts for the
            diversity and variety in the financial backgrounds of culturally-rich India.
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div
            className="relative flex items-center justify-center h-[500px] lg:h-[600px]"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "center center",
            }}
          >
            {visibleCards.map((card, arrayIndex) => {
              const { position, index } = card;
              const isCenter = position === 0;

              // Calculate 3D transforms based on position
              let transform = "";
              let zIndex =
                10 + Math.abs(position === 0 ? 5 : 5 - Math.abs(position));

              if (position === -2) {
                // Far left
                transform =
                  "translateX(-280px) translateZ(-300px) rotateY(45deg) scale(0.7)";
              } else if (position === -1) {
                // Near left
                transform =
                  "translateX(-150px) translateZ(-150px) rotateY(25deg) scale(0.85)";
              } else if (position === 0) {
                // Center
                transform =
                  "translateX(0px) translateZ(0px) rotateY(0deg) scale(1)";
              } else if (position === 1) {
                // Near right
                transform =
                  "translateX(150px) translateZ(-150px) rotateY(-25deg) scale(0.85)";
              } else if (position === 2) {
                // Far right
                transform =
                  "translateX(280px) translateZ(-300px) rotateY(-45deg) scale(0.7)";
              }

              return (
                <div
                  key={`${index}-${arrayIndex}`}
                  className="absolute transition-all duration-700 ease-in-out cursor-pointer"
                  style={{
                    transform,
                    transformStyle: "preserve-3d",
                    zIndex,
                  }}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div
                    className={`
                      relative w-72 h-96 lg:w-80 lg:h-[440px]
                      rounded-2xl overflow-hidden shadow-2xl
                      transition-all duration-700
                      ${
                        isCenter && card.isHighlight
                          ? "ring-4 ring-[#09BE9D] ring-opacity-60"
                          : ""
                      }
                    `}
                    style={{
                      backfaceVisibility: "hidden",
                      opacity: isCenter
                        ? 1
                        : position === -1 || position === 1
                          ? 0.8
                          : 0.6,
                      background: isCenter 
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)'
                        : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: isCenter && card.isHighlight 
                        ? '2px solid #09BE9D'
                        : '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    {/* Card Image */}
                    <div className="relative h-3/5 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover transition-transform duration-300"
                        style={{
                          transform: isCenter ? 'scale(1)' : 'scale(0.95)',
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="relative h-2/5 p-4 lg:p-6 flex flex-col justify-center text-center">
                      {/* Description - only show for center card */}
                      {isCenter && (
                        <>
                          <h3
                            className={`
                              text-lg lg:text-xl xl:text-2xl font-bold text-center mb-3
                              ${
                                card.isHighlight
                                  ? "text-[#09BE9D]"
                                  : "text-white"
                              }
                            `}
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {card.title}
                          </h3>
                          <p
                            className="text-sm lg:text-base leading-relaxed text-center text-gray-200 max-w-xs mx-auto"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {card.description}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Highlight indicator for center card */}
                    {isCenter && card.isHighlight && (
                      <div className="absolute top-4 right-4">
                        <div className="w-3 h-3 bg-[#09BE9D] rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Navigation Arrows */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 hover:bg-white border-2 border-[#09BE9D] text-[#09BE9D] shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </Button>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 hover:bg-white border-2 border-[#09BE9D] text-[#09BE9D] shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {pedagogyCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${
                    index === currentSlide
                      ? "bg-[#09BE9D] scale-125"
                      : "bg-white/40 hover:bg-white/60"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    <img
        src="/effects/black.png"
        alt="black transition"
        className='w-[200%] block relative -top-7 z-0'
      />
    </> 
  );
};

export default UniquePedagogy;