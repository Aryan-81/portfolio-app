import styles from './hero.module.css'; 

const bond_svg = '/assets/picsvg_download.svg';
const bk = '/assets/main.JPG'


function Header(){
  return (
    <div className={styles['imgContainer']} style={{ backgroundImage: `url('${bk}')` }}>
      <div className={styles['bluebox']}>
        <div className={styles['detail']}>
          <div>
          <img className={styles['bond']} src={bond_svg} width="65px" alt="Avatar" />
          <h1>Dr. Yogesh Madhukarrao Nimdeo</h1>
          <h2>Assistant Professor</h2>
          <h2>HOD of Chemical Engineering Department <br/>At IIT Jammu</h2>
          <div className={styles['line']}></div>
          <h3>EMAIL:</h3>
          <a id="email" className = {styles['email']}  href="mailto:yogesh.nimdeo@iitjammu.ac.in">
            <h4>yogesh.nimdeo@iitjammu.ac.in</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id={styles['link']}>
              <path fill="#979797" d="M18.51 3.868a4 4 0 0 0-5.657 0L8.611 8.111a4 4 0 0 0 5.657 5.657l.502-.503s-.226-.635-.502-.911c-.276-.277-.912-.503-.912-.503l-.502.503a2 2 0 0 1-2.829-2.829l4.243-4.243a2 2 0 0 1 2.828 2.829l-.707.707s.49.318.798.627c.31.309.616.787.616.787l.707-.707a4 4 0 0 0 0-5.657Z"></path>
              <path fill="#878787" d="M16.39 10.232a4 4 0 0 0-5.658 0l-.541.542s.268.6.544.875c.276.276.87.539.87.539l.541-.542a2 2 0 1 1 2.829 2.829l-4.243 4.243a2 2 0 1 1-2.828-2.829l.779-.779s-.503-.359-.78-.635c-.275-.276-.635-.779-.635-.779l-.778.779a4 4 0 1 0 5.656 5.657l4.243-4.243a4 4 0 0 0 0-5.657Z"></path>
            </svg>
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