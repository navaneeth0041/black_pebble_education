import React from 'react';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

const PopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

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
      className={`${bgColor} rounded-2xl p-6 h-80 flex flex-col relative overflow-hidden w-full sm:w-[280px] md:w-[270px] min-w-[300px]`}
    >
      <div className="mb-4 w-12 h-12">
        <img
          src={iconSrc}
          alt={iconAlt}
          className="w-full h-full object-contain filter brightness-0 invert"
        />
      </div>
      <div className="flex flex-col h-full">
        <h3 className={`${titleColor} text-2xl font-bold mb-3 leading-tight`}>
          {title}
        </h3>
        <p className={`${descColor} py-2 text-base leading-relaxed flex-1`}>
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
      bgColor: "bg-[#F7C342]",
      iconSrc: "./home_page_assets/1/Group 25.svg",
      iconAlt: "Interactive Sessions Icon"
    },
    {
      title: "Non-Tech Training",
      description: "Kids & teens deserve a human connection. We don't use generalized apps or tech-based tools for learning. We provide instructor-led personalized training only.",
      bgColor: "bg-[#39BB9C]",
      iconSrc: "./home_page_assets/1/Group 26.svg",
      iconAlt: "Non-Tech Training Icon"
    },
    {
      title: "Independent of School Boards",
      description: "We don't follow any school curriculum or school board. Our content is 100% original. Our life experience and years of financial knowledge make our courses relevant for today's times.",
      bgColor: "bg-[#4598CA]",
      iconSrc: "./home_page_assets/1/Group 27.svg",
      iconAlt: "Independent of School Boards Icon"
    },
    {
      title: "LIVE Classes",
      description: "We don't pre-record our classes. All courses are delivered LIVE with complete engagement and real-time interactions. We follow a set timetable for convenient registrations to our classes.",
      bgColor: "bg-[#EF746C]",
      iconSrc: "./home_page_assets/1/Clip path group.svg",
      iconAlt: "LIVE Classes Icon"
    }
  ];

  return (
    <>
    <div className="min-h-[70vh] lg:min-h-screen  flex flex-col items-center justify-center sm:p-6 md:p-8 overflow-x-hidden relative z-10"
      style={{ background: 'linear-gradient(225deg, #D6FFE9 0%, #E6FFF9 77%, #ECECEC 100%)' }}>
      <div>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Side - Title and Piggy Bank */}
          <div className="flex-1 lg:max-w-md">
            <div className="relative h-40 sm:h-auto">
              {/* Piggy Bank Icon */}
              <div className="-top-20 left-35 w-25 h-25 lg:w-30 lg:h-30">
                <img
                  src="./home_page_assets/1/pig.png"
                  alt="Piggy Bank"
                  className="w-full h-full object-contain text-[#088F99]"
                />
              </div>

              {/* Main Title - Mobile on 2 lines */}
              <div className={`${PopOne.className} ml-0 lg:ml-12`}>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#39BB9C] leading-tight">
                  Making Finance
                </h1>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#39BB9C] leading-tight">
                  Simply Wonderful
                </h1>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards Grid */}
          <div className="w-full lg:flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-md md:max-w-none mx-auto  sm:p-10">
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
    <img
        src="/effects/littlegreen.png"
        alt="green transition"
        className='w-[120%] block relative -top-4  z-0'
        style={{ margin: 0, padding: 0, display: 'block' }}
      />
    
    </> 
  );
}