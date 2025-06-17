"use client";
import React, { useState } from "react";
import Image from "next/image";
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
const PebbleBellaContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    whatsapp: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section
      className={`w-full min-h-screen relative overflow-hidden pt-40 -mt-5 lg:-mt-30 ${mochiyPopOne.variable} ${poppins.variable}`}
      style={{
        background: "linear-gradient(135deg, #00D4AA 0%, #00A896 50%, #048A81 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 relative z-10">
        
        {/* Centered Blurred Background Container with heading inside */}
        <div className="flex justify-center items-center min-h-[80vh]">
          <div className="relative max-w-6xl w-full">
            {/* Blurred Background Container - centered with increased width */}
            <div 
              className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 md:p-12 relative mx-auto"
              style={{
                backdropFilter: "blur(8px)",
                background: "rgba(255, 255, 255, 0.08)",
                maxWidth: "1100px"
              }}
            >
              {/* Sun Icon - positioned on the exact left top corner of container, larger size */}
              <div className="absolute -left-8 -top-8 w-[120px] h-[120px] md:w-[140px] md:h-[140px] z-20">
                <Image
                  src="./brand_ambassor_assets/sun.svg"
                  alt="Sun"
                  width={140}
                  height={140}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Title - left aligned */}
              <h1
                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 md:mb-12 text-left ${mochiyPopOne.className}`}
              >
                Why be a Pebble Bella
              </h1>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Row - Name, City, WhatsApp */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div>
                    <label className={`block text-white text-base md:text-lg mb-3 ${poppins.className}`}>
                      Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b-2 border-white/70 text-white placeholder-white/70 text-base md:text-lg py-3 px-0 focus:outline-none focus:border-white transition-colors"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className={`block text-white text-base md:text-lg mb-3 ${poppins.className}`}>
                      City*
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b-2 border-white/70 text-white placeholder-white/70 text-base md:text-lg py-3 px-0 focus:outline-none focus:border-white transition-colors"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className={`block text-white text-base md:text-lg mb-3 ${poppins.className}`}>
                      Whatsapp Number
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b-2 border-white/70 text-white placeholder-white/70 text-base md:text-lg py-3 px-0 focus:outline-none focus:border-white transition-colors"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Second Row - Message with proper spacing */}
                <div className="mt-8 md:mt-10">
                  <label className={`block text-white text-base md:text-lg mb-4 ${poppins.className}`}>
                    Message
                  </label>
                  <div className="w-full border-b-2 border-white/70 pb-4">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="1"
                      className="w-full bg-transparent text-white placeholder-white/70 text-base md:text-lg py-2 px-0 focus:outline-none resize-none border-none"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8 md:mt-10 text-left">
                  <button
                    type="submit"
                    className={`bg-white text-[#00A896] px-10 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg ${poppins.className}`}
                  >
                    Book a Call
                  </button>
                </div>
              </form>
            </div>

            {/* Thread decoration - positioned at bottom left corner with small overlap on button and blurred section */}
            <div className="absolute -left-66 bottom-[-170px] w-[350px] h-[400px] md:w-[450px] md:h-[500px] opacity-40 z-5">
              <Image
                src="./brand_ambassor_assets/thread.svg"
                alt=""
                fill
                className="object-contain object-left-bottom"
              />
            </div>

            {/* Stack - positioned lower at bottom right */}
            <div className="absolute -right-6 -bottom-4 md:-right-8 md:-bottom-20 w-[160px] h-[190px] md:w-[200px] md:h-[240px] opacity-90 z-15">
              <Image
                src="./brand_ambassor_assets/stack.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PebbleBellaContactSection;