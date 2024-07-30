import * as yup from 'yup'

export const registrationSchema = yup.object().shape({
    firstName: yup.string().min(2, 'First name must be at least 2 letters.').required('First name is required.'),
    lastName: yup.string().min(2, 'Last name must be at least 2 letters.').required('Last name is required.'),
    email: yup.string().email('Please provide a valid email.').required('Email is required.'),
    password: yup.string().min(8, 'Password must contain at least 8 characters.').matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 
        {message: 'Password must contain at least one letter, one number and one special symbol.'}
    ).required('Password is required.'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords doesn't match.").required('Confirm password is required.')
})