import PropTypes from "prop-types";
import styles from "./CollabCard.module.css";
import Image from "next/image";

const CollaborationCard = ({ imgLink, name }) => {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={imgLink}
        alt={name || "Collaborator"}
        className={styles.image}
        width={100}
        height={100}
        style={{ width: '100%', height: 'auto' }}
      />
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
