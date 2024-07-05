import styles from '../header/Header.module.css'
import logo from '../../assets/logo.png'
import profileIcon from '../../assets/profile_icon.png'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const Header = () => {
    const {authData} = useContext(AuthContext)

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
                <li>{authData.email 
                    ? (<Link to={'users/me'}><img className={styles['profile-img']} src={profileIcon}/></Link>)
                    : (<Link to={'/login'}>Sign In</Link>) }
                </li>
            </ul>
            
        </header>
    )
}

export default Header;