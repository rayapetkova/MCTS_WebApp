export async function addReview(data) {
    const authUserData = JSON.parse(localStorage.getItem('authData'))
    const accessToken = authUserData.accessToken

    let response = await fetch(`${import.meta.env.VITE_API_URL}/data/reviews`, {
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

export async function getReviews(movieId) {
    const queries = new URLSearchParams({
        where: `movieId="${movieId}"`,
        load: `author=_ownerId:users`
    })

    let response = await fetch(`${import.meta.env.VITE_API_URL}/data/reviews?${queries}`)

    if (!response.ok) {
        return []
    }
    
    let result = await response.json()

    return result
}

export async function editReview(data, recordId) {
    const authUserData = JSON.parse(localStorage.getItem('authData'))
    const accessToken = authUserData.accessToken

    let response = await fetch(`${import.meta.env.VITE_API_URL}/data/reviews/${recordId}`, {
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

export async function deleteReview(recordId) {
    const authData = JSON.parse(localStorage.getItem('authData'))
    const accessToken = authData.accessToken

    let response = await fetch(`${import.meta.env.VITE_API_URL}/data/reviews/${recordId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        }
    })

    let result = await response.json()
    return result
}