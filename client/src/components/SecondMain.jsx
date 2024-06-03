import styles from './SecondMain.module.css'
import leftArrow from '../assets/left_arrow_button.png'
import rightArrow from '../assets/right_arrow_button.png'
import movieCard from '../assets/movie_card.png'
import emptyStar from '../assets/empty_star.png'
import { useEffect, useState } from 'react'

import featuredToday from '../api_data/data_functions'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const SecondMain = ({sectionName}) => {
    let [featuredMoviesToday, setFeaturedToday] = useState([])

    const sectionsObj = {
        'Featured Today': featuredMoviesToday
    }

    useEffect(() => {
        async function getFeaturedToday() {
            let featuredMoviesToday = await featuredToday()
            console.log(featuredMoviesToday)

            setFeaturedToday(featuredMoviesToday)
        }

        getFeaturedToday()
    }, [])

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
                    {sectionsObj['Featured Today'].slice(0, 6).map((movie) => (
                        <div className={styles['card']}>
                            <img src={`${pathForImages + movie.poster_path}`} alt="card"/>
                            <p>{movie.title}</p>
                            <div className={styles['star-div']}>
                                <div className={styles['img-container']}>
                                    <img src={emptyStar} alt="empty-star"/>
                                </div>
                                <p>{movie.vote_average}</p>
                            </div>
                            <a href="#">More Info &gt;</a>
                        </div>
                    ))}
                    
                </div>

                
            </section>
        </div>
    )
}

export default SecondMain