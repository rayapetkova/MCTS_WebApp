import styles from '../header/Header.module.css'
import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <section className={styles['img-logo']}>
                <img src={logo} alt="logo-img"/>
            </section>
            
            <nav>
                <ul>
                    <li><Link to={'/'}>Movies</Link></li>
                    <li><a href="#">Top Rated</a></li>
                    <li><a href="#">Celebrities</a></li>
                    <li><a href="#">Favourites</a></li>
                </ul>
            </nav>

            <section className={styles['search-bar-section']}>
                <input className="search-bar" type="search" placeholder="Search..."/>
            </section>


            <ul className={styles['last-links']}>
                <li><a href="#">Watchlist</a></li>
                <li><a href="#">Sign In</a></li>
            </ul>
            
        </header>
    )
}

export default Header