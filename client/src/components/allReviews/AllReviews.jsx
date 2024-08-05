import styles from './AllReviews.module.css';

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import MovieCard from "./movieCard/MovieCard";
import ReviewCard from "../reviews/reviewCard/ReviewCard";
import { AuthContext } from "../../contexts/AuthContext";
import { getMovieInfo } from "../../api_data/dataFunctions";
import { getReviews } from "../../services/reviewsService";

const AllReviews = () => {
    const { authData } = useContext(AuthContext)
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

    function reviewsSetter(reviews) {
        setReviews(reviews)
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

            <h2 className={styles['title-reviews']}>Reviews</h2>
            {reviews.length > 0 ? (
                arrayForRows.map(([start, end]) => (
                    <div className={styles['cards']} key={start}>
                        {reviews.slice(start, end).map((review) => (
                            <ReviewCard key={review._id} review={review} forReviewsSection={true} reviewsSetter={reviewsSetter} />
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