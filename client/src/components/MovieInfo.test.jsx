import { it, expect, describe, vi, afterEach } from 'vitest'
import { cleanup, render, screen, fireEvent, act, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import MovieInfo from './MovieInfo'


window.scrollTo = vi.fn()

afterEach(() => {
    cleanup()
})

describe('MovieInfoTest', () => {
    it('check first section rendering', () => {
        render(
            <BrowserRouter initialEntries={["/movies/123/details"]}>
                <AuthProvider>
                    <MovieInfo />
                </AuthProvider>
            </BrowserRouter>
        )

        const firstSectionElement = screen.getByTestId('firstSection')

        expect(firstSectionElement).toBeInTheDocument()
    })

    it('check second main photos rendering', () => {
        render(
            <BrowserRouter initialEntries={["/movies/123/details"]}>
                <AuthProvider>
                    <MovieInfo />
                </AuthProvider>
            </BrowserRouter>
        )

        const secondMainPhotosElement = screen.getByTestId('secondMainPhotos')

        expect(secondMainPhotosElement).toBeInTheDocument()
    })

    it('check second main celebs rendering', () => {
        render(
            <BrowserRouter initialEntries={["/movies/123/details"]}>
                <AuthProvider>
                    <MovieInfo />
                </AuthProvider>
            </BrowserRouter>
        )

        const secondMainCelebsElement = screen.getByTestId('secondMainCelebs')
        expect(secondMainCelebsElement).toBeInTheDocument()
    })

    it('check reviews section rendering', () => {
        render(
            <BrowserRouter initialEntries={["/movies/123/details"]}>
                <AuthProvider>
                    <MovieInfo />
                </AuthProvider>
            </BrowserRouter>
        )

        const reviewsElement = screen.getByTestId('reviews')
        expect(reviewsElement).toBeInTheDocument()
    })

})
