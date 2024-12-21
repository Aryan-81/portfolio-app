import PropTypes from "prop-types";
import styles from "./CollabCard.module.css";

const CollaborationCard = ({ imgLink, name }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={imgLink} alt={name || "Collaborator"} className={styles.image} />
      {name && <p className={styles.name}>{name}</p>}
    </div>
  );
};

CollaborationCard.propTypes = {
  imgLink: PropTypes.string.isRequired,
  name: PropTypes.string,
};

CollaborationCard.defaultProps = {
  name: "",
};

export default CollaborationCard;
