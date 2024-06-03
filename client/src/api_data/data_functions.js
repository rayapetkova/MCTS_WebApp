export default async function featuredToday() {
    let response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=e4a864389e1a88f97675e63b530b64c7')
    let result = await response.json()

    return result.results
}