import styles from "./MovieInfo.module.css"

import FirstSectionMovieInfo from "./firstSectionMovieInfo/FirstSectionMovieInfo";
import SecondMainPhotos from "./secondMainPhotos/SecondMainPhotos"
import SecondMainCelebs from "./secondMainCelebs/SecondMainCelebs"
import Reviews from "./reviews/Reviews";
import Aside from "./aside/Aside"

const MovieInfo = () => {

    return (
        <main>
            <div className={styles['left']}>
                <FirstSectionMovieInfo />

                <SecondMainPhotos />

                <SecondMainCelebs />

                <Reviews />
            </div>

            <Aside />
        </main>
    )
}

export default MovieInfo;