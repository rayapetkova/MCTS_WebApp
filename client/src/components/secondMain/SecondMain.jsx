import styles from './SecondMain.module.css'
import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import { useContext, useEffect, useReducer, useRef, useState } from 'react'

import getFeaturedToday, { getComingSoonMovies, getNowPlayingInTheatres } from '../../api_data/dataFunctions'
import { getFeaturedThisWeek, getTopRatedMovies } from '../../api_data/dataFunctions'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { getWatchlist } from '../../services/watchlistService'
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

    const leftArrowRef = useRef()
    const rightArrowRef = useRef()

    const arrayForRows = Array(numOfRows)
    let currentIndex = 0
    for (let i = 0; i < arrayForRows.length; i++) {
        arrayForRows[i] = [currentIndex, currentIndex + numOfCards]
        currentIndex += numOfCards
    }

    const getLeftArrowElement = () => {return leftArrowRef.current}
    const getRightArrowElement = () => {return rightArrowRef.current}

    useEffect(() => {
        async function loadFeaturedToday() {
            let featuredToday = await getFeaturedToday()
            let featuredThisWeek = await getFeaturedThisWeek()
            let topRated = await getTopRatedMovies()
            let comingSoon = await getComingSoonMovies()
            let playingNow = await getNowPlayingInTheatres()
            let watchlist = []

            if (authData) {
                console.log(authData)
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

    return (
        <>
            <div className={styles['second-main']} id={sectionName}>
                <section className={`${styles['one-section']} ${numOfCards === 6 ? styles['main-page'] : ''}`}>
                    <div className={styles['title']}>
                        {numOfCards === 6 ? <Link to={`movies/${sectionName}`}>{sectionName} &#10509;</Link> : <h2>{sectionName} - MCTS</h2>}
                    </div>

                    {listFeature && (
                        arrayForRows.map(([start, end]) => (
                            <div className={styles['cards']} key={start}>
                                {sectionsObj[sectionName].slice(start, end).map((movie) => (
                                    <Card movie={movie} key={movie.id} />
                                ))}
                            </div>
                        ))
                    )}

                    {(sectionsObj[sectionName].length > 0 && !listFeature) ? (
                        <Carousel 
                            indicators={false} 
                            prevIcon={<img src={leftArrow} ref={leftArrowRef} alt="left-arrow" className={`${styles['left-arrow']} ${styles['arrow']}`} />}
                            nextIcon={<img src={rightArrow} ref={rightArrowRef} alt="right-arrow" className={`${styles['right-arrow']} ${styles['arrow']}`} />}
                        >
                            {arrayForRows.map(([start, end]) => (
                                <Carousel.Item key={start}>
                                    <div className={styles['cards']}>
                                        {sectionsObj[sectionName].slice(start, end).map((movie) => (
                                            <Card movie={movie} key={movie.id} />
                                        ))}
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    ) : (
                        <>
                            {sectionName === 'Watchlist' ? (
                                <div className={styles['no-movies-in-watchlist']}>
                                    {Object.keys(authData).length > 0 ? (
                                        <>
                                            <p>No movies in Watchlist yet</p>
                                            <Link to={'/movies/Top Rated'} className={styles['browse-movies']}>Browse Movies</Link>
                                        </>
                                    ) : (
                                        <>
                                            <p>You need to log in first</p>
                                            <Link to={'/login'} className={styles['login']}>Log In</Link>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <Spinner />
                            )}
                        </>
                    )}
                    
                    
                </section>
            </div>
        </>
    )
    return (
        <div className={styles['second-main']} id={sectionName}>
            <section className={`${styles['one-section']} ${numOfCards === 6 ? styles['main-page'] : ''}`}>
                <div className={styles['title']}>
                    {numOfCards === 6 ? <Link to={`movies/${sectionName}`}>{sectionName} &#10509;</Link> : <h2>{sectionName} - MCTS</h2>}

                    {!listFeature && (
                        <div className={styles['buttons']}>
                            <a href="#"><img src={leftArrow} alt="left-arrow" /></a>
                            <a href="#"><img src={rightArrow} alt="right-arrow" /></a>
                        </div>
                    )}
                </div>

                {sectionsObj[sectionName].length > 0 ? (
                    arrayForRows.map(([start, end]) => (
                        <div className={styles['cards']} key={start}>
                            {sectionsObj[sectionName].slice(start, end).map((movie) => (
                                <Card movie={movie} key={movie.id} />
                            ))}
                        </div>
                    ))
                ) : <>
                    {sectionName === 'Watchlist' ? (
                        <div className={styles['no-movies-in-watchlist']}>
                            {Object.keys(authData).length > 0 ? (
                                <>
                                    <p>No movies in Watchlist yet</p>
                                    <Link to={'/movies/Top Rated'} className={styles['browse-movies']}>Browse Movies</Link>
                                </>
                            ) : (
                                <>
                                    <p>You need to log in first</p>
                                    <Link to={'/login'} className={styles['login']}>Log In</Link>
                                </>
                            )}
                        </div>
                    ) : (
                        <Spinner />
                    )}
                </>}



            </section>
        </div>
    )
}

export default SecondMain;