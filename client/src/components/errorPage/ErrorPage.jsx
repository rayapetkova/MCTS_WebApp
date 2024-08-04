import { Link } from 'react-router-dom';
import errorImg from '../../assets/404.png'
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
    return (
        <div className={styles['container']}>
            <img src={errorImg} alt="404-error-image" className={styles['error-img']} />
            <Link to={'/'} className={styles['back-to-home']}>Back to Home</Link>
        </div>
    )
}

export default ErrorPage;