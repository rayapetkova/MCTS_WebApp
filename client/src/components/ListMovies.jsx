import { useParams } from "react-router-dom";

import SecondMain from "./secondMain/SecondMain";

const ListMovies = () => {

    const { sectionName } = useParams()

    return (
        <>
            <SecondMain sectionName={sectionName} listFeature={true} numOfCards={5} numOfRows={6} />
        </>
    )
}

export default ListMovies;