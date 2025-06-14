import React from 'react';

export default function WhyJoinClub() {
  return (
    <div className="relative w-full pt-40 py-8 md:py-12 lg:py-16 min-h-screen flex items-center -mt-5 lg:-mt-30">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Left Content Section */}
        <div className="lg:col-span-1 flex flex-col justify-center space-y-6 lg:space-y-8">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-teal-500 leading-tight whitespace-nowrap"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Why Join the Club?
          </h2>
          
          <div className="space-y-4 sm:space-y-5">
            {[
              "All-India Online Community",
              "Topics on Everyday Finances",
              "Warmup to Comprehensive Financial Courses",
              "1-hour Engaging Session Every Month",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2.5 flex-shrink-0"></div>
                <p 
                  className="text-base sm:text-lg lg:text-xl text-teal-600 font-medium leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Section - Flush Right */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[400px] xl:h-[450px]">
        <img 
          src="./images/Money.svg" 
          alt="People discussing financial planning around a piggy bank"
          className="h-full object-cover rounded-l-lg"
        />
      </div>
    </div>
  );
}
