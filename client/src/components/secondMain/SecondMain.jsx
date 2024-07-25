import styles from './SecondMain.module.css'
import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import { useContext, useEffect, useState } from 'react'

import getFeaturedToday, { getComingSoonMovies, getNowPlayingInTheatres } from '../../api_data/dataFunctions'
import { getFeaturedThisWeek, getTopRatedMovies } from '../../api_data/dataFunctions'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { deleteWatchlistElement, getWatchlist } from '../../services/watchlistService'
import Card from './card/Card'
import Spinner from '../spinner/Spinner'

import Carousel from 'react-bootstrap/Carousel';


const SecondMain = ({ sectionName, listFeature, numOfCards, numOfRows }) => {
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
            let watchlist = []

            if (authData) {
                watchlist = await getWatchlist(authData._id)
            }

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

    async function updateWatchlistOnRemove(movieId) {
        const watchlistElement = sectionsObj[sectionName].filter((watchlistEl) => watchlistEl.movie.id === movieId)[0]
        
        const result = await deleteWatchlistElement(watchlistElement._id)
        let newWatchlist = await getWatchlist(authData._id)

        setSectionsObj(currentState => ({
            ...currentState,
            'Watchlist': newWatchlist
        }))
    }

    return (
        <>
            <div className={styles['second-main']} id={sectionName}>
                <section className={`${styles['one-section']} ${numOfCards === 6 ? styles['main-page'] : ''} ${sectionName === 'Watchlist' ? styles['watchlist-one-section'] : ''}`}>
                    <div className={styles['title']}>
                        {numOfCards === 6 ? <Link to={`movies/${sectionName}`}>{sectionName} &#10509;</Link> : <h2>{sectionName} - MCTS</h2>}
                    </div>

                    {listFeature && (
                        arrayForRows.map(([start, end]) => (
                            <div className={styles['cards']} key={start}>
                                {sectionsObj[sectionName].slice(start, end).map((movie) => (
                                    <Card movieObj={movie} sectionName={sectionName} updateWatchlistOnRemove={updateWatchlistOnRemove} key={movie.id} />
                                ))}
                            </div>
                        ))
                    )}

                    {(sectionsObj[sectionName].length > 0 && !listFeature) ? (
                        <Carousel 
                            indicators={false} 
                            prevIcon={<img src={leftArrow} alt="left-arrow" className={`${styles['left-arrow']} ${styles['arrow']}`} />}
                            nextIcon={<img src={rightArrow} alt="right-arrow" className={`${styles['right-arrow']} ${styles['arrow']}`} />}
                        >
                            {arrayForRows.map(([start, end]) => (
                                <Carousel.Item key={start}>
                                    <div className={styles['cards']}>
                                        {sectionsObj[sectionName].slice(start, end).map((movie) => (
                                            <Card movieObj={movie} sectionName={sectionName} updateWatchlistOnRemove={updateWatchlistOnRemove} key={movie.id} />
                                        ))}
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    ) : (
                        <>
                            {(sectionName === 'Watchlist' && sectionsObj[sectionName].length === 0) ? (
                                <div className={styles['no-movies-in-watchlist']}>
                                    {Object.keys(authData).length > 0 ? (
                                        <>
                                            <p>No movies in Watchlist yet</p>
                                            <Link to={'/movies/Top Rated'} className={`${styles['browse-movies']} ${listFeature ? styles['list-browse-movies'] : ''}`}>Browse Movies</Link>
                                        </>
                                    ) : (
                                        <>
                                            <p>You need to log in first</p>
                                            <Link to={'/login'} className={`${styles['login']} ${listFeature ? styles['list-login'] : ''}`}>Log In</Link>
                                        </>
                                    )}
                                </div>
                            ) : (
                                !listFeature && <Spinner />
                            )}
                        </>
                    )}
                    
                    
                </section>
            </div>
        </>
    )
}

export default SecondMain;