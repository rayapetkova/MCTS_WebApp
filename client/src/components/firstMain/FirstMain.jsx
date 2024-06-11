import styles from '../firstMain/FirstMain.module.css'
import firstImg from '../../assets/first.png'
import playButton from '../../assets/play_button.png'
import secondImg from '../../assets/second.png'
import yellowDot from '../../assets/yellow_dot.png'
import thirdImg from '../../assets/third.png'
import { useEffect, useState } from 'react'
import { getNowPlayingInTheatres } from '../../api_data/data_functions'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const FirstMain = () => {
    let [playingNow, setPlayingNow] = useState([])

    useEffect(() => {
        async function loadPlayingNow() {
            let playingNowInTheatres = await getNowPlayingInTheatres()

            setPlayingNow(playingNowInTheatres)
        }
        
        loadPlayingNow()
    }, [])

    return (
        <div className={styles['main']}>
            <section className={styles['first']}>
                <div className={styles['left']}>
                    <div className={styles['image-container']}>
                        <img src={firstImg} alt="first-img" className={styles['first-img']}/>
                    </div>
                    <div className={styles['play-info']}>
                        <img src={playButton} alt="play_button"/>
                        <section className={styles['title']}>
                            <h2>Inside Out 2 Make us Feel Every Emotion</h2>
                            <h4>See more information</h4>
                        </section>
                    </div>
                    <img src={secondImg} alt="second-img" className={styles['second-img']}/>
                </div>

                <div className={styles['right']}>
                    <div className={styles['title']}>
                        <div className={styles['text']}>
                            <img src={yellowDot} alt="yellow-dot"/>
                            <h3>Playing Now</h3>
                        </div>
                        <a href="#">Browse Movies &gt;</a>
                    </div>
                    {playingNow.slice(0, 3).map((movie) => (
                        <div key={movie.id} className={styles['featured-images']}>
                            <img src={`${pathForImages + movie.backdrop_path}`} alt="featured-movie"/>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default FirstMain;