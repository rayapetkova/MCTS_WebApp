const baseUrl = 'http://localhost:3030/data'

export async function addToWatchlist(data) {
    const accessToken = localStorage.getItem('accessToken')

    let response = await fetch(`${baseUrl}/watchlists`, {
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

export async function getWatchlist(userId) {
    const queries = new URLSearchParams({
        where: `_ownerId="${userId}"`
    })

    let response = await fetch(`${baseUrl}/watchlists?${queries}`)

    if (!response.ok) {
        return []
    }
    
    let result = await response.json()

    const moviesWatchlist = []
    
    for (let record of Object.values(result)) {
        moviesWatchlist.push(record.movie)
    }

    return moviesWatchlist
}