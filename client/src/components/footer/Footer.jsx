import styles from '../footer/Footer.module.css';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import githubIcon from '../../assets/github_icon.png';
import linkedInIcon from '../../assets/linkedin_icon.png';
import facebookIcon from '../../assets/facebook_icon.png';

const Footer = () => {
    return (
        <footer data-testid="footer">
            <section>
                <Link to={'/'} className={styles['img-logo']}>
                    <img src={logo} alt="logo-img" />
                </Link>
                <ul>
                    <li>Email: r*****a1***1@gmail.com</li>
                    <li>Call: 0899-899-899</li>
                    <li><Link to={'/contactUs'}>Contact Us &#8599;</Link></li>
                </ul>
            </section>

            {!window.matchMedia('(max-width: 600px)') && (
                <section>
                    <ul>
                        <li><Link to="/movies/Featured%20Today">Featured Today &#8599;</Link></li>
                        <li><Link to="/movies/Watchlist">Watchlist &#8599;</Link></li>
                        <li><Link to="/movies/Top Rated">Top rated &#8599;</Link></li>
                        <li><Link to="/movies/Coming Soon">Coming soon &#8599;</Link></li>
                        <li><Link to="/people">Celebrities &#8599;</Link></li>
                    </ul>
                </section>
            )}

            <section>
                <ul>
                    <li><Link to={'/ContactUs'}>Contact Us &#8599;</Link></li>
                </ul>

                <div className={styles['socials']}>
                    <Link to={'https://github.com/rayapetkova'} target="_blank"><img src={githubIcon} alt="github" /></Link>
                    <Link to={'https://www.linkedin.com/in/raya-petkova-77418a2a0'} target="_blank"><img src={linkedInIcon} alt="linkedin" /></Link>
                    <Link to={'https://www.facebook.com/raya.petkova.54/'} target="_blank"><img src={facebookIcon} alt="facebook" /></Link>
                </div>
            </section>

        </footer>
    )
}

export default Footer