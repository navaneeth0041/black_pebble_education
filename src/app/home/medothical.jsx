'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, FileText, Phone, Target, Star, BookOpen } from 'lucide-react';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';
import FlexibleInfoCard from '@/components/methodicalcomponent';

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

const MethodicalApproach = () => {
  return (
    <div className="w-full min-h-screen py-16 px-6" style={{ backgroundColor: '#F3FFF9' }}>
      <div className="mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className={`${mochiyPopOne.className} text-4xl md:text-5xl font-bold text-[#09BE9D] mb-4 font-[mochiy]`} style={{ fontSize: '4vw', lineHeight: '8vh' }}>
            Our Methodical Approach
          </h2>
          <p className={` ${poppins.className} text-xl text-black font-medium`} style={{ fontSize: '3vmin', lineHeight: '6vh' }}>
            THE COURSE DELIVERY VALUE CHAIN
          </p>
        </div>
        <div className='flex flex-row gap-8 flex-wrap'>
            <FlexibleInfoCard 
            numberIcon="/home_page_assets/7/n01.svg"
            mainIcon="/home_page_assets/7/doc.svg"
            headline="Request for Information"
            description="You can call us or WhatsApp us for course requests"
            bgColor="bg-[#39BB9C]"
            />
            <FlexibleInfoCard 
            numberIcon="/home_page_assets/7/n07.svg"
            mainIcon="/home_page_assets/7/filter.svg"
            headline="Impact Assessment"
            description="We evaluate the impact of the course on your child"
            bgColor="bg-[#45CA93]"
            />
        </div>
      </div>
    </div>
  );
};

export default MethodicalApproach;