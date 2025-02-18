import styles from './Container.module.css';
import data from '@/data/homeData.json';

function Container() {
  return (
    <div className={styles['ctr-1']}>
      <h2 className={styles['quote']}>{data.quote}</h2>
      <div className={styles['Research']}>
        <h2>{data.message.title}</h2>
        <h4>{data.message.description}</h4>
        
        <h2>Research Interests:</h2>
        <ul>
          {data.researchInterests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        {/* <h2>Honors and Achievements:</h2>
        <ul>
          {data.honorsAndAchievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default Container;
