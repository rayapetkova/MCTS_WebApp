export function extractMovieGenres(genres) {
    let allGenres = []

    for (let genreObj of genres) {
        allGenres.push(genreObj.name)
    }

    return allGenres.join(', ')
}

export function extractDirectors(crew) {
    let directors = []

    for (let person of crew) {
        if (person.job === "Director") {
            directors.push(person.original_name)
        }
    }

    return directors.join(', ')
}