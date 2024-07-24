import { it, expect, describe, afterEach, vi } from 'vitest'
import { cleanup, render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { AuthProvider } from '../../../contexts/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import ImageDisplay from './ImageDisplay'

afterEach(() => {
    cleanup()
})

const backdrop = {
    file_path: '/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg'
}

describe('ImageDisplayTest', () => {
    it('renders correctly with backdrop.file_path', () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <ImageDisplay backdrop={backdrop} />
                </AuthProvider>
            </BrowserRouter>
        )
    })
})