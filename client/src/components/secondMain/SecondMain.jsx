import styles from './SecondMain.module.css'
import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import movieCard from '../../assets/movie_card.png'
import emptyStar from '../../assets/empty_star.png'
import { useEffect, useState, useSyncExternalStore } from 'react'

import getFeaturedToday, { getComingSoonMovies } from '../../api_data/data_functions'
import { getFeaturedThisWeek, getTopRatedMovies } from '../../api_data/data_functions'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const SecondMain = ({sectionName}) => {
    let [sectionsObj, setSectionsObj] = useState({
        'Featured Today': [],
        'From your Watchlist': [],
        'Top on MCTS this week': [],
        'Top Rated': [],
        'Coming Soon': [],
    })

    useEffect(() => {
        async function loadFeaturedToday() {
            let featuredToday = await getFeaturedToday()
            let featuredThisWeek = await getFeaturedThisWeek()
            let topRated = await getTopRatedMovies()
            let comingSoon = await getComingSoonMovies()

            setSectionsObj(currentSections => ({
                ...currentSections,
                'Featured Today': featuredToday,
                'From your Watchlist': featuredToday,
                'Top on MCTS this week': featuredThisWeek,
                'Top Rated': topRated,
                'Coming Soon': comingSoon
            }))
        }

        loadFeaturedToday();
    
    }, [])
    
    return (
        <div className={styles['second-main']}>
            <section className={styles['one-section']}>
                <div className={styles['title']}>
                    <h2>{sectionName}</h2>
                    <div className={styles['buttons']}>
                        <a href="#"><img src={leftArrow} alt="left-arrow"/></a>
                        <a href="#"><img src={rightArrow} alt="right-arrow"/></a>
                    </div>
                </div>

                <div className={styles['cards']}>
                    {sectionsObj[sectionName].slice(0, 6).map((movie) => (
                        <div key={movie.id} className={styles['card']}>
                            <img src={`${pathForImages + movie.poster_path}`} alt="card"/>
                            <p>{movie.title}</p>
                            <div className={styles['star-div']}>
                                <div className={styles['img-container']}>
                                    <img src={emptyStar} alt="empty-star"/>
                                </div>
                                <p>{movie.vote_average}</p>
                            </div>
                            <a href="#">More Info &gt;</a>
                        </div>
                    ))}
                    
                </div>

                
            </section>
        </div>
    )
}

export default SecondMain