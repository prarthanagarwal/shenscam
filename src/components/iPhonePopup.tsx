import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';
import { pageStyles } from '../lib/utils';

const PopupHeader = () => (
  <div className="bg-[#a52121] rounded-t-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] w-full max-w-[40rem] overflow-hidden">
    <div className="px-12 pt-12 pb-8">
      <h2 className="font-['Montserrat'] text-6xl font-black text-center mb-1 text-[#fbf4eb] uppercase">
        SHENS—cam
      </h2>
      {/*<p className="euclid text-center text-gray-700 px-6 text-lg">
        phirse zaroor aana :)
      </p>*/}
    </div>
    
    <div className="border-t-2 border-gray-200"></div>
  </div>
);

const LeftButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  
  return (
    <Link 
      to="/about" 
      className={`flex-1 py-8 text-center euclid text-2xl font-semibold text-[#741717] border-r-2 bg-[#fcf9f6] transition-all duration-200 ${
        isPressed ? 'bg-gray-200' : 'hover:bg-gray-100'
      }`}
      aria-label="Go to About page"
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      About Me
    </Link>
  );
};

const RightButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  
  return (
    <Link 
      to="/work" 
      className={`flex-1 py-8 text-center euclid text-2xl font-semibold text-[#3b82f6] transition-all duration-200 ${
        isPressed ? 'bg-gray-200' : 'hover:bg-gray-100'
      }`}
      aria-label="Go to Work page"
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      Work
    </Link>
  );
};

const IPhonePopup = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="flex flex-col w-full max-w-[40rem] drop-shadow-2xl">
        <PopupHeader />
        
        <div className="flex bg-[#fcf9f6] rounded-b-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] overflow-hidden">
          <LeftButton />
          <RightButton />
        </div>
      </div>
    </div>
  );
};

export default IPhonePopup;
