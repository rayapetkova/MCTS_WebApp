import { createContext } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import { useNavigate } from 'react-router-dom'

import { login, register } from "../services/authService";
import { useState } from "react";
import { createUser, retrieveUser } from "../services/usersService";

export const AuthContext = createContext()

export function AuthProvider({ children }) {

    const navigate = useNavigate()
    const [authData, setAuthData] = useState(() => {
        localStorage.removeItem('accessToken')
        return {}
    })
    const [createdUser, setCreatedUser] = useState({})

    const registerSubmitHandler = async (values) => {
        let result = await register({
            email: values.email,
            password: values.password
        })
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
            {children}
        </AuthContext.Provider>
    )
}