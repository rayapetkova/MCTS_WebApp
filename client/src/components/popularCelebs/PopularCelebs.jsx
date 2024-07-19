import styles from '../popularCelebs/PopularCelebs.module.css'
import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import personImg from '../../assets/person.png'

import { getPopularCelebrities } from '../../api_data/dataFunctions'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const PopularCelebs = ({ numOfCards, numOfRows, listFeature }) => {
    const navigate = useNavigate()
    let [popularCelebrities, setPopularCelebrities] = useState([])


    useEffect(() => {
        async function loadPopularCelebs() {
            let result = await getPopularCelebrities()
            setPopularCelebrities(result)
        }

        loadPopularCelebs()
    }, [])

    const arrayForRows = Array(numOfRows)
    let currentIndex = 0
    for (let i = 0; i < arrayForRows.length; i++) {
        arrayForRows[i] = [currentIndex, currentIndex + numOfCards]
        currentIndex += numOfCards
    }

    function onClickCelebHandler(personId) {
        navigate(`/people/${personId}`)
    }

    return (
        <div className={`${styles['second-main']} ${styles['celebs']}`} id='popular-celebs'>
            <section className={`${styles['one-section']} ${!listFeature ? styles['main-page'] : ''}`}>
                <div className={styles['title']}>
                    {!listFeature ? <Link to={'/people'} className={styles['title-celebs']}>Most Popular Celebrities &#10509;</Link> : <h2>Most Popular Celebrities - MCTS</h2>}

                    {!listFeature && (
                        <div className={styles['buttons']}>
                            <a href="#"><img src={leftArrow} alt="left-arrow" /></a>
                            <a href="#"><img src={rightArrow} alt="right-arrow" /></a>
                        </div>
                    )}
                    
                </div>

                {arrayForRows.map(([start, end])=> (
                    <div className={styles['cards']}>
                        {popularCelebrities.slice(start, end).map((celebrity) => (
                            <button key={celebrity.id} className={styles['card']} onClick={() => onClickCelebHandler(celebrity.id)}>
                                <img src={`${pathForImages + celebrity.profile_path}`} alt="card" />
                                <div className={styles['name-container']}>
                                    <p>{celebrity.name}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                ))}

                

                
            </section>
        </div>
    )
}

export default PopularCelebs