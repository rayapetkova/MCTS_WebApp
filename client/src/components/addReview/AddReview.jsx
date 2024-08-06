import styles from './AddReview.module.css';

import useForm from '../../hooks/useForm';
import { addReview, getReviews } from '../../services/reviewsService';
import { useFormik } from 'formik';
import { addReviewSchema } from '../../schemas/addReviewSchema';

const formNames = {
    rate: 'rate',
    title: 'title',
    review: 'review'
}

const AddReview = ({ movieId, reviewsSetter, setShowForm }) => {
    const createdUser = JSON.parse(localStorage.getItem('createdUser'))

    const addReviewSubmitHandler = async (values) => {
        let result = await addReview(values)
        let movieReviews = await getReviews(movieId)

        reviewsSetter(movieReviews)
        setShowForm(false)
    }

    const {values, handleChange, handleSubmit, handleBlur, errors, touched} = useFormik({
        initialValues: {
            [formNames.rate]: '',
            [formNames.title]: '',
            [formNames.review]: '',
            movieId,
            userInfo: {
                firstName: createdUser.firstName,
                lastName: createdUser.lastName
            }
        },
        validationSchema: addReviewSchema,
        onSubmit: () => addReviewSubmitHandler(values)
    })

    return (
        <section className={styles['info-section']}>

            <div className={styles['right']}>
                <h3>Add Review</h3>

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
                            <label htmlFor="title">Title</label>
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
                        <button type='submit' className={styles['update-button']}>Post</button>
                        <button onClick={(e) => setShowForm(false)} className={styles['cancel-button']}>Cancel</button>
                    </div>


                </form>
            </div>
        </section>
    )
}

export default AddReview;