"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NextImage from "next/image"; // Renamed to avoid conflict with window.Image
import { useInView } from "react-intersection-observer";
import styles from "./GalleryLayout.module.css";

const GalleryLayout = () => {
  const [galleryData, setGalleryData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => setGalleryData(data))
      .catch((err) => console.error("Error fetching gallery:", err));
  }, []);

  return (
    <div className={styles.galleryContainer}>
      {galleryData.map(({ folderName, images }) => (
        <AlbumCard
          key={folderName}
          folderName={folderName}
          images={images}
          onClick={() => router.push(`/activities/${encodeURIComponent(folderName)}`)}
        />
      ))}
    </div>
  );
};

// Album Card Component
const AlbumCard = ({ folderName, images, onClick }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    if (images.length > 0) {
      const img = new window.Image();
      img.src = images[0];
      img.onload = () => {
        setIsPortrait(img.height > img.width);
      };
    }
  }, [images]);

  return (
    <div
      ref={ref}
      className={styles.albumCard}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {inView && (
        <div className={styles.imageWrapper}>
          <NextImage
            src={images[0]}
            alt={`Cover of ${folderName}`}
            width={200}
            height={150}
            priority={inView}
            className={`${styles.albumThumbnail} ${isPortrait ? styles.portrait : ""}`}
          />
          {images.length > 1 && (
            <div className={styles.overlay}>
              <span>View {images.length - 1} more</span>
            </div>
          )}
        </div>
      )}
      <h3 className={styles.albumTitle}>{folderName}</h3>
    </div>
  );
};

export default GalleryLayout;
