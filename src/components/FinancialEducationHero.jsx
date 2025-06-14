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
    <div className="bg-gradient-to-br from-teal-100 to-emerald-50 p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className={`text-teal-600 ${mochiyPopOne.className}`} style={{
            textAlign: 'center',
            fontSize: '49px',
            fontWeight: 400,
            lineHeight: '149%',
            letterSpacing: '-0.931px'
          }}>Course Snapshot</h1>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Decorative coins - positioned absolutely on the right */}
          <div className="absolute right-8 top-8 flex flex-col gap-3">
            <div className="w-20 h-20 bg-yellow-400 rounded-full opacity-60 transform rotate-12 shadow-lg"></div>
            <div className="w-16 h-16 bg-yellow-300 rounded-full opacity-70 transform -rotate-12 ml-4 shadow-lg"></div>
            <div className="w-14 h-14 bg-yellow-200 rounded-full opacity-50 transform rotate-45 -ml-2 shadow-lg"></div>
            <div className="w-18 h-18 bg-yellow-400 rounded-full opacity-60 transform -rotate-30 ml-6 shadow-lg"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Left Column - Pricing and Location */}
            <div className="space-y-12">
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
              <div className="border-t border-white/30 my-8"></div>
              
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
            <div className="space-y-12">
              {/* Course Format */}
              <div>
                <h2 className={`text-white mb-8 ${poppins.className}`} style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '149%',
                  letterSpacing: '-0.456px'
                }}>Course Format</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    <span className={`text-white ${poppins.className}`} style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.418px'
                    }}>Videos & Conversations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    <span className={`text-white ${poppins.className}`} style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.418px'
                    }}>Real-life Examples</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    <span className={`text-white ${poppins.className}`} style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.418px'
                    }}>Quizzes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    <span className={`text-white ${poppins.className}`} style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.418px'
                    }}>Team Project & Role-play</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    <span className={`text-white ${poppins.className}`} style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.418px'
                    }}>Infographic Takeaway Notes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    <span className={`text-white ${poppins.className}`} style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      lineHeight: '149%',
                      letterSpacing: '-0.418px'
                    }}>Certificate of Participation</span>
                  </li>
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