import styles from "./SecondMainPhotos.module.css"

import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import movieImg from '../../assets/movie_img.png'

const SecondMainPhotos = () => {

    return (
        <div className={`${styles['second-main']} ${styles['photos']}`}>
            <section className={styles['one-section']}>
                <div className={styles['title']}>
                    <h2>Photos</h2>
                    <div className={styles['buttons']}>
                        <a href="#"><img src={leftArrow} alt="left-arrow" /></a>
                        <a href="#"><img src={rightArrow} alt="right-arrow" /></a>
                    </div>
                </div>
                <div className={styles['cards']}>
                    <div className={styles['card']}>
                        <img src={movieImg} alt="card" />
                    </div>
    
                    <div className={styles['card']}>
                        <img src={movieImg} alt="card" />
                    </div>
    
                    <div className={styles['card']}>
                        <img src={movieImg} alt="card" />
                    </div>
    
                    <div className={styles['card']}>
                        <img src={movieImg} alt="card" />
                    </div>
    
                </div>

            </section>
        </div>
    )
}

export default SecondMainPhotos;