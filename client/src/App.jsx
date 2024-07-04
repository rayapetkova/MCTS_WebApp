import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MainPageMovies from "./components/MainPageMovies"
import MovieInfo from "./components/MovieInfo"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import styles from "./App.module.css"

import { Routes, Route } from 'react-router-dom'
import ListMovies from "./components/ListMovies"
import Register from "./components/register/Register"

import { AuthContext } from './contexts/AuthContext'
import { register } from "./services/authService";
import { useState } from "react";

function App() {
    const [authData, setAuthData] = useState({})

    const registerSubmitHandler = async (values) => {
        let response = await register(values)
        setAuthData(response)
        localStorage.setItem('accessToken', response.accessToken)
    }

    return (
        <AuthContext.Provider value={registerSubmitHandler}>
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
        </AuthContext.Provider>
    )
}

export default App;
