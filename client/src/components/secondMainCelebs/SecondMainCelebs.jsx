import styles from './SecondMainCelebs.module.css'

import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import personImg from '../../assets/person.png'
import { useEffect, useState } from 'react'
import { getMovieCredits } from '../../api_data/dataFunctions'
import { extractCast } from '../../api_data/extractingData'
import { useNavigate } from 'react-router-dom'
import Spinner from '../spinner/Spinner'

import Carousel from 'react-bootstrap/Carousel';
import { calculateRows } from '../../utils/calculateRows'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const SecondMainCelebs = ({ movieId }) => {
    const navigate = useNavigate()
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
    }, [])

    const arrayForRows = Array(calculateRows(movieCast.length, 6))
    let currentIndex = 0
    for (let i = 0; i < arrayForRows.length; i++) {
        arrayForRows[i] = [currentIndex, currentIndex + 6]
        currentIndex += 6
    }

    function onClickCelebHandler(personId) {
        navigate(`/people/${personId}`)
    }

    return (
        <div data-testid="secondMainCelebs">
            <div className={`${styles['second-main']} ${styles['celebs']}`} id='cast'>
                <section className={styles['one-section']}>
                    <div className={styles['title']}>
                        <h2>Cast</h2>
                    </div>

                    {movieCast.length > 0 ? (
                        <Carousel
                            indicators={false}
                            prevIcon={<img src={leftArrow} alt="left-arrow" className={`${styles['left-arrow']} ${styles['arrow']}`} />}
                            nextIcon={<img src={rightArrow} alt="right-arrow" className={`${styles['right-arrow']} ${styles['arrow']}`} />}
                        >
                            {arrayForRows.map(([start, end]) => (
                                <Carousel.Item key={start}>
                                    <div className={styles['cards']}>
                                        {movieCast.slice(start, end).map((celeb) => (
                                            <button className={styles['card']} key={celeb.id} onClick={() => onClickCelebHandler(celeb.id)}>
                                                <img src={`${pathForImages}/${celeb.profile_path}`} alt="card" />
                                                <div className={styles['name-container']}>
                                                    <p>{celeb.original_name}</p>
                                                    <p>{celeb.character}</p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    ) : (
                        <Spinner />
                    )}


                </section>
            </div>
        </div>
    )
}

export default SecondMainCelebs;