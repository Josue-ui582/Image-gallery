
import React from 'react';
import styles from '.../styles/Modal.module.css';

interface ModalProps {
    image: any;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, onClose }) => (
    <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <img src={image.urls.full} alt={image.alt_description} />
            <p>{image.description || 'Aucune description disponible.'}</p>
            <button onClick={onClose}>Fermer</button>
        </div>
    </div>
);

export default Modal;