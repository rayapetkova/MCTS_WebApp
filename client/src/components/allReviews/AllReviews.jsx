import styles from './AllReviews.module.css';

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import MovieCard from "./movieCard/MovieCard";
import ReviewCard from "../reviews/reviewCard/ReviewCard";
import { AuthContext } from "../../contexts/AuthContext";
import { dataFunctions } from "../../api_data/dataFunctions";
import { getReviews } from "../../services/reviewsService";
import AddReview from '../addReview/AddReview';

const AllReviews = () => {
    const { authData } = useContext(AuthContext)
    const [movieInfo, setMovieInfo] = useState({})
    const [reviews, setReviews] = useState([])
    const [showForm, setShowForm] = useState(false)

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

    function reviewsSetter(reviews) {
        setReviews(reviews)
    }

    return (
        <section className={styles['one-section']}>
            <MovieCard movieInfo={movieInfo} />

            <section className={styles['title-container']}>
                <h2 className={styles['title-reviews']}>All Reviews</h2>
                <button onClick={(e) => setShowForm(true)}>Review +</button>
            </section>

            {(showForm && Object.keys(authData).length > 0) && <AddReview movieId={movieInfo.id} reviewsSetter={reviewsSetter} setShowForm={setShowForm} />}
            
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