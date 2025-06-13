import React from 'react';

export default function ImpactPage() {
  return (
    <div className="min-h-[60vh] lg:min-h-9/10 bg-white py-4 md:p-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-6xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-1 lg:order-2 mb-8 lg:mb-0 py-8">
            <h1 className="text-[#035276] font-normal text-[32px] md:text-[45px] leading-[149%] tracking-[-0.855px] text-center lg:text-left"
                style={{ fontFamily: '"Mochiy Pop One", sans-serif' }}>
              The Impact Starts Early, and Lasts Forever
            </h1>
            
            <div className="hidden lg:block space-y-6 mt-8">
              <p className="text-[#035276] font-medium text-2xl leading-[149%] tracking-[-0.456px]" 
                 style={{ fontFamily: 'Poppins, sans-serif' }}>
                We promise impact, not through words but through our actions.
              </p>

              <p className="text-[#035276] font-medium text-2xl leading-[149%] tracking-[-0.456px]" 
                 style={{ fontFamily: 'Poppins, sans-serif' }}>
                We conduct impact assessments for every student and every course. Our{' '}
                <span className="text-[#FFC943] font-medium text-2xl leading-[149%] tracking-[-0.456px]" 
                      style={{ fontFamily: 'Poppins, sans-serif' }}>
                  rubrics-based assessment
                </span>{' '}
                evaluates your child's retention of the course material. We share the results with you to witness the difference in your child across 3 dimensions:
              </p>

              <div className="mt-22 flex justify-between items-stretch gap-4">
                {['Knowledge', 'Mindset', 'Behavior'].map((label, index) => (
                  <React.Fragment key={label}>
                    <div className="flex-1 text-center px-4">
                      <h3 className="text-[#035276] text-center font-medium text-2xl leading-[149%] tracking-[-0.456px]" 
                          style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Financial
                      </h3>
                      <p className="text-[#035276] text-center font-medium text-2xl leading-[149%] tracking-[-0.456px]" 
                         style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {label}
                      </p>
                    </div>
                    {index < 2 && <div className="w-0.5 bg-[#035276] mx-2" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1 relative min-h-[400px] lg:min-h-[600px] mb-8 lg:mb-0">
            <div className="absolute top-0 left-4 lg:left-0 w-26 h-26 lg:w-38 lg:h-38 rounded-lg flex items-center justify-center">
              <img
                src="/home_page_assets/6/Group.svg"
                alt="Calendar Icon"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-60 lg:w-[440px] lg:h-[320px] lg:top-[45%] rounded-lg flex items-center justify-center">
              <img
                src="/home_page_assets/6/Rubric%20-%202%201.svg"
                alt="Checklist Table Icon"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="absolute bottom-0 right-4 lg:right-auto lg:left-1/2 lg:transform lg:-translate-x-1/2 w-25 h-25 lg:w-38 lg:h-38 rounded-lg flex items-center justify-center">
              <img
                src="/home_page_assets/6/Clip%20path%20group.svg"
                alt="Hand Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="order-3 lg:hidden space-y-6">
            <p className="text-[#035276] font-medium text-lg leading-[149%] tracking-[-0.456px]" 
               style={{ fontFamily: 'Poppins, sans-serif' }}>
              We promise impact, not through words but through our actions.
            </p>

            <p className="text-[#035276] font-medium text-lg leading-[149%] tracking-[-0.456px]" 
               style={{ fontFamily: 'Poppins, sans-serif' }}>
              We conduct impact assessments for every student and every course. Our{' '}
              <span className="text-[#FFC943] font-medium text-lg leading-[149%] tracking-[-0.456px]" 
                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                rubrics-based assessment
              </span>{' '}
              evaluates your child's retention of the course material. We share the results with you to witness the difference in your child across 3 dimensions:
            </p>

            <div className="mt-8 flex justify-between items-stretch gap-2">
              {['Knowledge', 'Mindset', 'Behavior'].map((label, index) => (
                <React.Fragment key={label}>
                  <div className="flex-1 text-center px-2">
                    <h3 className="text-[#035276] font-medium text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Financial
                    </h3>
                    <p className="text-[#035276] font-medium text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {label}
                    </p>
                  </div>
                  {index < 2 && <div className="w-0.5 bg-[#035276] mx-1" />}
                </React.Fragment>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}