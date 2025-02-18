'use client'

import { useEffect, useRef } from 'react';
import styles from './Highlights.module.css';
import images from "@/data/highlightData.json"
// 

export default function HorizontalScroll() {
  const scrollWrapperRef = useRef(null);
  const disableScroll = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    const scrollWrapper = scrollWrapperRef.current;
    scrollWrapper.addEventListener('wheel', disableScroll, { passive: false });
    scrollWrapper.addEventListener('touchmove', disableScroll, { passive: false });
  
    if (!scrollWrapper) return;

    let scrollAmount = 0;
    let scrollStep = 3; // Change this for faster/slower scrolling
    const scrollInterval = 30; // Lower value for smoother scrolling

    const scrollAnimation = setInterval(() => {
      scrollWrapper.scrollTop = scrollAmount;
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollWrapper.scrollHeight - scrollWrapper.clientHeight) {
        scrollStep = -4;
      }
      else if (scrollAmount <= 0) {
        scrollStep = 3;
      }
    }, scrollInterval);



    return () => clearInterval(scrollAnimation);
  }, []);

  return (
    <div className={styles.highlights}>
      <h2>Highlights</h2>
      <div className={styles.external}>
        <div ref={scrollWrapperRef} className={styles.horizontalScrollWrapper}>
          {images.map((image, index) => (
            <div key={index} className={`${styles.imgWrapper} ${image.className
              .map((cls) => styles[cls])
              .join(' ')}`}>
              <a>
                <img src={image.src} alt={image.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
