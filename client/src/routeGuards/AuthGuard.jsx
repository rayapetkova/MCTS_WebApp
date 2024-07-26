import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

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
        <Navigate to={'/login'} />
    )
}

export default AuthGuard;