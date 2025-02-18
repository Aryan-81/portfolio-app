import styles from './ScrollContainer.module.css'; // Import CSS module
import data from '@/data/newsData.json'
function ScrollContainer() {
  return (
    <div className={styles.scrollContainer}>
      <div id="scroll-text" className={styles.scrollText}>{data.latest_news}</div>
    </div>
  );
};

export default ScrollContainer;
