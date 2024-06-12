import styles from "../firstSectionMovieInfo/FirstSectionMovieInfo.module.css"

import movieImg from '../../assets/movie_img.png'
import moviePoster from '../../assets/movie_poster.png'

const FirstSectionMovieInfo = () => {

    return (
        <section className={styles['first-section']}>
            <h1>Dune: Part Two</h1>
            <div className={styles['small-info']}>
                <ul className={styles['left-ul']}>
                    <li>2024</li>
                    <li>&nbsp;   &#xb7;  EN</li>
                    <li>&nbsp;   &#xb7;  2h 46m</li>
                </ul>

                <div className={styles['buttons']}>
                    <a href="#">Review</a>
                    <a href="#">8.9/10</a>
                </div>
            </div>
            <div className={styles['two-images']}>
                <div className={`${styles['img-container']} ${styles['first']}`}>
                    <img src={moviePoster} alt="movie-poster" />
                </div>
                <div className={`${styles['img-container']} ${styles['second']}`}>
                    <img src={movieImg} alt="movie-image" />
                </div>
            </div>
            <div className={styles['movie-info']}>
                <table>
                    <tbody>
                        <tr>
                            <td>Genre</td>
                            <td>Adventure, Action, Drama</td>
                        </tr>

                        <tr>
                            <td>Plot</td>
                            <td>Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.</td>
                        </tr>

                        <tr>
                            <td>Director</td>
                            <td>Denis Villenueve</td>
                        </tr>

                        <tr>
                            <td>Writers</td>
                            <td>Timothee Chalamet, Zendaya, Rebecca Ferguson</td>
                        </tr>

                        <tr>
                            <td>Awards</td>
                            <td>Top rated movie 10, 2 nominations</td>
                        </tr>
                    </tbody>
                </table>

                <section>
                    <a href="#">Add to Watchlist</a>
                </section>
            </div>
        </section>
    )
}

export default FirstSectionMovieInfo;