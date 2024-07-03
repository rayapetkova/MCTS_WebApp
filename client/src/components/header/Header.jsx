import styles from '../header/Header.module.css'
import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link to={'/'} className={styles['img-logo']}>
                <img src={logo} alt="logo-img"/>
            </Link>
            
            <nav>
                <ul>
                    <li><Link to={'/movies/Featured Today'}>Movies</Link></li>
                    <li><Link to={`movies/Top Rated`}>Top Rated</Link></li>
                    <li><a href="#popular-celebs">Celebrities</a></li>
                    <li><a href="#">Favourites</a></li>
                </ul>
            </nav>

            <section className={styles['search-bar-section']}>
                <input className="search-bar" type="search" placeholder="Search..."/>
            </section>


            <ul className={styles['last-links']}>
                <li><Link to={'movies/From your Watchlist'}>Watchlist</Link></li>
                <li><a href="#">Sign In</a></li>
            </ul>
            
        </header>
    )
}

export default Header;