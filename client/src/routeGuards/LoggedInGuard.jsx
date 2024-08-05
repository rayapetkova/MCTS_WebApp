import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

const LoggedInGuard = ({ children }) => {
    const { authData } = useContext(AuthContext)

    if (!Object.keys(authData).length > 0) {
        return (
            <>
                {children}
            </>

        )
    }

    return (
        <Navigate to={'/'} />
    )
}

export default LoggedInGuard;