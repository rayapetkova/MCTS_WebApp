import styles from './SearchCard.module.css';

import { Link } from 'react-router-dom';

import emptyStar from '../../../assets/empty_star.png';

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const SearchCard = ({ item, setSearchedValue }) => {
    return (
        <section className={styles['movie-section']}>
            <div key={item.id} className={styles['card']}>
                {item.poster_path ? (
                    <img src={`${pathForImages + item.poster_path}`} alt="card" />
                ) : (
                    <img src={`${pathForImages + item.profile_path}`} alt="card" />
                )}

            </div>

            <div className={styles['movie-info']}>
                {item.title ? <p>{item.title}</p> : <p>{item.name}</p>}
                <div className={styles['star-div']}>
                    <div className={styles['img-container']}>
                        <img src={emptyStar} alt="empty-star" />
                    </div>
                    <p>{item.vote_average ? item.vote_average : item.popularity}</p>
                </div>

                {item.title ? (
                    <Link to={`/movies/${item.id}/details`} onClick={() => setSearchedValue('')} preventScrollReset={false}>More Info &gt; </Link>
                ) : (
                    <Link to={`/people/${item.id}`} onClick={() => setSearchedValue('')} preventScrollReset={false}>More Info &gt; </Link>
                )}

            </div>
        </section>
    )
}

export default SearchCard;