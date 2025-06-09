'use client';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="text-white" style={{ backgroundColor: '#343434' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <Image src="/globe.svg" alt="Logo" width={40} height={40} /> 
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(71, 71, 71, 0.16)' }}>
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-gray-300">
                  <span>For Kids</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-gray-300">
                  <span>For Teens</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-gray-300">
                  <span>Self-help Kits</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-gray-300">
                  <span>Finance Clubs</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-gray-300">
                  <span>Downloads</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <button className="bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                Call us
              </button>
            </div>
          </div>
        </div>
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="#" className="block px-3 py-2 hover:bg-gray-600 rounded-md">For Kids</Link>
              <Link href="#" className="block px-3 py-2 hover:bg-gray-600 rounded-md">For Teens</Link>
              <Link href="#" className="block px-3 py-2 hover:bg-gray-600 rounded-md">Self-help Kits</Link>
              <Link href="#" className="block px-3 py-2 hover:bg-gray-600 rounded-md">Finance Clubs</Link>
              <Link href="#" className="block px-3 py-2 hover:bg-gray-600 rounded-md">Downloads</Link>
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-600 rounded-md">Call us</button>
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;