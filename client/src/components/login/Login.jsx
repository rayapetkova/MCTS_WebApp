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

import styles from './Login.module.css'

import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import logoSymbol from "../../assets/logo_without_background.png"
import { Link } from 'react-router-dom'

const formNames = {
    email: 'email',
    password: 'password'
}

const Login = () => {
    const { loginSubmitHandler } = useContext(AuthContext)

    const [values, onChange, onSubmit] = useForm(loginSubmitHandler, {
        [formNames.email]: '',
        [formNames.password]: ''
    })

    return (
        <MDBContainer fluid className={styles['container']}>

            <MDBCard className={`text-black m-5 ${styles['card']}`} style={{ borderRadius: '25px' }}>
                <MDBCardBody className={styles['card-body']}>
                    <MDBRow className={styles['row']}>
                        <MDBCol md='10' lg='6' className={`order-2 order-lg-1 d-flex flex-column align-items-center ${styles['left']}`}>
                            <form onSubmit={onSubmit}>

                                <p className={`text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 ${styles['title']}`}>Log In</p>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBInput 
                                        label='Your Email' 
                                        id='form2' 
                                        type='email' 
                                        className={styles['input-field']} 
                                        name={formNames.email} 
                                        onChange={onChange}
                                        value={values.email} 
                                    />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBInput 
                                        label='Password' 
                                        id='form3' 
                                        type='password' 
                                        className={styles['input-field']} 
                                        name={formNames.password} 
                                        onChange={onChange} 
                                        value={values.password}
                                    />
                                </div>

                                <div className='mb-4'>
                                    <MDBRow name='flexCheck' id='flexCheckDefault' className={styles['additional-link']}>
                                        <p>Don't have an account?</p><Link to={'/register'}>Register</Link>
                                    </MDBRow>
                                </div>

                                <MDBBtn className='mb-4' size='lg'>Log In</MDBBtn>
                            </form>
                        </MDBCol>

                        <MDBCol md='10' lg='6' className={`order-1 order-lg-2 d-flex align-items-center ${styles['right']}`}>
                            <MDBCardImage src={logoSymbol} className={styles['image-logo']} fluid />
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}

export default Login;