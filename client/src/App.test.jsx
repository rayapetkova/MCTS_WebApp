import '@testing-library/jest-dom/vitest';
import { it, expect, describe } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

describe('AppTest', () => {
    it('renders Header and Footer', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )

        const headerElement = screen.getByTestId('header')
        const footerElement = screen.getByTestId('footer')

        expect(headerElement).toBeInTheDocument()
        expect(footerElement).toBeInTheDocument()

        cleanup()
    })

    it('renders Main Page Movies', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )

        const mainPageMoviesElement = screen.getByTestId('mainPageMovies')
        expect(mainPageMoviesElement).toBeInTheDocument()

        cleanup()
    })
})