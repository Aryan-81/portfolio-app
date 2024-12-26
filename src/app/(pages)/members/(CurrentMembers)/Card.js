
import styles from './Card.module.css';
import Image from 'next/image';
const PlaceholderImg = '/assets/unknownman.png';

const Lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?';


function Card({Name='Name',CardImg= PlaceholderImg ,Descrip=Lorem}){
    return(
    <div className = {styles['box']}>
      <Image src={CardImg} alt="profile_img" width={100} height={100} layout="responsive" />
      
      <h3>{Name}</h3>
      <p>{Descrip}</p>
      {/* <a href="#" className = {styles['btn']}>read more</a> */}
    </div>
    )
}

export default Card;