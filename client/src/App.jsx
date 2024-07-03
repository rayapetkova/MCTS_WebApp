import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MainPageMovies from "./components/MainPageMovies"
import MovieInfo from "./components/MovieInfo"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import styles from "./App.module.css"

import { Routes, Route } from 'react-router-dom'
import ListMovies from "./components/ListMovies"
import Register from "./components/register/Register"

function App() {

    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<MainPageMovies />} />
                <Route path="/movies/:movieId/details" element={<MovieInfo />}  />
                <Route path="/movies/:sectionName" element={<ListMovies />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App;
