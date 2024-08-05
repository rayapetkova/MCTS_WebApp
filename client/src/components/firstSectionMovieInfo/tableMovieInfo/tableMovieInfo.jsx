import styles from './tableMovieInfo.module.css';

import Spinner from "../../spinner/Spinner";
import { exctractDirsAndWriters, extractGenresAndCast } from "../../../api_data/extractingData";

import tick from '../../../assets/tick.png';

const MovieInfo = ({ movieInfo, movieCredits, authData, addToWatchListEvent, isAddedToWatchlist }) => {
    return (
        <div className={styles['movie-info']} data-testid="movieInfo">

            {(movieInfo && Object.keys(movieInfo)) ? (
                <table>
                    <tbody>
                        <tr>
                            <td>Genre</td>
                            <td>{movieInfo.genres && extractGenresAndCast(movieInfo.genres)}</td>
                        </tr>

                        <tr>
                            <td>Plot</td>
                            <td>{movieInfo.overview}</td>
                        </tr>

                        <tr>
                            <td>Director</td>
                            <td>{movieCredits.crew && exctractDirsAndWriters(movieCredits.crew, 'Director')}</td>
                        </tr>

                        <tr>
                            <td>Writers</td>
                            <td>{movieCredits.crew && exctractDirsAndWriters(movieCredits.crew, 'Writer')}</td>
                        </tr>

                        <tr>
                            <td>Stars</td>
                            <td>{movieCredits.cast && extractGenresAndCast(movieCredits.cast.slice(0, 3))}</td>
                        </tr>

                    </tbody>
                </table>
            ) : (
                <Spinner />
            )}


            {Object.keys(authData).length > 0 && (
                <section>
                    {(isAddedToWatchlist) ? (
                        <button className={styles['added-to-watchlist']} disabled><img src={tick} className={styles['tick']} />Added to Watchlist</button>
                    ) : (
                        <button className={styles['add-to-watchlist']} onClick={addToWatchListEvent}>Add to Watchlist</button>
                    )}
                </section>
            )}

        </div>
    )
}

export default MovieInfo;