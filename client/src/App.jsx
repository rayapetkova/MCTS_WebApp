import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MainPageMovies from "./components/MainPageMovies"
import MovieInfo from "./components/MovieInfo"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import styles from "./App.module.css"

import { Routes, Route, useNavigate } from 'react-router-dom'
import ListMovies from "./components/ListMovies"
import Register from "./components/register/Register"

import { AuthContext } from './contexts/AuthContext'
import { login, register } from "./services/authService";
import { useState } from "react";
import Login from "./components/login/Login";
import EditProfileDetails from "./components/editProfileDetails/EditProfileDetails";
import { createUser } from "./services/usersService";

function App() {
    const navigate = useNavigate()
    const [authData, setAuthData] = useState(() => {
        localStorage.removeItem('accessToken')
        return {}
    })

    const registerSubmitHandler = async (values) => {
        let result = await register(values)
        setAuthData(result)

        localStorage.setItem('accessToken', result.accessToken)
        await createUser({
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName
        })
        navigate('/')
    }

    const loginSubmitHandler = async (values) => {
        let response = await login(values)
        setAuthData(response)

        localStorage.setItem('accessToken', response.accessToken)
        navigate('/')
    }

    const contextValues = {
        authData,
        registerSubmitHandler,
        loginSubmitHandler
    }

    return (
        <AuthContext.Provider value={contextValues}>
            <div>
                <Header />

                <Routes>
                    <Route path="/" element={<MainPageMovies />} />
                    <Route path="/movies/:movieId/details" element={<MovieInfo />}  />
                    <Route path="/movies/:sectionName" element={<ListMovies />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/users/me" element={<EditProfileDetails />} />
                </Routes>

                <Footer />
            </div>
        </AuthContext.Provider>
    )
}

export default App;
