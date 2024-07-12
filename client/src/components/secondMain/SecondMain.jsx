import styles from './SecondMain.module.css'
import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import { useContext, useEffect, useState } from 'react'

import getFeaturedToday, { getComingSoonMovies, getNowPlayingInTheatres } from '../../api_data/dataFunctions'
import { getFeaturedThisWeek, getTopRatedMovies } from '../../api_data/dataFunctions'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { getWatchlist } from '../../services/watchlistService'
import Card from './card/Card'


const SecondMain = ({sectionName, listFeature, numOfCards, numOfRows}) => {
    let [sectionsObj, setSectionsObj] = useState({
        'Featured Today': [],
        'From your Watchlist': [],
        'Top on MCTS this week': [],
        'Top Rated': [],
        'Coming Soon': [],
        'Playing Now': [],
        'Watchlist': []
    })
    const { authData } = useContext(AuthContext)

    const arrayForRows = Array(numOfRows)
    let currentIndex = 0
    for (let i = 0; i < arrayForRows.length; i++) {
        arrayForRows[i] = [currentIndex, currentIndex + numOfCards]
        currentIndex += numOfCards
    }

    useEffect(() => {
        async function loadFeaturedToday() {
            let featuredToday = await getFeaturedToday()
            let featuredThisWeek = await getFeaturedThisWeek()
            let topRated = await getTopRatedMovies()
            let comingSoon = await getComingSoonMovies()
            let playingNow = await getNowPlayingInTheatres()
            let watchlist = await getWatchlist(authData._id)

            setSectionsObj(currentSections => ({
                ...currentSections,
                'Featured Today': featuredToday,
                'From your Watchlist': featuredToday,
                'Top on MCTS this week': featuredThisWeek,
                'Top Rated': topRated,
                'Coming Soon': comingSoon,
                'Playing Now': playingNow,
                'Watchlist': watchlist
            }))
        }

        loadFeaturedToday();
    
    }, [])
    
    return (
        <div className={styles['second-main']} id={sectionName}>
            <section className={`${styles['one-section']} ${numOfCards === 6 ? styles['main-page'] : ''}`}>
                <div className={styles['title']}>
                    {numOfCards === 6 ? <Link to={`movies/${sectionName}`}>{sectionName}</Link> : <h2>{sectionName} - MCTS</h2>}
                    
                    {!listFeature && (
                        <div className={styles['buttons']}>
                            <a href="#"><img src={leftArrow} alt="left-arrow"/></a>
                            <a href="#"><img src={rightArrow} alt="right-arrow"/></a>
                    </div>
                    )}
                </div>

                {arrayForRows.map(([start, end]) => (
                    <div className={styles['cards']} key={start}>
                        {sectionsObj[sectionName].slice(start, end).map((movie) => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ))}
                

                
            </section>
        </div>
    )
}

export default SecondMain