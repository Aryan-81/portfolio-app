import Card from '@/components/LabEqCard';
import styles from './LabEq.module.css'; // Import your CSS module
import datas from '/public/data/labEqpData.json'

function LabEq() {
  return (
    <div className={styles['lab-eq']}>
      <h2>Lab Equipments</h2>
      <div className={styles['grid-facilities']}>
        {datas.map((data, index) => (
          <Card key={index} EqpName={data.name} EqpImg={data.image} Model={data.model} Descrip={data.description}  />
        ))}
      </div>
    </div>
  );
}

export default LabEq;
