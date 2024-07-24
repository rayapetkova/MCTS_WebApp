import { it, expect, describe, afterEach } from 'vitest'
import { cleanup, render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { AuthProvider } from '../../../contexts/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import MovieInfo from './MovieInfo'

afterEach(() => {
    cleanup()
})

const movieInfo = {
    genres: [{first: {name: 'romance'}}],
    overview: 'The best movie ever!',
}

const movieCredits = {}

describe('MovieInfoTest', () => {
    it('renders correctly', () => {
        const authData = {}

        render(
            <BrowserRouter>
                <AuthProvider>
                    <MovieInfo movieInfo={movieInfo} movieCredits={movieCredits} authData={authData} isAddedToWatchlist={false} />
                </AuthProvider>
            </BrowserRouter>
        )

        const movieInfoElement = screen.getByTestId('movieInfo')
        expect(movieInfoElement).toBeInTheDocument()
    })

    it('renders overview about the movie in the table', () => {
        const authData = {}

        render(
            <BrowserRouter>
                <AuthProvider>
                    <MovieInfo movieInfo={movieInfo} movieCredits={movieCredits} authData={authData} isAddedToWatchlist={false} />
                </AuthProvider>
            </BrowserRouter>
        )

        const overviewElement = screen.getByText('The best movie ever!')
        expect(overviewElement).toBeInTheDocument()
    })

    it('not render watchlist button when no auth data', () => {
        const authData = {}

        render(
            <BrowserRouter>
                <AuthProvider>
                    <MovieInfo movieInfo={movieInfo} movieCredits={movieCredits} authData={authData} isAddedToWatchlist={false} />
                </AuthProvider>
            </BrowserRouter>
        )

        const addToWatchlistElement = screen.queryByText('Add to Watchlist')
        expect(addToWatchlistElement).toBeNull()
    })

    it('renders watchlist button when auth data', () => {
        const authData = {username: 'randomUsername'}

        render(
            <BrowserRouter>
                <AuthProvider>
                    <MovieInfo movieInfo={movieInfo} movieCredits={movieCredits} authData={authData} isAddedToWatchlist={false} />
                </AuthProvider>
            </BrowserRouter>
        )

        const addToWatchlistElement = screen.getByText('Add to Watchlist')
        expect(addToWatchlistElement).toBeInTheDocument()
    })

    it('renders `added to watchlist` when the movie is already added to watchlist', () => {
        const authData = {username: 'randomUsername'}

        render(
            <BrowserRouter>
                <AuthProvider>
                    <MovieInfo movieInfo={movieInfo} movieCredits={movieCredits} authData={authData} isAddedToWatchlist={true} />
                </AuthProvider>
            </BrowserRouter>
        )

        const isAddedToWatchlistElement = screen.getByText('Added to Watchlist')
        const addToWatchlistElement = screen.queryByText('Add to Watchlist')

        expect(isAddedToWatchlistElement).toBeInTheDocument()
        expect(addToWatchlistElement).toBeNull()
    })
})