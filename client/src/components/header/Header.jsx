import styles from '../header/Header.module.css'
import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { getDiscovedMovies } from '../../api_data/dataFunctions'
import SearchCard from './searchCard/SearchCard'
import ProfileDropdown from '../profileDropdown/ProfileDropdown'

const Header = () => {
    const [searchedValue, setSearchedValue] = useState('')
    const [discoveredMovies, setDiscoveredMovies] = useState([])
    const [matchedMovies, setMatchedMovies] = useState([])
    const { logoutSubmitHandler } = useContext(AuthContext)

    const { authData } = useContext(AuthContext)

    useEffect(() => {
        async function loadDicoveredMovies() {
            let result = await getDiscovedMovies()
            setDiscoveredMovies(result)
        }

        loadDicoveredMovies()
    }, [])

    function onChangeSearchBar(e) {
        const filteredMovies = discoveredMovies.filter((movie) => 
            movie.title.toLowerCase().includes(e.target.value.toLowerCase())
        )

        setSearchedValue(e.target.value)
        setMatchedMovies(filteredMovies)
    }

    return (
        <header data-testid="header">
            <Link to={'/'} className={styles['img-logo']}>
                <img src={logo} alt="logo-img"/>
            </Link>
            
            <nav>
                <ul>
                    <li><Link to={'/movies/Featured Today'}>Movies</Link></li>
                    <li><Link to={`/movies/Top Rated`}>Top Rated</Link></li>
                    <li><Link to={"/people"}>Celebrities</Link></li>
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
                <li><Link to={'/movies/Watchlist'}>Watchlist</Link></li>
                <li>{(authData && Object.keys(authData).length > 0) 
                    ? (<ProfileDropdown logoutSubmitHandler={logoutSubmitHandler} />)
                    : (<Link to={'/login'}>Sign In</Link>) }
                </li>
            </ul>
            
        </header>
    )
}

export default Header;