import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';
import { pageStyles, themeColors, cn } from '../lib/utils';
import Card from '../components/folder-card';

const WorkFolders = [
  { title: 'Camera Work', path: '/work/cam' },
  { title: 'Shot on iPhone', path: '/work/iphone' },
  { title: 'Edit Work', path: '/work/edit' },
  { title: 'Production Work', path: '/work/production' },
  { title: 'A.D. Work', path: '/work/ad' },
  { title: 'Photos', path: '/work/photos' },
];

const Work = () => {
  const { theme } = useTheme();

  return (
    <div className={pageStyles.mainBackground}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <h1 className="font-['Montserrat'] text-5xl font-black text-center mb-8 text-[#a52121] tracking-[-.05e]">
          Kaam
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x--3 gap-y-10">
          {WorkFolders.map((folder) => (
            <Link 
              key={folder.path}
              to={folder.path}
              className="flex flex-col items-center group"
            >
              <div className="w-60 h-40 mt-10 transition-transform transform group-hover:scale-105">
                <Card />
              </div>
              <h2 className="font-['Montserrat'] text-l text-center text-[#000000] mt-1">{folder.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
