import { useContext, useEffect, useState } from "react";
import AddReview from "../addReview/AddReview";
import styles from "./Reviews.module.css"
import { getReviews } from "../../services/reviewsService";
import { AuthContext } from "../../contexts/AuthContext";
import { convertToDate } from "../../utils/convertToDate";
import { getUserDetails } from "../../services/authService";

const Reviews = ({ movieId }) => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function loadReviews() {
            let result = await getReviews()
            setReviews(result)
        }

        loadReviews()
    }, [])

    return (
        <div className={styles['reviews']}>
            <div className={styles['title']}>
                <div className={styles['left']}>
                    <h2>User Reviews</h2>
                    <a href="#">See all 1.4K</a>
                </div>

                <a href="#">Review +</a>
            </div>

            <div className={styles['review-boxes']}>
                {reviews.map((review) => (
                    <div className={styles['box']} key={review._id}>
                        <p><span>{review.rate}</span>/10</p>
                        <h6>{review.review}</h6>
                        <section className={styles['post-info']}>
                            <p>Raya Petkova</p>
                            <p>&nbsp;   &#xb7;  {convertToDate(review._createdOn)}</p>
                        </section>
                        <p className={styles['review-desc']}>{review.review}</p>
                    </div>
                ))}
            </div>

            <AddReview movieId={movieId} />
        </div>
    )
}

export default Reviews;