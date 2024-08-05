import styles from '../firstMain/FirstMain.module.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { dataFunctions } from '../../api_data/dataFunctions';

import playButton from '../../assets/play_button.png';
import yellowDot from '../../assets/yellow_dot.png';

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const FirstMain = () => {
    let [playingNow, setPlayingNow] = useState([])
    let [firstMovie, setFirstMovie] = useState({})

    useEffect(() => {
        async function loadPlayingNow() {
            let playingNowInTheatres = await dataFunctions.getNowPlayingInTheatres()

            setPlayingNow(playingNowInTheatres.results)
            setFirstMovie(playingNowInTheatres.results[0])
        }
        
        loadPlayingNow()
    }, [])

    return (
        <div className={styles['main']}>
            <section className={styles['first']}>
                <div className={styles['left']}>
                    <div className={styles['image-container']}>
                        <img src={`${pathForImages + firstMovie.backdrop_path}`} alt="first-img" className={styles['first-img']}/>
                    </div>
                    <div className={styles['play-info']}>
                        <Link to={`/movies/${firstMovie.id}/details`}><img src={playButton} alt="play_button"/></Link>
                        <section className={styles['title']}>
                            <h2>{firstMovie.title}</h2>
                            <Link to={`/movies/${firstMovie.id}/details`}>See more information</Link>
                        </section>
                    </div>
                    <Link to={`/movies/${firstMovie.id}/details`}>
                        <img src={`${pathForImages + firstMovie.poster_path}`} alt="second-img" className={styles['second-img']}/>
                    </Link>
                </div>

                <div className={styles['right']}>
                    <div className={styles['title']}>
                        <div className={styles['text']}>
                            <img src={yellowDot} alt="yellow-dot"/>
                            <h3>Playing Now</h3>
                        </div>
                        <Link to={'/movies/Playing Now'}>Browse Movies &gt;</Link>
                    </div>
                    {playingNow.slice(1, 4).map((movie) => (
                        <Link to={`/movies/${movie.id}/details`} key={movie.id} className={styles['featured-images']}>
                            <img src={`${pathForImages + movie.backdrop_path}`} alt="featured-movie"/>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default FirstMain;