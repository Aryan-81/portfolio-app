import Card from './Card';
import styles from './Container.module.css'; 
import datas from "@/data/currentMemberData.json";

function Container() {
  const cardComponents = datas.map((data, index) => (
    <Card key={index} Name={data.name} CardImg={data.src} Descrip={data.discription} />
  ));
  

  return (
    <div className={styles['container']}>
      {/* <h2>Members Currently Working With Us</h2> */}
      <div className={styles['box-container']}>
        {cardComponents}
      </div>
    </div>
  );
}

export default Container;
