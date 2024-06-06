import Header from "./components/Header"
import FirstMain from "./components/FirstMain"
import SecondMain from "./components/SecondMain"
import PopularCelebs from "./components/PopularCelebs"
import Footer from "./components/Footer"
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
