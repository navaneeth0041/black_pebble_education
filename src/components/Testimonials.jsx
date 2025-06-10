"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "I couldn't believe how quickly my 11-year-old started talking about budgeting and saving after just a few sessions. She even helped plan our family grocery list to stay under budget! The program made finance fun and relatable — she's now thinking like a mini-CEO.",
      author: "Riya Malhotra, Parent of a 6th Grader",
      image: "/home_page_assets/5/iPhone 13 mini - 1.svg", 
    },
    {
      quote:
        "My son never liked math, but now he's calculating expenses on his own. This program sparked something amazing in him!",
      author: "Carlos R., Parent of a 5th Grader",
      image: "/home_page_assets/5/iphone.svg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const { quote, author, image } = testimonials[currentIndex];

  return (
    <div className="bg-yellow-100 py-16 px-6 text-center flex flex-col items-center">
      <h2 className="text-4xl font-bold text-rose-600 mb-2 flex items-center justify-center gap-2">
        Kids Loved It.
        <Image src="/home_page_assets/5/Group.svg" alt="Phone Icon" width={32} height={32} />
      </h2>
      <h3 className="text-4xl font-bold text-rose-600 mb-10">
        Parents Approved.
      </h3>

      <div className="relative max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="bg-rose-400 text-white p-6 rounded-xl relative max-w-md text-left order-2 md:order-1">
          <div className="absolute top-0 left-[-20px] w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-r-rose-400"></div>
          <p className="mb-4">{`"${quote}"`}</p>
          <p className="font-semibold">— {author}</p>
        </div>

        <div className="relative w-60 h-96 order-1 md:order-2">
          <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-lg">
            {/*<Image src={image} alt="Testimonial Video" layout="fill" objectFit="cover" />*/}
            {/*<Image src="/play-overlay.png" alt="" width={48} height={48} className="absolute top-4 left-4" />*/}
            <div className="absolute bottom-4 left-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-white rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-10">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white text-rose-600 shadow-md"
        >
          <span className="text-xl">◀</span>
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white text-rose-600 shadow-md"
        >
          <span className="text-xl">▶</span>
        </button>
      </div>
    </div>
  );
}