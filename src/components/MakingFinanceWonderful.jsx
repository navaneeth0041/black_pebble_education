import React from 'react';

// Reusable Feature Card Component
const FeatureCard = ({ 
  title, 
  description, 
  bgColor, 
  iconSrc, 
  iconAlt,
  titleColor = "text-white",
  descColor = "text-white/90"
}) => {
  return (
<div 
  className={`${bgColor} rounded-2xl p-6 h-80 flex flex-col relative overflow-hidden`}
  style={{ minHeight: '320px' }}
>

      {/* Icon */}
      <div className="mb-4 w-12 h-12">
        <img
          src={iconSrc}
          alt={iconAlt}
          className="w-full h-full object-contain filter brightness-0 invert"
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col h-full">
        <h3 className={`${titleColor} text-lg font-semibold mb-3 leading-tight`}>
          {title}
        </h3>
        <p className={`${descColor} text-sm leading-relaxed flex-1`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default function MakingFinanceWonderful() {
  const features = [
    {
      title: "Interactive Sessions",
      description: "We indulge in conversations. Our experts ensure includes storytelling, group discussion, role-playing activities and young children. No boring textbooks.",
      bgColor: "bg-amber-400",
      iconSrc: "./home_page_assets/1/Group 25.svg", 
      iconAlt: "Interactive Sessions Icon"
    },
    {
      title: "Non-Tech Training",
      description: "Kids & teens deserve a human connection. We don't use generalized apps or tech-based tools for learning. We provide instructor-led personalized training only.",
      bgColor: "bg-emerald-400",
      iconSrc: "./home_page_assets/1/Group 26.svg", 
      iconAlt: "Non-Tech Training Icon"
    },
    {
      title: "Independent of School Boards",
      description: "We don't follow any school curriculum or school board. Our content is 100% original. Our life experience and years of financial knowledge make our courses relevant for today's times.",
      bgColor: "bg-blue-500",
      iconSrc: "./home_page_assets/1/Group 27.svg", 
      iconAlt: "Independent of School Boards Icon"
    },
    {
      title: "LIVE Classes",
      description: "We don't pre-record our classes. All courses are delivered LIVE with complete engagement and real-time interactions. We follow a set timetable for convenient registrations to our classes.",
      bgColor: "bg-red-400",
      iconSrc: "./home_page_assets/1/Clip path group.svg", 
      iconAlt: "LIVE Classes Icon"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Side - Title and Piggy Bank */}
          <div className="flex-1 lg:max-w-md">
            <div className="relative">
              {/* Piggy Bank Icon */}
              <div className="absolute -top-20 left-9 w-16 h-16 lg:w-25 lg:h-25">
                <img
                  src="./home_page_assets/1/Clip path group-1.svg" 
                  alt="Piggy Bank"
                  className="w-full h-full object-contain text-teal-500"
                />
              </div>
              
              {/* Main Title */}
              <div className="ml-8 lg:ml-12">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-500 leading-tight">
                  Making
                </h1>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-500 leading-tight">
                  Finance
                </h1>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-500 leading-tight">
                  Simply
                </h1>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-500 leading-tight">
                  Wonderful
                </h1>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards Grid */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  bgColor={feature.bgColor}
                  iconSrc={feature.iconSrc}
                  iconAlt={feature.iconAlt}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}