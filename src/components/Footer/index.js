import styles from './Footer.module.css';
import data from '/public/data/homeData.json';

const clg_logo = '/assets/1709208978519.jpeg';
const X_logo = '/assets/x.svg';
const gScholar = '/assets/gscholar.png';
const Gmail_logo = '/assets/gmail.svg';
const linkin_logo = '/assets/linkedin.svg';


function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['ftr-ctr1']}>
        <img className={styles['logo']} src={clg_logo} width="200px" alt="IIT Jammu Logo" />
        <div>
          <span className={styles['college_name']}>Indian Institute of Technology Jammu</span>
        </div>
        <div>
          <span className={styles['college_address']}>NH-44, PO Nagrota, Jagti<br />Jammu and Kashmir, India</span>
        </div>
      </div>
      <div>
        <div className={styles['v']}></div>
      </div>
      <div className={styles['ftr-ctr2']}>
        <iframe
          className={styles['map']}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6707.144116272302!2d74.88793085390624!3d32.80360450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e814038301e31%3A0xe3a42e213df5c738!2sIndian%20Institute%20Of%20Technology%E2%80%93Jammu%20(IIT%E2%80%93Jammu)!5e0!3m2!1sen!2sin!4v1694952874044!5m2!1sen!2sin"
          width="90%" height="80%" style={{ border: '0' }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IIT Jammu Map"
        ></iframe>
      </div>
      <div className={styles['ftr-ctr3']}>
        <div className={styles['cu']}>
          <pre className={styles['contact_us']}>CONTACT US</pre>
        </div>
        <div className={styles['b']}></div>
        <div className={styles["logos"]}>
          <a href="#"><img className={styles['X']} src={X_logo} width="25px" alt="X_Icon" /></a>
          <a href="#"><img className={styles['insta']} src={gScholar} width="25px" alt="Instagram Icon" /></a>
          <a href={data.linkedin}><img className={styles['linkedin']} src={linkin_logo} width="25px" alt="LinkedIn Icon" /></a>
          <a href={`mailto:${data.email}`}><img className={styles['gmail']} src={Gmail_logo} width="25px" alt="Gmail Icon" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;