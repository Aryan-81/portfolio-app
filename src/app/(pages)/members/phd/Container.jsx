import Card from './Card';
import styles from './Container.module.css'; 
import datas from "@/data/PGData.json";

function Container() {
  const cardComponents = datas.map((data, index) => (
    <Card key={index} Name={data.name} CardImg={data.src} duration={data.duration} project={data.project} />
  ));
  

  return (
    <div className={styles['container']}>
      <h2>Phd</h2>
      <div className={styles['box-container']}>
        {cardComponents}
      </div>
    </div>
  );
}

export default Container;
