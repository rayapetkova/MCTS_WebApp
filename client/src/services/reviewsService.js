const baseUrl = 'http://localhost:3030/data'

export async function getReviews(movieId) {
    const queries = new URLSearchParams({
        where: `movieId="${movieId}"`,
        load: `author=_ownerId:users`
    })

    let response = await fetch(`${baseUrl}/reviews?${queries}`)
    let result = await response.json()

    return result
}

export async function addReview(data) {
    const accessToken = localStorage.getItem('accessToken')

    let response = await fetch(`${baseUrl}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })

    let result = await response.json()
    console.log(result)
    return result
}