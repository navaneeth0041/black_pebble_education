import React from 'react';

export default function WhoWeArePage() {
  return (
    <div className="min-h-[60vh] lg:min-h-screen bg-white flex sm:px-5 lg:items-center justify-center p-4 -mt-5 lg:-mt-30 pt-40">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left Section - Title and Sun Icon */}
          <div className="relative flex flex-col items-start">
            {/* Sun Icon positioned to pass through the W and tilted */}
            <div className="-top-12 -left-14 sm:-left-18 md:-left-20 lg:-left-24 xl:-left-28 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-34 lg:h-34 xl:w-42 xl:h-42 z-10 transform -rotate-12">
              <img
                src="./home_page_assets/sun.svg"
                alt="Sun Icon"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Main Heading */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#39BB9C] mb-1 relative z-20"
              style={{ 
                fontFamily: 'Mochiy Pop One, cursive',
                fontWeight: '400'
              }}
            >
              Who We Are &
            </h1>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#39BB9C] relative z-20"
              style={{ 
                fontFamily: 'Mochiy Pop One, cursive',
                fontWeight: '400'
              }}
            >
              Why We Care
            </h2>
          </div>

          {/* Right Section - Content */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {/* First paragraph - highlighted */}
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#088F99] font-semibold leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              We are advocates of financial literacy for the young!
            </p>

            {/* Second paragraph */}
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#088F99] leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              We're on a mission to make money simple, fun, and meaningful for kids and teens. Our age-tailored courses are designed to spark curiosity, build confidence, and turn everyday financial interactions into learning opportunities.
            </p>

            {/* Third paragraph */}
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#088F99] leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Whether your child is just starting out or ready to take bold steps towards financial independence, we're ready to guide them on that journey.
            </p>

            {/* Final tagline */}
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#088F99] font-semibold leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              No exams. No pressure. Pure learning.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}