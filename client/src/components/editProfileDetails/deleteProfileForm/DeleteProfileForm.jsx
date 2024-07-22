import styles from './DeleteProfileForm.module.css'
import exclamationMark from '../../../assets/exclamation_mark.png'

const DeleteProfileForm = ({ hideDeleteForm }) => {
    return (
        <section className={styles['info-section']}>

            <div className={styles['right']}>
                <div className={styles['img-container']}>
                    <img src={exclamationMark} alt="" />
                </div>

                <h3>Are you sure you want to delete your account?</h3>
                <p>This action can't be undone. We will delete all your data if you confirm.</p>

                <div className={styles['buttons']}>
                    <button className={styles['cancel-button']} onClick={hideDeleteForm}>Cancel</button>
                    <button className={styles['delete-button']}>Yes, delete it!</button>
                </div>

            </div>
        </section>
    )
}

export default DeleteProfileForm;