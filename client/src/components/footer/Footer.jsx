import styles from '../footer/Footer.module.css';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

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
                </ul>
            </section>
            <section>
                <ul>
                    <li><a href="/movies/Featured Today">Featured Today &#8599;</a></li>
                    <li><a href="/movies/Watchlist">Watchlist &#8599;</a></li>
                    <li><a href="/movies/Top rated">Top rated &#8599;</a></li>
                    <li><a href="movies/Coming soon">Coming soon &#8599;</a></li>
                    <li><a href="/people">Celebrities &#8599;</a></li>
                </ul>
            </section>
            <section>
                <ul>
                    <li><a href="#">Featured Today &#8599;</a></li>
                    <li><a href="#">Watchlist &#8599;</a></li>
                    <li><a href="#">Top rated &#8599;</a></li>
                    <li><a href="#">Coming soon &#8599;</a></li>
                    <li><a href="#">Celebrities &#8599;</a></li>
                </ul>
            </section>

        </footer>
    )
}

export default Footer