import styles from './tableMovieInfo.module.css';

import Spinner from "../../spinner/Spinner";
import { extractMovieGenres, extractDirectors, extractWriters, extractCast } from "../../../api_data/extractingData";

import tick from '../../../assets/tick.png';

const MovieInfo = ({ movieInfo, movieCredits, authData, addToWatchListEvent, isAddedToWatchlist }) => {
    return (
        <div className={styles['movie-info']} data-testid="movieInfo">

            {(movieInfo && Object.keys(movieInfo)) ? (
                <table>
                    <tbody>
                        <tr>
                            <td>Genre</td>
                            <td>{movieInfo.genres && extractMovieGenres(movieInfo.genres)}</td>
                        </tr>

                        <tr>
                            <td>Plot</td>
                            <td>{movieInfo.overview}</td>
                        </tr>

                        <tr>
                            <td>Director</td>
                            <td>{movieCredits.crew && extractDirectors(movieCredits.crew)}</td>
                        </tr>

                        <tr>
                            <td>Writers</td>
                            <td>{movieCredits.crew && extractWriters(movieCredits.crew)}</td>
                        </tr>

                        <tr>
                            <td>Stars</td>
                            <td>{movieCredits.cast && extractCast(movieCredits.cast, 3)}</td>
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