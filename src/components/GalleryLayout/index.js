'use client';
import styles from './GalleryLayout.module.css';

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
  

  return (
    <section className={styles.Grid}>
      {[...Array(9)].map((_, i) => {
        const id = i + 1;
        return (
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
                style={{ backgroundImage: `url(https://robohash.org/${id})` }}
              ></div>
            </div>
            <div className={styles['Card-title']}>
              <span>Super interesting card</span>
            </div>
            <div className={styles['Card-explore']}>
              <span>Explore 50 more</span>
            </div>
            <button className={styles['Card-button']}>View more</button>
          </a>
        );
      })}

      {[...Array(9)].map((_, i) => (
        <section key={i} className={styles.Gallery} id={`gallery-${i + 1}`}>
          <div className={styles['Gallery-header']}>
            <a className={styles['Gallery-close']} onClick={closeAll}>×</a>
          </div>
          <div className={styles['Gallery-images']}>
            <div className={styles['Gallery-left']}>
              {[...Array(2)].map((_, j) => (
                <div key={j} className={styles['Gallery-image']}></div>
              ))}
            </div>
            <div className={`${styles['Gallery-image']} ${styles['Gallery-image--primary']}`} style={{ backgroundImage: `url(https://robohash.org/${i + 1})` }}></div>
          </div>
          {[...Array(4)].map((_, j) => (
            <div key={j} className={styles['Gallery-images']}>
              {[...Array(3)].map((_, k) => (
                <div key={k} className={styles['Gallery-image']}></div>
              ))}
            </div>
          ))}
        </section>
      ))}
    </section>
  );
};





export default Gallery;
