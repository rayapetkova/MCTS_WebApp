import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getUserDetails } from "../../services/authService";

const ProfileInfo = () => {
    const {authData} = useContext(AuthContext)

    useEffect(() => {
        async function loadUserDetails() {
            let result = await getUserDetails()
            console.log(result)
        }

        loadUserDetails()
    })

    return (
        <h1>User Details</h1>
    )
}

export default ProfileInfo;