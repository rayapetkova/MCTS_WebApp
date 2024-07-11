import { useContext, useEffect, useState } from "react";
import AddReview from "../addReview/AddReview";
import styles from "./Reviews.module.css"
import { getReviews } from "../../services/reviewsService";
import { AuthContext } from "../../contexts/AuthContext";
import { convertToDate } from "../../utils/convertToDate";
import { getUserDetails } from "../../services/authService";
import { retrieveUser } from "../../services/usersService";

const Reviews = ({ movieId }) => {
    const [reviews, setReviews] = useState([])
    const [showForm, setShowForm] = useState(false)
    const {authData} = useContext(AuthContext)
    console.log(authData)

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
        <div className={styles['reviews']} id="reviews">
            <div className={styles['title']}>
                <div className={styles['left']}>
                    <h2>User Reviews</h2>
                    <a href="#">See all 1.4K</a>
                </div>

                <button onClick={showAddReviewFormEvent}>Review +</button>
            </div>

            <div className={styles['review-boxes']}>
                {reviews.length > 0 ? 
                (reviews.slice(-2).reverse().map((review) => (
                    <div className={styles['box']} key={review._id}>
                        <section className={styles['top']}>
                            <p><span>{review.rate}</span>/10</p>
                            {authData._id === review._ownerId && (
                                <section className={styles['buttons']}>
                                    <button className={styles['edit']}>Edit</button>
                                    <button className={styles['delete']}>Delete</button>
                                </section>
                            )}
                            
                        </section>
                        <h6>{review.title}</h6>
                        <section className={styles['post-info']}>
                            <p>{`${review.userInfo.firstName} ${review.userInfo.lastName}`}</p>
                            <p>&nbsp;   &#xb7;  {convertToDate(review._createdOn)}</p>
                        </section>
                        <p className={styles['review-desc']}>{review.review}</p>
                    </div>
                ))) : (
                    <p className={styles['no-reviews-yet']}>No reviews yet</p>
                )}
            </div>

            {showForm && <AddReview movieId={movieId} setReviews={setReviews} setShowForm={setShowForm} />}
        </div>
    )
}

export default Reviews;