import styles from './BlogsSection.module.css'; // Import CSS module
import data from '/public/data/newsData.json';

const BlogsSection = () => {
  return (
    <section className={styles.blogs + ' ' + styles.pageSection}>
      <h1 style={{margin:"2rem 1rem"}}>Article</h1>
      <div className={styles.band}>
        {data.Blogs.map((blog, index) => (
          <div key={index} className={`${styles['item-' + (index + 1)]} ${styles.item}`}>
            <a href={blog.link} target="_blank" className={styles.card}>
              <div className={styles.thumb} style={{ backgroundImage: `url(${blog.image})` }}></div>
              <article>
                <h1>{blog.heading}</h1>
                <p>{blog.description}</p>
                <span>Source: {blog.source}</span>
              </article>
            </a>
          </div>
        ))}
      </div>
      <div className={styles.overlay}></div>
    </section>
  );
};

export default BlogsSection;
