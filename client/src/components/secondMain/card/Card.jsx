const pathForImages = 'https://image.tmdb.org/t/p/w500'
import styles from './Card.module.css'

import emptyStar from '../../../assets/empty_star.png'
import { Link } from 'react-router-dom'

const Card = ({ movie }) => {
    return (
        <div key={movie.id} className={styles['card']}>
            <img src={`${pathForImages + movie.poster_path}`} alt="card"/>
            <p>{movie.title}</p>
            <div className={styles['star-div']}>
                <div className={styles['img-container']}>
                    <img src={emptyStar} alt="empty-star"/>
                </div>
                <p>{movie.vote_average}</p>
            </div>
            <Link to={`/movies/${movie.id}/details`} preventScrollReset={false}>More Info &gt; </Link>
        </div>
    )
}

export default Card;