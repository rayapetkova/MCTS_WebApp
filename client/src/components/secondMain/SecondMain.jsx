import styles from './SecondMain.module.css';

import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import Card from './card/Card';
import Spinner from '../spinner/Spinner';
import { dataFunctions } from '../../api_data/dataFunctions';
import { calculateRows } from '../../utils/calculateRows';
import { AuthContext } from '../../contexts/AuthContext';
import { deleteWatchlistElement, getWatchlist } from '../../services/watchlistService';

import leftArrow from '../../assets/left_arrow_button.png';
import rightArrow from '../../assets/right_arrow_button.png';


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

    const arrayForRows = Array(calculateRows(sectionsObj[sectionName].length, 6, numOfRows))
    let currentIndex = 0
    for (let i = 0; i < arrayForRows.length; i++) {
        arrayForRows[i] = [currentIndex, currentIndex + numOfCards]
        currentIndex += numOfCards
    }

    useEffect(() => {
        async function loadFeaturedToday() {
            let featuredToday = await dataFunctions.getFeaturedToday()
            let featuredThisWeek = await dataFunctions.getFeaturedThisWeek()
            let topRated = await dataFunctions.getTopRatedMovies()
            let comingSoon = await dataFunctions.getComingSoonMovies()
            let playingNow = await dataFunctions.getNowPlayingInTheatres()
            let watchlist = []

            if (authData) {
                watchlist = await getWatchlist(authData._id)
            }

            setSectionsObj(currentSections => ({
                ...currentSections,
                'Featured Today': featuredToday.results,
                'From your Watchlist': featuredToday,
                'Top on MCTS this week': featuredThisWeek.results,
                'Top Rated': topRated.results,
                'Coming Soon': comingSoon.results,
                'Playing Now': playingNow.results,
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
                <section className={`${styles['one-section']} ${numOfCards === 6 ? styles['main-page'] : ''}`}>
                    <div className={styles['title']}>
                        {numOfCards === 6 ? <Link to={`movies/${sectionName}`}>{sectionName} &#10509;</Link> : <h2>{sectionName} - MCTS</h2>}
                    </div>

                    {listFeature && (
                        arrayForRows.map(([start, end]) => (
                            <div className={`${styles['cards']} ${styles['cards-list']}`} key={start}>
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
                                    <div className={`${styles['cards']} ${styles['cards-carousel']}`}>
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