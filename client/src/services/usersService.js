const baseUrl = 'http://localhost:3030/data'

export async function createUser(data) {
    const accessToken = localStorage.getItem('accessToken')

    let response = await fetch(`${baseUrl}/usersRecords`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })

    let result = await response.json()
    return result
}

export async function editUser(data, recordId) {
    const accessToken = localStorage.getItem('accessToken')

    let response = await fetch(`${baseUrl}/usersRecords/${recordId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })

    let result = await response.json()
    return result
}

export async function retrieveUser(userId) {
    const queries = new URLSearchParams({
        where: `_ownerId="${userId}"`
    })

    let response = await fetch(`${baseUrl}/usersRecords?${queries}`);
    let result = await response.json()
    return result
}