
import styles from './Card.module.css';

const PlaceholderImg = '/assets/unknownman.png';
const Lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?';


function Card({Name='Name',CardImg= PlaceholderImg ,duration="2004-12",research = "prj"}){
    return(
    <div className = {styles['box']}>
      <img src={CardImg} alt="profile_img"></img>
      <h3>{Name}</h3>
      <p>{duration}</p>
      <p> <b> Research Area:</b> {research} </p>
    </div>
    )
}

export default Card;