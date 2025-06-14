"use client";

import React, { useState, useEffect } from "react";

const UniquePedagogy = () => {
  const [currentSlide, setCurrentSlide] = useState(2); 

  const pedagogyCards = [
    {
      title: "Gender-inclusive",
      image: "/home_page_assets/2/Frame 118.svg",
      alt: "Child smiling at camera",
    },
    {
      title: "Context-relevant",
      image: "/home_page_assets/2/Frame 117.svg", 
      alt: "Children working together on activities",
    },
    {
      title: "Culture-sensitive",
      image: "/home_page_assets/2/Frame 215.svg",
      alt: "Hands working on craft project", 
    },
    {
      title: "Enhances life skills",
      image: "/home_page_assets/2/Frame 115.svg",
      alt: "Child playing outdoors",
    },
    {
      title: "Multiple perspectives",
      image: "/home_page_assets/2/Frame 116.svg",
      alt: "Child with colorful face paint",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % pedagogyCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [pedagogyCards.length]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % pedagogyCards.length);
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + pedagogyCards.length) % pedagogyCards.length);
    }
  };
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
    <section className="text-white pt-40 pb-40 overflow-hidden min-h-[80vh] lg:min-h-[90vh] -mt-5 lg:-mt-30" style={{backgroundColor: '#343434'}}>
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 relative">
            <img
              src="/home_page_assets/2/Clip path group.svg"
              alt="Unique Pedagogy Icon"
              className="w-full h-full"
            />
          </div>
        </div>

        <h2
          className="text-3xl md:text-6xl lg:text-7xl font-bold py-2 mb-6"
          style={{ color: '#09be9d', fontFamily: 'Poppins, sans-serif' }}
        >
          <span className="block md:inline">Our Unique</span>
          <span className="block md:inline"> Pedagogy</span>
        </h2>

        <div className="max-w-3xl mx-auto mb-16 py-2 md:py-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <p className="text-lg lg:text-xl leading-relaxed" style={{color: '#39BB9C'}}>
            Our <span className="font-semibold" style={{color: '#FFE4A1'}}>research-backed</span> and{' '}
            <span className="font-semibold" style={{color: '#FFE4A1'}}>IP-protected</span>{' '}
            Teaching Methodology is designed for
            maximum learning and retention. The content of our courses accounts for the
            diversity and variety in the financial backgrounds of culturally-rich India.
          </p>
        </div>

        <div className="relative w-full max-w-[100vw] mx-auto px-4">
          <div
            className="relative flex items-center justify-center h-[600px] lg:h-[700px] overflow-hidden"
            style={{
              perspective: "2000px",
              perspectiveOrigin: "center center",
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {visibleCards.map((card, arrayIndex) => {
              const { position, index } = card;
              const isCenter = position === 0;

              let transform = "";
              let zIndex =
                10 + Math.abs(position === 0 ? 5 : 5 - Math.abs(position));

              if (position === -2) {
                transform =
                  "translateX(-450px) translateZ(-200px) rotateY(15deg) scale(0.75)";
              } else if (position === -1) {
                transform =
                  "translateX(-250px) translateZ(-100px) rotateY(8deg) scale(0.9)";
              } else if (position === 0) {
                transform =
                  "translateX(0px) translateZ(0px) rotateY(0deg) scale(1.1)";
              } else if (position === 1) {
                transform =
                  "translateX(250px) translateZ(-100px) rotateY(-8deg) scale(0.9)";
              } else if (position === 2) {
                transform =
                  "translateX(450px) translateZ(-200px) rotateY(-15deg) scale(0.75)";
              }

              return (
                <div
                  key={`${index}-${arrayIndex}`}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    transform,
                    transformStyle: "preserve-3d",
                    zIndex,
                  }}
                >
                  <div
                    className="relative w-78 h-[480px] lg:w-88 lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700"
                    style={{
                      backfaceVisibility: "hidden",
                      opacity: isCenter
                        ? 1
                        : position === -1 || position === 1
                          ? 0.85
                          : 0.7,
                      transformStyle: 'flat',
                    }}
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full transition-transform duration-300"
                        style={{
                          transform: isCenter ? 'scale(1)' : 'scale(0.98)',
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    <img
        src="/effects/black.png"
        alt="black transition"
        className='w-full block relative -top-7 z-0'
      />
    </> 
  );
};

export default UniquePedagogy;