const baseUrl = 'http://localhost:3030/data'

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
}
