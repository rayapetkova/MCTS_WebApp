import { useEffect, useState } from "react"
import { getMovieInfo } from "../../api_data/dataFunctions"
import ReviewCard from "../reviews/reviewCard/ReviewCard"
import { getReviews } from "../../services/reviewsService"
import { useParams } from "react-router-dom"
import styles from './AllReviews.module.css'
import MovieCard from "./movieCard/MovieCard"

const AllReviews = () => {
    const authData = JSON.parse(localStorage.getItem('authData'))
    const [movieInfo, setMovieInfo] = useState({})
    const [reviews, setReviews] = useState([])

    const { movieId } = useParams()

    useEffect(() => {
        async function loadMovieInfo() {
            let result = await getMovieInfo(movieId)
            setMovieInfo(result)
        }

        async function loadMovieReviews() {
            let result = await getReviews(movieId)
            setReviews(result)
        }

        loadMovieInfo()
        loadMovieReviews()
    }, [])

    const arrayForRows = Array(6)
    let currentIndex = 0
    for (let i = 0; i < arrayForRows.length; i++) {
        arrayForRows[i] = [currentIndex, currentIndex + 3]
        currentIndex += 2
    }
    
    return (
        <section className={styles['one-section']}>
            <MovieCard movieInfo={movieInfo} />
            {/* <div className={styles['title']}>
                {numOfCards === 6 ? <Link to={`movies/${sectionName}`}>{sectionName}</Link> : <h2>{sectionName} - MCTS</h2>}
                
                {!listFeature && (
                    <div className={styles['buttons']}>
                        <a href="#"><img src={leftArrow} alt="left-arrow"/></a>
                        <a href="#"><img src={rightArrow} alt="right-arrow"/></a>
                </div>
                )}
            </div> */}

            {reviews.length > 0 ? (
                arrayForRows.map(([start, end]) => (
                    <div className={styles['cards']} key={start}>
                        {reviews.slice(start, end).map((review) => (
                            <ReviewCard review={review} key={review._id} forReviewsSection={true} />
                        ))}
                    </div>
                ))
            ) : (
                <div className={styles['no-reviews-yet']}>
                    <p>No reviews yet</p>
                    {/* <Link to={'/movies/Top Rated'} className={styles['browse-movies']}>Browse Movies</Link> */}
                </div>
            )}
            
        </section>
        
    )
}

export default AllReviews;