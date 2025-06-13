import React from 'react';
import Image from 'next/image';

const PreFooter = ({
  mainTitle,
  subText1,
  subText2,
  buttonText
}) => {
  const TopDecorativeSvg = () => (
    <Image
      src="/about/Clip path group.svg"
      alt="Top decorative element"
      width={120}
      height={150}
      className="opacity-70"
    />
  );

  const BottomRightDecorativeSvg = () => (
    <Image
      src="/about/Clip path group-1.svg"
      alt="Bottom right decorative element"
      width={120}
      height={200}
      className="opacity-60"
    />
  );

  const ThreadDecorativeSvg = () => (
    <Image
      src="/about/Vector-1.svg"
      alt="Thread decorative element"
      width={1000}
      height={700}
      className="opacity-70"
    />
  );

  return (
<div className="relative px-4 -mt-5 lg:-mt-35 pt-40 md:px-10 py-25 min-h-[70vh] overflow-hidden" style={{ background: 'linear-gradient(90deg, #088F99 0%, #09BE9D 58%, #7ECCA2 88%)' }}>
<div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto gap-10 relative z-20 text-left">
    
    <div className="flex-1 max-w-lg space-y-5 lg:space-y-6 pl-2 sm:pl-4">
      <h1
        className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-[134%] tracking-[-0.912px]"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {mainTitle}
      </h1>
      
      {subText1 && (
        <p
          className="text-white text-lg md:text-xl lg:text-2xl font-medium leading-[134%] tracking-[-0.437px]"
          style={{ fontFamily: 'Poppins, sans-serif'}}
        >
          {subText1}
        </p>
      )}
      
      {subText2 && (
        <p
          className="text-white text-base font-medium leading-[149%] tracking-[-0.304px]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {subText2}
        </p>
      )}
      
      {buttonText && (
        <button
          className="bg-white text-[#009079] text-base font-medium leading-[149%] tracking-[-0.304px] border-none rounded-full px-7 py-3 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1"
          style={{ fontFamily: 'Poppins' }}
        >
          {buttonText}
        </button>
      )}
    </div>

    <div className="relative flex-1 max-w-lg flex justify-center items-center mt-10 lg:mt-0">
      <div className="relative z-10">
        <Image
          src="/about/Vector.svg"
          alt="Happy child learning"
          width={420}
          height={420}
          className="w-full h-full object-cover "
        />
      </div>

      <div className="absolute z-20 top-2 left-0 pointer-events-none opacity-80 w-[450px] md:w-auto">
  <ThreadDecorativeSvg />
</div>


      <div className="absolute z-0 top-5 left-5">
        <TopDecorativeSvg />
      </div>

      <div className="absolute z-0 top-80 right-1">
        <BottomRightDecorativeSvg />
      </div>
    </div>
  </div>
</div>

  );
};

export default PreFooter;
