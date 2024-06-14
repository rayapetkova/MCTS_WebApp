import styles from "./SecondMainPhotos.module.css"

import leftArrow from '../../assets/left_arrow_button.png'
import rightArrow from '../../assets/right_arrow_button.png'
import movieImg from '../../assets/movie_img.png'
import { useEffect, useState } from "react"
import { getMoviePhotos } from "../../api_data/dataFunctions"

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

    return (
        <div className={`${styles['second-main']} ${styles['photos']}`}>
            <section className={styles['one-section']}>
                <div className={styles['title']}>
                    <h2>Photos</h2>
                    <div className={styles['buttons']}>
                        <a href="#"><img src={leftArrow} alt="left-arrow" /></a>
                        <a href="#"><img src={rightArrow} alt="right-arrow" /></a>
                    </div>
                </div>
                <div className={styles['cards']}>
                    {movieImages.slice(0, 4).map((backdrop) => (
                        <div className={styles['card']}>
                            <img src={`${pathForImages + backdrop.file_path}`} alt="card" />
                        </div>
                    ))}
    
                </div>

            </section>
        </div>
    )
}

export default SecondMainPhotos;