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

const SelfHelpKits = () => {
  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#343434] min-h-[572px] relative overflow-hidden">
        {/* Navigation */}
        {/*<Navigation variant="inline" />*/}
        {/* Hero Content */}
         <div className="bg-[#343434] lg:min-h-[30vh] text-white py-8 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-22 sm:px-1 lg:px-8 ">
      <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
  <div className="flex-1 lg:text-left">
    <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${mochiyPopOne.className}`}>
      Learn. Play. Grow —<br />
      At Your Own Pace!
    </h1>
    <p className={`mt-4 text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed ${poppins.className}`}>
      Engage with an informative & creative self-help kit to explore financial concepts - anytime, anywhere.
    </p>
    <button className={`${poppins.className} mt-9 bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] hover:from-[#077A83] hover:via-[#08A88B] hover:to-[#6DB892] text-white font-medium px-6 sm:px-8 py-3 rounded-[59px] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25 w-full sm:w-auto text-sm sm:text-base border border-black/20`}>
      Call Us to Order Your kit
    </button>
  </div>
  <div className="hidden lg:block flex-shrink-0 mt-[12px] mr-[55px]">
    <img 
      src="/self_help_kit/1/graph.svg" 
      alt="Financial Growth Graph"
      className="w-46 h-96 lg:w-[150px] lg:h-[150px] object-contain" 
    />
  </div>
</div>


      </div>
      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-repeat-x bg-[url('/')]"></div> 
      {/* Someone need to add the vector here */}
    </div>
      </section>
      <img
        src="/effects/black.png"
        alt="black transition"
        className='w-full block relative -top-8 z-20'
      />
      {/* What's Inside Section */}
    <section className="flex flex-col items-center gap-8 py-16 px-8 pt-40 -mt-5 lg:-mt-30">
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
    <img
        src="/effects/white.png"
        alt="black transition"
        className='w-full block relative -top-8 z-20'
      />
      {/* Who is This For Section */}
      
      <section className="bg-[#E1FFF4] py-12 lg:py-24 pt-20 lg:pt-40 -mt-5 lg:-mt-30 relative overflow-hidden">
  {/* Thread SVG positioned at the top */}
  <div className="hidden lg:block absolute top-15 left-0 z-10 max-w-[1400px] h-auto pl-[500px]">
    <img 
      src="/self_help_kit/3/thread.svg" 
      alt="Decorative thread" 
      className="w-full h-auto object-contain opacity-80"
    />
  </div>
  
  <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 lg:px-24 relative z-20">
    {/* Text Content */}
    <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-5 max-w-md text-center lg:text-left">
      <h2 className="text-[#39BB9C] font-['Mochiy_Pop_One'] text-3xl lg:text-[48px] font-normal leading-[149%] tracking-[-0.912px]">
        Who is This <br/>For?
      </h2>
      
      <p className="text-[#39BB9C] font-poppins text-lg lg:text-2xl font-medium leading-[149%] tracking-[-0.456px]">
        Perfect for children who enjoy independent learning, and parents
        seeking structured yet flexible tools.
      </p>
    </div>
    
    {/* Cards Container */}
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
      {/* First Card */}
      <div className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] rounded-2xl p-6 w-80 h-56 flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <span className="text-white font-poppins text-4xl font-medium leading-[149%] tracking-[-0.019em]">
            10+
            <br />
            year old's
          </span>
        </div>
        <div className="flex items-center justify-center w-[88px] h-[88px]">
          <img
            src="/self_help_kit/1/boy.svg"
            alt="Student Icon"
            className="w-[88px] h-[88px]"
          />
        </div>
      </div>

      {/* Second Card */}
      <div className="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] rounded-2xl p-6 w-80 h-56 flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <span className="text-white font-poppins text-3xl font-medium leading-[149%] tracking-[-0.019em]">
            Money
            <br />
            Enthusiasts
          </span>
        </div>
        <div className="flex items-center justify-center w-[88px] h-[88px]">
          <img
            src="/self_help_kit/1/bulb_coin.svg"
            alt="Money Icon"
            className="w-[88px] h-[88px]"
          />
        </div>
      </div>
    </div>
  </div>
</section>
<img
        src="/effects/selfkitgreen.png"
        alt="black transition"
        className='w-full block relative -top-8 z-20'
      />
      {/* Why Self-Help Kits Work Section */}
      <section className="bg-[#343434] py-24 pt-40 -mt-5 lg:-mt-35">
  <div className="flex flex-col lg:flex-row lg:items-center px-6 sm:px-12 lg:px-32 gap-8 lg:gap-0">
    <div className="flex flex-col items-start gap-8 max-w-lg">
      <h2 className="text-white font-['Mochiy_Pop_One'] text-[32px] sm:text-[40px] lg:text-[48px] font-normal leading-[149%] tracking-[-0.76px]">
        Why Self-Help Kits <br></br>Work?
      </h2>
      <p className="text-white font-poppins text-xl sm:text-2xl lg:text-3xl font-medium leading-[149%] tracking-[-0.456px] max-w-xs">
        Benefits of using self help kits
      </p>
    </div>
    
    {/* Money Icon */}
    <div className="hidden lg:flex items-center justify-center flex-shrink-0 mx-0 lg:mx-16 order-3 lg:order-2">
      <img 
        src="/self_help_kit/3/money.svg" 
        alt="Money icon" 
        width="150" 
        height="150"
        className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36"
      />
    </div>
    
    <div className="flex flex-col justify-center order-2 lg:order-3">
      <div className="space-y-6 sm:space-y-7 lg:space-y-8 pl-0 sm:pl-4 lg:pl-22">
        {[
          "Builds financial confidence",
          "Encourages independent thinking", 
          "Easy-to-follow structure",
          "No screen time needed",
          "Parent-guided or self-led"
        ].map((text, index) => (
          <div key={index} className="flex items-center gap-6">
            <svg
              width="28"
              height="24"
              viewBox="0 0 23 20"
              fill="none"
              className="flex-shrink-0"
            >
              <path
                d="M2.5 9.98975C4.66667 14.8231 9.8 22.6897 13 15.4897L20.5 0.989746"
                stroke="#39BB9C"
                strokeWidth="4"
              />
            </svg>
            <div className="text-white font-poppins text-lg sm:text-xl lg:text-3xl font-bold leading-[149%] tracking-[-0.456px] whitespace-nowrap">
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      <img
        src="/effects/black.png"
        alt="black transition"
        className='w-full block relative -top-8 z-20'
      />
      {/* 7 Smart Money Concepts Section */}
      <section class="bg-gradient-to-b from-[#E5FFF7] to-[#D5FFE8] py-24 relative pt-40 -mt-5 lg:-mt-35 overflow-hidden">
      <img 
  src="/self_help_kit/4/Circle_thread.svg" 
  alt="Circular Thread" 
  class="absolute bottom-0 left-30 w-[500px] h-auto object-contain opacity-30 pointer-events-none z-0"
/>



        <div class="flex items-center gap-6 px-16 max-w-6xl mx-auto relative z-10">
            <div class="flex items-center gap-2">
                <span class="text-[#08AA9B] font-mochiy text-[188px] font-normal leading-[149%] tracking-[-3.571px]">
                    7
                </span>
                <h2 class="text-[#08B09B] font-mochiy text-[41px] font-normal leading-[137%] tracking-[-0.787px] max-w-xs">
                    Smart Money Concepts Made Simple
                </h2>
            </div>
            <div class="flex-1 grid grid-cols-2 gap-8 relative">
                <div class="flex flex-col gap-8">
                    <div class="bg-white rounded-3xl p-6 flex items-center justify-center h-36 relative shadow-lg">
                        <img 
                          src="/self_help_kit/4/coin1.svg" 
                          alt="Coin 1" 
                          class="absolute -left-12 top-4 w-20 h-20 transform -rotate-12"
                        />
                        <span class="text-[#09BE9D] font-poppins text-2xl font-bold text-center">
                            What is an Asset?
                        </span>
                    </div>
                    <div class="bg-white rounded-3xl p-6 flex items-center justify-center h-36 relative shadow-lg">
                        <img 
                          src="/self_help_kit/4/coin2.svg" 
                          alt="Coin 2" 
                          class="absolute -left-12 top-4 w-20 h-20 transform -rotate-12"
                        />
                        <span class="text-[#09BE9D] font-poppins text-2xl font-bold text-center">
                            What is net worth?
                        </span>
                    </div>
                    <div class="bg-white rounded-3xl p-6 flex items-center justify-center h-36 relative shadow-lg">
                        <img 
                          src="/self_help_kit/4/coin3.svg" 
                          alt="Coin 3" 
                          class="absolute -left-12 top-4 w-20 h-20 transform -rotate-12"
                        />
                        <span class="text-[#09BE9D] font-poppins text-2xl font-bold text-center">
                            Difference between income & wealth
                        </span>
                    </div>
                    <div class="bg-white rounded-3xl p-6 flex items-center justify-center h-36 relative shadow-lg">
                        <img 
                          src="/self_help_kit/4/coin4.svg" 
                          alt="Coin 4" 
                          class="absolute -left-12 top-4 w-20 h-20 transform -rotate-12"
                        />
                        <span class="text-[#09BE9D] font-poppins text-2xl font-bold text-center">
                            Interest & Compound Interest
                        </span>
                    </div>
                </div>
                <div class="flex flex-col gap-8 pt-20">
                    <div class="bg-white rounded-3xl p-6 flex items-center justify-center h-36 relative shadow-lg">
                        <img 
                          src="/self_help_kit/4/coin5.svg" 
                          alt="Coin 5" 
                          class="absolute -left-12 top-4 w-20 h-20 transform -rotate-12"
                        />
                        <span class="text-[#09BE9D] font-poppins text-2xl font-bold text-center">
                            Power of Compounding
                        </span>
                    </div>
                    <div class="bg-white rounded-3xl p-6 flex items-center justify-center h-36 relative shadow-lg">
                        <img 
                          src="/self_help_kit/4/coin6.svg" 
                          alt="Coin 6" 
                          class="absolute -left-12 top-4 w-20 h-20 transform -rotate-12"
                        />
                        <span class="text-[#09BE9D] font-poppins text-2xl font-bold text-center">
                            Investments & Returns
                        </span>
                    </div>
                    <div class="bg-white rounded-3xl p-6 flex items-center justify-center h-36 relative shadow-lg">
                        <img 
                          src="/self_help_kit/4/coin7.svg" 
                          alt="Coin 7" 
                          class="absolute -left-12 top-4 w-20 h-20 transform -rotate-12"
                        />
                        <span class="text-[#09BE9D] font-poppins text-2xl font-bold text-center">
                            Why do people use debt?
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="flex justify-center mt-16 pb-30 relative z-20">
            <div class="bg-gradient-to-r from-[#088F99] via-[#09BE9D] to-[#7ECCA2] rounded-[31px] border border-[#D8D7D7] p-12 max-w-4xl relative">
                <div class="bg-white/28 rounded-3xl p-8 text-center">
                    <p class="text-white font-poppins text-3xl font-semibold mb-4">
                        Invest in your child's growth with
                        <br />
                        49+ guided resources-
                    </p>
                    <div class="flex items-center justify-center gap-4 mt-8">
                        <span class="text-white font-poppins text-4xl font-bold">
                            All for just
                        </span>
                        <div class="flex items-center gap-2 relative">
                            <div class="relative">
                                <img src="/self_help_kit/4/Vector 32.svg" alt="Price background" class="w-22 h-12" />
                                <span class="absolute inset-0 flex items-center justify-center text-white font-poppins text-2xl font-bold">
                                    ₹1799
                                </span>
                            </div>
                            <span class="text-white/60 font-poppins text-2xl line-through ml-2">
                                ₹2499
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="absolute -bottom-6 -right-20">
                    <img src="/self_help_kit/4/coin_stack.svg" alt="Coin Stack" class="w-60 h-54 opacity-80" />
                </div>
            </div>
        </div>
    </section>
    </div>
    <img
        src="/effects/selfkitprefooter.png"
        alt="black transition"
        className='w-full block relative -top-8 z-20'
      />
      </>
  );
};

export default SelfHelpKits;