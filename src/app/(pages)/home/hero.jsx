import styles from './hero.module.css'; 
import LinkIcon from '@/components/LinkIcon';
import data from '/public/data/homeData';
// const bond_svg = '/assets/picsvg_download.svg';
const bk = '/assets/main.JPG'


function Header(){
  return (
    <div className={styles['imgContainer']} style={{ backgroundImage: `url('${bk}')` }}>
      <div className={styles['bluebox']}>
        <div className={styles['detail']}>
          <div>
          {/* <img className={styles['bond']} src={bond_svg} width="65px" alt="Avatar" /> */}
          <h1>{data.name}</h1>
          <h2>{data.occupation}</h2>
          <h2>{data.currentPosition} <br/>{data.at}</h2>
          <div className={styles['line']}></div>
          <h3>EMAIL:</h3>
          <a id="email" className = {styles['email']}  href={`mailto:${data.email}`}>
            <h4>{data.email}</h4>
            <LinkIcon/>
          </a>
          <div className={styles['line']}></div>
          <h3>TELEPHONE No. :</h3>
          <h4>{data.Telephone}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
