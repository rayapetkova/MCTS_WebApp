import { useContext, useEffect, useState } from "react";
import AddReview from "../addReview/AddReview";
import styles from "./Reviews.module.css"
import { getReviews } from "../../services/reviewsService";
import { AuthContext } from "../../contexts/AuthContext";
import { convertToDate } from "../../utils/convertToDate";
import { retrieveUser } from "../../services/usersService";
import EditReview from "../editReview/EditReview";
import ReviewCard from "./reviewCard/ReviewCard";
import { Link } from "react-router-dom";

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
                    (reviews.slice(-2).reverse().map((review) => (
                        <ReviewCard review={review} forReviewsSection={false} setReviews={setReviews} key={review._id} />
                    ))) : (
                        <p className={styles['no-reviews-yet']}>No reviews yet</p>
                    )}
            </div>

            {(showForm && Object.keys(authData).length > 0) && <AddReview movieId={movieId} setReviews={setReviews} setShowForm={setShowForm} />}
        </div>
    )
}

export default Reviews;