import styles from './SecondMain.module.css'
import leftArrow from '../assets/left_arrow_button.png'
import rightArrow from '../assets/right_arrow_button.png'
import movieCard from '../assets/movie_card.png'
import emptyStar from '../assets/empty_star.png'

const SecondMain = ({sectionName}) => {
    return (
        <div className={styles['second-main']}>
            <section className={styles['one-section']}>
                <div className={styles['title']}>
                    <h2>{sectionName}</h2>
                    <div className={styles['buttons']}>
                        <a href="#"><img src={leftArrow} alt="left-arrow"/></a>
                        <a href="#"><img src={rightArrow} alt="right-arrow"/></a>
                    </div>
                </div>
                <div className={styles['cards']}>
                    <div className={styles['card']}>
                        <img src={movieCard} alt="card"/>
                        <p>Star Wars: Episode Something</p>
                        <div className={styles['star-div']}>
                            <div className={styles['img-container']}>
                                <img src={emptyStar} alt="empty-star"/>
                            </div>
                            <p>6.714</p>
                        </div>
                        <a href="#">More Info &gt;</a>
                    </div>

                    <div className={styles['card']}>
                        <img src={movieCard} alt="card"/>
                        <p>Star Wars: Episode Something</p>
                        <div className={styles['star-div']}>
                            <div className={styles['img-container']}>
                                <img src={emptyStar} alt="empty-star"/>
                            </div>
                            <p>6.714</p>
                        </div>
                        <a href="#">More Info &gt;</a>
                    </div>

                    <div className={styles['card']}>
                        <img src={movieCard} alt="card"/>
                        <p>Star Wars: Episode Something</p>
                        <div className={styles['star-div']}>
                            <div className={styles['img-container']}>
                                <img src={emptyStar} alt="empty-star"/>
                            </div>
                            <p>6.714</p>
                        </div>
                        <a href="#">More Info &gt;</a>
                    </div>

                    <div className={styles['card']}>
                        <img src={movieCard} alt="card"/>
                        <p>Star Wars: Episode Something</p>
                        <div className={styles['star-div']}>
                            <div className={styles['img-container']}>
                                <img src={emptyStar} alt="empty-star"/>
                            </div>
                            <p>6.714</p>
                        </div>
                        <a href="#">More Info &gt;</a>
                    </div>

                    <div className={styles['card']}>
                        <img src={movieCard} alt="card"/>
                        <p>Star Wars: Episode Something</p>
                        <div className={styles['star-div']}>
                            <div className={styles['img-container']}>
                                <img src={emptyStar} alt="empty-star"/>
                            </div>
                            <p>6.714</p>
                        </div>
                        <a href="#">More Info &gt;</a>
                    </div>

                    <div className={styles['card']}>
                        <img src={movieCard} alt="card"/>
                        <p>Star Wars: Episode Something</p>
                        <div className={styles['star-div']}>
                            <div className={styles['img-container']}>
                                <img src={emptyStar} alt="empty-star"/>
                            </div>
                            <p>6.714</p>
                        </div>
                        <a href="#">More Info &gt;</a>
                    </div>
                
                </div>

                
            </section>
        </div>
    )
}

export default SecondMain