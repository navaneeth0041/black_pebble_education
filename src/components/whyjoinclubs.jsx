import React from 'react';

export default function WhyJoinClub({ imageSrc = "./images/childlap.png" }) {
  return (
    <div className="w-full py-5 lg:py-24 lg:min-h-screen flex items-center relative">
      <div className="flex flex-col lg:flex-row items-start justify-start w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8 mb-10 lg:mb-0 lg:pr-16 lg:pl-0 pl-4">
          <h2
            className="text-4xl sm:text-5xl md:text-5xl font-bold text-teal-500 leading-tight"
            style={{ fontFamily: 'Mochiy Pop One, sans-serif' }}
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

      {/* Right Image Section */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[400px] xl:h-[450px]">
        <img
          src={imageSrc}
          alt="Why join the club"
          className="h-full object-cover rounded-l-lg"
        />
      </div>
    </div>
  );
}
