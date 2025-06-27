"use client";

import React, { useState, useEffect } from "react";

const UniquePedagogy = () => {
  const [currentSlide, setCurrentSlide] = useState(2); 

  const pedagogyCards = [
    {
      title: "Gender-inclusive",
      image: "/home_page_assets/2/Frame 299.png",
      alt: "Child smiling at camera",
    },
    {
      title: "Context-relevant",
      image: "/home_page_assets/2/Frame 300.png", 
      alt: "Children working together on activities",
    },
    {
      title: "Culture-sensitive",
      image: "/home_page_assets/2/Frame 298.png",
      alt: "Hands working on craft project", 
    },
    {
      title: "Enhances life skills",
      image: "/home_page_assets/2/Frame 297.png",
      alt: "Child playing outdoors",
    },
    {
      title: "Multiple perspectives",
      image: "/home_page_assets/2/Frame 296.png",
      alt: "Child with colorful face paint",
    },
    {
      title: "Improves retention",
      image: "/home_page_assets/2/Frame 312.png",
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
    <section className="text-white min-h-screen lg:min-h-screen overflow-hidden flex flex-col justify-center items-center px-4 -mt-5 lg:-mt-30 pt-5 lg:pt-40" style={{backgroundColor: '#343434'}}>
      <div className="text-center w-full flex flex-col justify-center items-center h-full py-10">
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
          className="text-3xl md:text-6xl lg:text-7xl font-bold py-2 mb-6 text-center"
          style={{ color: '#09be9d', fontFamily: 'Mochiy Pop One, sans-serif' }}
        >
          <span className="block md:inline">Our Unique</span>
          <span className="block md:inline"> Pedagogy</span>
        </h2>

        <div className="w-full mb-16 py-1 md:py-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <p className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-center px-4" style={{color: '#39BB9C'}}>
            Our <span className="font-semibold" style={{color: '#FFE4A1'}}>research-backed</span> and{' '}
            <span className="font-semibold" style={{color: '#FFE4A1'}}>IP-protected</span>{' '}
            Teaching Methodology is designed for<br />
            maximum learning and retention. The content of our courses<br />
            accounts for the diversity and variety in the financial backgrounds of culturally-rich India.
          </p>
        </div>

        <div className="relative w-screen mx-auto">
          <div
            className="relative flex items-center justify-center h-[600px] lg:h-[700px] overflow-visible w-full"
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
              const isBehindCenter = position === -1 || position === 1;

              let transform = "";
              let zIndex =
                10 + Math.abs(position === 0 ? 5 : 5 - Math.abs(position));

              // Enhanced transformations with curved effect for behind-center cards
              if (position === -2) {
                transform =
                  "translateX(-650px) translateZ(-300px) rotateY(35deg) scale(0.75)";
              } else if (position === -1) {
                // Left behind card - curve inward more on hidden side, outward on visible side
                transform =
                  "translateX(-350px) translateZ(-150px) rotateY(35deg) scale(0.9) scaleX(1.15)";
              } else if (position === 0) {
                transform =
                  "translateX(0px) translateZ(0px) rotateY(0deg) scale(1.1)";
              } else if (position === 1) {
                // Right behind card - curve inward more on hidden side, outward on visible side  
                transform =
                  "translateX(350px) translateZ(-150px) rotateY(-35deg) scale(0.9) scaleX(1.15)";
              } else if (position === 2) {
                transform =
                  "translateX(650px) translateZ(-300px) rotateY(-35deg) scale(0.75)";
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
                    className="relative overflow-hidden shadow-2xl transition-all duration-700"
                    style={{
                      width: isBehindCenter ? '400px' : '312px', // Increased width for behind-center cards
                      height: isBehindCenter ? '460px' : '420px', // Decreased height
                      backfaceVisibility: "hidden",
                      opacity: isCenter
                        ? 1
                        : position === -1 || position === 1
                          ? 0.85
                          : 0.7,
                      transformStyle: 'flat',
                      borderRadius: '24px',
                    }}
                  >
                    <div 
                      className="relative w-full h-full overflow-hidden"
                      style={{
                        borderRadius: '22px', // Slightly smaller than container to ensure perfect alignment
                        // Additional curve effect using CSS transform on the container
                        transform: isBehindCenter ? 
                          (position === -1 ? 
                            'perspective(800px) rotateY(-8deg)' : 
                            'perspective(800px) rotateY(8deg)'
                          ) : 'none'
                      }}
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full transition-transform duration-300"
                        style={{
                          transform: isCenter ? 'scale(1)' : 'scale(0.98)',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          borderRadius: '22px', // Match the container border radius
                          // Additional image distortion for curved effect
                          ...(isBehindCenter && {
                            transform: position === -1 ? 
                              'scale(0.98) perspective(600px) rotateY(5deg)' : 
                              'scale(0.98) perspective(600px) rotateY(-5deg)'
                          })
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
        className='w-full block relative -top-2 lg:-top-7 z-0'
      />
    </> 
  );
};

export default UniquePedagogy;