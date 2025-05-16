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
    key: 'Brands',
    title: 'Brands',
    cover: '/albums/brands.jpg',
    count: 5,
    categories: [
      {
        title: 'Life&Jam',
        items: [
          {
            name: 'Video 1',
            url: 'https://www.instagram.com/reel/DGFnzNHCcZt/?igsh=MWE3azZ5anJ5MXBwNg=='
          },
          {
            name: 'Video 2',
            url: 'https://www.instagram.com/reel/DGA3QkmS7L-/?igsh=MW5zYWljN3lxMjdnMA=='
          },
          {
            name: 'Video 3',
            url: 'https://www.instagram.com/reel/DGM2ZRLyiQS/?igsh=MWJ2YzExc2Q4cXFkeg=='
          }            
        ]
      },
      {
        title: 'Roology',
        items: [
          {
            name: 'Video 1',
            url: 'https://www.instagram.com/reel/DItixgvgFFG/?igsh=MXhsaWZ6cGx0N2ppcQ=='
          },
          {
            name: 'Video 2',
            url: 'https://www.instagram.com/reel/DJb5HVttqHl/?igsh=amJ3eGE0NGgyNmZ5'
          },
          {
            name: 'Video 3',
            url: 'https://www.instagram.com/reel/DI6SLz2gaic/?igsh=aWtxNjRqazN5bWJu'
          },
          {
            name: 'Video 4',
            url: 'https://www.instagram.com/reel/DIEXPW0tkn-/?igsh=NzYzNTc2ZDZlcGN3'
          }
        ]
      },
      {
        title: 'Nykaa',
        items: [
          {
            name: 'Video 1',
            url: 'https://www.instagram.com/reel/DIdWs0HRtbY/?igsh=MTdhbnUxcm4wNzM4NQ=='
          }
        ]
      },
      {
        title: 'Under The Sun',
        items: [
          {
            name: 'Video 1',
            url: 'https://www.instagram.com/reel/DGIjlTjo3gD/?igsh=MWZoNXAwMDBhcHBwMA=='
          },
          {
            name: 'Video 2',
            url: 'https://www.instagram.com/reel/DF9qDScITJd/?igsh=MXE4cXF3dncxMWtrOA=='
          },
          {
            name: 'Video 3',
            url: 'https://www.instagram.com/reel/DFwvn52IcYz/?igsh=eXlxZ2Jrc3I1bG9h'
          },
          {
            name: 'Video 4',
            url: 'https://www.instagram.com/reel/DDwpH37o11h/?igsh=aXh1cGJoZHB0NTRo'
          }
        ]
      },
      {
        title: 'OSMO India',
        items: [
          {
            name: 'Video 1',
            url: 'https://www.instagram.com/reel/DEhtfjPy7Z_/?igsh=Y3Npa3g0aWR0cGc2'
          },
          {
            name: 'Video 2',
            url: 'https://www.instagram.com/reel/DEFM7OWSgZc/?igsh=NmUydGFxZDhiamN6'
          }
        ]
      }
    ]
  },
  {
    key: 'Creators',
    title: 'Creators',
    cover: '/albums/Creators.jpg',
    count: 3,
    categories: [
      {
        title: 'Anshula Kapoor',
        items: [
          {
            name: 'Wellbeing Nutrition',
            url: 'https://www.instagram.com/reel/DIYpo64NJsA/?igsh=cHQ4Z2M1emx2N2p5'
          },
          {
            name: 'AxisY',
            url: 'https://www.instagram.com/reel/DIWPEnlNAxZ/?igsh=MWJscWliam92Z3BxbQ=='
          }
        ]
      },
      {
        title: 'Swanky Mag',
        items: [
          {
            name: 'Video 1',
            url: 'https://www.instagram.com/reel/DFdae0Yt5yX/?igsh=MThjbTJ0cGc0bjFndw=='
          }
        ]
      }
    ]
  },
  {
    key: 'Screenings',
    title: 'Screenings',
    cover: '/albums/Screenings.jpg',
    count: 1,
    categories: [
      {
        title: 'JioHostar',
        items: [
          {
            name: 'Daredevil',
            url: 'https://www.instagram.com/reel/DGvWlTDq2yV/?igsh=MTV6NHB5MXloZndmag=='
          }
        ]
      }
    ]
  }
];

const EditWorkPage = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className={pageStyles.mainBackground}>
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="font-['Montserrat'] text-3xl font-bold mb-8 text-[#3D2314] text-left">Edit Work</h1>
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
                          <div className="grid grid-cols-2 gap-2">
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
                      <div className="grid grid-cols-2 gap-2">
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

export default EditWorkPage; 