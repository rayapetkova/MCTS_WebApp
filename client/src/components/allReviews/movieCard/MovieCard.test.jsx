import '@testing-library/jest-dom/vitest';
import { it, expect, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import MovieCard from './MovieCard';
import { AuthProvider } from '../../../contexts/AuthContext';

afterEach(() => {
    cleanup()
})

const movieInfo = {
    original_title: 'Maze Runner',
    release_date: '02-03-2016',
    original_language: 'EN',
    runtime: '90',
    poster_path: '/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    backdrop_path: '/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg'
}

describe('MovieCardTest', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <MovieCard movieInfo={movieInfo} />
                </AuthProvider>
            </BrowserRouter>
        )

        const firstSectionElement = screen.getByTestId('first-section')

        expect(firstSectionElement).toBeInTheDocument()
    })

    it('renders correctly with movie info data', () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <MovieCard movieInfo={movieInfo} />
                </AuthProvider>
            </BrowserRouter>
        )

        const titleElement = screen.getByText('Maze Runner')
        const languageElement = screen.getByText(/EN/i)
        const runtimeElement = screen.getByText(/90/i)

        expect(titleElement).toBeInTheDocument()
        expect(languageElement).toBeInTheDocument()
        expect(runtimeElement).toBeInTheDocument()
    })
})