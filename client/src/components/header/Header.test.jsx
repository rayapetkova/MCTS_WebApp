import { it, expect, describe } from 'vitest'
import { cleanup, render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Header from './Header'
import { AuthProvider } from '../../contexts/AuthContext'
import { BrowserRouter } from 'react-router-dom'

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

        cleanup()
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
})