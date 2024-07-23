import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import App from './App'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter } from 'react-router-dom'

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
    })
})