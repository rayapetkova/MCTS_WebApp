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
    const [canLogIn, setCanLogIn] = useState(true)
    const [registerErrorMessage, setRegisterErrorMessage] = useState(true)

    const registerSubmitHandler = async (values) => {
        let result = await register({
            email: values.email,
            password: values.password
        })

        if (result.message) {
            setRegisterErrorMessage(result.message)
            navigate('/register')
        } else {
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

            // sendEmail('template_3n5hp0d', {
            //     userFullName: `${createdUserRecord.firstName} ${createdUserRecord.lastName}`,
            //     userEmail: createdUserRecord.email
            // })
            navigate('/')
        }

    }

    const loginSubmitHandler = async (values) => {
        let result = await login(values)
        setAuthData(result)

        let retrievedUsersWithId = await retrieveUser(result._id)
        let retrievedUser = {}

        if (retrievedUsersWithId.length > 0) {
            retrievedUser = retrievedUsersWithId[0]
        }
        setCreatedUser(retrievedUser)

        if (Object.keys(result).length > 0) {
            navigate('/')
            setCanLogIn(true)
        } else {
            setCanLogIn(false)
        }
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
        createdUser,
        canLogIn,
        registerErrorMessage, 
        registerSubmitHandler,
        loginSubmitHandler,
        logoutSubmitHandler,
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
}