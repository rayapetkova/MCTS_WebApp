import styles from './AddReview.module.css'
import personImg from '../../assets/person.png'
import useForm from '../../hooks/useForm'
import { addReview } from '../../services/reviewsService'

const formNames = {
    rate: 'rate',
    review: 'review'
}

const AddReview = ({ movieId }) => {
    const addReviewSubmitHandler = async (values) => {
        let result = addReview(values)
        console.log(result)
    }
    
    const [values, onChange, onSubmit] = useForm(addReviewSubmitHandler, {
        [formNames.rate]: '',
        [formNames.review]: '',
        movieId
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
                                type="text" 
                                id="rate" 
                                name={formNames.rate} 
                                value={values.rate} 
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

                    <button className={styles['update-button']}>Update</button>

                </form>
            </div>
        </section>
    )
}

export default AddReview;