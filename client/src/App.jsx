import Header from "./components/header/Header"
import FirstMain from './components/firstMain/FirstMain'
import SecondMain from "./components/secondMain/SecondMain"
import PopularCelebs from "./components/popularCelebs/PopularCelebs"
import Footer from "./components/footer/Footer"
import styles from "./App.module.css"

function App() {

    return (
        <div>
            <Header />

            <FirstMain />

            <SecondMain sectionName='Featured Today'/>

            <SecondMain sectionName='From your Watchlist' />
            
            <SecondMain sectionName='Top on MCTS this week' />

            <SecondMain sectionName='Top Rated' />

            <SecondMain sectionName='Coming Soon' />

            <PopularCelebs />

            <Footer />
        </div>
    )
}

export default App
