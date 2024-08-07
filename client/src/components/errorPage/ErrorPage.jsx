import styles from './ErrorPage.module.css';

import { Link } from 'react-router-dom';

import errorImg from '../../assets/404.png';
import errorImgResponsive from '../../assets/404_responsive.png'

const ErrorPage = () => {
    return (
        <div className={styles['container']}>
            {!window.matchMedia('(max-width: 600px)').matches ? (
                <img src={errorImg} alt="404-error-image" className={styles['error-img']} />
            ) : (
                <img src={errorImgResponsive} alt="404-error-image" className={styles['error-img']} />
            )}
            
            <Link to={'/'} className={styles['back-to-home']}>Back to Home</Link>
        </div>
    )
}

export default ErrorPage;