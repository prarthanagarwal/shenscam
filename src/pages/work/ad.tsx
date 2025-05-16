import React from 'react';
import { useTheme } from '../../lib/ThemeContext';
import { pageStyles, themeColors } from '../../lib/utils';
import { Search } from 'lucide-react';

// Sample A.D. Work data
const adWorkItems = [
  {
    id: 1,
    youtubeId: 'vCaraww1tAk',
    title: 'Mohabbat karne wale - Tulsi Kumar',
    description: 'A visually striking music video directed for Tulsi Kumar. Direction focused on emotional storytelling and capturing the essence of the song.',
    views: '32K views',
    timeAgo: '1 month ago'
  },
  {
    id: 2,
    youtubeId: 'n2dVFdqMYGA',
    title: 'Saahiba - Aditya Rikhari',
    description: 'Music video production for talented artist Aditya Rikhari. Managed the entire production process while focusing on creating a visually compelling narrative.',
    views: '14.6K views',
    timeAgo: '3 weeks ago'
  },
  {
    id: 3,
    youtubeId: 'UOeAQEXac88',
    title: 'Chaand - Faridkot',
    description: 'Music video for Faridkot\'s "Chaand". Clean, artistic direction with carefully composed shots highlighting the band\'s performance.',
    views: '27.8K views',
    timeAgo: '2 months ago'
  },
  {
    id: 4,
    youtubeId: 'fx_dALCN1LA',
    title: 'Mann lage - Kaushik/Guddu',
    description: 'Creative direction for "Mann lage" by Kaushik and Guddu. Used innovative shooting techniques to create an engaging visual experience.',
    views: '41.2K views',
    timeAgo: '2 weeks ago'
  },
  {
    id: 5,
    youtubeId: 'NK5LWIwuZ-g',
    title: 'Beperwah - Rutvik',
    description: 'Music video for Rutvik\'s "Beperwah". Direction focused on creating a perfect blend of visuals that complement the song\'s mood and lyrics.',
    views: '15.3K views',
    timeAgo: '1 month ago'
  }
];

const ADWorkPage = () => {
  const { theme } = useTheme();
  
  return (
    <div className={pageStyles.mainBackground}>
      <div className="w-full max-w-5xl mx-auto">
        {/* Search bar style header */}
        <div className="bg-white rounded-full shadow-md mb-8 flex items-center p-2 overflow-hidden">
          <input 
            type="text" 
            readOnly
            value="crafts as an Assistant Director" 
            className="font-['Montserrat'] flex-1 px-4 py-2 text-xl outline-none"
          />
          <div className="bg-[#f8f8f8] hover:bg-[#f0f0f0] rounded-full p-2 transition-colors">
            <Search className="text-gray-500" size={20} />
          </div>
        </div>
        
        {/* YouTube-style results */}
        <div className="space-y-8">
          {adWorkItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-4 group">
              {/* Left side - Thumbnail */}
              <div className="sm:w-80 h-44 overflow-hidden rounded-xl bg-gray-100 flex-shrink-0">
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Right side - Content with no background */}
              <div className="flex-1">
                <h2 className="font-['Montserrat'] text-xl text-[#3D2314] group-hover:text-[#d1385b] transition-colors">{item.title}</h2>
                <div className="flex items-center gap-4 mt-2">
                  <span className="font-['Montserrat']">{item.views}</span>
                  <span className="text-gray-400">•</span>
                  <span className="font-['Montserrat']">{item.timeAgo}</span>
                </div>
                <p className="font-['Montserrat'] text-gray-700 line-clamp-2 sm:line-clamp-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ADWorkPage;
