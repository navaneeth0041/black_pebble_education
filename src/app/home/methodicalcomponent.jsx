import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const FlexibleInfoCard = ({ 
  numberIcon = null,
  mainIcon = null,
  headline = "Request for Information",
  description = "You can call us or WhatsApp us for course requests",
  bgColor = "from-emerald-400 to-teal-500",
  numberIconBg = "bg-white",
  numberIconColor = "text-emerald-500"
}) => {
  const [showText, setShowText] = useState(false);
  const [docAnimationComplete, setDocAnimationComplete] = useState(false);

  useEffect(() => {
    const docTimer = setTimeout(() => {
      setDocAnimationComplete(true);
    }, 1500);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => {
      clearTimeout(docTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className={`relative w-[351px] h-[329px] ${bgColor} rounded-2xl p-6 flex flex-col justify-between shadow-lg overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
      
      {/* Icons container */}
      <div className="relative flex justify-between items-start mb-8">
        {/* Number icon on the left */}
        <div className={`w-12 h-12 ${numberIconBg} rounded-full flex items-center justify-center shadow-sm`}>
          {numberIcon ? (
            <img 
              src={numberIcon} 
              alt="Number icon" 
              className="w-8 h-8 object-contain"
            />
          ) : (
            <span className={`text-2xl font-bold ${numberIconColor}`}>1</span>
          )}
        </div>
        
        {/* Main icon on the right with animation */}
        <div className={`transform transition-all duration-1000 ease-out ${
          docAnimationComplete ? 'scale-100 rotate-0 opacity-100' : 'scale-75 rotate-12 opacity-70'
        }`}>
          <div className="relative">
            {mainIcon ? (
              <img 
                src={mainIcon} 
                alt="Main icon" 
                className="w-12 h-12 object-contain drop-shadow-sm"
              />
            ) : (
              <FileText 
                size={48} 
                className="text-white drop-shadow-sm" 
                strokeWidth={1.5}
              />
            )}
            
            {/* Document lines animation - only show if using default FileText icon */}
            {!mainIcon && (
              <div className="absolute top-3 left-3 space-y-1">
                <div className={`w-4 h-0.5 bg-white/60 transition-all duration-500 delay-300 ${
                  docAnimationComplete ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}></div>
                <div className={`w-3 h-0.5 bg-white/60 transition-all duration-500 delay-500 ${
                  docAnimationComplete ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}></div>
                <div className={`w-3.5 h-0.5 bg-white/60 transition-all duration-500 delay-700 ${
                  docAnimationComplete ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}></div>
              </div>
            )}
            
            {/* Pen icon - only show if using default FileText icon */}
            {!mainIcon && (
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full transform transition-all duration-700 delay-1000 ${
                docAnimationComplete ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}>
                <div className="w-0.5 h-2 bg-emerald-500 transform rotate-45 translate-x-1 -translate-y-0.5"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Text content with reveal animation */}
      <div className="relative z-10">
        <h2 className={`text-white font-bold text-2xl mb-4 transform transition-all duration-800 ${
          showText ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {headline}
        </h2>
        
        <p className={`text-white/90 text-base leading-relaxed transform transition-all duration-800 delay-300 ${
          showText ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {description}
        </p>
      </div>
      
      {/* Subtle glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${bgColor} rounded-2xl blur-sm opacity-20 -z-10`}></div>
    </div>
  );
};

export default FlexibleInfoCard;