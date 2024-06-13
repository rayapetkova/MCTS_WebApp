import styles from "./MovieInfo.module.css"

import FirstSectionMovieInfo from "./firstSectionMovieInfo/FirstSectionMovieInfo";
import SecondMainPhotos from "./secondMainPhotos/SecondMainPhotos"
import SecondMainCelebs from "./secondMainCelebs/SecondMainCelebs"
import Reviews from "./reviews/Reviews";
import Aside from "./aside/Aside"

import { useParams } from "react-router-dom";
import { useEffect } from "react";

const MovieInfo = () => {

    const { movieId } = useParams()

    return (
        <main>
            <div className={styles['left']}>
                <FirstSectionMovieInfo movieId={movieId} />

                <SecondMainPhotos />

                <SecondMainCelebs />

                <Reviews />
            </div>

            <Aside />
        </main>
    )
}

export default MovieInfo;