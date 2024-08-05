import styles from './CelebCard.module.css';

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const CelebCard = ({ celebrity, onClickCelebHandler }) => {
    return (
        <button key={celebrity.id} className={styles['card']} onClick={() => onClickCelebHandler(celebrity.id)}>
            <img src={`${pathForImages + celebrity.profile_path}`} alt="card" />
            <div className={styles['name-container']}>
                <p>{celebrity.name}</p>
            </div>
        </button>
    )
}

export default CelebCard;