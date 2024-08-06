import * as yup from 'yup';

export const reviewSchema = yup.object().shape({
    rate: yup.number().min(0, 'Rate must be at least 0.').max(10, 'Rate must be at most 10.').required('Rate is required.'),
    title: yup.string().min(2, 'Title must be at least 2 characters.').max(50, 'Title must be at most 50 characters.').required('Title is required.'),
    review: yup.string().min(2, 'Review must be at least 2 characters.').max(900, 'Review must be at most 500 characters.').required('Review is required.')
})