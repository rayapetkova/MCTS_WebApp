import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MainPageMovies from "./components/MainPageMovies"
import MovieInfo from "./components/MovieInfo"
import styles from "./App.module.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

    return (
        <div>
            <Header />

            <MovieInfo />

            <Footer />
        </div>
    )
}

export default App
