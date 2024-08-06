import styles from './Login.module.css';

import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
} from 'mdb-react-ui-kit';

import useForm from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';

const formNames = {
    email: 'email',
    password: 'password'
}

const Login = () => {
    const { loginSubmitHandler, loginErrorMessage } = useContext(AuthContext)
    const location = useLocation()

    const [values, onChange, onSubmit] = useForm(loginSubmitHandler, {
        [formNames.email]: '',
        [formNames.password]: ''
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <MDBContainer fluid className={styles['container']}>

            <MDBCard className={`text-black m-5 ${styles['card']}`} style={{ borderRadius: '25px' }}>
                <MDBCardBody className={styles['card-body']}>
                    <MDBRow className={styles['row']}>
                        <MDBCol md='10' lg='6' className={`order-2 order-lg-1 d-flex flex-column align-items-center ${styles['left']}`}>
                            <form onSubmit={onSubmit} autoComplete='off'>

                                <p className={`text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 ${styles['title']}`}>Log In</p>
                                {(location && location.state) && <p className={`${styles['warning']} ${styles['login-first']}`}>{location.state.loginFirstErrorMessage}</p>}

                                <div className={`d-flex flex-row align-items-center mb-4 ${styles['input-container']}`}>
                                    <MDBInput 
                                        label='Your Email' 
                                        id='form2' 
                                        type='email' 
                                        className={styles['input-field']} 
                                        name={formNames.email} 
                                        onChange={onChange}
                                        value={values.email} 
                                        contrast
                                    />
                                </div>

                                <div className={`d-flex flex-row align-items-center mb-4 ${styles['input-container']}`}>
                                    <MDBInput 
                                        label='Password' 
                                        id='form3' 
                                        type='password' 
                                        className={styles['input-field']} 
                                        name={formNames.password} 
                                        onChange={onChange} 
                                        value={values.password} 
                                        contrast
                                    />
                                </div>

                                {loginErrorMessage && <p className={styles['warning']}>{loginErrorMessage}</p>}

                                <div className='mb-4'>
                                    <MDBRow name='flexCheck' id='flexCheckDefault' className={styles['additional-link']}>
                                        <p>Don't have an account?</p><Link to={'/register'}>Register</Link>
                                    </MDBRow>
                                </div>

                                <MDBBtn className='mb-4' size='lg'>Log In</MDBBtn>
                            </form>
                        </MDBCol>


                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}

export default Login;