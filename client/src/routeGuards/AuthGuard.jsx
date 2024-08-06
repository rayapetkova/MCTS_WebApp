import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

const AuthGuard = ({ children }) => {
    const { authData } = useContext(AuthContext)

    if (Object.keys(authData).length > 0) {
        return (
            <>
                {children}
            </>
        )
    }

    return (
        <Navigate to={'/login'} state={{loginFirstErrorMessage: 'You need to login first!'}}/>
    )
}

export default AuthGuard;