import '@testing-library/jest-dom/vitest';
import { it, expect, describe, vi, afterEach } from 'vitest';
import { cleanup, render, screen, fireEvent, act } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import CelebCard from './CelebCard';
import { AuthProvider } from '../../../contexts/AuthContext';

afterEach(() => {
    cleanup()
})

const celebrity = {
    id: '123',
    profile_path: '/rTbVFZMvUViFCIa5AXlBX3P6vfR.jpg',
    name: 'Thomas'
}

const onClickCelebHandler = vi.fn()

describe('CelebCardTest', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <CelebCard celebrity={celebrity} />
                </AuthProvider>
            </BrowserRouter>
        )

        const nameElement = screen.getByText('Thomas')

        expect(nameElement).toBeInTheDocument()
    })

    it('click button and call the function', async () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <CelebCard celebrity={celebrity} onClickCelebHandler={onClickCelebHandler} />
                </AuthProvider>
            </BrowserRouter>
        )

        const buttonCelebElement = screen.getByRole('button')

        await act(() => {
            fireEvent.click(buttonCelebElement)
        })

        expect(onClickCelebHandler).toBeCalledTimes(1)
    })
})