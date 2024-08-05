import '@testing-library/jest-dom/vitest';
import { it, expect, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import ReviewCard from './ReviewCard';
import { AuthProvider } from '../../../contexts/AuthContext';

afterEach(() => {
    cleanup()
})

const review = {
    rate: '10',
    _ownerId: '123',
    title: 'Maze Runner',
    userInfo: {
        firstName: 'Thomas',
        lastName: 'Cook'
    },
    _createdOn: '02-03-2010',
    review: 'I liked the movie!'
}

describe('ReviewsCardTest', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <ReviewCard review={review} />
                </AuthProvider>
            </BrowserRouter>
        )

        const rateElement = screen.getByText('10')
        const titleElement = screen.getByText('Maze Runner')
        const firstNameElement = screen.getByText(/Thomas/i)
        const lastNameElement = screen.getByText(/Cook/i)
        const createdOnElement = screen.getByText(/3 Feb 2010/i)
        const reviewTextElement = screen.getByText('I liked the movie!')

        expect(rateElement).toBeInTheDocument()
        expect(titleElement).toBeInTheDocument()
        expect(firstNameElement).toBeInTheDocument()
        expect(lastNameElement).toBeInTheDocument()
        expect(createdOnElement).toBeInTheDocument()
        expect(reviewTextElement).toBeInTheDocument()
    })

    it('not show delete button when no auth data', () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <ReviewCard review={review} />
                </AuthProvider>
            </BrowserRouter>
        )

        const deleteButtonElement = screen.queryByText('Delete')

        expect(deleteButtonElement).toBeNull()
    })
})