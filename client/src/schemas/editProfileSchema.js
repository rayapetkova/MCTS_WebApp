import * as yup from 'yup';

export const editProfileSchema = yup.object().shape({
    firstName: yup.string().min(2, 'First name must be at least 2 letters.').required('First name is required.'),
    lastName: yup.string().min(2, 'Last name must be at least 2 letters.').required('Last name is required.'),
    phoneNumber: yup.string().length(10, 'Phone number must contain exactly 10 digits.'),
    bio: yup.string().max(600, 'Bio must me at most 600 characters.')
})