import React from 'react';
import Image from 'next/image';
import BlackLogoWithText from './blacklogo';

const Footer = () => {
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
      <div className="px-12 py-12">
        {/* Top Section: Logo and YouTube */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          {/* Logo Section */}
          <div className="mb-8 lg:mb-0">
            <BlackLogoWithText logoHeight={80} textHeight={150} />
          </div>

          {/* YouTube Section */}
          <div className="lg:pr-12">
            <a 
              href="#" 
              className="inline-flex items-center rounded-lg text-base font-semibold transition-all duration-300 border border-white overflow-hidden"
            >
              {/* YouTube Icon Section */}
              <div className="px-4 py-3 flex-shrink-0">
                <img src="/footer/youtube.png" alt="YouTube" className="h-8 w-8" />
              </div>
              
              <div className="w-px h-10 bg-white"></div>
              
              {/* Text Section */}
              <div className="px-4 py-3 text-left">
                <div className="text-white text-base font-medium">{youtubeSection.title}</div>
                <div className="text-sm opacity-90">{youtubeSection.subtitle}</div>
              </div>
            </a>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Contact Information */}
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <img src="/footer/location.png" alt="Location" className="h-6 w-4 flex-shrink-0 mt-1" />
              <div className="text-base text-white">
                {contactInfo.address.line1}<br />
                {contactInfo.address.line2}<br />
                {contactInfo.address.line3}
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <img src="/footer/whatsapp.png" alt="Phone" className="h-4 w-4 flex-shrink-0" />
              <div className="text-base text-white">
                {contactInfo.phone}
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center space-x-3">
              <img src="/footer/mail.png" alt="Email" className="h-3 w-4 flex-shrink-0" />
              <div className="text-base text-white underline">
                {contactInfo.email}
              </div>
            </div>
          </div>

          {/* Right: Links - 3 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16">
            {/* Important Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {footerLinks.importantLinks.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.importantLinks.items.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-base text-white hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Products */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {footerLinks.products.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.products.items.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-base text-white hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {footerLinks.legal.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.items.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-base text-white hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
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
        <div className="mt-8 pt-4 text-right">
          <p className="text-sm text-white">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;