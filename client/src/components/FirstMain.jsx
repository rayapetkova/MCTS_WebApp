import styles from './FirstMain.module.css'
import firstImg from '../assets/first.png'
import playButton from '../assets/play_button.png'
import secondImg from '../assets/second.png'
import yellowDot from '../assets/yellow_dot.png'
import thirdImg from '../assets/third.png'

const FirstMain = () => {
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
                            <h3>Featured Movies</h3>
                        </div>
                        <a href="#">Browse Movies &gt;</a>
                    </div>
                    <div className={styles['featured-images']}>
                        <img src={thirdImg} alt="featured-movie"/>
                    </div>
                    <div className={styles['featured-images']}>
                        <img src={thirdImg} alt="featured-movie"/>
                    </div>
                    <div className={styles['featured-images']}>
                        <img src={thirdImg} alt="featured-movie"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FirstMain;