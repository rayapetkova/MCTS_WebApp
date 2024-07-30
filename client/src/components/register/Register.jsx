import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
} from 'mdb-react-ui-kit';

import styles from './Register.module.css'

import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { Link } from 'react-router-dom'

import { useFormik } from 'formik'

import logoSymbol from '../../assets/logo_without_background.png'
import { registrationSchema } from '../../schemas/registrationSchema';

const formNames = {
    email: 'email',
    password: 'password',
    confirmPassword: 'confirmPassword',
    firstName: 'firstName',
    lastName: 'lastName'
}

const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext)

    const submitFormik = () => {
        registerSubmitHandler(values)
    }

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {
            [formNames.email]: '',
            [formNames.password]: '',
            [formNames.confirmPassword]: '',
            [formNames.firstName]: '',
            [formNames.lastName]: ''
        },
        validationSchema: registrationSchema,
        onSubmit: submitFormik
    })

    console.log(touched)

    return (
        <MDBContainer fluid className={styles['container']}>

            <MDBCard className={`text-black m-5 ${styles['card']}`} style={{ borderRadius: '25px' }}>
                <MDBCardBody className={styles['card-body']}>
                    <MDBRow className={styles['row']}>
                        <MDBCol md='10' lg='6' className={`order-2 order-lg-1 d-flex flex-column align-items-center ${styles['left']}`}>
                            <form onSubmit={handleSubmit} autoComplete='off'>

                                <p className={`text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 ${styles['title']}`}>Sign Up</p>

                                <div className={`d-flex ${(!errors.firstName || (errors.firstName && !touched.firstName)) && 'mb-4'} ${styles['input-container']}`}>
                                    <MDBInput
                                        label='First Name'
                                        id='form1'
                                        type='text'
                                        className={`w-100 ${styles['input-field']}`}
                                        name={formNames.firstName}
                                        onChange={handleChange}
                                        value={values.firstName} 
                                        onBlur={handleBlur}
                                        contrast
                                    />

                                    {(errors.firstName && touched.firstName) && <p>{errors.firstName}</p>}
                                </div>

                                <div className={`d-flex ${(!errors.lastName || (errors.lastName && !touched.lastName)) && 'mb-4'} ${styles['input-container']}`}>
                                    <MDBInput
                                        label='Last Name'
                                        id='form2'
                                        type='text'
                                        className={`w-100 ${styles['input-field']}`}
                                        name={formNames.lastName}
                                        onChange={handleChange}
                                        value={values.lastName} 
                                        onBlur={handleBlur}
                                        contrast
                                    />

                                    {(errors.lastName && touched.lastName) && <p>{errors.lastName}</p>}
                                </div>

                                <div className={`d-flex ${(!errors.email || (errors.email && !touched.email)) && 'mb-4'} ${styles['input-container']}`}>
                                    <MDBInput
                                        label='Your Email'
                                        id='form3'
                                        type='email'
                                        className={styles['input-field']}
                                        name={formNames.email}
                                        onChange={handleChange}
                                        value={values.email} 
                                        onBlur={handleBlur}
                                        contrast
                                    />

                                    {(errors.email && touched.email) && <p>{errors.email}</p>}
                                </div>

                                <div className={`d-flex ${(!errors.password || (errors.password && !touched.password)) && 'mb-4'} ${styles['input-container']}`}>
                                    <MDBInput
                                        label='Password'
                                        id='form4'
                                        type='password'
                                        className={styles['input-field']}
                                        name={formNames.password}
                                        onChange={handleChange}
                                        value={values.password} 
                                        onBlur={handleBlur}
                                        contrast
                                    />

                                    {(errors.password && touched.password) && <p>{errors.password}</p>}
                                </div>

                                <div className={`d-flex ${(!errors.confirmPassword || (errors.confirmPassword && !touched.confirmPassword)) && 'mb-4'} ${styles['input-container']}`}>
                                    <MDBInput
                                        label='Repeat your password'
                                        id='form5'
                                        type='password'
                                        className={styles['input-field']}
                                        name={formNames.confirmPassword}
                                        onChange={handleChange}
                                        value={values.confirmPassword} 
                                        onBlur={handleBlur}
                                        contrast
                                    />

                                    {(errors.confirmPassword && touched.confirmPassword) && <p>{errors.confirmPassword}</p>}
                                </div>

                                <div className='mb-4'>
                                    <MDBRow name='flexCheck' id='flexCheckDefault' className={styles['additional-link']}>
                                        <p>Already have an account?</p><Link to={'/login'}>Log In</Link>
                                    </MDBRow>
                                </div>

                                <MDBBtn className='mb-4' size='lg' type='submit'>Register</MDBBtn>
                            </form>
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}

export default Register;