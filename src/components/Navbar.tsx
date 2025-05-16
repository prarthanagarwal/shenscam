import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, User, Archive } from '@phosphor-icons/react';
import { pageStyles, themeColors } from '../lib/utils';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Hide navbar on index page
  if (currentPath === '/') {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fbf4eb] border-b border-[#d3cabd]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left Section */}
        <div>
          <Link 
            to="/" 
            className="font-['Montserrat'] flex items-center gap-2 group text-[#1d1306] hover:underline decoration-1 underline-offset-4 transition-all"
          >
            <ArrowLeft size={20} className="text-[#1d1306] opacity-80 group-hover:opacity-100 transition-opacity" weight="bold" />
            <span className="text-lg">Home</span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          <Link 
            to="/about" 
            className={`font-['Montserrat'] flex items-center gap-2 group text-[#1d1306] ${currentPath !== '/about' && 'hover:underline'} decoration-1 underline-offset-4 transition-all`}
          >
            <User 
              size={20} 
              className={`${currentPath === '/about' ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'} transition-opacity`}
              weight={currentPath === '/about' ? 'duotone' : 'regular'} 
            />
            <span className="text-lg">Me</span>
          </Link>
          
          <Link 
            to="/work" 
            className={`font-['Montserrat'] flex items-center gap-2 group text-[#1d1306] ${!currentPath.startsWith('/work') && 'hover:underline'} decoration-1 underline-offset-4 transition-all`}
          >
            <Archive 
              size={20} 
              className={`${currentPath.startsWith('/work') ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'} transition-opacity`}
              weight={currentPath.startsWith('/work') ? 'duotone' : 'regular'} 
            />
            <span className="text-lg">Work</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 