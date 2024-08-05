import styles from "./MovieInfo.module.css";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Aside from "./aside/Aside";
import Reviews from "./reviews/Reviews";
import FirstSectionMovieInfo from "./firstSectionMovieInfo/FirstSectionMovieInfo";
import SecondMainPhotos from "./secondMainPhotos/SecondMainPhotos";
import SecondMainCelebs from "./secondMainCelebs/SecondMainCelebs";

const MovieInfo = () => {

    const { movieId } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <div className={styles['left']}>
                <FirstSectionMovieInfo movieId={movieId} />

                <SecondMainPhotos movieId={movieId} />

                <SecondMainCelebs movieId={movieId} />

                <Reviews movieId={movieId} />
            </div>

            <Aside />
        </main>
    )
}

export default MovieInfo;