"use client";
import React from "react";

export default function MissionMethodModeSection() {
  return (
    <div className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="lg:flex-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/about/Parent_child.svg" 
                alt="Father and child learning about money together" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-400 mb-6 leading-tight">
              Our Mission, Method & Mode
            </h2>

            <div className="space-y-6 text-teal-400">
              <p className="text-lg leading-relaxed">
                Our mission is to cultivate a generation that is financially savvy and confident.
              </p>

              <p className="text-lg leading-relaxed">
                We break down complex money concepts into simple, relatable ideas that resonate with children. We provide age-appropriate resources that make financial education fun and accessible.
              </p>

              <p className="text-lg leading-relaxed">
                We incorporate stories, videos, and real-life scenarios to help young learners understand the importance of budgeting, saving, investing, and other financial concepts.
              </p>

              <p className="text-lg leading-relaxed">
                Our goal is to inspire curiosity and foster a positive attitude towards money, empowering children to take control of their financial futures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}