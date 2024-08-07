import styles from '../popularCelebs/PopularCelebs.module.css';

import Carousel from 'react-bootstrap/Carousel';
import CelebCard from './celebCard/CelebCard';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import { dataFunctions } from '../../api_data/dataFunctions';

import leftArrow from '../../assets/left_arrow_button.png';
import rightArrow from '../../assets/right_arrow_button.png';

const PopularCelebs = ({ numOfCards, numOfRows, listFeature }) => {
    const navigate = useNavigate()
    let [popularCelebrities, setPopularCelebrities] = useState([])


    useEffect(() => {
        async function loadPopularCelebs() {
            let result = await dataFunctions.getPopularCelebrities()
            setPopularCelebrities(result.results)
        }

        loadPopularCelebs()
    }, [])

    if (window.matchMedia('(max-width: 600px)').matches) {
        numOfCards = 3
    }

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
        <>
            <div className={`${styles['second-main']} ${styles['celebs']}`} id='popular-celebs'>
                <section className={`${styles['one-section']} ${numOfCards === 6 ? styles['main-page'] : ''}`}>
                    <div className={styles['title']}>
                        {!listFeature ? <Link to={'/people'} className={styles['title-celebs']}>Most Popular Celebrities &#10509;</Link> : <h2>Most Popular Celebrities - MCTS</h2>}
                    </div>

                    {listFeature && (
                        arrayForRows.map(([start, end]) => (
                            <div className={styles['cards']} key={start}>
                                {popularCelebrities.slice(start, end).map((celebrity) => (
                                    <CelebCard celebrity={celebrity} onClickCelebHandler={onClickCelebHandler} key={celebrity.id} />
                                ))}
                            </div>
                        ))
                    )}

                    {(popularCelebrities.length > 0 && !listFeature) ? (
                        <Carousel
                            indicators={false}
                            prevIcon={<img src={leftArrow} alt="left-arrow" className={`${styles['left-arrow']} ${styles['arrow']}`} />}
                            nextIcon={<img src={rightArrow} alt="right-arrow" className={`${styles['right-arrow']} ${styles['arrow']}`} />}
                        >
                            {arrayForRows.map(([start, end]) => (
                                <Carousel.Item key={start}>
                                    <div className={styles['cards']}>
                                        {popularCelebrities.slice(start, end).map((celebrity) => (
                                            <CelebCard celebrity={celebrity} onClickCelebHandler={onClickCelebHandler} key={celebrity.id} />
                                        ))}
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    ) : (
                        !listFeature && <Spinner />
                    )}


                </section>
            </div>
        </>
    )
}

export default PopularCelebs