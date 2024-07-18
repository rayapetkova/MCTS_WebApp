import styles from "../firstSectionMovieInfo/FirstSectionMovieInfo.module.css"

import movieImg from '../../assets/movie_img.png'
import tick from '../../assets/tick.png'
import moviePoster from '../../assets/movie_poster.png'
import { useContext, useDebugValue, useEffect, useState } from "react"
import { getMovieCredits, getMovieInfo } from "../../api_data/dataFunctions"
import { extractMovieGenres, extractDirectors, extractWriters, extractCast } from "../../api_data/extractingData"
import { addToWatchlist, getWatchlist } from "../../services/watchlistService"
import { AuthContext } from "../../contexts/AuthContext"
import Spinner from "../spinner/Spinner"

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const FirstSectionMovieInfo = ({ movieId }) => {
    const { authData } = useContext(AuthContext)

    let [movieInfo, setMovieInfo] = useState({})
    let [movieCredits, setMovieCredits] = useState({})
    const createdUser = JSON.parse(localStorage.getItem('createdUser'))
    const [userWatchlist, setUserWatchlist] = useState([])
    const [isAddedToWatchlist, setIsAddedToWatchlist] = useState(false)

    

    useEffect(() => {
        async function loadMovieInfo() {
            let movieData = await getMovieInfo(movieId)
            setMovieInfo(movieData)
        }

        async function loadMovieCredits() {
            let movieCastAndCrew = await getMovieCredits(movieId)
            setMovieCredits(movieCastAndCrew)
        }

        async function loadUserWatchlist() {
            let watchlist = await getWatchlist(authData._id)
            setUserWatchlist(watchlist)
        }

        loadMovieInfo()
        loadMovieCredits()
        loadUserWatchlist()
        
    }, [])

    useEffect(() => {
        for (let movie of userWatchlist) {
            if (movie.id === movieInfo.id) {
                setIsAddedToWatchlist(true)
            }
        }
    }, [movieInfo, userWatchlist])

    async function addToWatchListEvent(e) {

        let result = await addToWatchlist({
            createdUser,
            movie: {
                id: movieInfo.id,
                poster_path: movieInfo.poster_path,
                title: movieInfo.title,
                vote_average: movieInfo.vote_average
            }
        })

        setIsAddedToWatchlist(true)

    }

    return (
        <section className={styles['first-section']} id="overview">
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
                            <td>{movieInfo.genres ? extractMovieGenres(movieInfo.genres) : <Spinner />}</td>
                        </tr>

                        <tr>
                            <td>Plot</td>
                            <td>{movieInfo.overview}</td>
                        </tr>

                        <tr>
                            <td>Director</td>
                            <td>{movieCredits.crew ? extractDirectors(movieCredits.crew) : <Spinner />}</td>
                        </tr>

                        <tr>
                            <td>Writers</td>
                            <td>{movieCredits.crew ? extractWriters(movieCredits.crew) : <Spinner />}</td>
                        </tr>

                        <tr>
                            <td>Stars</td>
                            <td>{movieCredits.cast ? extractCast(movieCredits.cast, 3) : <Spinner />}</td>
                        </tr>
                        
                    </tbody>
                </table>

                {Object.keys(authData).length > 0 && (
                    <section>
                        {(isAddedToWatchlist) ? (
                            <button className={styles['added-to-watchlist']} disabled><img src={tick} className={styles['tick']} />Added to Watchlist</button>
                        ) : (
                            <button className={styles['add-to-watchlist']} onClick={addToWatchListEvent}>Add to Watchlist</button>
                        )}
                    </section>
                )}
                
            </div>
        </section>
    )
}

export default FirstSectionMovieInfo;