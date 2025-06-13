import React from 'react';
import Image from 'next/image';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';

const PopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const UniquePedagogy = () => {
  const cards = [
    {
      id: 1,
      title: "Gender-inclusive",
      image: "/home_page_assets/2/Frame 118.svg",
      alt: "Child smiling at camera"
    },
    {
      id: 2,
      title: "Context-relevant",
      image: "/home_page_assets/2/Frame 117.svg",
      alt: "Children working together on activities"
    },
    {
      id: 3,
      title: "Culture-sensitive",
      image: "/home_page_assets/2/Frame 215.svg",
      alt: "Hands working on craft project"
    },
    {
      id: 4,
      title: "Enhances life skills",
      image: "/home_page_assets/2/Frame 115.svg",
      alt: "Child playing outdoors"
    },
    {
      id: 5,
      title: "Multiple perspectives",
      image: "/home_page_assets/2/Frame 116.svg",
      alt: "Child with colorful face paint"
    }
  ];

  return (
    <>
    <section className="text-white pt-40 pb-40 overflow-hidden min-h-[60vh] lg:min-h-screen -mt-5 lg:-mt-30" style={{backgroundColor: '#343434'}}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-100 h-30 relative">
            <Image
              src="/home_page_assets/2/Clip path group.svg"
              alt="Unique Pedagogy Icon"
              width={150}
              height={150}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Title */}
        <h2
          className={`${poppins.className} text-3xl md:text-7xl font-bold py-2`}
          style={{ color: '#09be9d' }}
        >
          <span className="block md:inline">Our Unique</span>
          <span className="block md:inline"> Pedagogy</span>
        </h2>

        {/* Description */}
        <div className={`max-w-3xl mx-auto mb-16 py-2 md:py-4 ${poppins.className}`}>
          <p className="text-lg lg:text-xl leading-relaxed" style={{color: '#39BB9C'}}>
            Our <span className="font-semibold" style={{color: '#FFE4A1'}}>research-backed</span> and{' '}
            <span className="font-semibold" style={{color: '#FFE4A1'}}>IP-protected</span>{' '}
            Teaching Methodology is designed for
            maximum learning and retention. The content of our courses accounts for the
            diversity and variety in the financial backgrounds of culturally-rich India.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative flex justify-center items-center">
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap md:flex-nowrap">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`
                  relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:z-20
                  ${index === 0 ? 'md:-rotate-12 md:translate-x-8' : ''}
                  ${index === 1 ? 'md:-rotate-6 md:translate-x-4' : ''}
                  ${index === 2 ? 'md:rotate-0 md:z-10 md:scale-110' : ''}
                  ${index === 3 ? 'md:rotate-6 md:-translate-x-4' : ''}
                  ${index === 4 ? 'md:rotate-12 md:-translate-x-8' : ''}
                  w-64 h-80 md:w-56 md:h-72
                `}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {/* Card Image */}
                <div className="relative h-4/4 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* Card Title */}
{/*                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {card.title}
                  </h3>
                </div>*/}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <img
        src="/effects/black.png"
        alt="black transition"
        className='w-[200%] block relative -top-7 z-0'
      />
    </> 
  );
};

export default UniquePedagogy;