import FirstMain from "./firstMain/FirstMain"
import SecondMain from "./secondMain/SecondMain"
import PopularCelebs from "./popularCelebs/PopularCelebs"

const MainPageMovies = () => {
    return (
        <>
            <FirstMain />

            <SecondMain sectionName='Featured Today' numOfCards={6} numOfRows={1}/>

            <SecondMain sectionName='Watchlist' numOfCards={6} numOfRows={1} />

            <SecondMain sectionName='Top on MCTS this week' numOfCards={6} numOfRows={1} />

            <SecondMain sectionName='Top Rated' numOfCards={6} numOfRows={1} />

            <SecondMain sectionName='Coming Soon' numOfCards={6} numOfRows={1} />

            <PopularCelebs />
        </>
    )
}

export default MainPageMovies;