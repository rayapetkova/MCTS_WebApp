import styles from "./SecondMainPhotos.module.css";

import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from "react";

import Spinner from "../spinner/Spinner";
import ImageDisplay from "./imageDisplay/ImageDisplay";
import { calculateRows } from "../../utils/calculateRows";
import { dataFunctions } from "../../api_data/dataFunctions";

import leftArrow from '../../assets/left_arrow_button.png';
import rightArrow from '../../assets/right_arrow_button.png';

const SecondMainPhotos = ({ movieId }) => {
    let [movieImages, setMovieImages] = useState([])

    useEffect(() => {
        async function loadMovieImages() {
            let allImages = await dataFunctions.getMoviePhotos(movieId)
            setMovieImages(allImages.backdrops)
        }

        loadMovieImages()
    }, [])

    let numOfImages = 4
    if (window.matchMedia('(max-width: 600px)').matches) {
        numOfImages = 2
    }
    const arrayForRows = Array(calculateRows(movieImages.length, 4))
    let currentIndex = 0
    for (let i = 0; i < arrayForRows.length; i++) {
        arrayForRows[i] = [currentIndex, currentIndex + numOfImages]
        currentIndex += numOfImages
    }

    return (
        <div data-testid="secondMainPhotos">
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
                                            <ImageDisplay backdrop={backdrop} key={backdrop.file_path}/>
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

export default SecondMainPhotos;