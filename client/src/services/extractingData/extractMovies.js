function extractMoviesFromWatchlists(watchlistElements) {
    const moviesWatchlist = []
    
    for (let record of watchlistElements) {
        moviesWatchlist.push(record.movie)
    }

    return moviesWatchlist
}

export default extractMoviesFromWatchlists;