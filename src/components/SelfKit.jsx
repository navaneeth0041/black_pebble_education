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
    }
  }
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#343434] min-h-[572px] relative overflow-hidden">
        {/* Navigation */}
        {/*<Navigation variant="inline" />*/}

        {/* Hero Content */}
         <div className="bg-[#343434] lg:min-h-[30vh] text-white py-8 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center lg:text-left">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${mochiyPopOne.className}`}>
            Learn. Play. Grow — 
At Your Own Pace!
          </h1>
          <p className={`mt-4 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed ${poppins.className}`}>
            {smartMoneyConcepts.description}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-repeat-x bg-[url('/')]"></div> 
      {/* Someone need to add the vector here */}
    </div>
      </section>

      {/* What's Inside Section */}
    <section className="flex flex-col items-center gap-8 py-16 px-8">
      <h2 className="text-[#39BB9C] font-['Mochiy_Pop_One'] text-[49px] font-normal leading-[149%] tracking-[-0.931px] text-center">
        What's Inside a Self-Help Kit?
      </h2>
      
      {/* Video Preview */}
      <div className="relative w-full max-w-4xl h-96 bg-[#EBEBEB] border-3 border-[#BBB] rounded-2xl flex items-center justify-center overflow-hidden">
        {/* Video thumbnail image */}
        <img 
          src="/self_help_kit/frame.svg" 
          alt="Self-help kit video preview" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Play button overlay */}
        <button className="relative bg-white/34 rounded-[37px] flex items-center gap-3 px-6 py-4 hover:bg-white/40 transition-colors z-10">
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
        </button>
      </div>
      
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-4xl">
        <div className="bg-[#F7C342] rounded-[22px] p-6 flex flex-col items-center justify-center h-40">
          <img 
            src="/self_help_kit/note1.svg" 
            alt="Concept notes" 
            className="w-16 h-12 mb-4"
          />
          <span className="text-white font-poppins text-lg font-semibold text-center">
            31 Concept Notes
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

      {/* Who is This For Section */}
<section className="bg-[#E1FFF4] py-24">
  <div className="flex items-center justify-center gap-16 px-24">
    <div className="flex flex-col items-start gap-5 max-w-md">
      <h2 className="text-[#39BB9C] font-['Mochiy_Pop_One'] text-[48px] font-normal leading-[149%] tracking-[-0.912px]">
        Who is This For?
      </h2>
      <p className="text-[#39BB9C] font-poppins text-2xl font-medium leading-[149%] tracking-[-0.456px]">
        Perfect for children who enjoy independent learning, and parents
        seeking structured yet flexible tools.
      </p>
    </div>
    <div className="flex items-center gap-6">
      <Card className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] rounded-2xl p-6 w-80 h-56 flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <span className="text-white font-poppins text-4xl font-medium leading-[149%] tracking-[-0.019em]">
            10+
            <br />
            year old's
          </span>
        </div>
        <div className="flex items-center justify-center w-16 h-16">
          <img
            src="/self_help_kit/1/boy.svg"
            alt="Student Icon"
            className="w-10 h-10"
          />
        </div>
      </Card>

      <Card className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] rounded-2xl p-6 w-80 h-56 flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <span className="text-white font-poppins text-3xl font-medium leading-[149%] tracking-[-0.019em]">
            Money
            <br />
            Enthusiasts
          </span>
        </div>
        <div className="flex items-center justify-center w-16 h-16">
          <img
            src="/self_help_kit/1/bulb_coin.svg"
            alt="Money Icon"
            className="w-10 h-10"
          />
        </div>
      </Card>
    </div>
  </div>
</section>

      {/* Why Self-Help Kits Work Section */}
      <section className="bg-[#343434] py-24">
        <div className="flex items-center justify-between gap-24 px-32 max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-5 max-w-lg">
            <h2 className="text-white font-['Mochiy_Pop_One'] text-[40px] font-normal leading-[149%] tracking-[-0.76px]">
              Why Self-Help Kits Work?
            </h2>
            <p className="text-white font-poppins text-2xl font-medium leading-[149%] tracking-[-0.456px] max-w-xs">
              Benefits of using self help kits
            </p>
          </div>

          {/* Money Icon */}
<div className="flex items-center justify-center">
  <img 
    src="/self_help_kit/3/money.svg" 
    alt="Money icon" 
    width="120" 
    height="120"
    className="w-30 h-30" // Tailwind equivalent of 120px
  />
</div>
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-9">
                {[1, 2, 3, 4, 5].map((item) => (
                  <svg
                    key={item}
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                  >
                    <path
                      d="M2.5 9.98975C4.66667 14.8231 9.8 22.6897 13 15.4897L20.5 0.989746"
                      stroke="#39BB9C"
                      strokeWidth="4"
                    />
                  </svg>
                ))}
              </div>
              <div className="text-white font-poppins text-2xl font-bold leading-[149%] tracking-[-0.456px] space-y-6">
                <div>Builds financial confidence</div>
                <div>Encourages independent thinking</div>
                <div>Easy-to-follow structure</div>
                <div>No screen time needed</div>
                <div>Parent-guided or self-led</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Money Concepts Section - Configurable */}
      <section className="bg-gradient-to-b from-[#E5FFF7] to-[#D5FFE8] py-24 relative">
        {/* Circular Thread Background */}
        <img 
          src={smartMoneyConcepts.backgroundImage}
          alt="Circular Thread" 
          className="absolute inset-0 w-150 h-170 mt-150 object-cover opacity-30 pointer-events-none"
        />
        
        <div className="flex items-center gap-6 px-16 max-w-6xl mx-auto relative z-10">
          {/* Title Section */}
          <div className="flex items-center gap-2">
            <span className="text-[#08AA9B] font-['Mochiy_Pop_One'] text-[188px] font-normal leading-[149%] tracking-[-3.571px]">
              {smartMoneyConcepts.conceptsCount}
            </span>
            <h2 className="text-[#08B09B] font-['Mochiy_Pop_One'] text-[41px] font-normal leading-[137%] tracking-[-0.787px] max-w-xs">
              {smartMoneyConcepts.title}
            </h2>
          </div>

          {/* Concepts Grid */}
          <div className="flex-1 grid grid-cols-2 gap-8 relative">
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              {smartMoneyConcepts.concepts.slice(0, 4).map((concept, index) => (
                <Card key={concept.id} className="bg-white rounded-3xl p-6 flex items-center justify-center h-36 relative">
                  <img 
                    src={concept.icon}
                    alt={`Coin ${concept.id}`}
                    className="absolute -left-12 top-4 w-20 h-20 transform -rotate-12"
                  />
                  <span className="text-[#09BE9D] font-poppins text-2xl font-bold text-center">
                    {concept.title}
                  </span>
                </Card>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8 pt-20">
              {smartMoneyConcepts.concepts.slice(4).map((concept, index) => (
                <Card key={concept.id} className="bg-white rounded-3xl p-6 flex items-center justify-center h-36 relative">
                  <img 
                    src={concept.icon}
                    alt={`Coin ${concept.id}`}
                    className="absolute -left-12 top-4 w-20 h-20 transform -rotate-12"
                  />
                  <span className="text-[#09BE9D] font-poppins text-2xl font-bold text-center">
                    {concept.title}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing CTA */}
        {smartMoneyConcepts.showPricing && (
          <div className="flex justify-center mt-16 pb-30">
            <Card className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] rounded-[31px] border border-[#D8D7D7] p-12 max-w-4xl">
              <div className="bg-white/28 rounded-3xl p-8 text-center">
                <p className="text-white font-poppins text-3xl font-semibold mb-4">
                  {smartMoneyConcepts.pricingData.description}
                </p>
                <div className="flex items-center justify-center gap-4 mt-8">
                  <span className="text-white font-poppins text-4xl font-bold">
                    All for just
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-poppins text-4xl font-bold">
                      {smartMoneyConcepts.pricingData.currentPrice}
                    </span>
                    <span className="text-white/60 font-poppins text-2xl line-through">
                      {smartMoneyConcepts.pricingData.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </section>

    </div>
  );
};

export default SelfHelpKits;