const pathForImages = 'https://image.tmdb.org/t/p/w500'
import styles from './Card.module.css'

import emptyStar from '../../../assets/empty_star.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

const Card = ({ movieObj, sectionName, updateWatchlistOnRemove }) => {

    if (sectionName === "Watchlist") {
        movieObj = movieObj.movie
    }
    
    return (
        <div key={movieObj.id} className={styles['card']}>
            <img src={`${pathForImages + movieObj.poster_path}`} alt="card"/>
            <p>{movieObj.title}</p>
            <div className={styles['star-div']}>
                <div className={styles['img-container']}>
                    <img src={emptyStar} alt="empty-star"/>
                </div>
                <p>{movieObj.vote_average}</p>
            </div>
            {sectionName === "Watchlist" && <button className={styles['remove-from-watchlist']} data-testid="remove-button" onClick={() => updateWatchlistOnRemove(movieObj.id)}>X</button>}
            <Link to={`/movies/${movieObj.id}/details`} preventScrollReset={false}>More Info &gt; </Link>
        </div>
    )
}

export default Card;