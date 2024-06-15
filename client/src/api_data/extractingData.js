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

export function extractWriters(crew) {
    let writers = []

    for (let person of crew) {
        if (person.job.includes('Story')) {
            writers.push(person.original_name)
        }
    }

    return writers.join(', ')
}

export function extractCast(cast, num) {
    let slicedCast = []

    cast = cast.slice(0, num)
    for (let person of cast) {
        slicedCast.push(person.original_name)
    }

    return slicedCast.join(', ')
}