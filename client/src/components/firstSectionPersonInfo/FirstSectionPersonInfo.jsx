import movieImg from '../../assets/movie_img.png'
import moviePoster from '../../assets/movie_poster.png'

import styles from './FirstSectionPersonInfo.module.css'

const FirstSectionPersonInfo = ({ personId }) => {

    return (
        <section className={styles['first-section']}>
            <h1>Eric Kofi Abrefa</h1>
            <div className={styles['small-info']}>
                <ul className={styles['left-ul']}>
                    <li>Acting</li>
                    <li>&nbsp;   &#xb7;  170.959</li>
                </ul>
            </div>
            <div className={styles['two-images']}>
                <div className={`${styles['img-container']} ${styles['first']}`}>
                    <img src={moviePoster} alt="movie-poster" />
                </div>
                <div className={`${styles['img-container']} ${styles['second']}`}>
                    <img src={movieImg} alt="movie-image" />
                </div>
            </div>
            <div className={styles['person-info']}>
                <p className={styles['biography']}>Eric Kofi Abrefa is a British stage, film and television actor, trained at the Royal Welsh College of Music and Drama, Cardiff, Wales, UK.</p>
                <div className={styles['participated-in']}>
                    <h6>Movies</h6>
                    <p>Some, Second, Maze Runner, Random Movie, Some, Second, Maze Runner, Random Movie</p>
                </div>
            </div>
        </section>
    )
}

export default FirstSectionPersonInfo;