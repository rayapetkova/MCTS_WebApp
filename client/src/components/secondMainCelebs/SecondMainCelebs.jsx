import styles from './SecondMainCelebs.module.css'

import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import personImg from '../../assets/person.png'

const SecondMainCelebs = () => {

    return (
        <div className={`${styles['second-main']} ${styles['celebs']}`}>
            <section className={styles['one-section']}>
                <div className={styles['title']}>
                    <h2>Cast</h2>
                    <div className={styles['buttons']}>
                        <a href="#"><img src={leftArrow} alt="left-arrow" /></a>
                        <a href="#"><img src={rightArrow} alt="right-arrow" /></a>
                    </div>
                </div>
                <div className={styles['cards']}>
                    <div className={styles['card']}>
                        <img src={personImg} alt="card" />
                        <div className={styles['name-container']}>
                            <p>Jenna Ortega</p>
                            <p>Noah Some</p>
                        </div>
                    </div>
    
                    <div className={styles['card']}>
                        <img src={personImg} alt="card" />
                        <div className={styles['name-container']}>
                            <p>Jenna Ortega</p>
                            <p>Noah Some</p>
                        </div>
                    </div>
    
                    <div className={styles['card']}>
                        <img src={personImg} alt="card" />
                        <div className={styles['name-container']}>
                            <p>Jenna Ortega</p>
                            <p>Noah Some</p>
                        </div>
                    </div>
    
                    <div className={styles['card']}>
                        <img src={personImg} alt="card" />
                        <div className={styles['name-container']}>
                            <p>Jenna Ortega</p>
                            <p>Noah Some</p>
                        </div>
                    </div>
    
                    <div className={styles['card']}>
                        <img src={personImg} alt="card" />
                        <div className={styles['name-container']}>
                            <p>Jenna Ortega</p>
                            <p>Noah Some</p>
                        </div>
                    </div>
    
                    <div className={styles['card']}>
                        <img src={personImg} alt="card" />
                        <div className={styles['name-container']}>
                            <p>Jenna Ortega</p>
                            <p>Noah Some</p>
                        </div>
                    </div>
    
                </div>
    
            </section>
        </div>
    )
}

export default SecondMainCelebs;