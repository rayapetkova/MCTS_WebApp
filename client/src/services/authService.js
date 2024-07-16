const baseUrl = 'http://localhost:3030/users'

export async function register(data) {
    let response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let result = await response.json()

    return result
}

export async function login(data) {
    let response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let result = await response.json()

    return result
}

export async function logout() {
    const authUserData = JSON.parse(localStorage.getItem('authData'))
    const accessToken = authUserData.accessToken

    let response = await fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        }
    })

    return response
}

// export async function getUserDetails() {
//     const accessToken = localStorage.getItem('accessToken')

//     let response = await fetch(`${baseUrl}/me`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Authorization': accessToken
//         }
//     })

//     let result = await response.json()
//     return result
// }



// {
//     email: '',
//     password: '',
//     confirmPassword: '',
//     username: ''
// }