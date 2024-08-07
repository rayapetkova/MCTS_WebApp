import styles from "./Reviews.module.css";

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import AddReview from "../addReview/AddReview";
import ReviewCard from "./reviewCard/ReviewCard";
import { getReviews } from "../../services/reviewsService";
import { AuthContext } from "../../contexts/AuthContext";

const Reviews = ({ movieId }) => {
    const [reviews, setReviews] = useState([])
    const [showForm, setShowForm] = useState(false)

    const { authData } = useContext(AuthContext)

    useEffect(() => {
        async function loadReviews() {
            let result = await getReviews(movieId)
            setReviews(result)
        }

        loadReviews()
    }, [])

    function showAddReviewFormEvent(e) {
        setShowForm(true)
    }

    function reviewsSetter(reviews) {
        setReviews(reviews)
    }

    return (
        <div className={styles['reviews']} id="reviews" data-testid="reviews">
            <div className={styles['title']}>
                <div className={styles['left']}>
                    <h2>User Reviews</h2>
                    <Link to={`/movies/${movieId}/reviews`}>See all {reviews.length}</Link>
                </div>

                <button onClick={showAddReviewFormEvent}>Review +</button>
            </div>

            {(showForm && !Object.keys(authData).length > 0) && (
                <>
                    <p className={styles['login-first']}>You need to log in first! &#10509; <Link to={'/login'} className={styles['login-link']}>Log In</Link></p>
                </>
            )}

            <div className={styles['review-boxes']}>
                {reviews.length > 0 ?
                    (reviews.slice(0, 2).map((review) => (
                        <ReviewCard review={review} forReviewsSection={false} reviewsSetter={reviewsSetter} fromMovieInfoReviews={true} key={review._id} />
                    ))) : (
                        <p className={styles['no-reviews-yet']}>No reviews yet</p>
                    )}
            </div>

            {(showForm && Object.keys(authData).length > 0) && <AddReview movieId={movieId} reviewsSetter={reviewsSetter} setShowForm={setShowForm} />}
        </div>
    )
}

export default Reviews;