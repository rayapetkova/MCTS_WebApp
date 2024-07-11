import styles from "../firstSectionMovieInfo/FirstSectionMovieInfo.module.css"

import movieImg from '../../assets/movie_img.png'
import moviePoster from '../../assets/movie_poster.png'
import { useContext, useDebugValue, useEffect, useState } from "react"
import { getMovieCredits, getMovieInfo } from "../../api_data/dataFunctions"
import { extractMovieGenres, extractDirectors, extractWriters, extractCast } from "../../api_data/extractingData"
import { addToWatchlist } from "../../services/watchlistService"
import { AuthContext } from "../../contexts/AuthContext"

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const FirstSectionMovieInfo = ({ movieId }) => {
    let [movieInfo, setMovieInfo] = useState({})
    let [movieCredits, setMovieCredits] = useState({})
    let [addedToWatchlist, setAddedToWatchlist] = useState(false)
    let { createdUser } = useContext(AuthContext)

    useEffect(() => {
        async function loadMovieInfo() {
            let movieData = await getMovieInfo(movieId)
            setMovieInfo(movieData)
        }

        async function loadMovieCredits() {
            let movieCastAndCrew = await getMovieCredits(movieId)
            setMovieCredits(movieCastAndCrew)
        }

        loadMovieInfo()
        loadMovieCredits()
    }, [])

    async function addToWatchListEvent(e) {
        let result = await addToWatchlist({
            createdUser,
            movieId: movieInfo.id
        })

        setAddedToWatchlist(true)
    }

    return (
        <section className={styles['first-section']}>
            <h1>{movieInfo.original_title}</h1>
            <div className={styles['small-info']}>
                <ul className={styles['left-ul']}>
                    <li>{movieInfo.release_date}</li>
                    <li>&nbsp;   &#xb7;  {movieInfo.original_language ? movieInfo.original_language.toUpperCase() : movieInfo.original_language}</li>
                    <li>&nbsp;   &#xb7;  {movieInfo.runtime} min</li>
                </ul>

                <div className={styles['buttons']}>
                    <a href="#reviews">Reviews</a>
                </div>
            </div>
            <div className={styles['two-images']}>
                <div className={`${styles['img-container']} ${styles['first']}`}>
                    <img src={`${pathForImages}/${movieInfo.poster_path}`} alt="movie-poster" />
                </div>
                <div className={`${styles['img-container']} ${styles['second']}`}>
                    <img src={`${pathForImages}/${movieInfo.backdrop_path}`} alt="movie-image" />
                </div>
            </div>
            <div className={styles['movie-info']}>
                <table>
                    <tbody>
                        <tr>
                            <td>Genre</td>
                            <td>{movieInfo.genres ? extractMovieGenres(movieInfo.genres) : "Loading..."}</td>
                        </tr>

                        <tr>
                            <td>Plot</td>
                            <td>{movieInfo.overview}</td>
                        </tr>

                        <tr>
                            <td>Director</td>
                            <td>{movieCredits.crew ? extractDirectors(movieCredits.crew) : "Loading..."}</td>
                        </tr>

                        <tr>
                            <td>Writers</td>
                            <td>{movieCredits.crew ? extractWriters(movieCredits.crew) : "Loading..."}</td>
                        </tr>

                        <tr>
                            <td>Stars</td>
                            <td>{movieCredits.cast ? extractCast(movieCredits.cast, 3) : "Loading..."}</td>
                        </tr>
                        
                    </tbody>
                </table>

                <section>
                    {addedToWatchlist ? (
                        <button className={styles['added-to-watchlist']}>Added to Watchlist</button>
                    ) : (
                        <button onClick={addToWatchListEvent}>Add to Watchlist</button>
                    )}
                </section>
            </div>
        </section>
    )
}

export default FirstSectionMovieInfo;