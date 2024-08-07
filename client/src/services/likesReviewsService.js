export async function addLikeReview(data) {
    const authUserData = JSON.parse(localStorage.getItem('authData'))
    const accessToken = authUserData.accessToken

    const response = await fetch(`${import.meta.env.VITE_API_URL}/data/likesReviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })

    const result = await response.json()
    return result
}

export async function getAllLikesForReview(reviewId) {
    const queries = new URLSearchParams({
        where: `reviewId="${reviewId}"`
    })

    const response = await fetch(`${import.meta.env.VITE_API_URL}/data/likesReviews?${queries}`)
    const result = await response.json()

    return result
}

export async function updateLikeReview(data, recordId) {
    const authUserData = JSON.parse(localStorage.getItem('authData'))
    const accessToken = authUserData.accessToken

    const response = await fetch(`${import.meta.env.VITE_API_URL}/data/likesReviews/${recordId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })

    const result = await response.json()
    return result
}

export async function deleteLikeReview(recordId) {
    const authUserData = JSON.parse(localStorage.getItem('authData'))
    const accessToken = authUserData.accessToken
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/data/likesReviews/${recordId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        }
    })
    
    const result = await response.json()
    return result
}

export async function getLikesOfReviewFromOneUser(userId, reviewId) {
    const queries = new URLSearchParams({
        where: `_ownerId="${userId}"`
    })

    const response = await fetch(`${import.meta.env.VITE_API_URL}/data/likesReviews?${queries}%20AND%20reviewId%3D%22${reviewId}%22`)
    const result = await response.json()
    return result
}

export async function getAllLikedReviewsForUser(userId) {
    const queries = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        load: `reviewInfo=reviewId:reviews`
    })

    const response = await fetch(`${import.meta.env.VITE_API_URL}/data/likesReviews?${queries}&sortBy=_createdOn%20desc`)
    const result = await response.json()

    return result
}