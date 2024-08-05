import '@testing-library/jest-dom/vitest';
import { it, expect, describe, afterEach } from 'vitest';
import { cleanup, render, screen, fireEvent, act } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import { AuthProvider } from '../../contexts/AuthContext';

afterEach(() => {
    cleanup()
})

describe('HeaderTest', () => {
    it('shows `Sign In` button on first render', () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Header />
                </AuthProvider>
            </BrowserRouter>
        )

        const signInElement = screen.getByText(/sign in/i)

        expect(signInElement).toBeInTheDocument()
    })

    it('click `Sign In` and render Log In page', async () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Header />
                </AuthProvider>
            </BrowserRouter>
        )

        const signInElement = screen.getByText(/sign in/i)
        
        await act(async() => {
            fireEvent.click(signInElement)
        })
        expect(window.location.pathname).toBe('/login')
    })

    it('click movies Link and render featured today', async () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Header />
                </AuthProvider>
            </BrowserRouter>
        )

        const allLinks = screen.getAllByRole('link')

        await act(async() => {
            fireEvent.click(allLinks[1])
        })
        expect(window.location.pathname).toBe('/movies/Featured%20Today')
    })

    it('click top rated Link and render top rated', async () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Header />
                </AuthProvider>
            </BrowserRouter>
        )

        const allLinks = screen.getAllByRole('link')

        await act(async() => {
            fireEvent.click(allLinks[2])
        })
        expect(window.location.pathname).toBe('/movies/Top%20Rated')
    })

    it('click people Link and render all people', async () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Header />
                </AuthProvider>
            </BrowserRouter>
        )

        const allLinks = screen.getAllByRole('link')

        await act(async() => {
            fireEvent.click(allLinks[3])
        })
        expect(window.location.pathname).toBe('/people')
    })

    it('click watchlist Link and render the watchlist', async () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Header />
                </AuthProvider>
            </BrowserRouter>
        )

        const allLinks = screen.getAllByRole('link')

        await act(async() => {
            fireEvent.click(allLinks[4])
        })
        expect(window.location.pathname).toBe('/movies/Watchlist')
    })

    it('checks log out Link is not on the page', async () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Header />
                </AuthProvider>
            </BrowserRouter>
        )

        const logOutLink = screen.queryByText(/log out/i)
        expect(logOutLink).toBeNull()
    })
})