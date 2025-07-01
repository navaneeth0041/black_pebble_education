"use client"
import React, { useState } from 'react';
import { ChevronDown, Menu, X, Check } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import BlackLogoWithText from './blacklogo';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(0);
  const pathname = usePathname();

  // Effect to add/remove body class for content shifting
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { 
      label: 'For Kids', 
      href: '/for-kids',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Value of Money', href: '/kids/value-of-money' },
        { label: 'Budgeting', href: '/kids/budgeting' },
        { label: 'Banking Essentials', href: '/kids/banking-essentials' },
        { label: 'Everyday Banking', href: '/kids/everyday-banking' },
        { label: 'Credit Concepts', href: '/kids/credit-concepts' },
        { label: 'Financial Goals', href: '/kids/financial-goals' },
        { label: 'Financial Growth', href: '/kids/financial-growth' },
        { label: 'Financial Wisdom', href: '/kids/financial-wisdom' }
      ]
    },
    { 
      label: 'For Teens', 
      href: '/for-teens',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Value of Money', href: '/for-teens/value-of-money' },
        { label: 'Banking Essentials', href: '/for-teens/banking-essentials' },
        { label: 'Credit Concepts', href: '/for-teens/credit-concepts' },
        { label: 'Financial Freedom', href: '/for-teens/financial-freedom' },
        { label: 'Financial Excellence', href: '/for-teens/financial-excellence' },
        { label: 'Risks & Insurance', href: '/for-teens/risks-insurance' },
        { label: 'Financial Wisdom', href: '/for-teens/financial-wisdom' },
        { label: 'Business Basics', href: '/for-teens/business-basics' },
      ]
    },
    { 
      label: 'Self Help Kits', 
      href: '/SelfHelp-Kit',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Financial Literacy Kit', href: '/SelfHelp-Kit' },
        { label: 'Business Literacy Kit', href: '/Business-SelfHelp-Kit' },
      ]
    },
    { 
      label: 'Finance Clubs', 
      href: '/FinanceClubs',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Kid\'s Club', href: '/FinanceClubs' },
        { label: 'Teen\'s Club', href: '/FinanceClubs-Teens' }
      ]
    },
    { 
      label: 'Downloads', 
      href: '/downloads',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Lunchbox Notes', href: './downloads/Lunchbox Notes.pdf', download: true, type: 'pdf' },
        { label: 'Spread the Word', href: './downloads/WhatsApp Video 2025-06-20 at 16.52.05.mp4', download: true, type: 'video' },
      ]
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setActiveDropdown(null); // Don't auto-expand any dropdown
    } else {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const isActivePage = (href) => {
    return pathname === href;
  };

  const isMainNavActive = (item) => {
    if (!item.hasDropdown) {
      return pathname === item.href;
    }
    
    if (pathname === item.href) {
      const isInDropdown = item.dropdownItems.some(dropdownItem => dropdownItem.href === pathname);
      return !isInDropdown;
    }
    
    return false;
  };

  const getTextStyle = (href) => {
    if (isActivePage(href)) {
      return {
        background: 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      };
    }
    return {};
  };

  const getMainNavTextStyle = (item) => {
    if (isMainNavActive(item)) {
      return {
        background: 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      };
    }
    return {};
  };

  const getCheckmarkStyle = () => {
    return {
      background: 'linear-gradient(107deg, #08A69A 0%, #0ABE9D 54%, #69C9A1 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    };
  };

  const handleDownloadClick = (href, fileName) => {
    window.open(href, '_blank', 'noopener,noreferrer');
    
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName || '';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Mobile Header Bar - Hidden when sidebar is open */}
      {!isMobileMenuOpen ? (
        <header className="lg:hidden w-full bg-[#343434] relative z-40">
        <div className="px-4"> 
          <div className="flex items-center justify-between">
            {/* Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo - Increased size */}
            <Link href="/" className="block">
              <BlackLogoWithText logoHeight={50} textHeight={125} />
            </Link>

            {/* Call us button */}
            <div className="relative group">
              <a 
                href="tel:+918928557529"
                className="border border-white text-white px-3 py-1.5 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-xs inline-block"
              >
                Call us
              </a>
              <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap">
                +91-8928557529
                <div className="absolute bottom-full right-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
        </header>
      ) : (
        // Invisible spacer to maintain content position when sidebar is open - Reduced height
        <div className="lg:hidden w-full h-[70px]"></div>
      )}

      {/* Desktop Header */}
      <header className="hidden lg:block w-full bg-[#343434]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex items-center justify-between h-12 lg:h-14">
            {/* Logo */}
            <div className="flex-none">
              <Link href="/" className="block">
                <BlackLogoWithText logoHeight={80} textHeight={200} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center">
              <div className="rounded-full px-4 py-2 flex items-center space-x-3" style={{ backgroundColor: 'rgba(71,71,71,0.16)' }}>
                <nav className="flex items-center space-x-4">
                  {navigationItems.map((item, index) => (
                    <div key={index} className="relative group">
                      <button className="flex items-center text-white px-5 py-2 rounded-full hover:bg-gray-500/70 transition-colors duration-200">
                        <span 
                          className="font-medium text-base whitespace-nowrap flex items-center"
                          style={getMainNavTextStyle(item)}
                        >
                          {item.label}
                          {isMainNavActive(item) && (
                            <Check className="ml-2 h-4 w-4" style={getMainNavTextStyle(item)} />
                          )}
                        </span>
                        {item.hasDropdown && (
                          <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                        )}
                      </button>
                      {/* Dropdown */}
                      {item.hasDropdown && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-[#343434] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-600">
                          <div className="py-2">
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <React.Fragment key={dropdownIndex}>
                                {dropdownItem.download ? (
                                  <button 
                                    onClick={() => handleDownloadClick(dropdownItem.href, dropdownItem.label)}
                                    className="flex items-center w-full text-left px-4 py-3 text-gray-200 hover:bg-gray-600/70 hover:text-white transition-colors duration-200 text-sm"
                                  >
                                    <span className="flex items-center" style={getTextStyle(dropdownItem.href)}>
                                      {dropdownItem.label}
                                      {isActivePage(dropdownItem.href) && (
                                        <Check className="ml-2 h-3 w-3" style={getTextStyle(dropdownItem.href)} />
                                      )}
                                    </span>
                                  </button>
                                ) : (
                                  <a 
                                    href={dropdownItem.href} 
                                    className="flex items-center px-4 py-3 text-gray-200 hover:bg-gray-600/70 hover:text-white transition-colors duration-200 text-sm"
                                  >
                                    <span className="flex items-center" style={getTextStyle(dropdownItem.href)}>
                                      {dropdownItem.label}
                                      {isActivePage(dropdownItem.href) && (
                                        <Check className="ml-2 h-3 w-3" style={getTextStyle(dropdownItem.href)} />
                                      )}
                                    </span>
                                  </a>
                                )}
                                {dropdownIndex < item.dropdownItems.length - 1 && (
                                  <div className="mx-4 border-b border-gray-600/50"></div>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                
                <div className="relative group">
                  <a 
                    href="tel:+918928557529"
                    className="ml-3 border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-base inline-block"
                  >
                    Call us
                  </a>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-[#343434] text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap border border-gray-600 shadow-xl z-50">
                    +91-8928557529
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Sidebar */}
      <div className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Sidebar Header - Extends across top like inverted L */}
        <div className="mobile-sidebar-header absolute top-0 left-0 right-0 flex items-center px-4 bg-[#1a1a1a] min-h-[50px] z-10">
          {/* Logo aligned to left */}
          <Link href="/" className="flex-shrink-0">
            <BlackLogoWithText logoHeight={50} textHeight={85} />
          </Link>
          
          {/* Close button - simple X icon */}
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300 transition-colors duration-200 p-1 ml-auto"
          >
            <span className="text-3xl font-light">×</span>
          </button>
        </div>

        {/* Gap between header and content with black background */}
        <div className="absolute top-[50px] left-0 right-0 h-4 bg-[#1a1a1a] z-5"></div>

        {/* Left Sidebar Navigation - Fixed height with proper layout */}
        <div className="w-52 max-w-[70vw] bg-[#1a1a1a] h-screen flex flex-col relative shadow-xl">
          {/* Navigation content - scrollable area with fixed height */}
          <div className="flex-1 overflow-y-auto pt-[74px]" style={{ maxHeight: 'calc(100vh - 120px)' }}>
            <div className="px-4 py-2">
              {navigationItems.map((item, index) => (
                <div key={index} className="mb-2">
                  {/* Main navigation item with conditional styling */}
                  <div className={`rounded-lg ${activeDropdown === index ? '' : ''}`} style={{ backgroundColor: activeDropdown === index ? '#343434' : 'transparent' }}>
                    <button
                      onClick={() => item.hasDropdown && toggleDropdown(index)}
                      className={`flex items-center justify-between w-full text-left text-white px-4 py-3 transition-colors duration-200 hover:bg-gray-600/20 ${
                        activeDropdown === index ? 'rounded-t-lg' : 'rounded-lg'
                      }`}
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '140%',
                        letterSpacing: '-1.9%',
                        textAlign: 'left',
                        backgroundColor: activeDropdown === index ? '#FFFFFF40' : 'transparent'
                      }}
                    >
                      <span 
                        className="flex items-center"
                        style={getMainNavTextStyle(item)}
                      >
                        {item.label}
                        {isMainNavActive(item) && (
                          <Check className="ml-2 h-4 w-4" style={getMainNavTextStyle(item)} />
                        )}
                      </span>
                      {item.hasDropdown && (
                        <ChevronDown 
                          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`} 
                        />
                      )}
                    </button>
                    
                    {/* Expanded dropdown items */}
                    {item.hasDropdown && activeDropdown === index && (
                      <div className="rounded-b-lg px-2 pb-2" style={{ backgroundColor: '#343434' }}>
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <React.Fragment key={dropdownIndex}>
                            {dropdownItem.download ? (
                              <button 
                                onClick={() => handleDownloadClick(dropdownItem.href, dropdownItem.label)}
                                className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white px-4 py-2 transition-colors duration-200 hover:bg-gray-600/40 rounded-lg mb-1"
                                style={{
                                  fontFamily: 'Poppins, sans-serif',
                                  fontWeight: 400,
                                  fontSize: '14px',
                                  lineHeight: '20px',
                                  letterSpacing: '0%',
                                  verticalAlign: 'middle'
                                }}
                              >
                                <span style={getTextStyle(dropdownItem.href)}>
                                  {dropdownItem.label}
                                </span>
                                {isActivePage(dropdownItem.href) && (
                                  <Check className="h-4 w-4 flex-shrink-0" style={getCheckmarkStyle()} />
                                )}
                              </button>
                            ) : (
                              <a 
                                href={dropdownItem.href} 
                                className="flex items-center justify-between text-gray-300 hover:text-white px-4 py-2 transition-colors duration-200 hover:bg-gray-600/40 rounded-lg mb-1 block"
                                onClick={toggleMobileMenu}
                                style={{
                                  fontFamily: 'Poppins, sans-serif',
                                  fontWeight: 400,
                                  fontSize: '14px',
                                  lineHeight: '20px',
                                  letterSpacing: '0%',
                                  verticalAlign: 'middle'
                                }}
                              >
                                <span style={getTextStyle(dropdownItem.href)}>
                                  {dropdownItem.label}
                                </span>
                                {isActivePage(dropdownItem.href) && (
                                  <Check className="h-4 w-4 flex-shrink-0" style={getCheckmarkStyle()} />
                                )}
                              </a>
                            )}
                            {/* White horizontal separation line */}
                            {dropdownIndex < item.dropdownItems.length - 1 && (
                              <div className="mx-2 border-b border-white/20 my-1"></div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call us button - Absolutely positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#1a1a1a] border-t border-transparent">
            <div className="relative group">
              <a 
                href="tel:+918928557529"
                className="w-full border border-white text-white px-4 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-base inline-block text-center"
              >
                Call us
              </a>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap">
                +91-8928557529
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for closing sidebar when clicking outside - only covers the shifted content area */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 left-56 bg-transparent z-30"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Header;