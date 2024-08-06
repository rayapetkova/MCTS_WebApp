import styles from './AllReviews.module.css';

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import MovieCard from "./movieCard/MovieCard";
import ReviewCard from "../reviews/reviewCard/ReviewCard";
import { AuthContext } from "../../contexts/AuthContext";
import { dataFunctions } from "../../api_data/dataFunctions";
import { getReviews } from "../../services/reviewsService";

const AllReviews = () => {
    const { authData } = useContext(AuthContext)
    const [movieInfo, setMovieInfo] = useState({})
    const [reviews, setReviews] = useState([])

    const { movieId } = useParams()

    useEffect(() => {
        async function loadMovieInfo() {
            let result = await dataFunctions.getMovieInfo(movieId)
            setMovieInfo(result)
        }

        async function loadMovieReviews() {
            let result = await getReviews(movieId)
            setReviews(result)
        }

        loadMovieInfo()
        loadMovieReviews()
    }, [])

    // const arrayForRows = Array(6)
    // let currentIndex = 0
    // for (let i = 0; i < arrayForRows.length; i++) {
    //     arrayForRows[i] = [currentIndex, currentIndex + 3]
    //     currentIndex += 2
    // }

    function reviewsSetter(reviews) {
        setReviews(reviews)
    }

    console.log(reviews)
    return (
        <section className={styles['one-section']}>
            <MovieCard movieInfo={movieInfo} />

            <h2 className={styles['title-reviews']}>All Reviews</h2>
            {reviews.length > 0 ? (
                <div className={styles['cards']}>
                    {reviews.map((review) => (
                        <ReviewCard key={review._id} review={review} forReviewsSection={true} reviewsSetter={reviewsSetter} />
                    ))}
                </div>
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