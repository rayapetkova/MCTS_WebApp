import styles from './ReviewCard.module.css'
import { convertToDate } from "../../../utils/convertToDate";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import EditReview from '../../editReview/EditReview';


const ReviewCard = ({ review, forReviewsSection, setReviews }) => {
    const [showEditForm, setshowEditForm] = useState(false)

    const { authData } = useContext(AuthContext)

    const showEditReviewFormEvent = (e) => setshowEditForm(true)

    return (
        <div className={`${styles['box']} ${forReviewsSection ? styles['for-reviews-section-box'] : ''}`} key={review._id}>
            <section className={styles['top']}>
                <p><span>{review.rate}</span>/10</p>
                {(authData._id === review._ownerId) && (
                    <section className={styles['buttons']}>
                        <button onClick={showEditReviewFormEvent} className={styles['edit']}>Edit</button>
                        <button className={styles['delete']}>Delete</button>
                        {showEditForm && <EditReview review={review} setshowEditForm={setshowEditForm} setReviews={setReviews} />}
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
    )
}

export default ReviewCard;