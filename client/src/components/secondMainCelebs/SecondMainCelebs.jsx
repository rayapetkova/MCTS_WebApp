import styles from './SecondMainCelebs.module.css';

import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import CelebCard from './celebCard/CelebCard';
import { calculateRows } from '../../utils/calculateRows';
import { dataFunctions } from '../../api_data/dataFunctions';

import leftArrow from '../../assets/left_arrow_button.png';
import rightArrow from '../../assets/right_arrow_button.png';

const SecondMainCelebs = ({ movieId }) => {
    const navigate = useNavigate()
    let [movieCast, setMovieCast] = useState([])

    useEffect(() => {
        async function loadCelebs() {
            let castAndCrew = await dataFunctions.getMovieCredits(movieId)

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

    let numOfImages = 6;
    if (window.matchMedia('(max-width: 600px)')) {
        numOfImages = 3
    }

    const arrayForRows = Array(calculateRows(movieCast.length, 6))
    let currentIndex = 0
    for (let i = 0; i < arrayForRows.length; i++) {
        arrayForRows[i] = [currentIndex, currentIndex + numOfImages]
        currentIndex += numOfImages
    }

    console.log(arrayForRows)

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
                            prevIcon={arrayForRows.length > 1 && <img src={leftArrow} alt="left-arrow" className={`${styles['left-arrow']} ${styles['arrow']}`} />}
                            nextIcon={arrayForRows.length > 1 && <img src={rightArrow} alt="right-arrow" className={`${styles['right-arrow']} ${styles['arrow']}`} />}
                        >
                            {arrayForRows.map(([start, end]) => (
                                <Carousel.Item key={start}>
                                    <div className={styles['cards']}>
                                        {movieCast.slice(start, end).map((celeb) => (
                                            <CelebCard celeb={celeb} onClickCelebHandler={onClickCelebHandler} key={celeb.id} />
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