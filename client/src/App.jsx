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
import { createUser, retrieveUser } from "./services/usersService";

function App() {
    const navigate = useNavigate()
    const [authData, setAuthData] = useState(() => {
        localStorage.removeItem('accessToken')
        return {}
    })
    const [createdUser, setCreatedUser] = useState({})

    const registerSubmitHandler = async (values) => {
        let result = await register(values)
        setAuthData(result)

        localStorage.setItem('accessToken', result.accessToken)
        let createdUserRecord = await createUser({
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            phoneNumber: '',
            bio: ''
        })
        setCreatedUser(createdUserRecord)
        navigate('/')
    }

    const loginSubmitHandler = async (values) => {
        let result = await login(values)
        setAuthData(result)

        let retrievedUser = await retrieveUser(result._id)
        setCreatedUser(retrievedUser[0])

        localStorage.setItem('accessToken', result.accessToken)
        navigate('/')
    }

    const contextValues = {
        authData,
        createdUser, 
        setCreatedUser,  
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
