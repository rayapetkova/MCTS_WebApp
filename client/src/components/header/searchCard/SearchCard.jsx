const pathForImages = 'https://image.tmdb.org/t/p/w500'
import styles from './SearchCard.module.css'

import emptyStar from '../../../assets/empty_star.png'
import { Link } from 'react-router-dom'

const SearchCard = ({ movie, setSearchedValue }) => {
    return (
        <section className={styles['movie-section']}>
            <div key={movie.id} className={styles['card']}>
                <img src={`${pathForImages + movie.poster_path}`} alt="card"/>
            </div>

            <div className={styles['movie-info']}>
                <p>{movie.title}</p>
                <div className={styles['star-div']}>
                    <div className={styles['img-container']}>
                        <img src={emptyStar} alt="empty-star"/>
                    </div>
                    <p>{movie.vote_average}</p>
                </div>
                <Link to={`/movies/${movie.id}/details`} onClick={() => setSearchedValue('')} preventScrollReset={false}>More Info &gt; </Link>
            </div>
        </section>
    )
}

export default SearchCard;