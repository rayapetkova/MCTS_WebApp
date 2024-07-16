import styles from '../header/Header.module.css'
import logo from '../../assets/logo.png'
import profileIcon from '../../assets/profile_icon.png'

import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { getDiscovedMovies } from '../../api_data/dataFunctions'
import SearchCard from './searchCard/SearchCard'

const Header = () => {
    const [authUserData, setAuthUserData] = useState({})
    const [searchedValue, setSearchedValue] = useState('')
    const [discoveredMovies, setDiscoveredMovies] = useState([])
    const [matchedMovies, setMatchedMovies] = useState([])
    const { checkIfUserLogged, logoutSubmitHandler } = useContext(AuthContext)

    useEffect(() => {
        async function loadDicoveredMovies() {
            let result = await getDiscovedMovies()
            setDiscoveredMovies(result)
        }

        const localStorageAuthData = JSON.parse(localStorage.getItem('authData'))
        setAuthUserData(localStorageAuthData)

        loadDicoveredMovies()
    }, [])

    function onChangeSearchBar(e) {
        const filteredMovies = discoveredMovies.filter((movie) => 
            movie.title.toLowerCase().includes(e.target.value.toLowerCase())
        )

        setSearchedValue(e.target.value)
        setMatchedMovies(filteredMovies)
    }

    console.log(matchedMovies)

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

                {searchedValue && (
                    <div className={styles['discovered-movies']}>
                        {matchedMovies.map((movie) => (
                            <SearchCard movie={movie} key={movie.id} setSearchedValue={setSearchedValue} />
                        ))}
                    </div>
                )}

            </section>


            <ul className={styles['last-links']}>
                <li><Link to={'movies/Watchlist'}>Watchlist</Link></li>
                <li className={'log-out'}>{(authUserData || checkIfUserLogged) && <Link onClick={() => logoutSubmitHandler()}>Log Out</Link>}</li>
                <li>{(authUserData || checkIfUserLogged) 
                    ? (<Link to={'users/me'}><img className={styles['profile-img']} src={profileIcon}/></Link>)
                    : (<Link to={'/login'}>Sign In</Link>) }
                </li>
            </ul>
            
        </header>
    )
}

export default Header;