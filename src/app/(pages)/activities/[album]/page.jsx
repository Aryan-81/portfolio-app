"use client";
import { use, useEffect, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Masonry from "react-masonry-css"; // Import Masonry
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./GalleryPage.module.css";

const AlbumPage = ({ params }) => {
    const router = useRouter();
    const unwrappedParams = use(params);
    const album = unwrappedParams?.album;

    const [galleryData, setGalleryData] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const res = await fetch(`/api/gallery`);
                const data = await res.json();
                setGalleryData(data);
            } catch (err) {
                console.error("Error fetching images:", err);
            }
        };
        fetchGallery();
    }, []);

    const images = useMemo(() => {
        const albumData = galleryData.find((g) => g.folderName === album);
        return albumData?.images || [];
    }, [galleryData, album]);

    const handleImageClick = useCallback((index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    }, []);

    if (!album) return <p>Loading...</p>;

    // Masonry grid breakpoints
    const breakpointColumns = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <div className={styles.albumPage}>
            <h1 className={styles.title}>{album}</h1>
            <button className={styles.backButton} onClick={() => router.push("/activities")}>
                ⬅ Back
            </button>

            {/* Masonry Grid */}
            <Masonry breakpointCols={breakpointColumns} className={styles.masonryGrid} gutter={50} columnClassName={styles.masonryColumn}>
                {images.map((src, index) => (
                    <div key={index} className={styles.imageWrapper} onClick={() => handleImageClick(index)}>
                        <Image 
                            src={src} 
                            alt={`Image ${index}`} 
                            width={300} 
                            height={200} 
                            className={styles.image} 
                            loading="lazy"
                            
                        />
                    </div>
                ))}
            </Masonry>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={images.map((src) => ({ src }))}
                carousel={{
                    finite: true,
                    loop: false,
                    preload: 2,
                    closeOnBackdropClick: true,
                    closeOnEsc: true,
                }}
                index={currentIndex}
                on={{ view: ({ index }) => setCurrentIndex(index) }}
            />
        </div>
    );
};

export default AlbumPage;
