import styles from '../header/Header.module.css'
import logo from '../../assets/logo.png'
import profileIcon from '../../assets/profile_icon.png'

import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { getDiscoverMovies } from '../../api_data/dataFunctions'

const Header = () => {
    const {authData} = useContext(AuthContext)
    const [searchedValue, setSearchedValue] = useState('')
    const [discoveredMovies, setDiscoveredMovies] = useState([])

    useEffect(() => {
        async function loadDicoveredMovies() {
            let result = await getDiscoverMovies()
            setDiscoveredMovies(result)
        }

        loadDicoveredMovies()
    }, [])

    

    function onChangeSearchBar(e) {
        let currentMoviesMatch = []

        for (let movie of discoveredMovies) {
            if (movie.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                currentMoviesMatch.push(movie)
                setSearchedValue(e.target.value)
            }
        }

        console.log(currentMoviesMatch)
    }

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
                <input 
                    className="search-bar" 
                    type="search" 
                    placeholder="Search..."
                    value={searchedValue} 
                    onChange={onChangeSearchBar}
                />
            </section>


            <ul className={styles['last-links']}>
                <li><Link to={'movies/Watchlist'}>Watchlist</Link></li>
                <li>{authData.email 
                    ? (<Link to={'users/me'}><img className={styles['profile-img']} src={profileIcon}/></Link>)
                    : (<Link to={'/login'}>Sign In</Link>) }
                </li>
            </ul>
            
        </header>
    )
}

export default Header;