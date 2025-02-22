'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import datas from '@/data/labEqpData.json';
import styles from './LabEquipmentCard.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const header_bkimg = '/assets/facilities.jpg';

function Facilities() {
    return (
        <>
            <Header title="Facilities" backgroundImage={header_bkimg} />
            <div className={styles.container}>
                <h2 className={styles.heading}>Our Lab Facilities</h2>
                <LabEquipmentCard />
            </div>
        </>
    );
}

const LabEquipmentCard = () => {
    return (
        <div className={styles.gridContainer}>
            {datas.map((item, index) => (
                <EquipmentCard key={index} item={item} />
            ))}
        </div>
    );
};

const EquipmentCard = ({ item }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className={styles.card} onClick={() => setShowDetails(!showDetails)}>
            <div className={styles.imageContainer}>
                <img src={item.image} alt={item.name} className={styles.image} />
            </div>
            <h3 className={styles.title}>{item.name}</h3>

            <AnimatePresence>
                {showDetails && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className={styles.detailsBox}>
                            <p className={styles.model}>{item.model}</p>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Facilities;
