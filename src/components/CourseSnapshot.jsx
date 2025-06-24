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
      <div className="bg-gradient-to-br from-teal-100 to-emerald-50 py-20 px-6 lg:px-16 min-h-[90vh] lg:min-h-screen pt-30 -mt-5 lg:-mt-18">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <h1 className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] bg-clip-text text-transparent font-['Mochiy_Pop_One'] text-[32px] sm:text-[40px] lg:text-[49px] font-normal leading-[149%] tracking-[-0.931px] text-center">
              {title}
            </h1>
          </div>

          <div className="relative w-full">
            <div className="absolute -left-4 -top-8 z-0 sm:-left-8 sm:-top-12 lg:-left-28 lg:-top-35">
              <img
                src="/Finance_clubs/1/Group.svg"
                alt="Calendar"
                className="w-[60px] h-[70px] sm:w-[90px] sm:h-[100px] md:w-[140px] md:h-[160px] lg:w-[260px] lg:h-[280px]"
              />
            </div>

            <div 
              className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] rounded-[23px] p-6 sm:p-8 md:p-12 lg:p-16 w-full shadow-lg relative overflow-visible z-10"
              style={{ minHeight: '500px' }}
            >
              {/* White coins background */}
              <div className="absolute -right-12 bottom-4 z-0 sm:-right-16 sm:bottom-10 lg:-right-39 lg:bottom-3 rotate-12">
                <img
                  src="/Finance_clubs/1/whitecoins.svg"
                  alt="White Coins Background"
                  className="w-[100px] h-[95px] sm:w-[180px] sm:h-[190px] lg:w-[320px] lg:h-[300px]"
                />
              </div>

              {/* Decorative coins - visible overflow but smaller on mobile */}
              <div className="absolute -right-10 bottom-2 z-10 sm:-right-24 sm:bottom-3 lg:-right-40 lg:bottom-5">
                <img
                  src="/Finance_clubs/1/Clip path group.svg"
                  alt="Decorative Coins"
                  className="w-[100px] h-[95px] sm:w-[180px] sm:h-[190px] lg:w-[320px] lg:h-[300px] transform rotate-12"
                />
              </div>

              <div className="relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-8">
                  <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                    <div>
                      <h2 className="text-white font-poppins text-[18px] sm:text-[20px] lg:text-[24px] font-semibold mb-4 sm:mb-6">
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

                <div className="border-t border-white/30 my-6 sm:my-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 md:divide-x md:divide-white/30">
                  <div className="flex flex-col gap-3 sm:gap-4 pb-6 md:pb-0 border-b border-white/30 md:border-b-0 md:pr-6">
                    <h3 className="text-white font-poppins text-[16px] sm:text-[18px] lg:text-[22px] font-semibold">
                      {locationTitle}
                    </h3>
                    <p className="text-white font-poppins text-[16px] sm:text-[18px] lg:text-[22px] font-semibold">
                      {locationValue}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4 md:pl-6">
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
        className="w-full block relative -top-7 z-20"
      />
    </>
  );
}