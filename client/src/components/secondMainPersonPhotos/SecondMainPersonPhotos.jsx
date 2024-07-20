import styles from './SecondMainPersonPhotos.module.css'
import movieImg from '../../assets/movie_img.png'
import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import { useEffect, useState } from 'react'
import { getPersonPhotos } from '../../api_data/dataFunctions'
import Spinner from '../spinner/Spinner'

import Carousel from 'react-bootstrap/Carousel';
import { calculateRows } from '../../utils/calculateRows'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const SecondMainPersonPhotos = ({ personId }) => {
    const [personPhotos, setPersonPhotos] = useState([])

    useEffect(() => {
        async function loadPersonPhotos() {
            let result = await getPersonPhotos(personId)
            setPersonPhotos(result.profiles)
        }

        loadPersonPhotos()
    }, [])

    const arrayForRows = Array(calculateRows(personPhotos.length, 4))
    let currentIndex = 0
    for (let i = 0; i < arrayForRows.length; i++) {
        arrayForRows[i] = [currentIndex, currentIndex + 4]
        currentIndex += 4
    }

    return (
        <>
            <div className={`${styles['second-main']} ${styles['photos']}`} id="photos">
                <section className={styles['one-section']}>
                    <div className={styles['title']}>
                        <h2>Photos</h2>
                    </div>

                    {personPhotos.length > 0 ? (
                        <Carousel
                            indicators={false}
                            prevIcon={<img src={leftArrow} alt="left-arrow" className={`${styles['left-arrow']} ${styles['arrow']}`} />}
                            nextIcon={<img src={rightArrow} alt="right-arrow" className={`${styles['right-arrow']} ${styles['arrow']}`} />}
                        >
                            {arrayForRows.map(([start, end]) => (
                                <Carousel.Item key={start}>
                                    <div className={styles['cards']}>
                                        {personPhotos && personPhotos.slice(start, end).map((photo) => (
                                            <div className={styles['card']} key={photo.vote_average}>
                                                <img src={`${pathForImages + photo.file_path}`} alt="card" />
                                            </div>
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
        </>
    )


}

export default SecondMainPersonPhotos;