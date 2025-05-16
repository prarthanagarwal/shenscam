import React from 'react';
import { useTheme } from '../../lib/ThemeContext';
import { pageStyles, themeColors } from '../../lib/utils';
import { Search } from 'lucide-react';

// Sample Production Work data
const productionWorkItems = [
  {
    id: 1,
    youtubeId: 'HRWjuYYQ5t8',
    title: 'Kasam se - Armaan Malik',
    description: '• Full production management for Armaan Malik\'s music video\n• Coordinated lighting, cinematography, and art direction\n• Ensured seamless workflow between pre and post-production',
    views: '38.5K views',
    timeAgo: '6 weeks ago'
  },
  {
    id: 2,
    youtubeId: 'EX7458q7TrE',
    title: 'Badastoor - Abhinay Verma',
    description: '• Managed complete production process for Abhinay Verma\'s video\n• Oversaw location scouting and set design\n• Directed camera movements and visual storytelling',
    views: '51.2K views',
    timeAgo: '1 month ago'
  },
  {
    id: 3,
    youtubeId: 'BRd_kjsghN4',
    title: 'Buri nazar - Aanchal Tyagi',
    description: '• Led production team for Aanchal Tyagi\'s music video\n• Handled scheduling and resource management\n• Supervised editing and post-production workflow',
    views: '22.7K views',
    timeAgo: '3 months ago'
  },
  {
    id: 4,
    youtubeId: 'B0H_9kt62tk',
    title: 'Mafia - Jai dhir',
    description: '• Executed full-scale production for Jai dhir\'s "Mafia"\n• Coordinated between multiple production units\n• Managed equipment logistics and technical requirements',
    views: '19.3K views',
    timeAgo: '2 weeks ago'
  },
  {
    id: 5,
    youtubeId: 'mZfFtRSOAUc',
    title: 'Nasha - Zellix',
    description: '• Directed production process for Zellix\'s "Nasha"\n• Implemented creative vision through careful shot selection\n• Managed post-production timeline and deliverables',
    views: '25.1K views',
    timeAgo: '1 month ago'
  }
];

const ProductionWorkPage = () => {
  const { theme } = useTheme();
  
  return (
    <div className={pageStyles.mainBackground}>
      <div className="w-full max-w-5xl mx-auto">
        {/* Search bar style header */}
        <div className="bg-white rounded-full shadow-md mb-8 flex items-center p-2 overflow-hidden">
          <input 
            type="text" 
            readOnly
            value="Production Work" 
            className="font-['Montserrat'] flex-1 px-4 py-2 text-xl outline-none"
          />
          <div className="bg-[#f8f8f8] hover:bg-[#f0f0f0] rounded-full p-2 transition-colors">
            <Search className="text-gray-500" size={20} />
          </div>
        </div>
        
        {/* YouTube-style results */}
        <div className="space-y-8">
          {productionWorkItems.map((item) => (
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

export default ProductionWorkPage;
