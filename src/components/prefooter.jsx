'use client';
import React from 'react';
import Image from 'next/image';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

const mochiy = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const PreFooter = ({
  mainTitle,
  subText1,
  subText2,
  buttonText,
  button1Text,
  button1Action,
  button2Text,
  button2Action,
}) => {
  // Fixed default button actions
  const defaultButton1Action = () => {
    console.log('Button 1 clicked - opening form');
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeeCFCunf99pwus2cnid2cGLyWrzv1LvKSDOMmqsLFmVp6yKA/viewform',
      '_blank'
    );
  };

  const defaultButton2Action = () => {
    console.log('Button 2 clicked - navigating to brand-ambassador');
    window.location.href = '/brand-ambassador';
  };

  // Use provided actions or defaults
  const handleButton1Click = button1Action || defaultButton1Action;
  const handleButton2Click = button2Action || defaultButton2Action;

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
      className="opacity-60 w-[60px] h-[80px] sm:w-[80px] sm:h-[120px] md:w-[100px] md:h-[160px] lg:w-[120px] lg:h-[200px]"
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

  const hasTwoButtons = button1Text && button2Text;
  const hasSingleButton = buttonText || (!hasTwoButtons && (button1Text || button2Text));

  return (
    <div
      className="relative px-4 -mt-5 lg:-mt-28 pt-40 md:px-10 py-25 min-h-[70vh] overflow-hidden z-10"
      style={{
        background:
          'linear-gradient(90deg, #088F99 0%, #09BE9D 58%, #7ECCA2 88%)',
      }}
    >
      <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto gap-10 relative z-20 text-left">
        <div className="flex-1 max-w-lg space-y-5 lg:space-y-6 pl-2 sm:pl-4">
          <h1
            className={`${mochiy.className} text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-[134%] tracking-[-0.912px]`}
          >
            {mainTitle}
          </h1>

          {subText1 && (
            <p
              className={`${poppins.className} text-white text-xl md:text-xl lg:text-2xl font-medium leading-[134%] tracking-[-0.437px]`}
            >
              {subText1}
            </p>
          )}

          {subText2 && (
            <p
              className={`${poppins.className} text-white text-lg font-medium leading-[149%] tracking-[-0.304px]`}
            >
              {subText2}
            </p>
          )}

          {hasTwoButtons && (
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className={`${poppins.className} bg-white text-[#009079] text-base font-medium leading-[149%] tracking-[-0.304px] border-none rounded-full px-7 py-3 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1`}
                onClick={(e) => {
                  e.preventDefault();
                  console.log('First button clicked');
                  handleButton1Click();
                }}
                type="button"
              >
                {button1Text}
              </button>
              <button
                className={`${poppins.className} bg-white text-[#009079] text-base font-medium leading-[149%] tracking-[-0.304px] border-none rounded-full px-7 py-3 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1`}
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Second button clicked');
                  handleButton2Click();
                }}
                type="button"
              >
                {button2Text}
              </button>
            </div>
          )}

          {hasSingleButton && !hasTwoButtons && (
            <button
              className={`${poppins.className} bg-white text-[#009079] text-base font-medium leading-[149%] tracking-[-0.304px] border-none rounded-full px-7 py-3 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1`}
              onClick={(e) => {
                e.preventDefault();
                console.log('Single button clicked');
                if (buttonText || button1Text) {
                  handleButton1Click();
                } else if (button2Text) {
                  handleButton2Click();
                }
              }}
              type="button"
            >
              {buttonText || button1Text || button2Text}
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
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute z-20 top-2 left-0 pointer-events-none opacity-80 w-[450px] md:w-auto">
            <ThreadDecorativeSvg />
          </div>

          <div className="absolute z-0 top-5 left-5">
            <TopDecorativeSvg />
          </div>

          <div className="absolute z-0 top-60 sm:top-72 md:top-80 right-0 sm:right-1">
            <BottomRightDecorativeSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
