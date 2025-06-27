import React from 'react';

export default function CourseSnapshot({
  title = "Course Snapshot",
  originalPrice = "₹2499",
  offerPrice = "₹1799",
  courseFormatTitle = "Course Format",
  courseFeatures = [
    'Videos & Conversations',
    'Real-life Examples',
    'Quizzes',
    'Team Project & Role-play',
    'Infographic Takeaway Notes',
    'Certificate of Participation'
  ],
  locationTitle = "Location",
  locationValue = "Online | Offline (Ahmedabad)",
  durationTitle = "Session Duration",
  durationValue = "2 Hours",
  offerPriceTitle = "Offer Price"
}) {
  return (
    <>
      <div className="bg-gradient-to-br from-teal-100 to-emerald-50 py-20 px-6 lg:px-16 min-h-[90vh] lg:min-h-screen pt-5 lg:pt-30 -mt-5 lg:-mt-18">
        <div className="max-w-6xl mx-auto">
          {/* Calendar icon - left aligned above title on mobile, positioned differently on desktop */}
          <div className="flex justify-start mb-4 lg:hidden">
            <img
              src="/Finance_clubs/1/Group.svg"
              alt="Calendar"
              className="w-[80px] h-[90px] sm:w-[110px] sm:h-[120px]"
            />
          </div>

          <div className="flex justify-center mb-12">
            <h1 className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] bg-clip-text text-transparent font-['Mochiy_Pop_One'] text-[32px] sm:text-[40px] lg:text-[49px] font-normal leading-[149%] tracking-[-0.931px] text-center">
              {title}
            </h1>
          </div>

          <div className="relative w-full">
            {/* Calendar icon - desktop only */}
            <div className="absolute -left-28 -top-35 z-0 hidden lg:block">
              <img
                src="/Finance_clubs/1/Group.svg"
                alt="Calendar"
                className="w-[260px] h-[280px]"
              />
            </div>

            <div 
              className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] rounded-[23px] p-6 sm:p-8 md:p-12 lg:p-16 w-full shadow-lg relative overflow-visible z-10"
              style={{ minHeight: '500px' }}
            >
              {/* White coins background - desktop only */}
              <div className="absolute -right-12 bottom-4 z-0 sm:-right-16 sm:bottom-10 lg:-right-39 lg:bottom-3 rotate-12 hidden lg:block">
                <img
                  src="/Finance_clubs/1/whitecoins.svg"
                  alt="White Coins Background"
                  className="w-[320px] h-[300px]"
                />
              </div>

              {/* Decorative coins - desktop only */}
              <div className="absolute -right-10 bottom-2 z-10 sm:-right-24 sm:bottom-3 lg:-right-40 lg:bottom-5 hidden lg:block">
                <img
                  src="/Finance_clubs/1/Clip path group.svg"
                  alt="Decorative Coins"
                  className="w-[320px] h-[300px] transform rotate-12"
                />
              </div>

              <div className="relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-8">
                  <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                    <div className="text-center lg:text-left">
                      <h2 className="text-white font-poppins text-[24px] sm:text-[20px] lg:text-[24px] font-semibold mb-4 sm:mb-6">
                        {offerPriceTitle}
                      </h2>
                      <div className="space-y-2">
                        <div className="text-[#B5FFE5] font-poppins text-[28px] sm:text-[36px] lg:text-[47px] font-semibold line-through">
                          {originalPrice}
                        </div>
                        <div className="text-white font-poppins text-[42px] sm:text-[54px] lg:text-[68px] font-semibold">
                          {offerPrice}
                        </div>
                      </div>
                      {/* Line after prices - only on mobile/tablet */}
                      <div className="border-t border-white/30 mt-6 lg:hidden"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                    <div>
                      <h2 className="text-white font-poppins text-[18px] sm:text-[20px] lg:text-[24px] font-semibold mb-6 sm:mb-8">
                        {courseFormatTitle}
                      </h2>
                      <ul className="space-y-3 sm:space-y-4">
                        {courseFeatures.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-white rounded-full mt-2 sm:mt-3 flex-shrink-0"></span>
                            <span className="text-white font-poppins text-[16px] sm:text-[18px] lg:text-[22px] font-semibold">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Line between course inclusion and location */}
                <div className="border-t border-white/30 my-6 sm:my-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                  <div className="flex flex-col gap-3 sm:gap-4 pb-6 md:pb-0 border-b border-white/30 md:border-b-0">
                    <h3 className="text-white font-poppins text-[16px] sm:text-[18px] lg:text-[22px] font-semibold">
                      {locationTitle}
                    </h3>
                    <p className="text-white font-poppins text-[16px] sm:text-[18px] lg:text-[22px] font-semibold">
                      {locationValue}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <h3 className="text-white font-poppins text-[16px] sm:text-[18px] lg:text-[22px] font-semibold">
                      {durationTitle}
                    </h3>
                    <p className="text-white font-poppins text-[16px] sm:text-[18px] lg:text-[22px] font-semibold">
                      {durationValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/effects/lightaqua.svg"
        alt="black transition"
        className="w-full block relative -top-2 lg:-top-7 z-20"
      />
    </>
  );
}