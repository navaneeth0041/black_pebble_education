"use client"
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import BlackLogoWithText from './blacklogo';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigationItems = [
    { 
      label: 'For Kids', 
      href: '/for-kids',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Value of Money', href: '/value-of-money' },
        { label: 'Budgeting', href: '/budgeting' },
        { label: 'Banking Essentials', href: '/banking-essentials' },
        { label: 'Everyday Banking', href: '/everyday-banking' },
        { label: 'Credit Concepts', href: '/credit-concepts' },
        { label: 'Financial Goals', href: '/financial-goals' },
        { label: 'Financial Growth', href: '/financial-growth' },
        { label: 'Financial Wisdom', href: '/financial-wisdom' }
      ]
    },
    { 
      label: 'For Teens', 
      href: '/for-teens',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Teen Option 1', href: '/teen-option-1' },
        { label: 'Teen Option 2', href: '/teen-option-2' },
        { label: 'Teen Option 3', href: '/teen-option-3' }
      ]
    },
    { 
      label: 'Self Help Kits', 
      href: '/SelfHelp-Kit',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Finance Help Kits', href: '/SelfHelp-Kit' },
        { label: 'Business-Help-Kit 2', href: '/Business-SelfHelp-Kit' },
      ]
    },
    { 
      label: 'Finance Clubs', 
      href: '/FinanceClubs',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Club Option 1', href: '/FinanceClubs' },
        { label: 'Club Option 2', href: '/FinanceClubs-2' },
        { label: 'Club Option 3', href: '/FinanceClubs-3' }
      ]
    },
    { 
      label: 'Downloads', 
      href: '/downloads',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Download Option 1', href: '/download-option-1' },
        { label: 'Download Option 2', href: '/download-option-2' },
        { label: 'Download Option 3', href: '/download-option-3' }
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

  return (
    <header className="w-full bg-[#343434]">
      <div className="mx-auto px-10 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 lg:h-14">
          {/* Mobile: Toggle button on left */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Logo - centered on mobile, left on desktop */}
          <div className="flex items-center lg:flex-none">
            <div className="lg:hidden">
              <BlackLogoWithText logoHeight={50} textHeight={130} />
            </div>
            <div className="hidden lg:block">
              <BlackLogoWithText logoHeight={100} textHeight={200} />
            </div>
          </div>

          {/* Mobile: Call us button on right */}
          <div className="lg:hidden">
            <button className="border border-white text-white px-4 py-1.5 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-sm">
              Call us
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {/* Rounded background container for navigation */}
            <div className="rounded-full px-4 py-2 flex items-center space-x-3" style={{ backgroundColor: 'rgba(71,71,71,0.16)' }}>
              <nav className="flex items-center space-x-4">
                {navigationItems.map((item, index) => (
                  <div key={index} className="relative group">
                    <button className="flex items-center text-white px-5 py-2 rounded-full hover:bg-gray-500/70 transition-colors duration-200">
                      <span className="font-medium text-base whitespace-nowrap">{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </button>
                    {/* Dropdown */}
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-[#3a4048] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-600">
                        <div className="py-2">
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <a 
                              key={dropdownIndex}
                              href={dropdownItem.href} 
                              className="flex items-center px-4 py-3 text-gray-200 hover:bg-gray-600/70 hover:text-white transition-colors duration-200 text-sm"
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              <button className="ml-3 border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-base">
                Call us
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50" style={{ top: '60px' }}>
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
                      <span className="font-medium whitespace-nowrap">{item.label}</span>
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
                          <a 
                            key={dropdownIndex}
                            href={dropdownItem.href} 
                            className="flex items-center text-gray-300 hover:text-white hover:bg-gray-600/50 px-3 py-2 rounded-md transition-colors duration-200"
                          >
                            {dropdownItem.label}
                          </a>
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