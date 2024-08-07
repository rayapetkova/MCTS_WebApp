import '@testing-library/jest-dom/vitest';
import { it, expect, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import PersonInfo from './PersonInfo';
import { AuthProvider } from '../../../contexts/AuthContext';

afterEach(() => {
    cleanup()
})

const personInfo = {
    biography: 'Born in Italy, 1982.'
}

const personMovies = ['First', 'Second', 'Third']

describe('PersonInfoTest', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <PersonInfo personInfo={personInfo} personMovies={personMovies} />
                </AuthProvider>
            </BrowserRouter>
        )

        const biographyTitleElement = screen.getByText('Biography')
        const moviesTitleElement = screen.getByText('Movies')

        expect(biographyTitleElement).toBeInTheDocument()
        expect(moviesTitleElement).toBeInTheDocument()
    })

    it('information about person renders correctly', () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <PersonInfo personInfo={personInfo} personMovies={personMovies} />
                </AuthProvider>
            </BrowserRouter>
        )

        const biographyElement = screen.getByText('Born in Italy, 1982.')
        const moviesElement = screen.getByText('First, Second, Third')

        expect(biographyElement).toBeInTheDocument()
        expect(moviesElement).toBeInTheDocument()
    })
})