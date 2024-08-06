import styles from './ReviewCard.module.css';

import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import EditReview from '../../editReview/EditReview';
import { convertToDate } from "../../../utils/convertToDate";
import { AuthContext } from '../../../contexts/AuthContext';
import { deleteReview, getReviews } from '../../../services/reviewsService';
import { retrieveUser } from '../../../services/usersService';

const ReviewCard = ({ review, forReviewsSection, reviewsSetter }) => {
    const [showEditForm, setshowEditForm] = useState(false)
    const [reviewUser, setReviewUser] = useState({})
    const { authData } = useContext(AuthContext)

    useEffect(() => {
        async function loadReviewUser() {
            const result = await retrieveUser(review._ownerId)

            if (Object.keys(result).length > 0) {
                setReviewUser(result[0])
            }
        }

        loadReviewUser()
    }, [])

    const showEditReviewFormEvent = (e) => setshowEditForm(true)

    async function deleteReviewEvent(e) {
        let result = await deleteReview(review._id)
        let allReviews = await getReviews(review.movieId)
        
        reviewsSetter(allReviews)
    }

    return (
        <div className={`${styles['box']} ${forReviewsSection ? styles['for-reviews-section-box'] : ''}`} data-testid="reviews">
            <section className={styles['top']}>
                <p><span>{review.rate}</span>/10</p>
                {(authData._id === review._ownerId) && (
                    <section className={styles['buttons']}>
                        <button onClick={showEditReviewFormEvent} className={styles['edit']}>Edit</button>
                        <button onClick={deleteReviewEvent} className={styles['delete']}>Delete</button>
                        {showEditForm && <EditReview review={review} setshowEditForm={setshowEditForm} reviewsSetter={reviewsSetter} />}
                    </section>
                )}
                
            </section>
            <h6>{review.title}</h6>
            <section className={styles['post-info']}>
                {(Object.keys(authData).length > 0 && authData._id === review._ownerId) ? (
                    <Link to={`/users/me`}>{`${reviewUser.firstName} ${reviewUser.lastName}`}</Link>
                ) : (
                    <Link to={`/users/${review._ownerId}`}>{`${review.userInfo.firstName} ${review.userInfo.lastName}`}</Link>
                )}
                
                <p>&nbsp;   &#xb7;  {convertToDate(review._createdOn)}</p>
            </section>
            <p className={styles['review-desc']}>{review.review}</p>
        </div>
    )
}

export default ReviewCard;