"use client";
import GalleryScroller from "@/components/gallery-scroller";
import styles from './page.module.css'

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

export default function EditWorkPage() {
  return (
    <GalleryScroller
      images={images}
      basePath="/thumbnails"
      classNames={{
        main: styles.main,
        gallery: styles.gallery,
        column: styles.column,
        spacer: styles.spacer,
        imageContainer: styles.imageContainer,
      }}
      speedMultipliers={[2.2, 3.6, 1.4, 2.8]}
    />
  );
}


