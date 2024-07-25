import styles from './MovieCard.module.css'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

import emptyStar from '../../../assets/empty_star.png'
import { Link } from 'react-router-dom'

const MovieCard = ({ movieInfo }) => {
    return (
        <section className={styles['first-section']} data-testid="first-section">
            <h1>{movieInfo.original_title}</h1>
            <div className={styles['small-info']}>
                <ul className={styles['left-ul']}>
                    <li>{movieInfo.release_date}</li>
                    <li>&nbsp;   &#xb7;  {movieInfo.original_language ? movieInfo.original_language.toUpperCase() : movieInfo.original_language}</li>
                    <li>&nbsp;   &#xb7;  {movieInfo.runtime} min</li>
                </ul>
            </div>
            <div className={styles['two-images']}>
                <div className={`${styles['img-container']} ${styles['first']}`}>
                    <img src={`${pathForImages}/${movieInfo.poster_path}`} alt="movie-poster" />
                </div>
                <div className={`${styles['img-container']} ${styles['second']}`}>
                    <img src={`${pathForImages}/${movieInfo.backdrop_path}`} alt="movie-image" />
                </div>
            </div>
        </section>
    )
}

export default MovieCard