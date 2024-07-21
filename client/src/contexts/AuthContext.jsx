import { createContext } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import { useNavigate } from 'react-router-dom'

import { login, logout, register } from "../services/authService";
import { useState } from "react";
import { createUser, retrieveUser } from "../services/usersService";
import useStateLocalStorage from '../hooks/useStateLocalStorage';
import sendEmail from '../api_data/emails/sendEmail';

export const AuthContext = createContext()

export function AuthProvider({ children }) {

    const navigate = useNavigate()
    const [authData, setAuthData] = useStateLocalStorage('authData', {})
    const [createdUser, setCreatedUser] = useStateLocalStorage('createdUser', {})

    const registerSubmitHandler = async (values) => {
        let result = await register({
            email: values.email,
            password: values.password
        })
        setAuthData(result)

        let createdUserRecord = await createUser({
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            phoneNumber: '',
            bio: '',
            profileImg: 'https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png'
        })
        setCreatedUser(createdUserRecord)

        console.log(createdUserRecord)
        navigate('/')
    }

    const loginSubmitHandler = async (values) => {
        let result = await login(values)
        setAuthData(result)

        let retrievedUser = await retrieveUser(result._id)
        setCreatedUser(retrievedUser[0])

        navigate('/')
    }

    const logoutSubmitHandler = async () => {
        let result = await logout()

        setAuthData({})
        setCreatedUser({})
    }

    const contextValues = {
        checkIfUserLogged: Object.keys(authData).length > 0 ? true : false,
        setCreatedUser, 
        authData, 
        registerSubmitHandler,
        loginSubmitHandler,
        logoutSubmitHandler
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
}