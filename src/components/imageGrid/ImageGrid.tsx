import React from 'react'
import styles from './ImageGrid.module.css';

interface ImageGridProps {
    images: any[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => (
    <div className={styles.grid}>
        {images.map((image) => (
            <div key={image.id} className={styles.card}>
                <img src={image.urls.small} alt={image.alt_description} loading="lazy" />
            </div>
        ))}
    </div>
);

export default ImageGrid
