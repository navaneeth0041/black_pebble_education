import React from 'react';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

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
const FinancialEducationHero = () => {
  return (
    <>
    <section className="py-24 px-4 -mt-5 lg:-mt-30 pt-35 text-center text-white"
    style={{
        background: 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)'
      }}>
      
      {/* Top Paragraph */}
      <div className="max-w-4xl mx-auto mb-8">
        <p className={`${poppins.className} text-xl md:text-2xl lg:text-3xl font-light leading-relaxed`}>
          We ensure your child develops <em className="text-[#FFE4A1] font-semibold not-italic">financial knowledge</em>, <em className="text-[#FFE4A1]  font-semibold not-italic">a financial mindset</em>, and healthy <em className="text-[#FFE4A1]  font-semibold not-italic">financial behavior</em> so that they not only<br />

          <span className="font-semibold tracking-wide">KNOW</span> and <span className="font-semibold tracking-wide">GROW</span> money, but also <span className="font-semibold tracking-wide">LOVE MONEY</span>.
        </p>
      </div>

      {/* Outlined Big Text */}
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-white/10 stroke-white/80 drop-shadow-md"
          style={{
            WebkitTextStroke: '1px white'
          }}
      >
        Know Money. Grow Money. Love Money.
      </h2>
    </section>
    <img
        src="/effects/darkgreen.png"
        alt="green transition"
        className='w-[120%] block relative -top-6  z-0'
        style={{ margin: 0, padding: 0, display: 'block' }}
      />
    
    </> 
  );
};

export default FinancialEducationHero;
