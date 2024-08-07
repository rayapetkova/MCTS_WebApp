import styles from './ContactUs.module.css';

import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import sendEmail from '../../api_data/emails/sendEmail';
import { AuthContext } from '../../contexts/AuthContext';
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer
} from 'react-leaflet';

import phoneIcon from '../../assets/phone_icon.png';
import emailIcon from '../../assets/email_icon.png';
import mapIcon from '../../assets/map_icon.png';
import githubIcon from '../../assets/github_icon.png';
import linkedInIcon from '../../assets/linkedin_icon.png';
import facebookIcon from '../../assets/facebook_icon.png';
import { contactUsSchema } from '../../schemas/contactUsSchema';

const mapOfficePosition = [41.935750, 25.555057]

const formNames = {
    subject: 'subject',
    message: 'message',
    'name': 'name',
    email: 'email',
    phoneNumber: 'phoneNumber'
}

const ContactUs = () => {
    const [emailSent, setEmailSent] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function sendEmailSubmitHandler(values) {
        sendEmail('template_qpsjapg', {
            subject: values.subject,
            message: values.message,
            'name': values.name,
            email: values.email
        })

        setEmailSent(true)
    }

    function submitFormik(values, assets) {
        assets.resetForm()
        sendEmailSubmitHandler(values)
    }

    const { authData, createdUser } = useContext(AuthContext)
    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {
            [formNames.subject]: '',
            [formNames.message]: '',
            [formNames.name]: Object.keys(createdUser).length > 0 ? `${createdUser.firstName} ${createdUser.lastName}` : '',
            [formNames.email]: Object.keys(authData).length > 0 ? authData.email : '',
            [formNames.phoneNumber]: createdUser.phoneNumber ? createdUser.phoneNumber : ''
        },
        validationSchema: contactUsSchema,
        onSubmit: submitFormik
    })

    return (
        <div className={styles['main-page-with-maps']}>
            <div className={styles['card']}>
                <section className={styles['head-contact']}>
                    <h2>Contact Us</h2>
                    <p>Email us with any questions or inquiries. We would be happy to answer your questions and we'll get in touch as soon as we can!</p>

                    {emailSent && (
                        <section className={styles['sent-email']}>Your email has been sent!</section>
                    )}
                </section>

                <section className={styles['form-and-info']}>
                    <div className={styles['left']}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles['row']}>
                                <div className={styles['field']}>
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name={formNames.name}
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    {(errors.name && touched.name) && <p>{errors.name}</p>}
                                </div>

                                <div className={styles['field']}>
                                    <label htmlFor="subject">Subject:</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name={formNames.subject}
                                        value={values.subject}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    {(errors.subject && touched.subject) && <p>{errors.subject}</p>}

                                </div>
                            </div>

                            <div className={styles['row']}>
                                <div className={styles['field']}>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name={formNames.email}
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    {(errors.email && touched.email) && <p>{errors.email}</p>}
                                </div>

                                <div className={styles['field']}>
                                    <label htmlFor="phone_number">Phone Number:</label>
                                    <input
                                        type="text"
                                        id="phone_number"
                                        name={formNames.phoneNumber}
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    {(errors.phoneNumber && touched.phoneNumber) && <p>{errors.phoneNumber}</p>}
                                </div>
                            </div>

                            <div className={styles['message-row']}>
                                <h3>Message:</h3>
                                <textarea
                                    rows="5"
                                    id="message"
                                    name={formNames.message}
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                {(errors.message && touched.message) && <p>{errors.message}</p>}

                            </div>

                            <div className={styles['buttons']}>
                                <button className={styles['send-button']}>Send</button>
                            </div>
                        </form>
                    </div>

                    <div className={styles['right']}>
                        <h3>Contact Information</h3>
                        <p>Reach out to us for further communication.</p>

                        <section className={styles['info-container']}>
                            <div className={styles['one-section']}>
                                <div className={styles['img-container']}>
                                    <img src={phoneIcon} alt="phone" />
                                </div>

                                <p>+359 899 899-899</p>
                            </div>

                            <div className={styles['one-section']}>
                                <div className={styles['img-container']}>
                                    <img src={emailIcon} alt="email" />
                                </div>

                                <p>r*****a1***1@gmail.com</p>
                            </div>

                            <div className={styles['one-section']}>
                                <div className={styles['img-container']}>
                                    <img src={mapIcon} alt="map" />
                                </div>

                                <p>6300 Haskovo, Bulgaria</p>
                            </div>
                        </section>

                        <section className={styles['follow-us']}>
                            <h3>Follow Us:</h3>

                            <div className={styles['socials']}>
                                <Link to={'https://github.com/rayapetkova'} target="_blank"><img src={githubIcon} alt="github" /></Link>
                                <Link to={'https://www.linkedin.com/in/raya-petkova-77418a2a0'} target="_blank"><img src={linkedInIcon} alt="linkedin" /></Link>
                                <Link to={'https://www.facebook.com/raya.petkova.54/'} target="_blank"><img src={facebookIcon} alt="facebook" /></Link>
                            </div>
                        </section>
                    </div>
                </section>

            </div>

            <div className={styles['location-container']}>
                <h2>Where are we located?</h2>
                <p>Coordinates - 41.935750, 25.555057</p>

                <MapContainer
                    className={styles['map-container']}
                    center={mapOfficePosition}
                    zoom={15}
                >
                    <TileLayer
                        attribution='Google Maps'
                        url='https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
                    />

                    <Marker position={mapOfficePosition}>
                        <Popup>
                            Our office - MCTS
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default ContactUs;