"use client";
import React from "react";

export default function CourseCurriculum() {
  const modules = [
    {
      id: 1,
      title: "Value of Money",
      description: "Understanding how money is earned, saved and spent - and why it matters.",
      bgColor: "bg-yellow-400",
      icon: "/Course_Design/1/Cash.svg" // Replace with your actual icon filename
    },
    {
      id: 2,
      title: "Relationship with Money", 
      description: "Developing a healthy attitude towards money.",
      bgColor: "bg-teal-400",
      icon: "/Course_Design/1/coin_bulb.svg" // Replace with your actual icon filename
    },
    {
      id: 3,
      title: "Budgeting",
      description: "Allocating money for needs and wants - and also saving.",
      bgColor: "bg-blue-400",
      icon: "/Course_Design/1/Calender.svg" // Replace with your actual icon filename
    },
    {
      id: 4,
      title: "Peer Pressure",
      description: "Developing resilience against peer demands - being financially strong.",
      bgColor: "bg-red-400",
      icon: "/Course_Design/1/Tossing_coing.svg" // Replace with your actual icon filename
    }
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Course Curriculum
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            What Your Child Will Learn
          </h2>
        </div>

        {/* Modules List */}
        <div className="max-w-2xl mx-auto space-y-6">
          {modules.map((module) => (
            <div key={module.id} className="flex gap-6 items-start">
              {/* Icon Box with Text and Icon */}
              <div className={`${module.bgColor} w-48 h-32 rounded-xl flex flex-col items-center justify-center flex-shrink-0 p-2`}>
                <img 
                  src={module.icon} 
                  alt={module.title}
                  className="w-20 h-20 mb-1 filter brightness-0 invert"
                />
                <div className="text-white font-bold text-center text-xs leading-tight">
                  {module.title}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-500 font-medium text-lg">Module {module.id}</span>
                  <span className="text-teal-500 font-bold text-lg">
                    {module.title}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}