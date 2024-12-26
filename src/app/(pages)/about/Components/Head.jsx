import Image from 'next/image';
import styles from './Head.module.css';
import data from "/public/data/homeData";
const clg_img = '/assets/clg_img.jpeg';
const profile_pic = '/assets/professer_pic.jpg';

function Head() {
    return (
        <div className={styles.header} style={{ backgroundImage: `url(${clg_img})` }}>
            <div className={styles.intro}>
                <div className={styles.pimg}>
                    <Image className={styles.profile} src={profile_pic} width={200} height={200}  alt="Profile" />
                </div>
                <div className={styles.sir_name}>
                    <h1>{data.name}</h1>
                    <h2>{data.occupation}{/*<br/>HOD of Chemical Engineering Department<br/>At IIT Jammu*/}</h2>
                </div>
            </div>
        </div>
    );
}

export default Head;
