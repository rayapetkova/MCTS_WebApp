import styles from './ReviewCard.module.css';

import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import EditReview from '../../editReview/EditReview';
import { convertToDate } from "../../../utils/convertToDate";
import { AuthContext } from '../../../contexts/AuthContext';
import { deleteReview, getReviews } from '../../../services/reviewsService';
import { retrieveUser } from '../../../services/usersService';

import emptyHeart from '../../../assets/empty_heart.png'
import redHeart from '../../../assets/red_heart.png'
import { addLikeReview, deleteLikeReview, getAllLikedReviewsForUser, getAllLikesForReview, getLikesOfReviewFromOneUser } from '../../../services/likesReviewsService';
import { dataFunctions } from '../../../api_data/dataFunctions';

const ReviewCard = ({ review, forReviewsSection, reviewsSetter, fromMovieInfoReviews, userFavouriteReviewsSetter, forLikedReviews }) => {
    const [showEditForm, setshowEditForm] = useState(false)
    const [reviewUser, setReviewUser] = useState({})
    const [reviewLikesFromUser, setReviewLikesFromUser] = useState([])
    const [movieInfo, setMovieInfo] = useState({})
    const [allReviewLikes, setAllReviewLikes] = useState([])
    const { authData } = useContext(AuthContext)

    useEffect(() => {
        async function loadReviewUser() {
            const result = await retrieveUser(review._ownerId)

            if (Object.keys(result).length > 0) {
                setReviewUser(result[0])
            }
        }

        async function loadReviewLikesFromUser() {
            const result = await getLikesOfReviewFromOneUser(authData._id, review._id)
            setReviewLikesFromUser(result)
        }

        async function loadMovieInfo() {
            const result = await dataFunctions.getMovieInfo(review.movieId)
            setMovieInfo(result)
        }

        async function loadAllReviewLikes() {
            const result = await getAllLikesForReview(review._id)
            setAllReviewLikes(result)
        }

        loadReviewUser()
        loadReviewLikesFromUser()
        loadMovieInfo()
        loadAllReviewLikes()
    }, [])

    const showEditReviewFormEvent = (e) => setshowEditForm(true)

    async function deleteReviewEvent(e) {
        const allLikes = await getLikesOfReviewFromOneUser(authData._id, review._id)

        for (let like of allLikes) {
            const deletedLike = await deleteLikeReview(like._id)
        }

        let result = await deleteReview(review._id)
        if (forLikedReviews) {
            const fetchedUserFavouriteReviews = await getAllLikedReviewsForUser(authData._id)

            userFavouriteReviewsSetter(fetchedUserFavouriteReviews)
        } else {
            let allReviews = await getReviews(review.movieId)

            reviewsSetter(allReviews)
        }

    }

    async function deleteLikeClickHandler() {
        const result = await deleteLikeReview(reviewLikesFromUser[0]._id)
        const fetchedAllLikesForReview = await getAllLikesForReview(review._id)
            setAllReviewLikes(result)

        if (forLikedReviews) {
            const fetchedUserFavouriteReviews = await getAllLikedReviewsForUser(authData._id)

            userFavouriteReviewsSetter(fetchedUserFavouriteReviews)
        } else {
            const fetchedAllUserLikes = await getLikesOfReviewFromOneUser(authData._id)

            setReviewLikesFromUser(fetchedAllUserLikes)
        }

    }

    async function addLikeClickHandler(e) {
        const result = await addLikeReview({
            reviewId: review._id
        })

        const fetchedAllUserLikes = await getLikesOfReviewFromOneUser(authData._id, review._id)
        const fetchedAllLikesForReview = await getAllLikesForReview(review._id)

        setAllReviewLikes(fetchedAllLikesForReview)
        setReviewLikesFromUser(fetchedAllUserLikes)
    }

    return (
        <div className={`${styles['box']} ${forReviewsSection ? styles['for-reviews-section-box'] : ''} ${forLikedReviews ? styles['for-liked-reviews-box'] : ''}`} data-testid="reviews">
            <section className={styles['top']}>
                <p><span>{review.rate}</span>/10</p>
                {(authData._id === review._ownerId) ? (
                    <section className={styles['buttons']}>
                        {reviewLikesFromUser.length > 0 ? (
                            <button className={`${styles['heart-container-red']} ${fromMovieInfoReviews ? styles['info-container-red'] : ''}`} onClick={(e) => deleteLikeClickHandler()}>
                                <img src={redHeart} alt="heart-like" />
                                <p className={styles['likes-num']}>{allReviewLikes.length}</p>
                            </button>
                        ) : (
                            <button className={`${styles['heart-container-empty']} ${fromMovieInfoReviews ? styles['info-container-empty'] : ''}`} onClick={addLikeClickHandler}>
                                <img src={emptyHeart} alt="heart-like" />
                                <p className={styles['likes-num']}>{allReviewLikes.length}</p>
                            </button>
                        )}
                        
                        <button onClick={showEditReviewFormEvent} className={styles['edit']}>Edit</button>
                        <button onClick={deleteReviewEvent} className={styles['delete']}>Delete</button>
                        {showEditForm && <EditReview review={review} setshowEditForm={setshowEditForm} reviewsSetter={reviewsSetter} userFavouriteReviewsSetter={userFavouriteReviewsSetter} forLikedReviews={forLikedReviews} />}
                    </section>
                ) : (
                    <>
                        {Object.keys(authData).length > 0 && (
                            reviewLikesFromUser.length > 0 ? (
                                <button className={`${styles['heart-container-red-2']} ${fromMovieInfoReviews ? styles['info-container-red-2'] : ''}`} onClick={(e) => deleteLikeClickHandler()}>
                                    <img src={redHeart} alt="heart-like" />
                                    <p className={styles['likes-num']}>{allReviewLikes.length}</p>
                                </button>
                            ) : (
                                <button className={`${styles['heart-container-empty-2']} ${fromMovieInfoReviews ? styles['info-container-empty-2'] : ''}`} onClick={addLikeClickHandler}>
                                    <img src={emptyHeart} alt="heart-like" />
                                    <p className={styles['likes-num']}>{allReviewLikes.length}</p>
                                </button>
                            )
                        )}

                    </>

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
            {forLikedReviews && (
                <p className={styles['to-the-movie']}>To the Movie <span>&#10509;&#160;</span><Link to={`/movies/${review.movieId}/details`}>{movieInfo.title}</Link></p>
            )}
            
            <p className={styles['review-desc']}>{review.review}</p>
        </div>
    )
}

export default ReviewCard;