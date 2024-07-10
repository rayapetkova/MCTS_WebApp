import styles from './AddReview.module.css'
import personImg from '../../assets/person.png'
import useForm from '../../hooks/useForm'
import { addReview, getReviews } from '../../services/reviewsService'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const formNames = {
    rate: 'rate',
    title: 'title',
    review: 'review'
}

const AddReview = ({ movieId, setReviews, setShowForm }) => {
    const { createdUser } = useContext(AuthContext)

    const addReviewSubmitHandler = async (values) => {
        let result = await addReview(values)
        let movieReviews = await getReviews(movieId)
        setReviews(movieReviews)

        setShowForm(false)
    }
    
    const [values, onChange, onSubmit] = useForm(addReviewSubmitHandler, {
        [formNames.rate]: '',
        [formNames.title]: '',
        [formNames.review]: '',
        movieId,
        userInfo: {
            firstName: createdUser.firstName,
            lastName: createdUser.lastName
        }
    })

    return (
        <section className={styles['info-section']}>

            <div className={styles['right']}>
                <h3>Add Review</h3>

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

                    <button className={styles['update-button']}>Post</button>

                </form>
            </div>
        </section>
    )
}

export default AddReview;