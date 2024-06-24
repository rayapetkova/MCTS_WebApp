import styles from './SecondMain.module.css'
import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import movieCard from '../../assets/movie_card.png'
import emptyStar from '../../assets/empty_star.png'
import { useEffect, useState, useSyncExternalStore } from 'react'

import getFeaturedToday, { getComingSoonMovies } from '../../api_data/dataFunctions'
import { getFeaturedThisWeek, getTopRatedMovies } from '../../api_data/dataFunctions'
import { Link } from 'react-router-dom'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const SecondMain = ({sectionName, listFeature, numOfCards, numOfRows}) => {
    let [sectionsObj, setSectionsObj] = useState({
        'Featured Today': [],
        'From your Watchlist': [],
        'Top on MCTS this week': [],
        'Top Rated': [],
        'Coming Soon': [],
    })

    const arrayForRows = Array(numOfRows)
    let currentIndex = 0
    for (let i = 0; i < arrayForRows.length; i++) {
        arrayForRows[i] = [currentIndex, currentIndex + numOfCards]
        currentIndex += numOfCards
    }
    console.log(arrayForRows)

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

    function RenderArrows() {
        if (!listFeature) {
            return <div className={styles['buttons']}>
                        <a href="#"><img src={leftArrow} alt="left-arrow"/></a>
                        <a href="#"><img src={rightArrow} alt="right-arrow"/></a>
                    </div>
        }
    }
    
    return (
        <div className={styles['second-main']} id={sectionName}>
            <section className={`${styles['one-section']} ${numOfCards === 6 ? styles['main-page'] : ''}`}>
                <div className={styles['title']}>
                    {numOfCards === 6 ? <Link to={`movies/${sectionName}`}>{sectionName}</Link> : <h2>{sectionName} - MCTS</h2>}
                    
                    {RenderArrows()}
                </div>

                {arrayForRows.map(([start, end]) => (
                    <div className={styles['cards']} key={start}>
                        {sectionsObj[sectionName].slice(start, end).map((movie) => (
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
                        ))}
                    </div>
                ))}
                

                
            </section>
        </div>
    )
}

export default SecondMain