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

  // Helper function to convert text to URL format
  const convertToUrl = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
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

  const copyright = "Copyright © 2025 Black Pebble Education- All Rights Reserved";

  return (
    <footer className="bg-[#2B2A2A] text-white">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-12">
        {/* Top Section: Logo and YouTube */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          {/* Logo Section */}
          <div className="mb-8 lg:mb-0">
            <BlackLogoWithText logoHeight={80} textHeight={150} />
          </div>

          {/* YouTube Section */}
          <div className="lg:self-start lg:ml-auto">
            <a 
              href="https://youtube.com/@blackpebbleeducation" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg text-base font-semibold transition-all duration-300 border border-white overflow-hidden hover:bg-white hover:text-[#2B2A2A]"
            >
              {/* YouTube Icon Section */}
              <div className="px-4 py-3 flex-shrink-0">
                <img src="/footer/youtube.png" alt="YouTube" className="h-8 w-8" />
              </div>
              
              <div className="w-px h-10 bg-white"></div>
              
              {/* Text Section */}
              <div className="px-4 py-3 text-left">
                <div className="text-base font-medium">{youtubeSection.title}</div>
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
              <a 
                href={`tel:${contactInfo.phone}`}
                className="text-base text-white hover:text-blue-400 transition-colors duration-300"
              >
                {contactInfo.phone}
              </a>
            </div>
            
            {/* Email */}
            <div className="flex items-center space-x-3">
              <img src="/footer/mail.png" alt="Email" className="h-3 w-4 flex-shrink-0" />
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-base text-white underline hover:text-blue-400 transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
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
                      href={`/${convertToUrl(item)}`}
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
                      href={`/${convertToUrl(item)}`}
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
                      href={`/${convertToUrl(item)}`}
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
          <p className="text-lg text-white font-medium">
            <span className="text-l font-bold">Copyright © 2025 Black Pebble Education- All Rights Reserved</span> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;