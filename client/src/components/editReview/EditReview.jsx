import styles from './EditReview.module.css';

import { useFormik } from 'formik';

import { editReview, getReviews } from '../../services/reviewsService';
import { reviewSchema } from '../../schemas/reviewSchema';
import { getAllLikedReviewsForUser } from '../../services/likesReviewsService';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const formNames = {
    rate: 'rate',
    title: 'title',
    review: 'review'
}

const EditReview = ({ review, setshowEditForm, reviewsSetter, userFavouriteReviewsSetter, forLikedReviews }) => {
    const { createdUser } = useContext(AuthContext)

    const editReviewSubmitHandler = async (values) => {
        let result = await editReview(values, review._id)

        if (forLikedReviews) {
            const userFavouriteReviews = await getAllLikedReviewsForUser(createdUser._ownerId)
            userFavouriteReviewsSetter(userFavouriteReviews)
        } else {
            let movieReviews = await getReviews(review.movieId)
            reviewsSetter(movieReviews)
        }


        setshowEditForm(false)
    }

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {
            [formNames.rate]: review.rate,
            [formNames.title]: review.title,
            [formNames.review]: review.review,
            movieId: review.movieId,
            userInfo: {
                firstName: createdUser.firstName,
                lastName: createdUser.lastName
            }
        },
        validationSchema: reviewSchema,
        onSubmit: () => editReviewSubmitHandler(values)
    })

    return (
        <section className={styles['info-section']}>

            <div className={styles['right']}>
                <h3>Edit Review</h3>

                <form onSubmit={handleSubmit}>
                    <div className={styles['row']}>
                        <div className={styles['field']}>
                            <label htmlFor="rate">Rate</label>
                            <input
                                type="number"
                                id="rate"
                                min={0}
                                max={10}
                                className={styles['rate-input']}
                                name={formNames.rate}
                                value={values.rate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            {(errors.rate && touched.rate) && <p>{errors.rate}</p>}
                        </div>
                    </div>

                    <div className={styles['row']}>
                        <div className={styles['field']}>
                            <label htmlFor="rate">Title</label>
                            <input
                                type="text"
                                id="title"
                                min={0}
                                max={10}
                                name={formNames.title}
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            {(errors.title && touched.title) && <p>{errors.title}</p>}
                        </div>
                    </div>

                    <div className={styles['bio-row']}>
                        <h3>Review</h3>
                        <textarea
                            rows="10"
                            name={formNames.review}
                            value={values.review}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        {(errors.review && touched.review) && <p>{errors.review}</p>}
                    </div>

                    <div className={styles['buttons']}>
                        <button type='submit' className={styles['update-button']}>Update</button>
                        <button className={styles['cancel-button']} onClick={(e) => setshowEditForm(false)}>Cancel</button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default EditReview;