import styles from './hero.module.css'; 
import LinkIcon from '@/components/LinkIcon';
const bond_svg = '/assets/picsvg_download.svg';
const bk = '/assets/main.JPG'


function Header(){
  return (
    <div className={styles['imgContainer']} style={{ backgroundImage: `url('${bk}')` }}>
      <div className={styles['bluebox']}>
        <div className={styles['detail']}>
          <div>
          {/* <img className={styles['bond']} src={bond_svg} width="65px" alt="Avatar" /> */}
          <h1>Dr. Yogesh Madhukarrao Nimdeo</h1>
          <h2>Assistant Professor</h2>
          <h2>HOD of Chemical Engineering Department <br/>At IIT Jammu</h2>
          <div className={styles['line']}></div>
          <h3>EMAIL:</h3>
          <a id="email" className = {styles['email']}  href="mailto:yogesh.nimdeo@iitjammu.ac.in">
            <h4>yogesh.nimdeo@iitjammu.ac.in</h4>
            <LinkIcon/>
          </a>
          <div className={styles['line']}></div>
          <h3>TELEPHONE No. :</h3>
          <h4>123-321</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
