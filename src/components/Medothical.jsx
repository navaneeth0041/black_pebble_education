'use client';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import FlexibleInfoCard from './methodicalcomponent';

const PopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const MethodicalApproach = () => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const oddNumberHeight = "h-[280px] sm:h-[280px] lg:h-[360px]";
  const evenNumberHeight = "h-[240px] sm:h-[300px] lg:h-[280px]";

  const cardData = [
    {
      numberIcon: "/home_page_assets/7/n01.svg",
      mainIcon: "/home_page_assets/7/doc.svg",
      secondaryIcon: null,
      bottomDecoration: null, 
      headline: "Request for Information",
      description: "You can call us or WhatsApp us for course requests",
      bgColor: "bg-[#39BB9C]",
      iconSize: "w-32 h-32"
    },
    {
      numberIcon: "/home_page_assets/7/n02.svg",
      mainIcon: "/home_page_assets/7/call.svg",
      secondaryIcon: null,
      bottomDecoration: "speech-bubble", 
      bottomDecorationSize: "w-20 h-14",
      bottomDecorationPosition: "top-full mt-5 right-0", 
      headline: "Counseling Session",
      description: "We schedule a call with our Counselor for a preliminary discussion",
      bgColor: "bg-[#F3C041]",
      iconSize: "w-24 h-20"
    },
    {
      numberIcon: "/home_page_assets/7/n03.svg",
      mainIcon: "/home_page_assets/7/Vector.svg",
      secondaryIcon: "/home_page_assets/7/Vector 34.svg",
      bottomDecoration: null, 
      headline: "Learning Score",
      description: "We calculate your child's learning score based on the discussion",
      bgColor: "bg-[#4598CA]",
      iconSize: "w-14 h-14",
      secondaryIconSize: "w-15 h-15",
      showLearningScore: true, 
      scoreNumerator: "15", 
      scoreDenominator: "20" 
    },
    {
      numberIcon: "/home_page_assets/7/n04.svg",
      mainIcon: "/home_page_assets/7/stars.svg",
      secondaryIcon: null,
      bottomDecoration: "/home_page_assets/7/thumbs.svg", 
      bottomDecorationSize: "w-36 h-26", 
      bottomDecorationPosition: "bottom-[-64px] right-22", 
      headline: "Recommendations",
      description: "We recommend the right personalized course for your child",
      bgColor: "bg-[#EF746C]",
      iconSize: "w-28 h-12",
      hasNotchCut: true 
    },
    {
      numberIcon: "/home_page_assets/7/n05.svg",
      mainIcon: "/home_page_assets/7/register.svg", 
      secondaryIcon: "/home_page_assets/7/hand.svg", 
      bottomDecoration: null,
      headline: "Course Registration", 
      description: "We register your child for the recommended course",
      bgColor: "bg-[#2BC4CC]",
      iconSize: "w-33 h-20",
      secondaryIconSize: "w-35 h-12"
    },
    {
      numberIcon: "/home_page_assets/7/n06.svg",
      mainIcon: "/home_page_assets/7/teach.svg",
      secondaryIcon: null,
      bottomDecoration: null, 
      headline: "Course Delivery",
      description: "We deliver LIVE session online or offline for the registered course.",
      bgColor: "bg-[#4ECDC4]",
      iconSize: "w-25 h-25"
    },
    {
      numberIcon: "/home_page_assets/7/n07.svg",
      mainIcon: "/home_page_assets/7/filter.svg",
      secondaryIcon: null,
      bottomDecoration: null, 
      headline: "Impact Assessment",
      description: "We evaluate the impact of the course on your child",
      bgColor: "bg-[#45CA93]",
      iconSize: "w-35 h-35"
    },
    {
      numberIcon: "/home_page_assets/7/n08.svg",
      mainIcon: "/home_page_assets/7/book.svg",
      secondaryIcon: null,
      bottomDecoration: null, 
      headline: "Takeaway Notes",
      description: "We share a summary of the course as Infographic Takeaway Notes",
      bgColor: "bg-[#F5A623]",
      iconSize: "w-25 h-25"
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
    <>
    <div className="w-full min-h-screen py-16 px-6" style={{ backgroundColor: '#F3FFF9' }}>
      <div className="mx-auto pl-4">
        
      <div className="text-left mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-6 lg:px-8">
      <h2 
        className={`${PopOne.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#09BE9D] mb-3 sm:mb-4 leading-tight`}
      >
        Our Methodical Approach
      </h2>
      <p 
        className={`${poppins.className} text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-black font-medium leading-relaxed`}
      >
        THE COURSE DELIVERY VALUE CHAIN
      </p>
    </div>

        {}
        <div className="relative" style={{ overflow: 'visible' }}>
          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-32 scroll-smooth px-6"
            onScroll={updateScrollButtons}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth',
              overflowY: 'visible',
              paddingBottom: '120px' 
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {cardData.map((card, index) => {
              const isOddNumberedCard = index % 2 === 0;
              const cardHeight = isOddNumberedCard ? oddNumberHeight : evenNumberHeight;

              return (
                <div
                  key={index}
                  className="flex-shrink-0 relative"
                  style={{
                    width: 'min(300px, 80vw)',
                    marginRight: '1.5rem',
                    overflow: 'visible',
                    position: 'relative',
                    zIndex: index + 1 
                  }}
                >
                  <FlexibleInfoCard 
                    numberIcon={card.numberIcon}
                    mainIcon={card.mainIcon}
                    secondaryIcon={card.secondaryIcon}
                    bottomDecoration={card.bottomDecoration}
                    bottomDecorationSize={card.bottomDecorationSize}
                    bottomDecorationPosition={card.bottomDecorationPosition}
                    headline={card.headline}
                    description={card.description}
                    bgColor={card.bgColor}
                    cardHeight={cardHeight}
                    iconSize={card.iconSize}
                    secondaryIconSize={card.secondaryIconSize}
                    hasNotchCut={card.hasNotchCut}
                    delay={index * 200}
                  />
                </div>
              );
            })}
          </div>

          {}
          <div className="flex justify-end mt-8 space-x-4">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 border border-gray-200 ${
                canScrollLeft 
                  ? 'bg-white hover:bg-gray-50 cursor-pointer' 
                  : 'bg-gray-100 cursor-not-allowed opacity-50'
              }`}
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M15 18L9 12L15 6" 
                  stroke={canScrollLeft ? "#666" : "#ccc"} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
                canScrollRight 
                  ? 'bg-[#09BE9D] hover:bg-[#08a085] cursor-pointer' 
                  : 'bg-gray-300 cursor-not-allowed opacity-50'
              }`}
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M9 18L15 12L9 6" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-[#09BE9D]"></div>
          </div>
        </div>
      </div>
    </div>
    <img
        src="/effects/prefooter.png"
        alt="black transition"
        className='w-[200%] block relative -top-8 z-30'
      />
    </> 
  );
};

export default MethodicalApproach;