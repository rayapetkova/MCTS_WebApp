const baseUrl = 'http://localhost:3030/users'

export async function register(data) {
    let response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let result = response.json()

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
    let result = response.json()

    return result
}


// {
//     email: '',
//     password: '',
//     confirmPassword: '',
//     username: ''
// }