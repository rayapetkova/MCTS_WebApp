import { useContext, useEffect, useState } from 'react';
import styles from './AllLikedReviews.module.css'
import { AuthContext } from '../../contexts/AuthContext';
import { getAllLikedReviewsForUser } from '../../services/likesReviewsService';
import ReviewCard from '../reviews/reviewCard/ReviewCard';

const AllLikedReviews = () => {
    const [userFavouriteReviews, setUserFavouriteReviews] = useState([])
    const { authData } = useContext(AuthContext)

    useEffect(() => {
        async function loadUserFavouriteReviews() {
            const result = await getAllLikedReviewsForUser(authData._id)
            console.log(result)
            
            setUserFavouriteReviews(result)
        }

        loadUserFavouriteReviews()
    }, [])

    function userFavouriteReviewsSetter(favouriteReviews) {
        setUserFavouriteReviews(favouriteReviews)
    }

    return (
        <div className={styles['one-section']}>
            <h1>Your favourite reviews</h1>

            {userFavouriteReviews.length > 0 ? (
                userFavouriteReviews.map((likeRecord) => (
                    <ReviewCard review={likeRecord.reviewInfo} userFavouriteReviewsSetter={userFavouriteReviewsSetter} forLikedReviews={true} key={likeRecord._id} />
                ))
            ) : (
                <p className={styles['no-liked-reviews-yet']}>No liked reviews yet</p>
            )}
        </div>
    )
}

export default AllLikedReviews;