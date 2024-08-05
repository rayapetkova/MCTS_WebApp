import '@testing-library/jest-dom/vitest';
import { it, expect, describe, afterEach, vi } from 'vitest';
import { cleanup, render, screen, fireEvent, act } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import CelebCard from './CelebCard';
import { AuthProvider } from '../../../contexts/AuthContext';

afterEach(() => {
    cleanup()
})

const onClickFn = vi.fn()

const celeb = {
    id: '123',
    profile_path: '/rwmvRonpluV6dCPiQissYrchvSD.jpg',
    original_name: 'Thomas',
    character: 'Random Character'
}

describe('CelebCardTest', () => {
    it('renders with celeb information', () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <CelebCard celeb={celeb} />
                </AuthProvider>
            </BrowserRouter>
        )

        const celebNameElement = screen.getByText('Thomas')
        const celebCharacterElement = screen.getByText('Random Character')

        expect(celebNameElement).toBeInTheDocument()
        expect(celebCharacterElement).toBeInTheDocument()
    })

    it('calls the on click function', async () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <CelebCard celeb={celeb} onClickCelebHandler={onClickFn} />
                </AuthProvider>
            </BrowserRouter>
        )

        const buttonCeleb = screen.getByRole('button')

        await act(() => {
            fireEvent.click(buttonCeleb)
        })

        expect(onClickFn).toBeCalledTimes(1)
    })
})