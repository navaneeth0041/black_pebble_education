import React from 'react';

const ComparisonPage = () => {
  const comparisonData = [
    {
      feature: "Collaborative & Creative Course Delivery",
      blackPebble: true,
      otherPrograms: false
    },
    {
      feature: "Competitive & Academic Approach",
      blackPebble: false,
      otherPrograms: true
    },
    {
      feature: "Exhaustive List of Courses",
      blackPebble: true,
      otherPrograms: false
    },
    {
      feature: "Textbook-based",
      blackPebble: false,
      otherPrograms: true
    }
  ];

  const CheckIcon = () => (
    <img 
      src="./home_page_assets/4/icons8-check-48 1.svg" 
      alt="Check" 
      className="w-10 h-10 md:w-12 md:h-12"
    />
  );

  const CrossIcon = () => (
    <img 
      src="./home_page_assets/4/icons8-cross-94 6.svg" 
      alt="Cross" 
      className="w-10 h-10 md:w-12 md:h-12"
    />
  );

const CoinIcon = ({ className }) => (
  <img 
    src="./home_page_assets/Clip path group.svg" 
    alt="Coin" 
    className={`w-16 h-16 md:w-24 md:h-24 ${className}`}  
  />
);


  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center items-center gap-6 mb-6">
            <CoinIcon className="" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-teal-600 leading-tight">
              Not Just Another Money Class
            </h1>
          </div>
        </div>

        {/* Comparison Header Row */}
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div></div>
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-bold text-teal-600 mb-1">
                Black Pebble
              </h2>
              <h2 className="text-lg md:text-xl font-bold text-teal-600 mb-1">
                Education
              </h2>
            </div>
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-bold text-black-600 mb-1">
                Other Finance
              </h2>
              <h2 className="text-lg md:text-xl font-bold text-black-600 mb-1">
                Programs
              </h2>
            </div>
          </div>
        </div>

        {/* Feature Rows */}
        <div className="space-y-3 md:space-y-4">
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="grid grid-cols-3 gap-4 md:gap-8 items-center">
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-relaxed">
                    {item.feature}
                  </h3>
                </div>
                <div className="flex justify-center">
                  {item.blackPebble ? <CheckIcon /> : <CrossIcon />}
                </div>
                <div className="flex justify-center">
                  {item.otherPrograms ? <CheckIcon /> : <CrossIcon />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
