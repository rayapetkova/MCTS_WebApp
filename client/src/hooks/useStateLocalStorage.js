import { useState } from "react";

function useStateLocalStorage(key, initialValue) {
    const [state, setState] = useState(() => {
        const authData = JSON.parse(localStorage.getItem('authData'))

        if (authData) {
            return authData
        }

        return initialValue
    })

    const setStateFunction = (value) => {
        setState(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [
        state,
        setStateFunction
    ]
}

export default useStateLocalStorage;