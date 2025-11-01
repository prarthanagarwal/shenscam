'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';

type ClassNames = {
  main: string;
  gallery: string;
  column: string;
  spacer?: string;
  imageContainer: string;
};

type GalleryScrollerProps = {
  images: string[];
  basePath?: string;
  classNames: ClassNames;
  speedMultipliers?: number[]; // one per column
};

export default function GalleryScroller({
  images,
  basePath = '/thumbnails',
  classNames,
  speedMultipliers = [2, 3.3, 1.25, 3],
}: GalleryScrollerProps) {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start'],
  });

  // Create up to 4 transforms at the top level to respect Rules of Hooks
  const y0 = useTransform(scrollYProgress, [0, 1], [0, viewport.height * (speedMultipliers[0] ?? 2)]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, viewport.height * (speedMultipliers[1] ?? 3.3)]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, viewport.height * (speedMultipliers[2] ?? 1.25)]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, viewport.height * (speedMultipliers[3] ?? 3)]);

  useEffect(() => {
    const lenis = new Lenis();
    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const resize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    rafId = requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
      // lenis has no destroy method currently; relying on GC
    };
  }, []);

  const columns = Math.min(speedMultipliers.length, 4);

  const imagesPerColumn = useMemo(() => {
    const buckets: string[][] = Array.from({ length: columns }, () => []);
    images.forEach((img, idx) => {
      buckets[idx % columns].push(img);
    });
    return buckets;
  }, [images, columns]);

  return (
    <main className={classNames.main}>
      <div className={classNames.spacer ?? ''}></div>
      <div ref={galleryRef} className={classNames.gallery}>
        {imagesPerColumn.map((imgs, i) => (
          <Column
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            images={imgs}
            y={[y0, y1, y2, y3][i] as MotionValue<number>}
            classNames={{ column: classNames.column, imageContainer: classNames.imageContainer }}
            basePath={basePath}
          />
        ))}
      </div>
      <div className={classNames.spacer ?? ''}></div>
    </main>
  );
}

function Column({
  images,
  y,
  classNames,
  basePath,
}: {
  images: string[];
  y: MotionValue<number>;
  classNames: { column: string; imageContainer: string };
  basePath: string;
}) {
  return (
    <motion.div className={classNames.column} style={{ y }}>
      {images.map((src, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className={classNames.imageContainer}>
          <Image src={`${basePath}/${src}`} alt="image" fill />
        </div>
      ))}
    </motion.div>
  );
}


