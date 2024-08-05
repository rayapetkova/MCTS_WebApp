import styles from './ImageDisplay.module.css';

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const ImageDisplay = ({ backdrop }) => {
    return (
        <div className={styles['card']}>
            <img src={`${pathForImages + backdrop.file_path}`} alt="card" />
        </div>
    )
}

export default ImageDisplay;