import React from 'react';

const ClubDetailsSection = () => {
  return (
    <>
      <section className="bg-[#E3FFF5] py-20 px-6 lg:px-16 pt-40 -mt-5 lg:-mt-30">
        <div className="flex flex-col items-center gap-6 max-w-6xl mx-auto">
          <h2 className="bg-[#E3FFF5] bg-clip-text text-transparent font-['Mochiy_Pop_One'] text-[49px] font-normal leading-[149%] tracking-[-0.931px] text-center">
            Club Details
          </h2>

          <div className="relative w-full">
            <div className="absolute -left-8 -top-12 z-0 sm:-left-16 sm:-top-8 lg:-left-28 lg:-top-35">
              <img
                src="./Finance_clubs/1/Group.svg"
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
                  src="./Finance_clubs/1/Clip path group.svg"
                  alt="Decorative Coins"
                  className="w-[140px] h-[130px] sm:w-[200px] sm:h-[190px] lg:w-[320px] lg:h-[300px] transform rotate-12"
                />
              </div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-8">
                  <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                    <div>
                      <h3 className="text-white font-poppins text-[24px] font-semibold mb-6" style={{
                        fontWeight: 600,
                        lineHeight: '149%',
                        letterSpacing: '-0.456px'
                      }}>
                        Offer Price
                      </h3>
                      <div className="space-y-2">
                        <div className="text-[#B5FFE5] font-poppins text-[47px] font-semibold line-through" style={{
                          fontWeight: 600,
                          lineHeight: '107%',
                          letterSpacing: '-0.893px'
                        }}>
                          ₹1200
                        </div>
                        <div className="text-white font-poppins text-[56px] font-semibold" style={{
                          fontWeight: 600,
                          lineHeight: '107%',
                          letterSpacing: '-1.064px'
                        }}>
                          ₹100/month
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                    <div>
                      <h3 className="text-white font-poppins text-[24px] font-semibold mb-8" style={{
                        fontWeight: 600,
                        lineHeight: '149%',
                        letterSpacing: '-0.456px'
                      }}>
                        What You Get:
                      </h3>
                      <ul className="space-y-4">
                        {[
                          '12 interactive sessions (1 per month)',
                          'Patient introduction to financial concepts',
                          'Fueling financial curiosity in kids'
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:divide-x md:divide-white/30">
                  <div className="flex flex-col gap-4 pb-6 md:pb-0 border-b border-white/30 md:border-b-0 md:pr-6">
                    <h4 className="text-white font-poppins text-[22px] font-semibold" style={{
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.418px'
                    }}>
                      Location
                    </h4>
                    <p className="text-white font-poppins text-[22px] font-semibold" style={{
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.418px'
                    }}>
                      Online (LIVE sessions) Pan-India Participation
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 pb-6 md:pb-0 border-b border-white/30 md:border-b-0 md:px-6">
                    <h4 className="text-white font-poppins text-[22px] font-semibold" style={{
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.418px'
                    }}>
                      Session Duration
                    </h4>
                    <p className="text-white font-poppins text-[22px] font-semibold" style={{
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.418px'
                    }}>
                      1 Hour
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 md:pl-6">
                    <h4 className="text-white font-poppins text-[22px] font-semibold" style={{
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.418px'
                    }}>
                      Frequency
                    </h4>
                    <p className="text-white font-poppins text-[22px] font-semibold" style={{
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.418px'
                    }}>
                      Last Friday of Every Month 6 PM - 7 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img
        src="/effects/lightaqua.svg"
        alt="black transition"
        className="w-full block relative -top-8 z-20"
      />
    </>
  );
};

export default ClubDetailsSection;