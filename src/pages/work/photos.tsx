import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../lib/ThemeContext';
import { pageStyles, themeColors } from '../../lib/utils';
import { Loader } from 'lucide-react';

// Sample photos data
const generatePhotos = (startIndex: number, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: startIndex + i,
    url: `https://source.unsplash.com/random/800x${Math.floor(Math.random() * 400 + 400)}?sig=${startIndex + i}`,
    title: `Photo ${startIndex + i}`,
    height: Math.floor(Math.random() * 400 + 400),
  }));
};

const PhotosPage = () => {
  const { theme } = useTheme();
  const [photos, setPhotos] = useState(generatePhotos(1, 20));
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loading) {
          loadMorePhotos();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading]);

  const loadMorePhotos = () => {
    setLoading(true);
    setTimeout(() => {
      const newPhotos = generatePhotos((page + 1) * 20, 20);
      setPhotos(prev => [...prev, ...newPhotos]);
      setPage(prev => prev + 1);
      setLoading(false);
    }, 1000); // Simulate network delay
  };

  return (
    <div className={pageStyles.mainBackground}>
      <div className="max-w-6xl mx-auto">
        <h1 className={pageStyles.heading}>Gallery</h1>
        
        {/* Pinterest-style masonry layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className={`break-inside-avoid ${pageStyles.card} hover:shadow-lg transition-shadow duration-300`}
              style={{ animationDelay: `${(photo.id % 10) * 0.1}s` }}
            >
              <div className="relative group">
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="font-['Montserrat'] text-lg">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Loader */}
        <div ref={loaderRef} className="flex justify-center items-center py-10">
          {loading && (
            <div className="flex flex-col items-center">
              <Loader className="animate-spin" />
              <p className="font-['Montserrat'] text-lg mt-2">Loading more photos...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotosPage;
