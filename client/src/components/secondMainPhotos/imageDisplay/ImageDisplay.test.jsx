import '@testing-library/jest-dom/vitest';

import { it, describe, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import ImageDisplay from './ImageDisplay';
import { AuthProvider } from '../../../contexts/AuthContext';

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