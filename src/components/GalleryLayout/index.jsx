'use client';
import { useEffect, useState } from "react";
import styles from './GalleryLayout.module.css';
import Image from "next/image";
function openGallery(id) {
  closeAll();
  const gallery = document.getElementById('gallery-' + id);
  const card = document.getElementById('card-' + id);
  gallery.classList.add(styles['Gallery--active']);
  card.classList.add(styles['Card--active']);
}

function closeAll() {
  const galleryActv = document.querySelector(`.${styles['Gallery--active']}`);
  const cardActv = document.querySelector(`.${styles['Card--active']}`);
  if (galleryActv) {
    galleryActv.classList.remove(styles['Gallery--active']);
  }
  if (cardActv) {
    cardActv.classList.remove(styles['Card--active']);
  }
}

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) throw new Error("Failed to fetch gallery data.");
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) return <p>Loading...</p>;
  console.log(galleryData)
  return (
    <section className={styles.Grid}>
      {galleryData.map(({ folderName, images }, i) => {
        const id = i + 1;
        console.log(images[0]       );
        return (
          <>
            <a
              key={id}
              className={styles.Card}
              onClick={() => openGallery(id)}
              id={`card-${id}`}
              role="button"
              tabIndex="0"
            >
              <div className={styles['Card-thumb']}>
                <div className={styles['Card-shadow']}></div>
                <div className={styles['Card-shadow']}></div>
                <div className={styles['Card-shadow']}></div>
                <div
                  className={styles['Card-image']}
                  style={{ backgroundImage: `url(${images[0]})` }}
                >
                  <img src={images[0]} alt="img" />
                </div>
              </div>
              <div className={styles['Card-title']}>
                <span>{folderName}</span>
              </div>
              <div className={styles['Card-explore']}>
                <span>Explore {images.length} more</span>
              </div>
              <button className={styles['Card-button']}>View more</button>
            </a>
            <section key={i} className={styles.Gallery} id={`gallery-${i + 1}`}>
              <div className={styles.gctr}>
                <div className={styles['Gallery-header']}>
                  <a className={styles['Gallery-close']} onClick={closeAll}>×</a>
                </div>
                <div className={styles['Gallery-images']}>
                  {images.map((image, k) => (
                    <div key={k} className={styles['Gallery-image']}>
                      <img key={`${folderName}-${image}-${k}`} src={image}  alt="img" />
                    </div>
                  ))}
                </div>
              </div>


            </section>
          </>
        );
      })}
    </section>
  );
};





export default Gallery;
