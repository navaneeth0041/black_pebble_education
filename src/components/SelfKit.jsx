import React from "react";
// import Navigation from "@/components/Navigation";
import { Card, Button } from './ui/components.jsx';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

const mochiyPopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const SelfHelpKits = ({ 
  // Smart Money Concepts Section Props
  smartMoneyConcepts = {
    description:"A self-help kit designed to empower children with essential financial skills and knowledge, fostering independence and confidence in managing money.",
    conceptsCount: 7,
    title: "Smart Money Concepts Made Simple",
    backgroundImage: "/self_help_kit/4/Circle_thread.svg",
    concepts: [
      { id: 1, title: "What is an Asset?", icon: "/self_help_kit/4/coin1.svg" },
      { id: 2, title: "What is net worth?", icon: "/self_help_kit/4/coin2.svg" },
      { id: 3, title: "Difference between income & wealth", icon: "/self_help_kit/4/coin3.svg" },
      { id: 4, title: "Interest & Compound Interest", icon: "/self_help_kit/4/coin4.svg" },
      { id: 5, title: "Power of Compounding", icon: "/self_help_kit/4/coin5.svg" },
      { id: 6, title: "Investments & Returns", icon: "/self_help_kit/4/coin6.svg" },
      { id: 7, title: "Why do people use debt?", icon: "/self_help_kit/4/coin7.svg" }
    ],
    showPricing: true,
    pricingData: {
      originalPrice: "₹2499",
      currentPrice: "₹1799",
      description: "Invest in your child's growth with 49+ guided resources-"
    },
    enthusiastText: "Money Enthusiasts",  
  }
}) => {
  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
<section className="bg-[#343434] text-white h-[70vh] relative overflow-hidden flex items-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 w-full">
    <div className="text-center lg:text-left">
      {/* Use flex with items-start to align icon with top of text */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 mb-8 sm:mb-6">
        <h1 className={`${mochiyPopOne.className} text-2xl sm:text-4xl md:text-4xl lg:text-7xl leading-snug tracking-tight text-left text-white mb-2 sm:mb-4 max-w-5xl`}>
          Learn. Play. Grow —<br />
          <span className="text-white">At Your Own Pace!</span>
        </h1>
        {/* Icon aligned with the second line of text */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 flex-shrink-0 hidden sm:block lg:mt-12 xl:mt-16">
          <img
            src="/self_help_kit/1/graph.svg"
            alt="Graph image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      <p className="mt-4 mb-8 sm:mb-6 text-[16px] xs:text-[17px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[24px] leading-[1.4] tracking-[-0.3px] text-gray-300 text-center lg:text-left font-medium font-poppins">
        {smartMoneyConcepts.description}
      </p>
      
      <div className="mt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
        <div className="relative group w-full sm:w-auto">
          <button 
            className="bg-gradient-to-r from-[#08A69A] via-[#0ABE9D] to-[#69C9A1] hover:bg-teal-600 text-white w-full sm:w-auto text-xs sm:text-sm md:text-base px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-medium transition-all duration-200"
          >
            Call Us to Order Your Kit
          </button>
          {/* Phone number tooltip */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-5 py-3 bg-gray-800 text-white text-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap min-w-[75%] w-max">
            +91-8928557529
            {/* Arrow pointing up */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<img 
  src="/effects/black.png" 
  alt="black transition" 
  className="w-full block z-20 relative -top-8" 
/>


      {/* What's Inside Section */}
    <section className="flex flex-col items-center gap-8 py-16 px-8 pt-40 -mt-5 lg:-mt-18">
      <h2 className="text-[#39BB9C] font-['Mochiy_Pop_One'] text-[49px] font-normal leading-[149%] tracking-[-0.931px] text-center">
        What's Inside a Self-Help Kit?
      </h2>
      
      {/* <div className="relative w-full max-w-4xl h-96 bg-[#EBEBEB] border-3 border-[#BBB] rounded-2xl flex items-center justify-center overflow-hidden"> */}
        {/* Video thumbnail image */}
        {/* <img 
          src="/self_help_kit/frame.svg" 
          alt="Self-help kit video preview" 
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        
        {/* Play button overlay */}
        {/* <button className="relative bg-white/34 rounded-[37px] flex items-center gap-3 px-6 py-4 hover:bg-white/40 transition-colors z-10">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M16.875 8.99992C16.8755 9.19091 16.8265 9.37877 16.7329 9.54523C16.6392 9.71168 16.5041 9.85108 16.3406 9.94985L6.21 16.1472C6.0392 16.2518 5.84358 16.3089 5.64334 16.3126C5.44309 16.3163 5.24549 16.2665 5.07094 16.1683C4.89805 16.0716 4.75402 15.9306 4.65368 15.7599C4.55333 15.5891 4.50029 15.3946 4.5 15.1966V2.80328C4.50029 2.6052 4.55333 2.41077 4.65368 2.23999C4.75402 2.06921 4.89805 1.92823 5.07094 1.83156C5.24549 1.73337 5.44309 1.68356 5.64334 1.68727C5.84358 1.69097 6.0392 1.74807 6.21 1.85266L16.3406 8.05C16.5041 8.14877 16.6392 8.28816 16.7329 8.45462C16.8265 8.62108 16.8755 8.80894 16.875 8.99992Z"
                fill="black"
              />
            </svg>
          </div>
          <span className="text-white font-inter text-base font-medium">
            Play Video
          </span>
        </button> */}
      {/* </div> */}
      
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-4xl">
        <div className="bg-[#F7C342] rounded-[22px] p-6 flex flex-col items-center justify-center h-40">
          <img 
            src="/self_help_kit/note1.svg" 
            alt="Concept notes" 
            className="w-16 h-12 mb-4"
          />
          <span className="text-white font-poppins text-lg font-semibold text-center">
            21 Concept Notes
          </span>
        </div>
        
        <div className="bg-[#39BB9C] rounded-[22px] p-6 flex flex-col items-center justify-center h-40">
          <img 
            src="/self_help_kit/note2.svg" 
            alt="Worksheets" 
            className="w-16 h-12 mb-4"
          />
          <span className="text-white font-poppins text-lg font-semibold text-center">
            14 Worksheets
          </span>
        </div>
        
        <div className="bg-[#4598CA] rounded-[22px] p-6 flex flex-col items-center justify-center h-40">
          <img 
            src="/self_help_kit/note3.svg" 
            alt="Exercises" 
            className="w-16 h-12 mb-4"
          />
          <span className="text-white font-poppins text-lg font-semibold text-center">
            7 Exercises
          </span>
        </div>
        
        <div className="bg-[#EF746C] rounded-[22px] p-6 flex flex-col items-center justify-center h-40">
          <img 
            src="/self_help_kit/note4.svg" 
            alt="Self evaluations" 
            className="w-16 h-12 mb-4"
          />
          <span className="text-white font-poppins text-lg font-semibold text-center">
            7 Self-evaluations
          </span>
        </div>
      </div>
    </section>
    <img 
  src="/effects/white.png" 
  alt="black transition" 
  className="w-full block -top-7 z-20 relative" 
/>

      {/* Who is This For Section */}
<section className="relative bg-[#E1FFF4] sm:py-24 overflow-hidden pt-40 -mt-5 lg:-mt-22">
  <img
    src="/self_help_kit/3/thread.svg"
    alt="Thread Illustration"
    className="absolute top-0 left-20 sm:left-32 md:left-48 lg:left-60 w-68 sm:w-78 lg:w-112 opacity-90 pointer-events-none select-none pt-12" 
  />

  {/* Main Content */}
  <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-6 sm:px-12 lg:px-24 z-10 pt-20 relative">
    {/* Left Side */}
    <div className="flex flex-col items-start gap-4 sm:gap-5 max-w-md text-left">
      <h2 className="text-[#39BB9C] font-['Mochiy_Pop_One'] text-3xl sm:text-4xl lg:text-[48px] font-normal leading-snug tracking-tight">
        Who is This For?
      </h2>
      <p className="text-[#39BB9C] font-poppins text-lg sm:text-xl lg:text-2xl font-medium leading-snug tracking-tight">
        Perfect for children who enjoy independent learning, and parents seeking structured yet flexible tools.
      </p>
    </div>

    {/* Right Side - Cards */}
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <Card className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] rounded-[52px] p-6 w-72 sm:w-80 h-56 flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <span className="text-white font-poppins text-3xl sm:text-4xl font-medium leading-snug tracking-tight">
            10+
            <br />
            year old's
          </span>
        </div>
        <div className="flex items-center justify-center w-24 h-24">
          <img
            src="/self_help_kit/1/boy.svg"
            alt="Boy Icon"
            className="w-20 h-auto"
          />
        </div>
      </Card>

      <Card className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] rounded-[52px] p-6 w-72 sm:w-80 h-56 flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <span className="text-white font-poppins text-2xl sm:text-3xl font-medium leading-snug tracking-tight">
            {smartMoneyConcepts?.enthusiastText || "Money Enthusiasts"}
          </span>
        </div>
        <div className="flex items-center justify-center w-24 h-24">
          <img
            src="/self_help_kit/1/bulb_coin.svg"
            alt="Money Icon"
            className="w-20 h-auto"
          />
        </div>
      </Card>
    </div>
  </div>
</section>
<img 
  src="/effects/lightaqua.svg" 
  alt="black transition" 
  className="w-full block -top-8 z-0 relative" 
/>


      {/* Why Self-Help Kits Work Section */}
<section className="bg-[#343434] py-16 sm:py-20 lg:py-24 -mt-5 lg:-mt-30">
 <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-8 lg:px-32 max-w-7xl mx-auto">
{/* Left side - Title and subtitle */}
<div className="flex flex-col items-start gap-5 max-w-lg">
<h2 className="text-white font-['Mochiy_Pop_One'] text-3xl sm:text-4xl lg:text-[40px] font-normal leading-snug tracking-tight">
 Why Self-Help Kits Work?
</h2>
{/* Subtitle with image */}
<div className="flex items-center gap-2">
<div className="flex flex-col">
<span className="text-white font-poppins text-lg sm:text-xl lg:text-2xl font-medium leading-snug">
 Benefits of using self
</span>
<span className="text-white font-poppins text-lg sm:text-xl lg:text-2xl font-medium leading-snug">
 help kits
</span>
</div>
<img
src="/self_help_kit/3/money.svg"
alt="Money icon"
className="w-20 sm:w-24 md:w-28 lg:w-30 xl:w-32 h-auto ml-1"
/>
</div>
</div>
{/* Right side - Benefits list */}
<div className="flex flex-col items-center justify-center gap-6 w-full lg:w-auto">
  <div className="flex flex-col gap-4 sm:gap-6">
    {[
      "Builds financial confidence",
      "Encourages independent thinking",
      "Easy-to-follow structure",
      "No screen time needed",
      "Parent-guided or self-led"
    ].map((text, idx) => (
      <div key={idx} className="flex items-center gap-3">
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          className="min-w-[23px]"
        >
          <path
            d="M2.5 9.98975C4.66667 14.8231 9.8 22.6897 13 15.4897L20.5 0.989746"
            stroke="#39BB9C"
            strokeWidth="4"
          />
        </svg>
        <span className="text-white font-poppins text-base sm:text-lg lg:text-2xl font-bold leading-relaxed tracking-tight">
          {text}
        </span>
      </div>
    ))}
  </div>
</div>
</div>
</section>
<img 
  src="/effects/black.png" 
  alt="black transition" 
  className="w-full block -top-8 z-20 relative" 
/>



  <section className="bg-gradient-to-b from-[#E5FFF7] to-[#D5FFE8] py-16 md:py-24 relative overflow-hidden -mt-5 lg:-mt-22">
    {/* Circular Thread Background in bottom-left */}
    <img
      src={smartMoneyConcepts.backgroundImage}
      alt="Circular Thread"
      className="absolute bottom-20 left-2 w-52 sm:w-64 md:w-96 h-auto object-cover pointer-events-none"
    />

    <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto relative z-10">
      {/* Title Section */}
      <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
        <span className="text-[#08AA9B] font-['Mochiy_Pop_One'] text-[100px] sm:text-[140px] md:text-[180px] font-normal leading-none tracking-[-1.5px] md:tracking-[-3.4px]">
          {smartMoneyConcepts.conceptsCount}
        </span>
        <h2 className="text-[#08B09B] font-['Mochiy_Pop_One'] text-[28px] sm:text-[32px] md:text-[38px] font-normal leading-tight max-w-[300px] tracking-[-0.5px] md:tracking-[-0.72px]">
          {smartMoneyConcepts.title}
        </h2>
      </div>

      {/* Concepts Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative md:ml-12">
        <div className="flex flex-col gap-6">
          {smartMoneyConcepts.concepts.slice(0, 4).map((concept) => (
            <Card key={concept.id} className="bg-white rounded-3xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-32 relative border border-gray-100">
              <img
                src={concept.icon}
                alt={`Icon ${concept.id}`}
                className="absolute -left-6 sm:-left-8 top-0 w-18 sm:w-16 h-12 sm:h-16 transform -rotate-12"
              />
              <span className="text-[#09BE9D] font-['Poppins'] font-semibold text-base sm:text-lg text-center leading-tight">
                {concept.title}
              </span>
            </Card>
          ))}
        </div>

        <div className="flex flex-col gap-6 pt-8 sm:pt-16">
          {smartMoneyConcepts.concepts.slice(4).map((concept) => (
            <Card key={concept.id} className="bg-white rounded-3xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-32 relative border border-gray-100">
              <img
                src={concept.icon}
                alt={`Icon ${concept.id}`}
                className="absolute -left-6 sm:-left-8 top-0 w-12 sm:w-16 h-12 sm:h-16 transform -rotate-12"
              />
              <span className="text-[#09BE9D] font-['Poppins'] font-semibold text-base sm:text-lg text-center leading-tight">
                {concept.title}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </div>

    {/* Pricing CTA */}
  {/* Pricing CTA */}
  {/* Pricing CTA */}
  {smartMoneyConcepts.showPricing && (
    <div className="mt-16 md:mt-20 pb-16 md:pb-20 relative flex justify-center px-4">
      <div className="w-full max-w-4xl bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] rounded-2xl p-6 sm:p-8 md:p-10 relative">
        
        {/* Description Box - Expanded */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 text-center relative w-full max-w-none mx-4">
            <p className="text-white font-['Poppins'] font-medium text-lg sm:text-2xl md:text-4xl break-words">
              {smartMoneyConcepts.pricingData.description}
            </p>
          </div>
        </div>

        {/* Pricing Rows - Expanded */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center px-4 py-4 md:py-6">
          {/* Row 1 (Always): All for just */}
          <span className="text-white font-['Poppins'] font-semibold text-2xl sm:text-3xl md:text-4xl">
            All for just
          </span>

          {/* Row 2 (mobile-only): current + original */}
          <div className="flex md:hidden items-center justify-center">
            {/* Current Price */}
            <div className="relative">
              <img
                src="/self_help_kit/4/Vector 32.svg"
                alt="Price Box"
                className="w-28 h-auto"
              />
              <span className="absolute inset-0 flex items-center justify-center font-['Poppins'] font-bold text-xl text-white">
                {smartMoneyConcepts.pricingData.currentPrice}
              </span>
            </div>
            {/* Original */}
            <span className="text-white/70 font-['Poppins'] text-lg line-through">
              {smartMoneyConcepts.pricingData.originalPrice}
            </span>
          </div>

          {/* Row 2 (desktop-only): all in one line */}
          <div className="hidden md:flex items-center ">
            {/* Current Price */}
            <div className="relative">
              <img
                src="/self_help_kit/4/Vector 32.svg"
                alt="Price Box"
                className="w-36 h-auto"
              />
              <span className="absolute inset-0 flex items-center justify-center font-['Poppins'] font-extrabold text-3xl md:text-5xl text-white">
                {smartMoneyConcepts.pricingData.currentPrice}
              </span>
            </div>
            {/* Original */}
            <span className="text-white/70 font-['Poppins'] text-2xl sm:text-3xl md:text-4xl line-through">
              {smartMoneyConcepts.pricingData.originalPrice}
            </span>
          </div>
        </div>

        {/* Coins */}
        <img
          src="/Finance_clubs/1/whitecoins.svg"
          alt="White Coins"
          className="absolute -right-4 bottom-2 w-20 sm:w-36 h-auto"
        />
      </div>
    </div>
  )}

  </section>
  </div>
  <img 
  src="/effects/littlegreen.png" 
  alt="black transition" 
  className="w-full block -top-8 z-20 relative" 
/>
</>
  
  );
};

export default SelfHelpKits;