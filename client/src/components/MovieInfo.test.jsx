import '@testing-library/jest-dom/vitest';

import { it, expect, describe, vi, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import MovieInfo from './MovieInfo';
import { AuthProvider } from '../contexts/AuthContext';


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
