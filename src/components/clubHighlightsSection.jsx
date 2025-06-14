import React from 'react';

export default function ClubHighlights() {
  return (
    <>
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-[#39BB9C] mb-8 md:mb-12 lg:mb-16"
          style={{ fontFamily: 'Mochiy Pop One, cursive' }}
        >
          Club Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              title: 'Conversations & Fun Learning',
              bgColor: '#F7C342',
              icon: './Finance_clubs/book.svg',
            },
            {
              title: 'Expert-led Sessions',
              bgColor: '#39BB9C',
              icon: './Finance_clubs/Group 45.svg',
            },
            {
              title: 'Q & A Forum',
              bgColor: '#4598CA',
              icon: './Finance_clubs/Group 47.svg',
            },
            {
              title: 'Non-judgmental & Inclusive Environment',
              bgColor: '#EF746C',
              icon: './Finance_clubs/Clip path group.svg',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="w-full rounded-3xl p-3 md:p-4 flex flex-col items-center text-center min-h-[10rem] md:min-h-[12rem] lg:min-h-[14rem] justify-center"
              style={{ backgroundColor: card.bgColor }}
            >
              <div className="mb-3 md:mb-4">
                <img 
                  src={card.icon} 
                  alt={card.title}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto"
                />
              </div>
              <h3 
                className="text-white font-semibold text-base md:text-lg lg:text-xl leading-tight"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}