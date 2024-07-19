import FirstMain from "./firstMain/FirstMain"
import SecondMain from "./secondMain/SecondMain"
import PopularCelebs from "./popularCelebs/PopularCelebs"

const MainPageMovies = () => {
    return (
        <>
            <FirstMain />

            <SecondMain sectionName='Featured Today' numOfCards={6} numOfRows={1} listFeature={false}/>

            <SecondMain sectionName='Watchlist' numOfCards={6} numOfRows={1} listFeature={false} />

            <SecondMain sectionName='Top on MCTS this week' numOfCards={6} numOfRows={1} listFeature={false} />

            <SecondMain sectionName='Top Rated' numOfCards={6} numOfRows={1} listFeature={false} />

            <SecondMain sectionName='Coming Soon' numOfCards={6} numOfRows={1} listFeature={false} />

            <PopularCelebs numOfCards={6} numOfRows={1} listFeature={false} />
        </>
    )
}

export default MainPageMovies;