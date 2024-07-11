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
