import styles from './ContactUs.module.css'
import phoneIcon from '../../assets/phone_icon.png'
import emailIcon from '../../assets/email_icon.png'
import mapIcon from '../../assets/map_icon.png'
import githubIcon from '../../assets/github_icon.png'
import linkedInIcon from '../../assets/linkedin_icon.png'
import facebookIcon from '../../assets/facebook_icon.png'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['card']}>
                <section className={styles['head-contact']}>
                    <h2>Contact Us</h2>
                    <p>Email us with any questions or inquiries. We would be happy to answer your questions and we'll get in touch as soon as we can!</p>
                </section>

                <section className={styles['form-and-info']}>
                    <div className={styles['left']}>
                        <form>
                            <div className={styles['row']}>
                                <div className={styles['field']}>
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                    />
                                </div>

                                <div className={styles['field']}>
                                    <label htmlFor="subject">Subject:</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                    />
                                </div>
                            </div>

                            <div className={styles['row']}>
                                <div className={styles['field']}>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                    />
                                </div>

                                <div className={styles['field']}>
                                    <label htmlFor="phone_number">Phone Number:</label>
                                    <input
                                        type="text"
                                        id="phone_number"
                                        name="phoneNumber"
                                    />
                                </div>
                            </div>

                            <div className={styles['bio-row']}>
                                <h3>Message:</h3>
                                <textarea
                                    rows="5"
                                    id="bio"
                                    name="bio"
                                />
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
                                <Link><img src={githubIcon} alt="github" /></Link>
                                <Link><img src={linkedInIcon} alt="linkedin" /></Link>
                                <Link><img src={facebookIcon} alt="facebook" /></Link>
                            </div>
                        </section>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default ContactUs;