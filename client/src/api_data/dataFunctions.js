export default async function getFeaturedToday() {
    let response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=e4a864389e1a88f97675e63b530b64c7')
    let result = await response.json()

    return result.results
}

export async function getFeaturedThisWeek() {
    let response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=e4a864389e1a88f97675e63b530b64c7')
    let result = await response.json()

    return result.results
}

export async function getTopRatedMovies() {
    let response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=e4a864389e1a88f97675e63b530b64c7')
    let result = await response.json()

    return result.results
}

export async function getComingSoonMovies() {
    let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=e4a864389e1a88f97675e63b530b64c7')
    let result = await response.json()

    return result.results
}

export async function getPopularCelebrities() {
    let response = await fetch('https://api.themoviedb.org/3/person/popular?api_key=e4a864389e1a88f97675e63b530b64c7')
    let result = await response.json()

    return result.results
}

export async function getNowPlayingInTheatres() {
    let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e4a864389e1a88f97675e63b530b64c7')
    let result = await response.json()

    return result.results
}

export async function getMovieInfo(movieId) {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e4a864389e1a88f97675e63b530b64c7`)
    let result = await response.json()

    return result
}

export async function getMovieCredits(movieId) {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e4a864389e1a88f97675e63b530b64c7`)
    let result = await response.json()

    return result
}