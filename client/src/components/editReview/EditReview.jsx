import styles from './EditReview.module.css';

import useForm from '../../hooks/useForm';
import { editReview, getReviews } from '../../services/reviewsService';

const formNames = {
    rate: 'rate',
    title: 'title',
    review: 'review'
}

const EditReview = ({ review, setshowEditForm, reviewsSetter }) => {
    const createdUser = JSON.parse(localStorage.getItem('createdUser'))
    
    const editReviewSubmitHandler = async(values) => {
        let result = await editReview(values, review._id)
        let movieReviews = await getReviews(review.movieId)
        reviewsSetter(movieReviews)

        setshowEditForm(false)
    }
    
    const [values, onChange, onSubmit] = useForm(editReviewSubmitHandler, {
        [formNames.rate]: review.rate,
        [formNames.title]: review.title,
        [formNames.review]: review.review,
        movieId: review.movieId,
        userInfo: {
            firstName: createdUser.firstName,
            lastName: createdUser.lastName
        }
    })

    return (
        <section className={styles['info-section']}>

            <div className={styles['right']}>
                <h3>Edit Review</h3>

                <form onSubmit={onSubmit}>

                    <div className={styles['row']}>
                        <div className={styles['field']}>
                            <label htmlFor="rate">Rate</label>
                            <input 
                                type="number" 
                                id="rate" 
                                required
                                min={0} 
                                max={10} 
                                className={styles['rate-input']} 
                                name={formNames.rate} 
                                value={values.rate} 
                                onChange={onChange}
                            />
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
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className={styles['bio-row']}>
                        <h3>Review</h3>
                        <textarea 
                            rows="10" 
                            name={formNames.review}
                            value={values.review} 
                            onChange={onChange}
                        />
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