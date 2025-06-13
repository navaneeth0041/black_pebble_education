import React from 'react';

const ClubDetailsSection = () => {
  return (
    <>
      <section className="pt-40 bg-[#E3FFF5] py-24  -mt-5 lg:-mt-30">
        <div className="flex flex-col items-center gap-8 px-8 lg:px-16">
          <h2 className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] bg-clip-text text-transparent font-['Mochiy_Pop_One'] text-[49px] font-normal leading-[149%] tracking-[-0.931px] text-center">
            Club Details
          </h2>
          
          {/* Container with extra padding to accommodate the decorative icons */}
          <div className="relative w-full max-w-6xl px-14 py-5 pb-50">
            <div className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] rounded-[23px] p-8 w-full shadow-lg relative overflow-visible">
              
              {/* Calendar Icon - Positioned within the padded area */}
              <div className="absolute -top-16 -left-12 w-32 h-32 lg:w-40 lg:h-40">
                <img 
                  src="./Finance_clubs/1/Group.svg" 
                  alt="Calendar" 
                  className="w-full h-full"
                />
              </div>
              
              {/* Coins Icon - Bottom Right, within padded area */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 lg:w-40 lg:h-40">
                <img 
                  src="./Finance_clubs/1/Clip path group.svg" 
                  alt="Coins" 
                  className="w-full h-full"
                />
              </div>
              
              <div className="flex items-center gap-6 mb-6 flex-wrap lg:flex-nowrap">
                <div className="flex flex-col items-start gap-3">
                  <h3 className="text-white font-poppins text-[22px] font-bold">
                    Offer Price
                  </h3>
                  <div className="text-white font-poppins leading-[107%] tracking-[-1.064px]">
                    <div className="text-[#7EF2D6] text-[47px] font-bold line-through mb-2">
                      ₹1200
                    </div>
                    <div className="text-[56px] pt-5 font-bold">
                      ₹100/month
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                  <h3 className="text-white font-poppins text-2xl font-bold">
                    What You Get:
                  </h3>
                  <div className="text-white font-poppins text-lg lg:text-2xl font-bold leading-[149%] space-y-2">
                    <div>• 12 interactive sessions (1 per month)</div>
                    <div>• Patient introduction to financial concepts</div>
                    <div>• Fueling financial curiosity in kids</div>
                  </div>
                </div>
              </div>
              
              <div className="w-full h-px bg-white mb-6"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-x-0 md:divide-x md:divide-white">
                <div className="flex flex-col gap-2 px-0 md:pr-6">
                  <h4 className="text-white font-poppins text-[22px] font-bold">
                    Location
                  </h4>
                  <p className="text-white font-poppins text-lg font-bold">
                    Online (LIVE sessions) Pan-India Participation
                  </p>
                </div>
                <div className="flex flex-col gap-2 px-0 md:px-6">
                  <h4 className="text-white font-poppins text-[22px] font-bold">
                    Session Duration
                  </h4>
                  <p className="text-white font-poppins text-lg font-bold">
                    1 Hour
                  </p>
                </div>
                <div className="flex flex-col gap-2 px-0 md:pl-6">
                  <h4 className="text-white font-poppins text-[22px] font-bold">
                    Frequency
                  </h4>
                  <p className="text-white font-poppins text-lg font-bold">
                    Last Friday of Every Month 6 PM - 7 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClubDetailsSection;