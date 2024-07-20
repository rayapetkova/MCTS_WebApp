import styles from "./SecondMainPhotos.module.css"

import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import movieImg from '../../assets/movie_img.png'
import { useEffect, useState } from "react"
import { getMoviePhotos } from "../../api_data/dataFunctions"
import Spinner from "../spinner/Spinner"

import Carousel from 'react-bootstrap/Carousel';

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const SecondMainPhotos = ({ movieId }) => {
    let [movieImages, setMovieImages] = useState([])

    useEffect(() => {
        async function loadMovieImages() {
            let allImages = await getMoviePhotos(movieId)
            setMovieImages(allImages)
        }

        loadMovieImages()
    }, [])

    const arrayForRows = Array(3)
    let currentIndex = 0
    for (let i = 0; i < arrayForRows.length; i++) {
        arrayForRows[i] = [currentIndex, currentIndex + 4]
        currentIndex += 4
    }

    return (
        <>
            <div className={`${styles['second-main']} ${styles['photos']}`}>
                <section className={styles['one-section']}>
                    <div className={styles['title']}>
                        <h2>Photos</h2>
                    </div>

                    {movieImages.length > 0 ? (
                        <Carousel
                            indicators={false}
                            prevIcon={<img src={leftArrow} alt="left-arrow" className={`${styles['left-arrow']} ${styles['arrow']}`} />}
                            nextIcon={<img src={rightArrow} alt="right-arrow" className={`${styles['right-arrow']} ${styles['arrow']}`} />}
                        >
                            {arrayForRows.map(([start, end]) => (
                                <Carousel.Item key={start}>
                                    <div className={styles['cards']}>
                                        {movieImages.slice(start, end).map((backdrop) => (
                                            <div className={styles['card']} key={backdrop.file_path}>
                                                <img src={`${pathForImages + backdrop.file_path}`} alt="card" />
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

export default SecondMainPhotos;