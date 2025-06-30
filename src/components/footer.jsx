"use client"
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

  const getCustomUrl = (item) => {
    const urlMap = {
      "Kids' Courses": "/kids/value-of-money",
      "Teens' Courses": "/for-teens/value-of-money",
      "Self-help Kits": "/SelfHelp-Kit",
      "Be our Brand Ambassador" : "/brand-ambassador",
      "Book a Counseling Session": "https://docs.google.com/forms/d/e/1FAIpQLSeeCFCunf99pwus2cnid2cGLyWrzv1LvKSDOMmqsLFmVp6yKA/viewform"
    };
    
    return urlMap[item] || `/${item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;
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
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12">
        
        {/* Logo Section - Only on desktop */}
        <div className="hidden lg:flex justify-between items-start mb-12">
          <div>
            <BlackLogoWithText logoHeight={80} textHeight={150} />
          </div>
          
          {/* Desktop YouTube Section */}
          <div>
            <a 
              href=" https://YouTube.com/@BlackPebbleEdu" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg text-base font-semibold transition-all duration-300 border border-white overflow-hidden hover:bg-white hover:text-[#2B2A2A]"
            >
              <div className="px-4 py-3 flex-shrink-0">
                <img src="/footer/youtube.png" alt="YouTube" className="h-12 w-12" />
              </div>
              
              <div className="w-px h-10 bg-white"></div>
              
              <div className="px-4 py-3 text-left">
                <div className="text-base font-medium">{youtubeSection.title}</div>
                <div className="text-sm opacity-90">{youtubeSection.subtitle}</div>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Logo and YouTube - Stacked */}
        <div className="lg:hidden mb-8">
          <div className="mb-6 flex justify-center">
            <BlackLogoWithText logoHeight={60} textHeight={120} />
          </div>
          
          {/* Mobile YouTube Section */}
          <div className="flex justify-center">
            <a 
              href=" https://YouTube.com/@BlackPebbleEdu" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg text-sm font-semibold transition-all duration-300 border border-white overflow-hidden hover:bg-white hover:text-[#2B2A2A] w-full max-w-sm"
            >
              <div className="px-3 py-2 flex-shrink-0">
                <img src="/footer/youtube.png" alt="YouTube" className="h-8 w-8" />
              </div>
              
              <div className="w-px h-8 bg-white"></div>
              
              <div className="px-3 py-2 text-left">
                <div className="text-sm font-medium">{youtubeSection.title}</div>
                <div className="text-xs opacity-90">{youtubeSection.subtitle}</div>
              </div>
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
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
                className="text-base text-white transition-all duration-300"
                style={{
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)';
                  e.target.style.webkitBackgroundClip = 'text';
                  e.target.style.webkitTextFillColor = 'transparent';
                  e.target.style.backgroundClip = 'text';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '';
                  e.target.style.webkitBackgroundClip = '';
                  e.target.style.webkitTextFillColor = '';
                  e.target.style.backgroundClip = '';
                }}
              >
                {contactInfo.phone}
              </a>
            </div>
            
            {/* Email */}
            <div className="flex items-center space-x-3">
              <img src="/footer/mail.png" alt="Email" className="h-3 w-4 flex-shrink-0" />
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-base text-white underline transition-all duration-300"
                style={{
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)';
                  e.target.style.webkitBackgroundClip = 'text';
                  e.target.style.webkitTextFillColor = 'transparent';
                  e.target.style.backgroundClip = 'text';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '';
                  e.target.style.webkitBackgroundClip = '';
                  e.target.style.webkitTextFillColor = '';
                  e.target.style.backgroundClip = '';
                }}
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Right: Links - 3 columns */}
          <div className="grid grid-cols-3 gap-16">
            
            {/* Important Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {footerLinks.importantLinks.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.importantLinks.items.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={getCustomUrl(item)}
                      target={item === "Book a Counseling Session" ? "_blank" : "_self"}
                      rel={item === "Book a Counseling Session" ? "noopener noreferrer" : ""}
                      className="text-base text-white transition-all duration-300 hover:translate-x-1 inline-block"
                      style={{
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)';
                        e.target.style.webkitBackgroundClip = 'text';
                        e.target.style.webkitTextFillColor = 'transparent';
                        e.target.style.backgroundClip = 'text';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '';
                        e.target.style.webkitBackgroundClip = '';
                        e.target.style.webkitTextFillColor = '';
                        e.target.style.backgroundClip = '';
                      }}
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
                      href={getCustomUrl(item)}
                      className="text-base text-white transition-all duration-300 hover:translate-x-1 inline-block"
                      style={{
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)';
                        e.target.style.webkitBackgroundClip = 'text';
                        e.target.style.webkitTextFillColor = 'transparent';
                        e.target.style.backgroundClip = 'text';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '';
                        e.target.style.webkitBackgroundClip = '';
                        e.target.style.webkitTextFillColor = '';
                        e.target.style.backgroundClip = '';
                      }}
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
                      href={getCustomUrl(item)}
                      className="text-base text-white transition-all duration-300 hover:translate-x-1 inline-block"
                      style={{
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)';
                        e.target.style.webkitBackgroundClip = 'text';
                        e.target.style.webkitTextFillColor = 'transparent';
                        e.target.style.backgroundClip = 'text';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '';
                        e.target.style.webkitBackgroundClip = '';
                        e.target.style.webkitTextFillColor = '';
                        e.target.style.backgroundClip = '';
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Everything stacked vertically */}
        <div className="lg:hidden space-y-6">
          
          {/* Contact Information */}
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <img src="/footer/location.png" alt="Location" className="h-6 w-4 flex-shrink-0 mt-1" />
              <div className="text-sm text-white">
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
                className="text-sm text-white transition-all duration-300"
                style={{
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)';
                  e.target.style.webkitBackgroundClip = 'text';
                  e.target.style.webkitTextFillColor = 'transparent';
                  e.target.style.backgroundClip = 'text';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '';
                  e.target.style.webkitBackgroundClip = '';
                  e.target.style.webkitTextFillColor = '';
                  e.target.style.backgroundClip = '';
                }}
              >
                {contactInfo.phone}
              </a>
            </div>
            
            {/* Email */}
            <div className="flex items-center space-x-3">
              <img src="/footer/mail.png" alt="Email" className="h-3 w-4 flex-shrink-0" />
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-sm text-white underline transition-all duration-300"
                style={{
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)';
                  e.target.style.webkitBackgroundClip = 'text';
                  e.target.style.webkitTextFillColor = 'transparent';
                  e.target.style.backgroundClip = 'text';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '';
                  e.target.style.webkitBackgroundClip = '';
                  e.target.style.webkitTextFillColor = '';
                  e.target.style.backgroundClip = '';
                }}
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">
              {footerLinks.importantLinks.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.importantLinks.items.map((item, index) => (
                <li key={index}>
                  <a 
                    href={getCustomUrl(item)}
                    target={item === "Book a Counseling Session" ? "_blank" : "_self"}
                    rel={item === "Book a Counseling Session" ? "noopener noreferrer" : ""}
                    className="text-sm text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)';
                      e.target.style.webkitBackgroundClip = 'text';
                      e.target.style.webkitTextFillColor = 'transparent';
                      e.target.style.backgroundClip = 'text';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '';
                      e.target.style.webkitBackgroundClip = '';
                      e.target.style.webkitTextFillColor = '';
                      e.target.style.backgroundClip = '';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">
              {footerLinks.products.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.items.map((item, index) => (
                <li key={index}>
                  <a 
                    href={getCustomUrl(item)}
                    className="text-sm text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)';
                      e.target.style.webkitBackgroundClip = 'text';
                      e.target.style.webkitTextFillColor = 'transparent';
                      e.target.style.backgroundClip = 'text';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '';
                      e.target.style.webkitBackgroundClip = '';
                      e.target.style.webkitTextFillColor = '';
                      e.target.style.backgroundClip = '';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">
              {footerLinks.legal.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.items.map((item, index) => (
                <li key={index}>
                  <a 
                    href={getCustomUrl(item)}
                    className="text-sm text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)';
                      e.target.style.webkitBackgroundClip = 'text';
                      e.target.style.webkitTextFillColor = 'transparent';
                      e.target.style.backgroundClip = 'text';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '';
                      e.target.style.webkitBackgroundClip = '';
                      e.target.style.webkitTextFillColor = '';
                      e.target.style.backgroundClip = '';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 text-center lg:text-right">
          <p className="text-sm lg:text-lg text-white">
            <span>Copyright © 2025 Black Pebble Education- All Rights Reserved</span> 
          </p>
          <p className="text-xs lg:text-md text-white mt-2">
            Powered by{' '}
            <a 
              href="https://500x.tech/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300"
              style={{
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)';
                e.target.style.webkitBackgroundClip = 'text';
                e.target.style.webkitTextFillColor = 'transparent';
                e.target.style.backgroundClip = 'text';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '';
                e.target.style.webkitBackgroundClip = '';
                e.target.style.webkitTextFillColor = '';
                e.target.style.backgroundClip = '';
              }}
            >
              500x
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;