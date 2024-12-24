import Card from './Card';
import styles from './Container.module.css'; 
import datas from "public/data/PhdData.json";

function Container() {
  const cardComponents = datas.map((data, index) => (
    <Card key={index} Name={data.name} CardImg={data.src} duration={data.duration} research={data.research} />
  ));
  

  return (
    <div className={styles['container']}>
      <h2>PG</h2>
      <div className={styles['box-container']}>
        {cardComponents}
      </div>
    </div>
  );
}

export default Container;
