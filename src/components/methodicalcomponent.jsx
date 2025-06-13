import React, { useState, useEffect } from 'react';
import google_font from 'next/font/google';

const FlexibleInfoCard = ({ 
  numberIcon = null,
  mainIcon = null,
  secondaryIcon = null,
  bottomDecoration = null, // New parameter for bottom decorative elements
  bottomDecorationSize = "w-16 h-12", // Default size for bottom decoration
  bottomDecorationPosition = "bottom-0 right-4", // Default position
  headline = "Request for Information",
  description = "You can call us or WhatsApp us for course requests",
  bgColor = "bg-[#39BB9C]",
  delay = 0,
  cardHeight = "h-[250px] sm:h-[270px] lg:h-[290px]",
  iconSize = "w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14",
  secondaryIconSize = "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8",
  hasNotchCut = false, // New parameter for speech bubble tail
  showRegisterButton = false, // New parameter to show register button
  showLearningScore = false, // New parameter for learning score display
  scoreNumerator = "15", // Score numerator (top number)
  scoreDenominator = "20" // Score denominator (bottom number)
}) => {
  const [showCard, setShowCard] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cardTimer = setTimeout(() => {
      setShowCard(true);
    }, delay);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, delay + 500);

    return () => {
      clearTimeout(cardTimer);
      clearTimeout(contentTimer);
    };
  }, [delay]);

  // Extract the hex color from bgColor for the notch
  const getHexColor = (bgColorClass) => {
    const match = bgColorClass.match(/#(?:[0-9a-fA-F]{3}){1,2}/);
    return match ? match[0] : '#39BB9C'; // default fallback
  };

  const bgHexColor = getHexColor(bgColor);
  const isRegistrationCard = headline.toLowerCase().includes('registration') || showRegisterButton;
  
  const isLearningScoreCard = headline.toLowerCase().includes('learning score') || showLearningScore;

  return (
    <div className="relative" style={{ overflow: 'visible' }}>
      <div 
        className={`relative w-[280px] sm:w-[300px] lg:w-[320px] ${cardHeight} ${bgColor} rounded-2xl p-6 flex flex-col justify-between shadow-lg transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl ${
          showCard ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{
          overflow: 'visible',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
        
        {/* Icons container */}
        <div className="relative flex justify-between items-start mb-0">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-sm transform transition-all duration-500 ${
            showContent ? 'scale-100 rotate-0' : 'scale-75 rotate-180'
          }`}>
            {numberIcon ? (
              <img 
                src={numberIcon} 
                alt="Step number" 
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
            ) : (
              <span className="text-lg sm:text-2xl font-bold text-emerald-500">1</span>
            )}
          </div>
          
          <div className={`relative transform transition-all duration-700 ease-out ${
            showContent ? 'scale-100 rotate-0 opacity-100' : 'scale-75 rotate-12 opacity-60'
          }`}>
            {isLearningScoreCard ? (
              <div className="relative">
                {/* Main Icon - Tilted Oval Border */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                  {mainIcon ? (
                    <img 
                      src={mainIcon} 
                      alt="Learning score border" 
                      className="w-full h-full object-contain filter brightness-0 invert transform rotate-12"
                    />
                  ) : (
                    <div className="w-full h-full border-4 border-white rounded-full transform rotate-12"></div>
                  )}
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center transform -rotate-24">
                    <div className="text-2xl sm:text-3xl font-normal text-white leading-none tracking-[-0.456px] font-['Mochiy_Pop_One']">
                      {scoreNumerator}
                    </div>
                    {/* Secondary Icon - Horizontal Bar */}
                    {secondaryIcon ? (
                      <img 
                        src={secondaryIcon} 
                        alt="Score divider" 
                        className="w-15 h-5 my-1 object-contain filter brightness-0 invert transform rotate-12"
                      />
                    ) : (
                      <div className="w-8 h-0.5 bg-white my-1 transform rotate-24"></div>
                    )}
                    <div className="text-2xl sm:text-3xl font-normal text-white leading-none tracking-[-0.456px] font-['Mochiy_Pop_One']">
                      {scoreDenominator}
                    </div>
                  </div>
                </div>
              </div>
            ) : mainIcon ? (
              <div className="relative">
                <img 
                  src={mainIcon} 
                  alt={headline} 
                  className={`${iconSize} object-contain drop-shadow-sm ${isRegistrationCard ? '' : 'filter brightness-0 invert'}`}
                />
              </div>
            ) : (
              <div className={`${iconSize} bg-white/20 rounded-lg flex items-center justify-center`}>
                <span className="text-white text-xl">?</span>
              </div>
            )}
            
            {secondaryIcon && !isLearningScoreCard && (
              <div className="absolute -bottom-1 -right-1">
                <img 
                  src={secondaryIcon} 
                  alt="Secondary icon" 
                  className={`${secondaryIconSize} object-contain drop-shadow-sm ${isRegistrationCard ? '' : 'filter brightness-0 invert bg-white/20 rounded-full p-1'}`}
                />
              </div>
            )}
          </div>
        </div>

        
        
        <div className={`relative z-10 flex-1 flex flex-col justify-end ${isRegistrationCard || isLearningScoreCard ? '-mt-4' : '-mt-10'}`}>
          <h3 className={`text-white text-[20px] sm:text-[22px] lg:text-[24px] font-normal leading-[149%] tracking-[-0.456px] font-['Mochiy_Pop_One'] mb-1 sm:mb-1 transform transition-all duration-700 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            {headline}
          </h3>
          
          <p className={`text-white/90 text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[149%] tracking-[-0.38px] font-['Poppins'] transform transition-all duration-700 delay-200 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            {description}
          </p>
        </div>
        
        {/* Subtle pulse effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
      </div>

      {hasNotchCut && (
        <div
          className="absolute"
          style={{
            bottom: '-16px',
            left: '20px', 
            width: '20px',
            height: '0',
            borderLeft: '20px solid transparent', 
            borderRight: '20px solid transparent', 
            borderTop: `20px solid ${bgHexColor}`, 
            zIndex: 0,
          }}
        ></div>
      )}


      {/* Bottom decoration element - positioned outside the main card */}
      {bottomDecoration && (
  <div
    className={`absolute ${bottomDecorationPosition} transform transition-all duration-700 delay-400 z-30 ${
      showContent ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-2'
    }`}
  >
    {bottomDecoration === 'speech-bubble' ? (
      <div className="relative">
        {/* Speech bubble with left-aligned dots */}
        <div
          className="px-10 py-7 rounded-3xl shadow-lg flex items-center justify-start gap-1.5 relative"
          style={{ backgroundColor: bgHexColor }}
        >
          <div className="w-2 h-2 bg-white rounded-full opacity-90"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-90"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-90"></div>
          
          <div
            className="absolute"
            style={{
              right: '-25px',
              bottom: '4px',
              width: '35px',
              height: '34px',
              borderTop: '16px solid transparent',
              borderBottom: '16px solid transparent',
              borderLeft: `26px solid ${bgHexColor}`,
            }}
          ></div>
        </div>
      </div>
    ) : (
      <img
        src={bottomDecoration}
        alt="Bottom decoration"
        className={`${bottomDecorationSize} object-contain drop-shadow-lg`}
      />
    )}
  </div>
)}
    </div>
  );
};

export default FlexibleInfoCard;