import styles from './FirstSectionPersonInfo.module.css';

import { useEffect, useState } from 'react';

import PersonInfo from './personInfo/PersonInfo';
import { dataFunctions } from '../../api_data/dataFunctions';

import noImageAvailable from '../../assets/no_image_available.png';

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const FirstSectionPersonInfo = ({ personId }) => {
    const [personInfo, setPersonInfo] = useState({})
    const [personMovies, setPersonMovies] = useState([])
    const [backdropMovieImage, setBackdropMovieImage] = useState('')

    useEffect(() => {
        async function loadPersonDetails() {
            let result = await dataFunctions.getPersonDetails(personId)
            setPersonInfo(result)
        }

        async function loadPersonMovies() {
            let moviesList = []

            let result = await dataFunctions.getPersonMovies(personId)
            for (let movie of result.cast) {
                moviesList.push(movie.title)
            }

            setBackdropMovieImage(result.cast[0].backdrop_path)
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
            <PersonInfo personInfo={personInfo} personMovies={personMovies} />
        </section>
    )
}

export default FirstSectionPersonInfo;