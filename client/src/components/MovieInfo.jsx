import styles from "./MovieInfo.module.css"

import FirstSectionMovieInfo from "./firstSectionMovieInfo/FirstSectionMovieInfo";
import SecondMainPhotos from "./secondMainPhotos/SecondMainPhotos"
import SecondMainCelebs from "./secondMainCelebs/SecondMainCelebs"
import Reviews from "./reviews/Reviews";

const MovieInfo = () => {

    return (
        <main>
            <div className="left">
                <FirstSectionMovieInfo />

                <SecondMainPhotos />

                <SecondMainCelebs />

                <Reviews />
            </div>

            <aside>
                <ul>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Cast & Crew</a></li>
                    <li><a href="#">User Reviews</a></li>
                    <li><a href="#">Storyline</a></li>
                    <li><a href="#">Details</a></li>
                </ul>
            </aside>
        </main>
    )
}

export default MovieInfo;