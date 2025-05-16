import React, { useState } from 'react';
import { pageStyles } from '../../lib/utils';
import Card from '../../components/iphone-card';

interface Item {
  name: string;
  url: string;
  description?: string;
}

interface Category {
  title: string;
  items: Item[];
}

interface Album {
  key: string;
  title: string;
  cover: string;
  count: number;
  categories?: Category[];
  items?: Item[];
}

const albums: Album[] = [
  {
    key: 'brands',
    title: 'Brands',
    cover: '/albums/brands.jpg',
    count: 6,
    items: [
      {
        name: 'Bumble × Puma Marathon',
        url: 'https://www.instagram.com/reel/DGIywqcPNJ4/?igsh=ODQxNjN6bHE4ODhz'
      },
      {
        name: 'Swanky Mag',
        url: 'https://www.instagram.com/reel/DFdae0Yt5yX/?igsh=MThjbTJ0cGc0bjFndw=='
      },
      {
        name: 'Under The Sun Shop',
        url: 'https://www.instagram.com/reel/DBlpZW2ot1f/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
      },
      {
        name: 'Keya Foods',
        url: 'https://www.instagram.com/reel/C-xcSkjPQjB/?igsh=MXI0NXY3bzU1MGtmcw=='
      },
      {
        name: 'OSMO India',
        url: 'https://www.instagram.com/reel/DEhtfjPy7Z_/?igsh=Y3Npa3g0aWR0cGc2'
      },
      {
        name: 'OSMO India (2)',
        url: 'https://www.instagram.com/reel/DEFM7OWSgZc/?igsh=NmUydGFxZDhiamN6'
      },
      {
        name: 'Muskhave',
        url: 'https://www.instagram.com/reel/DItndOZSwQ6/?igsh=MXFieXIyeTQ1NHg3eg=='
      }
    ]
  },
  {
    key: 'Screenings',
    title: 'Screenings',
    cover: '/albums/Screenings.jpg',
    count: 4,
    categories: [
      {
        title: 'JioHostar',
        items: [
          {
            name: 'Koffee with Karan',
            url: 'https://www.instagram.com/reel/C0eKSq2Bgvs/?igsh=MXhqMGJ1eGk3N2V1OQ=='
          },
          {
            name: 'Apurva',
            url: 'https://www.instagram.com/reel/CzvQfMDIzeO/?igsh=bzEyNWZ0bGR4c293'
          },
          {
            name: 'Daredevil',
            url: 'https://www.instagram.com/reel/DGvWlTDq2yV/?igsh=MTV6NHB5MXloZndmag=='
          },
          {
            name: 'The Secret of Shiledars',
            url: 'https://www.instagram.com/reel/DFcXF-eM2tQ/?igsh=MXZ3NG5iMmw5MmRtNg=='
          }
        ]
      }
    ]
  },
  {
    key: 'Creators',
    title: 'Creators',
    cover: '/albums/Creators.jpg',
    count: 6,
    items: [
      {
        name: 'The Uno Plate',
        url: 'https://www.instagram.com/reel/C95E4gSiRK3/?igsh=MXBuYnljaDNidDVqMA=='
      },
      {
        name: 'Madhur Sharma',
        url: 'https://www.instagram.com/reel/DBLSewkpMUS/?igsh=MXRxOGVxNWJsODh2cQ=='
      },
      {
        name: 'Anshula Kapoor - Wellbeing Nutrition',
        url: 'https://www.instagram.com/reel/DIYpo64NJsA/?igsh=cHQ4Z2M1emx2N2p5'
      },
      {
        name: 'Anshula Kapoor - AxisY',
        url: 'https://www.instagram.com/reel/DIWPEnlNAxZ/?igsh=MWJscWliam92Z3BxbQ=='
      }
    ]
  },
  {
    key: 'musicVideos',
    title: 'Music Videos',
    cover: '/albums/music.jpg',
    count: 1,
    items: [
      {
        name: 'Haathon Mein Haath - T Series (DOP)',
        url: 'https://www.youtube.com/watch?v=aCsBytd339Y&feature=youtu.be',
      },
      {
        name: 'Nasha - Zellix (BTS)',
        url: 'https://www.instagram.com/reel/DFfYsBtNyqU/?igsh=MTJvdDZ4eWxqZzQyZg==',
      }
    ]
  }
];

const ShotOnCamPage = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className={pageStyles.mainBackground}>
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="font-['Montserrat'] text-3xl font-bold mb-8 text-[#3D2314] text-left">Shot on Cam</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div key={album.key} className="flex flex-col items-center">
              <div 
                onClick={() => {
                  setExpanded(expanded === album.key ? null : album.key);
                }}
              >
                <Card title={album.title} cover={album.cover} />
              </div>
              <div className="mt-4 text-center">
                <div className="font-['Montserrat'] text-base text-[#3D2314] font-semibold">{album.title}</div>
                <div className="font-['Montserrat'] text-xs text-gray-500">{album.count} items</div>
              </div>
              {/* Expandable Lists */}
              {expanded === album.key && (
                <div className="mt-4 w-full bg-white/90 rounded-xl shadow p-4">
                  <div className="grid grid-cols-1 gap-4">
                    {album.categories ? (
                      // For categorized content (like Screenings)
                      album.categories.map((category) => (
                        <div key={category.title}>
                          <h3 className="font-['Montserrat'] text-sm font-semibold text-[#3D2314] mb-2">{category.title}</h3>
                          <div className="grid grid-cols-1 gap-2">
                            {category.items.map((item) => (
                              <a
                                key={item.name}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-['Montserrat'] text-[#3D2314] text-sm px-2 py-1 rounded hover:bg-[#ffebb5] cursor-pointer transition-colors"
                              >
                                {item.name}
                                {item.description && (
                                  <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      // For uncategorized content (other albums)
                      <div className="grid grid-cols-1 gap-2">
                        {album.items?.map((item) => (
                          <a
                            key={item.name}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-['Montserrat'] text-[#3D2314] text-sm px-2 py-1 rounded hover:bg-[#ffebb5] cursor-pointer transition-colors"
                          >
                            {item.name}
                            {item.description && (
                              <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
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

export default ShotOnCamPage;
