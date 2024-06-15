import styles from './SecondMainCelebs.module.css'

import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import personImg from '../../assets/person.png'
import { useEffect, useState } from 'react'
import { getMovieCredits } from '../../api_data/dataFunctions'
import { extractCast } from '../../api_data/extractingData'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const SecondMainCelebs = ({ movieId }) => {
    let [movieCast, setMovieCast] = useState([])

    useEffect(() => {
        async function loadCelebs() {
            let castAndCrew = await getMovieCredits(movieId)

            let castWithImages = []
            for (let celeb of castAndCrew.cast) {
                if (celeb.profile_path) {
                    castWithImages.push(celeb)
                }

                if (castWithImages.length === 6) {
                    break
                }
            }

            setMovieCast(castWithImages)
        }

        loadCelebs()
    })

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
                    {movieCast.map((celeb) => (
                        <div className={styles['card']} key={celeb.id}>
                            <img src={`${pathForImages}/${celeb.profile_path}`} alt="card" />
                            <div className={styles['name-container']}>
                                <p>{celeb.original_name}</p>
                                <p>{celeb.character}</p>
                            </div>
                        </div>
                    ))}
    
                </div>
    
            </section>
        </div>
    )
}

export default SecondMainCelebs;