"use client"
import React, { useState } from 'react';
import { ChevronDown, Menu, X, Check } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import BlackLogoWithText from './blacklogo';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

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
        { label: 'Buisness Basics', href: '/for-teens/buisness-basics' },
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
    setActiveDropdown(null);
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
    <header className="w-full bg-[#343434]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex items-center justify-between h-12 lg:h-14">
          {/* Mobile: Toggle button on left with proper spacing */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Logo - centered on mobile with proper spacing, left on desktop */}
          <div className="flex-1 flex justify-center lg:flex-none lg:justify-start">
            <div className="lg:hidden">
              <Link href="/" className="block">
                <BlackLogoWithText logoHeight={40} textHeight={100} />
              </Link>
            </div>
            <div className="hidden lg:block">
              <Link href="/" className="block">
                <BlackLogoWithText logoHeight={80} textHeight={200} />
              </Link>
            </div>
          </div>

          {/* Mobile: Call us button on right with proper spacing */}
          <div className="lg:hidden flex-shrink-0 relative group">
            <button className="border border-white text-white px-3 py-1.5 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-xs sm:text-sm">
              Call us
            </button>
            {/* Phone number tooltip for mobile */}
            <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap">
              +91-8928557529
              {/* Arrow pointing up */}
              <div className="absolute bottom-full right-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {/* Rounded background container for navigation */}
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
                              {/* Line separator - don't show after last item */}
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
                <button className="ml-3 border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-base">
                  Call us
                </button>
                {/* Phone number tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-[#343434] text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap border border-gray-600 shadow-xl z-50">
                  +91-8928557529
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50" style={{ top: '68px' }}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={toggleMobileMenu}></div>
            
            {/* Menu Panel */}
            <div className="absolute left-0 top-0 w-80 max-w-[90vw] h-full bg-[#3a4048] shadow-xl">
              <div className="p-4 space-y-2 overflow-y-auto h-full">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    <button
                      onClick={() => item.hasDropdown && toggleDropdown(index)}
                      className="flex items-center justify-between w-full text-left text-white hover:text-gray-300 hover:bg-gray-600/50 px-3 py-3 rounded-md transition-colors duration-200"
                    >
                      <span 
                        className="font-medium whitespace-nowrap flex items-center"
                        style={getMainNavTextStyle(item)}
                      >
                        {item.label}
                        {isMainNavActive(item) && (
                          <Check className="ml-2 h-4 w-4" style={getMainNavTextStyle(item)} />
                        )}
                      </span>
                      {item.hasDropdown && (
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`} 
                        />
                      )}
                    </button>
                    {item.hasDropdown && activeDropdown === index && (
                      <div className="pl-6 space-y-1 bg-[#2d333a] rounded-lg ml-2 mr-2 py-2">
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <React.Fragment key={dropdownIndex}>
                            {dropdownItem.download ? (
                              <button 
                                onClick={() => handleDownloadClick(dropdownItem.href, dropdownItem.label)}
                                className="flex items-center w-full text-left text-gray-300 hover:text-white hover:bg-gray-600/50 px-3 py-2 rounded-md transition-colors duration-200"
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
                                className="flex items-center text-gray-300 hover:text-white hover:bg-gray-600/50 px-3 py-2 rounded-md transition-colors duration-200"
                              >
                                <span className="flex items-center" style={getTextStyle(dropdownItem.href)}>
                                  {dropdownItem.label}
                                  {isActivePage(dropdownItem.href) && (
                                    <Check className="ml-2 h-3 w-3" style={getTextStyle(dropdownItem.href)} />
                                  )}
                                </span>
                              </a>
                            )}
                            {/* Line separator - don't show after last item */}
                            {dropdownIndex < item.dropdownItems.length - 1 && (
                              <div className="mx-3 border-b border-gray-600/50"></div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;