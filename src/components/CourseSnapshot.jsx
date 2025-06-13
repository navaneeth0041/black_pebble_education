import React from 'react';

export default function CourseSnapshot() {
  return (
    <div className="bg-gradient-to-br from-teal-100 to-emerald-50 p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <img src="/Course_Design/1/Vector.svg" alt="Calendar" className="w-16 h-16" />
          <h1 className="text-5xl font-bold text-teal-600">Course Snapshot</h1>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Decorative coins - positioned absolutely on the right */}
          <div className="absolute right-8 top-8 flex flex-col gap-3">
            <img src="/Course_Design/1/Tosed_coin.svg" alt="Coin" className="w-20 h-20 opacity-60 transform rotate-12" />
            <img src="/assets/coin.png" alt="Coin" className="w-16 h-16 opacity-70 transform -rotate-12 ml-4" />
            <img src="/assets/coin.png" alt="Coin" className="w-14 h-14 opacity-50 transform rotate-45 -ml-2" />
            <img src="/assets/coin.png" alt="Coin" className="w-18 h-18 opacity-60 transform -rotate-30 ml-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Left Column - Pricing and Location */}
            <div className="space-y-12">
              {/* Pricing Section */}
              <div>
                <h2 className="text-3xl font-semibold mb-6">Offer Price</h2>
                <div className="space-y-2">
                  <div className="text-2xl line-through opacity-75">₹2499</div>
                  <div className="text-7xl font-bold">₹1799</div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="border-t border-white/30 my-8"></div>
              
              {/* Location Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Location</h3>
                <p className="text-xl">Online | Offline (Ahmedabad)</p>
              </div>
            </div>

            {/* Right Column - Course Details */}
            <div className="space-y-12">
              {/* Course Format */}
              <div>
                <h2 className="text-3xl font-semibold mb-8">Course Format</h2>
                <ul className="space-y-4 text-xl">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    Videos & Conversations
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    Real-life Examples
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    Quizzes
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    Team Project & Role-play
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    Infographic Takeaway Notes
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    Certificate of Participation
                  </li>
                </ul>
              </div>

              {/* Session Duration */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Session Duration</h3>
                <p className="text-xl">2 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}