import { it, expect, describe, vi, afterEach } from 'vitest'
import { cleanup, render, screen, fireEvent, act, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { AuthProvider } from '../../../contexts/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import Card from './Card'

afterEach(() => {
    cleanup()
})

const updateWatchlistOnRemove = vi.fn()

const movieObj = {
    id: '123',
    poster_path: '/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    title: 'Maze Runner',
    vote_average: '10'
}

describe('CardTest', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Card movieObj={movieObj} sectionName={'Featured Today'} />
                </AuthProvider>
            </BrowserRouter>
        )

        const titleElement = screen.getByText('Maze Runner')
        const voteAverageElement = screen.getByText('10')

        expect(titleElement).toBeInTheDocument()
        expect(voteAverageElement).toBeInTheDocument()
    })

    it('does not render `remove from watchlist button`', () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Card movieObj={movieObj} sectionName={'Featured Today'} />
                </AuthProvider>
            </BrowserRouter>
        )

        const removeFromWatchlistButonElement = screen.queryByTestId('remove-button')

        expect(removeFromWatchlistButonElement).toBeNull
    })

    it('renders `remove from watchlist button` when sectionName is Watchlist', () => {
        const movieObj = {
            movie: {
                id: '123',
                poster_path: '/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
                title: 'Maze Runner',
                vote_average: '10'
            }
        }
        
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Card movieObj={movieObj} sectionName={'Watchlist'} />
                </AuthProvider>
            </BrowserRouter>
        )

        const removeFromWatchlistButonElement = screen.getByTestId('remove-button')

        expect(removeFromWatchlistButonElement).toBeInTheDocument()
    })

    it('click `more info` link and redirect', async () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Card movieObj={movieObj} sectionName={'Featured Today'} />
                </AuthProvider>
            </BrowserRouter>
        )

        const moreInfoLinkElement = screen.getByRole('link')

        await act(() => {
            fireEvent.click(moreInfoLinkElement)
        })

        expect(window.location.pathname).toBe('/movies/123/details')
    })

    it('click `remove from watchlist` button and call a function', async () => {
        const movieObj = {
            movie: {
                id: '123',
                poster_path: '/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
                title: 'Maze Runner',
                vote_average: '10'
            }
        }
        
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Card movieObj={movieObj} sectionName={'Watchlist'} updateWatchlistOnRemove={updateWatchlistOnRemove} />
                </AuthProvider>
            </BrowserRouter>
        )

        const removeFromWatchlistButonElement = screen.getByTestId('remove-button')

        await act(() => {
            fireEvent.click(removeFromWatchlistButonElement)
        })

        expect(updateWatchlistOnRemove).toBeCalledTimes(1)
    })
})