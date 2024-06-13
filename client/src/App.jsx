import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MainPageMovies from "./components/MainPageMovies"
import MovieInfo from "./components/MovieInfo"
import styles from "./App.module.css"

import { Routes, Route } from 'react-router-dom'

function App() {

    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<MainPageMovies />} />
                <Route path="/movies/:movieId/details" element={<MovieInfo />}  />
            </Routes>

            <Footer />
        </div>
    )
}

export default App
