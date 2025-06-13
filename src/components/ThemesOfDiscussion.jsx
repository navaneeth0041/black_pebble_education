import React from 'react';

export default function ThemesOfDiscussion() {
  return (
    <>
    <div className="relative w-full py-16 min-h-screen flex items-center">
      {/* Image Left - Absolutely Positioned */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-[400px] xl:h-[450px] w-[45%] z-0">
        <img 
          src="./Finance_clubs/Course Introduction (2) 2.svg" 
          alt="Financial Discussion" 
          className="h-full w-full object-cover rounded-r-lg"
        />
      </div>
      
      {/* Content Container */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Empty spacer on large screens, image on mobile */}
          <div className="lg:hidden">
            <img 
              src="./Finance_clubs/Course Introduction (2) 2.svg" 
              alt="Financial Discussion" 
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:col-start-2 space-y-8 lg:pl-8 xl:pl-12">
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-500 leading-tight"
              style={{ fontFamily: 'Mochiy Pop One, cursive' }}
            >
              Themes of Discussion
            </h2>
            <div className="space-y-6">
              {[
                "Financial Knowledge",
                "Financial Mindset",
                "Financial Behavior",
                "News & Trends"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-teal-500 rounded-full flex-shrink-0"></div>
                  <p 
                    className="text-teal-500 text-xl md:text-2xl font-semibold"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
        src="/effects/white.png"
        alt="black transition"
        className='w-[200%] block relative -top-7 z-0'
      />
    </>
  );
}