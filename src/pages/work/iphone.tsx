import React, { useState } from 'react';
import { pageStyles } from '../../lib/utils';
import Card from '../../components/iphone-card';

const albums = [
  {
    key: 'Creators',
    title: 'Creators',
    cover: '/albums/Creators.jpg',
    count: 10,
    creators: [
      {
        name: 'Anshula Kapoor',
        url: 'https://www.instagram.com/reel/DJeaaeztNZk/?igsh=MXRyZGpraXVyeHB2ZA=='
      },
      {
        name: 'Angoori Babe',
        url: 'https://www.instagram.com/reel/CsL7A6-hFrN/?igsh=cWFlYzhhczJmaXNo'
      },
      {
        name: 'TheUnoPlate',
        url: 'https://www.instagram.com/reel/C7wY-E3CFrO/?igsh=MWZhZnpwNWZhZWp2dQ=='
      },
      {
        name: 'Eshviv',
        url: 'https://www.instagram.com/reel/DF2yziBqVuw/?igsh=MTZ1MjcxaXNyMGQwNw=='
      }
    ]
  },
  {
    key: 'lfw',
    title: 'Lakme Fashion Week',
    cover: '/albums/lfw.jpg',
    count: 9,
    brands: [
      {
        name: 'Tarun Tahiliani',
        url: 'https://www.instagram.com/reel/Cpnk-tajukR/?igsh=d2V1eW5lOTVmcWV6'
      },
      {
        name: 'Abhishek Sharma',
        url: 'https://www.instagram.com/reel/CppmuvhDw8j/?igsh=Nm00djJkN3JxbnVq'
      },
      {
        name: 'R.Elan',
        url: 'https://www.instagram.com/reel/CpkbGlADGSN/?igsh=MTU4bG5kc2UyaXhuZA=='
      },
      {
        name: 'OneInfinite',
        url: 'https://www.instagram.com/reel/Cpr6bTQO4h4/?igsh=MnB1ZXlhZmJqc28x'
      },
      {
        name: 'Anavila',
        url: 'https://www.instagram.com/reel/CpkFYqDNKvc/?igsh=MWV0bDd1ODk2a3IzcQ=='
      },
      {
        name: 'Akaaro',
        url: 'https://www.instagram.com/reel/CpkpyY6OSAg/?igsh=YnBndHpzcWJjZ3dr'
      },
      {
        name: 'Khaadi India',
        url: 'https://www.instagram.com/reel/CplCdBbutsK/?igsh=NGg5ZDBycnRhYm9y'
      },
      {
        name: 'Deme',
        url: 'https://www.instagram.com/reel/CpmqYB5PRX9/?igsh=MWZwZXE2NGd6cjFicg=='
      },
      {
        name: 'Line Outline',
        url: 'https://www.instagram.com/reel/CpmswHrNO7s/?igsh=NTVtYmd0bG1kYndz'
      }
    ]
  },
  {
    key: 'brands',
    title: 'Brands',
    cover: '/albums/brands.jpg',
    count: 10,
    brands: [
      {
        name: 'Swiggy Genie',
        url: 'https://www.instagram.com/reel/CwFz3TfIX_7/?igsh=MWN0NHAycGRpaGcwcw=='
      },
      {
        name: 'Tinder India',
        url: 'https://www.instagram.com/reel/Cp2WO_6JKy6/?igsh=Mmw2d3lxb2N2N2M3'
      },
      {
        name: 'Subway India',
        url: 'https://www.instagram.com/reel/Cp7ooevP831/?igsh=MWk2aHd5cGVzZTBnMA=='
      },
      {
        name: 'Sketchers India',
        url: 'https://www.instagram.com/reel/C4hhsuJyqIV/?igsh=MWRjcG5ndjJva2JxaA=='
      },
      {
        name: 'LG India',
        url: 'https://www.instagram.com/reel/C4kGc3dSTNN/?igsh=OXJhc2ZlZTVyMHBq'
      },
      {
        name: 'JayWalking',
        url: 'https://www.instagram.com/reel/CtWR2ZTPCj-/?igsh=Y2N5MHQ2c2M2dnE='
      },
      {
        name: 'CocoCart&Cafe',
        url: 'https://www.instagram.com/things2doinmumbai/reel/CuW9P_rNxAM/?hl=en'
      },
      {
        name: 'Prestige',
        url: 'https://www.instagram.com/reel/DBGsTfYOePK/?igsh=a2lmczZrMWNrMGZi'
      }
    ]
  },
];

const twitchAnim =
  'hover:animate-twitch focus:animate-twitch transition-transform duration-150';

// Add the twitch animation to Tailwind via global CSS or use inline keyframes
// Here, we use inline style for demo
const style = `
@keyframes twitch {
  0% { transform: rotate(-2deg) scale(1.02); }
  20% { transform: rotate(2deg) scale(0.98); }
  40% { transform: rotate(-1deg) scale(1.01); }
  60% { transform: rotate(1deg) scale(0.99); }
  80% { transform: rotate(-1deg) scale(1.01); }
  100% { transform: rotate(0deg) scale(1); }
}
.animate-twitch { animation: twitch 0.25s linear; }
`;

const ShotOnIphonePage = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className={pageStyles.mainBackground}>
      <style>{style}</style>
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="vendya text-3xl font-bold mb-8 text-[#3D2314] text-left">Shot on iPhone</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div key={album.key} className="flex flex-col items-center">
              <div 
                onClick={() => {
                  if (album.key === 'brands' || album.key === 'Creators' || album.key === 'lfw') {
                    setExpanded(expanded === album.key ? null : album.key);
                  }
                }}
              >
                <Card title={album.title} cover={album.cover} />
              </div>
              <div className="mt-4 text-center">
                <div className="font-['Montserrat'] text-base text-[#3D2314] font-semibold">{album.title}</div>
                <div className="font-['Montserrat'] text-xs text-gray-500">{album.count}</div>
              </div>
              {/* Expandable Lists */}
              {(album.key === 'brands' && expanded === 'brands' || 
                album.key === 'Creators' && expanded === 'Creators' || 
                album.key === 'lfw' && expanded === 'lfw') && (
                <div className="mt-4 w-full bg-white/90 rounded-xl shadow p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {album.brands?.map((brand) => (
                      <a
                        key={brand.name}
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Montserrat'] text-[#3D2314] text-sm px-2 py-1 rounded hover:bg-[#ffebb5] cursor-pointer transition-colors"
                      >
                        {brand.name}
                      </a>
                    ))}
                    {album.creators?.map((creator) => (
                      <a
                        key={creator.name}
                        href={creator.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Montserrat'] text-[#3D2314] text-sm px-2 py-1 rounded hover:bg-[#ffebb5] cursor-pointer transition-colors"
                      >
                        {creator.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShotOnIphonePage; 