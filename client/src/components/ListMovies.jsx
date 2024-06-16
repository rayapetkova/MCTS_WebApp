import FirstMain from "./firstMain/FirstMain"
import SecondMain from "./secondMain/SecondMain"
import PopularCelebs from "./popularCelebs/PopularCelebs"
import { useParams } from "react-router-dom"

const ListMovies = () => {

    const { sectionName } = useParams()

    return (
        <>
            <SecondMain sectionName={sectionName} listFeature={true} numOfCards={5} numOfRows={6} />
        </>
    )
}

export default ListMovies;