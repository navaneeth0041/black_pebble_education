import React from 'react';
import Image from 'next/image';
import BlackLogoWithText from './blacklogo';

const Footer = () => {
  // Constants for footer content - similar to header approach
  const contactInfo = {
    address: {
      line1: "Discrete Chalet 19, A Block, 8th Floor,",
      line2: "Westgate Business Bay, S. G.",
      line3: "Highway, Makarba, Ahmedabad."
    },
    phone: "+91-8928557529",
    email: "blackpebbleeducation@gmail.com"
  };

  const footerLinks = {
    importantLinks: {
      title: "Important Links",
      items: [
        "About Us",
        "Book a Counseling Session",
        "Be our Brand Ambassador"
      ]
    },
    products: {
      title: "Products",
      items: [
        "Kids' Courses",
        "Teens' Courses",
        "Self-help Kits"
      ]
    },
    legal: {
      title: "Legal",
      items: [
        "Privacy Policy",
        "Terms of Use"
      ]
    }
  };

  const youtubeSection = {
    title: "Join the Journey",
    subtitle: "Subscribe for oodles of informative videos"
  };

  const copyright = "©copyright 2025 all rights reserved by BP";

  return (
    <footer className="bg-[#2B2A2A] text-white">
      <div className="px-6 mx-auto py-4">
        {/* Top Section: Logo and YouTube */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          <div className="mb-4 lg:mb-0 w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="lg:hidden">
              <BlackLogoWithText logoHeight={80} textHeight={150} />
            </div>
            <div className="hidden lg:block">
              <BlackLogoWithText logoHeight={80} textHeight={150} />
            </div>
          </div>

          {/* YouTube Section - Responsive positioning */}
          <div className="w-full lg:w-auto lg:flex lg:justify-center lg:px-20">
            <a 
              href="#" 
              className="inline-flex items-center rounded-lg text-sm font-semibold transition-all duration-300 border border-white overflow-hidden w-full lg:w-auto max-w-sm lg:max-w-lg"
            >
              {/* YouTube Icon Section */}
              <div className="px-4 py-3 flex-shrink-0">
                <img src="/footer/youtube.png" alt="YouTube" className="h-8 w-8 lg:h-10 lg:w-10" />
              </div>
              
              <div className="w-px h-[80%] bg-white"></div>
              
              {/* Text Section */}
              <div className="px-4 py-3 text-left flex-grow">
                <div className="text-white text-sm lg:text-base">{youtubeSection.title}</div>
                <div className="text-xs opacity-90">{youtubeSection.subtitle}</div>
              </div>
            </a>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Contact Information */}
          <div className="space-y-3">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <img src="/footer/location.png" alt="Location" className="h-6 w-4 lg:h-7 lg:w-5 flex-shrink-0 mt-1" />
              <div className="text-sm lg:text-base text-white font-semibold">
                {contactInfo.address.line1}<br />
                {contactInfo.address.line2}<br />
                {contactInfo.address.line3}
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <img src="/footer/whatsapp.png" alt="Phone" className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0" />
              <div className="text-sm lg:text-base text-white font-semibold">
                {contactInfo.phone}
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center space-x-3">
              <img src="/footer/mail.png" alt="Email" className="h-3 w-4 lg:h-4 lg:w-5 flex-shrink-0" />
              <div className="text-sm lg:text-base text-white font-semibold underline break-all lg:break-normal">
                {contactInfo.email}
              </div>
            </div>
          </div>

          {/* Right: Links - Stack on mobile, grid on desktop */}
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-4">
            {/* Important Links */}
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-white">
                {footerLinks.importantLinks.title}
              </h3>
              <ul className="space-y-2 lg:space-y-3">
                {footerLinks.importantLinks.items.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm lg:text-base text-white hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Products */}
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-white">
                {footerLinks.products.title}
              </h3>
              <ul className="space-y-2 lg:space-y-3">
                {footerLinks.products.items.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm lg:text-base text-white hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-white">
                {footerLinks.legal.title}
              </h3>
              <ul className="space-y-2 lg:space-y-3">
                {footerLinks.legal.items.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm lg:text-base text-white hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-3 text-center lg:text-right lg:border-t-0">
          <p className="text-xs text-white">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;