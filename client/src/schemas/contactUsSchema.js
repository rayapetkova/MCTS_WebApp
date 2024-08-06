import * as yup from 'yup';

export const contactUsSchema = yup.object().shape({
    name: yup.string().min(2, 'Name must be at least 2 letters.').required('Name is required.'),
    subject: yup.string().min(2, 'Subject must be at least 5 characters.').required('Subject is required.'),
    email: yup.string().email('Please provide a valid email.').required('Email is required.'),
    phoneNumber: yup.string().length(10, 'Phone number must contain exactly 10 digits.'),
    message: yup.string().min(5, 'Message must be at least 5 characters.').required('Message is required.')
})