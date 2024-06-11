import styles from '../popularCelebs/PopularCelebs.module.css'
import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import personImg from '../../assets/person.png'

import { getPopularCelebrities } from '../../api_data/data_functions'
import { useEffect, useState } from 'react'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const PopularCelebs = () => {
    let [popularCelebrities, setPopularCelebrities] = useState([])

    useEffect(() => {
        async function loadPopularCelebs() {
            let result = await getPopularCelebrities()
            setPopularCelebrities(result)
        }

        loadPopularCelebs()
    }, [])

    return (
        <div className={`${styles['second-main']} ${styles['celebs']}`}>
            <section className={styles['one-section']}>
                <div className={styles['title']}>
                    <h2>Most Popular Celebrities</h2>
                    <div className={styles['buttons']}>
                        <a href="#"><img src={leftArrow} alt="left-arrow" /></a>
                        <a href="#"><img src={rightArrow} alt="right-arrow" /></a>
                    </div>
                </div>
                <div className={styles['cards']}>
                    {popularCelebrities.slice(0, 6).map((celebrity) => (
                        <div key={celebrity.id} className={styles['card']}>
                            <img src={`${pathForImages + celebrity.profile_path}`} alt="card" />
                            <div className={styles['name-container']}>
                                <p>{celebrity.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

                
            </section>
        </div>
    )
}

export default PopularCelebs