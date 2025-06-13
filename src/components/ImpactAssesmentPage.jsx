import React from 'react';

const ImpactAssessmentPage = () => {
  const CalendarIcon = () => (
    <img
      src="./home_page_assets/6/Group.svg"
      alt="Calendar"
      className="w-24 h-24 md:w-32 md:h-32"
    />
  );

  const CoinIcon = () => (
    <img
      src="./home_page_assets/6/Clip path group.svg"
      alt="Coin Stack"
      className="w-24 h-24 md:w-32 md:h-32"
    />
  );

  const ChecklistIcon = () => (
    <img
      src="./home_page_assets/6/Rubric - 2 1.svg"
      alt="Checklist"
      className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual Elements */}
          <div className="relative flex justify-center items-center min-h-[500px]">
            {/* Main Checklist Visual with positioned icons */}
            <div className="relative">
              {/* Calendar Icon - Top Left of Checklist */}
              <div className="absolute top--10 left-0 -translate-x-1/3 -translate-y-1/3">
                <CalendarIcon />
              </div>

              {/* Checklist */}
              <ChecklistIcon />

              {/* Coin Icon - Bottom Middle of Checklist */}
              <div className="absolute bottom--5 left-1/2 translate-x-[-50%] translate-y-1/3">
                <CoinIcon />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main Heading */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 leading-tight mb-2">
                The Impact Starts Early
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 leading-tight mb-6">
                and Lasts Forever
              </h1>

              <p className="text-xl md:text-2xl text-blue-700 font-medium leading-relaxed">
                We promise impact, not through words but through our actions.
              </p>
            </div>

            {/* Assessment Description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-blue-800 leading-relaxed">
                We conduct impact assessments for every student and every course. Our{' '}
                <span className="font-semibold text-yellow-500">Rubrics-based assessment</span>{' '}
                evaluates your child's retention of the course material. We share the results with you to witness the difference in your child across 3 dimensions:
              </p>
            </div>

            {/* Three Dimensions */}
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-8 md:gap-12 mt-12">
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-blue-800">Financial</h3>
                <h4 className="text-xl md:text-2xl font-bold text-blue-800">Knowledge</h4>
              </div>

              <div className="w-px h-16 bg-blue-400 hidden md:block"></div>

              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-blue-800">Financial</h3>
                <h4 className="text-xl md:text-2xl font-bold text-blue-800">Mindset</h4>
              </div>

              <div className="w-px h-16 bg-blue-400 hidden md:block"></div>

              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-blue-800">Financial</h3>
                <h4 className="text-xl md:text-2xl font-bold text-blue-800">Behavior</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactAssessmentPage;
