
import styles from './css/ImageModal.module.css';

const ImageModal = ({ img, onClose }) => {
  return (
    <div className={styles.imageContainer} onClick={onClose}>
      <div className={styles.presentImage}>

        <img className={styles.image} src={img} alt='presented screenshot' />
      </div>
    </div>
  );
};


export default ImageModal;