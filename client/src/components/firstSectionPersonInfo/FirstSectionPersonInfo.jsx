import { useEffect, useState } from 'react'
import movieImg from '../../assets/movie_img.png'
import moviePoster from '../../assets/movie_poster.png'

import styles from './FirstSectionPersonInfo.module.css'
import { getPersonDetails, getPersonMovies } from '../../api_data/dataFunctions'
import noImageAvailable from '../../assets/no_image_available.png'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const FirstSectionPersonInfo = ({ personId }) => {
    const [personInfo, setPersonInfo] = useState({})
    const [personMovies, setPersonMovies] = useState([])
    const [backdropMovieImage, setBackdropMovieImage] = useState('')

    useEffect(() => {
        async function loadPersonDetails() {
            let result = await getPersonDetails(personId)
            setPersonInfo(result)
        }

        async function loadPersonMovies() {
            let moviesList = []

            let result = await getPersonMovies(personId)
            for (let movie of result.cast) {
                moviesList.push(movie.title)
            }

            setBackdropMovieImage(moviesList[0].backdrop_path)
            setPersonMovies(moviesList)
        }

        loadPersonDetails()
        loadPersonMovies()
    }, [])

    return (
        <section className={styles['first-section']} id="overview">
            <h1>{personInfo.name}</h1>
            <div className={styles['small-info']}>
                <ul className={styles['left-ul']}>
                    <li>{personInfo.known_for_department}</li>
                    <li>&nbsp;   &#xb7;  {personInfo.popularity}</li>
                </ul>
            </div>
            <div className={styles['two-images']}>
                <div className={`${styles['img-container']} ${styles['first']}`}>
                    <img src={pathForImages + personInfo.profile_path} alt="movie-poster" />
                </div>
                <div className={`${styles['img-container']} ${styles['second']}`}>
                    <img src={backdropMovieImage ? `${pathForImages + backdropMovieImage}` : noImageAvailable} alt="movie-image" />
                </div>
            </div>
            <div className={styles['person-info']}>
                <h3>Biography</h3>
                <p className={styles['biography']}>{personInfo.biography}</p>
                <div className={styles['participated-in']}>
                    <h6>Movies</h6>
                    <p>{personMovies.slice(0, 15).join(', ')}</p>
                </div>
            </div>
        </section>
    )
}

export default FirstSectionPersonInfo;