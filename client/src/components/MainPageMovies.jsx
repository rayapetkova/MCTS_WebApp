import FirstMain from "./firstMain/FirstMain"
import SecondMain from "./secondMain/SecondMain"
import PopularCelebs from "./popularCelebs/PopularCelebs"

const MainPageMovies = () => {
    return (
        <>
            <FirstMain />

            <SecondMain sectionName='Featured Today'/>

            <SecondMain sectionName='From your Watchlist' />

            <SecondMain sectionName='Top on MCTS this week' />

            <SecondMain sectionName='Top Rated' />

            <SecondMain sectionName='Coming Soon' />

            <PopularCelebs />
        </>
    )
}

export default MainPageMovies