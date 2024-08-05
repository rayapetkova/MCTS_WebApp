async function basicFetcher(url) {
    let response = await fetch(url)
    let result = await response.json()

    return result
}

export const dataFunctions = {
    getFeaturedToday: () => basicFetcher('https://api.themoviedb.org/3/trending/movie/day?api_key=e4a864389e1a88f97675e63b530b64c7'),
    getFeaturedThisWeek: () => basicFetcher('https://api.themoviedb.org/3/trending/movie/week?api_key=e4a864389e1a88f97675e63b530b64c7'),
    getTopRatedMovies: () => basicFetcher('https://api.themoviedb.org/3/movie/top_rated?api_key=e4a864389e1a88f97675e63b530b64c7'),
    getComingSoonMovies: () => basicFetcher('https://api.themoviedb.org/3/movie/upcoming?api_key=e4a864389e1a88f97675e63b530b64c7'),
    getPopularCelebrities: () => basicFetcher('https://api.themoviedb.org/3/person/popular?api_key=e4a864389e1a88f97675e63b530b64c7'),
    getNowPlayingInTheatres: () => basicFetcher('https://api.themoviedb.org/3/movie/now_playing?api_key=e4a864389e1a88f97675e63b530b64c7'),
    getDiscovedMovies: () => basicFetcher('https://api.themoviedb.org/3/discover/movie?api_key=e4a864389e1a88f97675e63b530b64c7'),
    getMovieInfo: (movieId) => basicFetcher(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e4a864389e1a88f97675e63b530b64c7`),
    getMovieCredits: (movieId) => basicFetcher(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e4a864389e1a88f97675e63b530b64c7`),
    getMoviePhotos: (movieId) => basicFetcher(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=e4a864389e1a88f97675e63b530b64c7`),
    getPersonDetails: (personId) => basicFetcher(`https://api.themoviedb.org/3/person/${personId}?api_key=e4a864389e1a88f97675e63b530b64c7`),
    getPersonMovies: (personId) => basicFetcher(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=e4a864389e1a88f97675e63b530b64c7`),
    getPersonPhotos: (personId) => basicFetcher(`https://api.themoviedb.org/3/person/${personId}/images?api_key=e4a864389e1a88f97675e63b530b64c7`)
}