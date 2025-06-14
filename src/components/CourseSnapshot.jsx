import React from 'react';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

const mochiyPopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function CourseSnapshot() {
  return (
    <div className="bg-gradient-to-br from-teal-100 to-emerald-50 p-4 sm:p-6 lg:p-8 min-h-screen">
      <div className="max-w-7xl mx-auto my-8 sm:my-12 lg:my-20">
        {/* Header */}
        <div className="flex justify-center mb-4 sm:mb-6 lg:mb-0">
          <h1 className={`text-teal-600 text-[32px] sm:text-4xl lg:text-[49px] ${mochiyPopOne.className}`} style={{
            textAlign: 'center',
            fontWeight: 400,
            letterSpacing: '-0.931px'
          }}>
            Course Snapshot
          </h1>
        </div>

        {/* Calendar Icon - Responsive positioning and sizing */}
        <div className="relative -left-8 top-4 z-0 sm:-left-16 sm:top-8 lg:-left-28 lg:top-28">
          <img
            src="/Finance_clubs/1/Group.svg"
            alt="Calendar"
            className="w-[90px] h-[100px] sm:w-[180px] sm:h-[200px] lg:w-[260px] lg:h-[280px]"
          />
        </div>

        {/* Main Card */}
        <div 
          className="p-6 sm:p-8 md:p-12 lg:p-16 text-white relative z-10 overflow-visible rounded-lg sm:rounded-xl lg:rounded-[23px] border border-gray-300"
          style={{
            background: 'linear-gradient(70deg, #088F99 -34.18%, #09BE9D 43.07%, #7ECCA2 80.1%)',
            minHeight: '400px'
          }}
        >
          {/* Decorative coins - Responsive positioning and sizing */}
          <div className="absolute -right-16 bottom-2 z-0 sm:-right-24 sm:bottom-3 lg:-right-40 lg:bottom-5">
            <img
              src="/Finance_clubs/1/Clip path group.svg"
              alt="Decorative Coins"
              className="w-[140px] h-[130px] sm:w-[200px] sm:h-[190px] lg:w-[320px] lg:h-[300px] transform rotate-12"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 relative z-10">
            {/* Left Column - Pricing and Location */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {/* Pricing Section */}
              <div>
                <h2 className={`text-white mb-6 ${poppins.className}`} style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '149%',
                  letterSpacing: '-0.456px'
                }}>Offer Price</h2>
                <div className="space-y-2">
                  <div className={poppins.className} style={{
                    color: '#B5FFE5',
                    fontSize: '47px',
                    fontWeight: 600,
                    lineHeight: '107%',
                    letterSpacing: '-0.893px',
                    textDecorationLine: 'line-through'
                  }}>₹2499</div>
                  <div className={poppins.className} style={{
                    color: '#FFF',
                    fontSize: '68px',
                    fontWeight: 600,
                    lineHeight: '107%',
                    letterSpacing: '-1.292px'
                  }}>₹1799</div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="border-t border-white/30 my-4 sm:my-6 lg:my-8"></div>
              
              {/* Location Section */}
              <div>
                <h3 className={`text-white mb-4 ${poppins.className}`} style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '149%',
                  letterSpacing: '-0.418px'
                }}>Location</h3>
                <p className={`text-white ${poppins.className}`} style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '149%',
                  letterSpacing: '-0.418px'
                }}>Online | Offline (Ahmedabad)</p>
              </div>
            </div>

            {/* Right Column - Course Details */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {/* Course Format */}
              <div>
                <h2 className={`text-white mb-8 ${poppins.className}`} style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '149%',
                  letterSpacing: '-0.456px'
                }}>Course Format</h2>
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
                      <span className={`text-white ${poppins.className}`} style={{
                        fontSize: '22px',
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

              {/* Session Duration */}
              <div>
                <h3 className={`text-white mb-4 ${poppins.className}`} style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '149%',
                  letterSpacing: '-0.418px'
                }}>Session Duration</h3>
                <p className={`text-white ${poppins.className}`} style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '149%',
                  letterSpacing: '-0.418px'
                }}>2 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}