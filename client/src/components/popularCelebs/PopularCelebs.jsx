import styles from '../popularCelebs/PopularCelebs.module.css'
import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import personImg from '../../assets/person.png'

import { getPopularCelebrities } from '../../api_data/dataFunctions'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const PopularCelebs = () => {
    const navigate = useNavigate()
    let [popularCelebrities, setPopularCelebrities] = useState([])


    useEffect(() => {
        async function loadPopularCelebs() {
            let result = await getPopularCelebrities()
            setPopularCelebrities(result)
        }

        loadPopularCelebs()
    }, [])

    function onClickCelebHandler(personId) {
        navigate(`/people/${personId}`)
    }

    return (
        <div className={`${styles['second-main']} ${styles['celebs']}`} id='popular-celebs'>
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
                        <button key={celebrity.id} className={styles['card']} onClick={() => onClickCelebHandler(celebrity.id)}>
                            <img src={`${pathForImages + celebrity.profile_path}`} alt="card" />
                            <div className={styles['name-container']}>
                                <p>{celebrity.name}</p>
                            </div>
                        </button>
                    ))}
                </div>

                
            </section>
        </div>
    )
}

export default PopularCelebs