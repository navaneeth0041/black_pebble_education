import React from 'react';

export default function CourseSnapshot() {
  return (
    <div className="bg-gradient-to-br from-teal-100 to-emerald-50 py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          <h1 className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] bg-clip-text text-transparent font-['Mochiy_Pop_One'] text-[49px] font-normal leading-[149%] tracking-[-0.931px] text-center">
            Course Snapshot
          </h1>
        </div>

        <div className="relative w-full">
          <div className="absolute -left-8 -top-12 z-0 sm:-left-16 sm:-top-8 lg:-left-28 lg:-top-35">
            <img
              src="/Finance_clubs/1/Group.svg"
              alt="Calendar"
              className="w-[90px] h-[100px] sm:w-[180px] sm:h-[200px] lg:w-[260px] lg:h-[280px]"
            />
          </div>

          <div 
            className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] rounded-[23px] p-6 sm:p-8 md:p-12 lg:p-16 w-full shadow-lg relative overflow-visible z-10"
            style={{ minHeight: '500px' }}
          >
            <div className="absolute -right-16 bottom-2 z-0 sm:-right-24 sm:bottom-3 lg:-right-40 lg:bottom-5">
              <img
                src="/Finance_clubs/1/Clip path group.svg"
                alt="Decorative Coins"
                className="w-[140px] h-[130px] sm:w-[200px] sm:h-[190px] lg:w-[320px] lg:h-[300px] transform rotate-12"
              />
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-8">
                <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                  <div>
                    <h2 className="text-white font-poppins text-[24px] font-semibold mb-6" style={{
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.456px'
                    }}>
                      Offer Price
                    </h2>
                    <div className="space-y-2">
                      <div className="text-[#B5FFE5] font-poppins text-[47px] font-semibold line-through" style={{
                        fontWeight: 600,
                        lineHeight: '107%',
                        letterSpacing: '-0.893px'
                      }}>
                        ₹2499
                      </div>
                      <div className="text-white font-poppins text-[68px] font-semibold" style={{
                        fontWeight: 600,
                        lineHeight: '107%',
                        letterSpacing: '-1.292px'
                      }}>
                        ₹1799
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                  <div>
                    <h2 className="text-white font-poppins text-[24px] font-semibold mb-8" style={{
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.456px'
                    }}>
                      Course Format
                    </h2>
                    <ul className="space-y-4">
                      {[
                        'Videos & Conversations',
                        'Real-life Examples',
                        'Quizzes',
                        'Team Project & Role-play',
                        'Infographic Takeaway Notes',
                        'Certificate of Participation'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                          <span className="text-white font-poppins text-[22px] font-semibold" style={{
                            fontWeight: 600,
                            lineHeight: '149%',
                            letterSpacing: '-0.418px'
                          }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/30 my-6 sm:my-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:divide-x md:divide-white/30">
                <div className="flex flex-col gap-4 pb-6 md:pb-0 border-b border-white/30 md:border-b-0 md:pr-6">
                  <h3 className="text-white font-poppins text-[22px] font-semibold" style={{
                    fontWeight: 600,
                    lineHeight: '149%',
                    letterSpacing: '-0.418px'
                  }}>
                    Location
                  </h3>
                  <p className="text-white font-poppins text-[22px] font-semibold" style={{
                    fontWeight: 600,
                    lineHeight: '149%',
                    letterSpacing: '-0.418px'
                  }}>
                    Online | Offline (Ahmedabad)
                  </p>
                </div>
                <div className="flex flex-col gap-4 md:pl-6">
                  <h3 className="text-white font-poppins text-[22px] font-semibold" style={{
                    fontWeight: 600,
                    lineHeight: '149%',
                    letterSpacing: '-0.418px'
                  }}>
                    Session Duration
                  </h3>
                  <p className="text-white font-poppins text-[22px] font-semibold" style={{
                    fontWeight: 600,
                    lineHeight: '149%',
                    letterSpacing: '-0.418px'
                  }}>
                    2 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}