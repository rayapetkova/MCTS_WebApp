import styles from './CelebCard.module.css'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const CelebCard = ({ celeb, onClickCelebHandler }) => {
    return (
        <button className={styles['card']} onClick={() => onClickCelebHandler(celeb.id)}>
            <img src={`${pathForImages}/${celeb.profile_path}`} alt="card" />
            <div className={styles['name-container']}>
                <p>{celeb.original_name}</p>
                <p>{celeb.character}</p>
            </div>
        </button>
    )
}

export default CelebCard;