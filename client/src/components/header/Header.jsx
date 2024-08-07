import styles from '../header/Header.module.css';

import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import SearchCard from './searchCard/SearchCard';
import ProfileDropdown from '../profileDropdown/ProfileDropdown';
import { AuthContext } from '../../contexts/AuthContext';
import { dataFunctions } from '../../api_data/dataFunctions';

import logo from '../../assets/logo.png'

const Header = () => {
    const [searchedValue, setSearchedValue] = useState('')
    const [discoveredMoviesAndCelebs, setDiscoveredMoviesAndCelebs] = useState([])
    const [matchedItems, setMatchedItems] = useState([])
    const { logoutSubmitHandler } = useContext(AuthContext)

    const { authData } = useContext(AuthContext)

    useEffect(() => {
        async function loadDicoveredMovies() {
            let discoveredMovies = await dataFunctions.getDiscovedMovies()
            let celebs = await dataFunctions.getPopularCelebrities()
            setDiscoveredMoviesAndCelebs(discoveredMovies.results.concat(celebs.results))
        }

        loadDicoveredMovies()
    }, [])

    function onChangeSearchBar(e) {
        const filteredItems = discoveredMoviesAndCelebs.filter((item) => {
            if (item.title) {
                return item.title.toLowerCase().includes(e.target.value.toLowerCase())
            }

            return item.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        console.log(filteredItems)

        setSearchedValue(e.target.value)
        setMatchedItems(filteredItems)
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
                        {matchedItems.map((item) => (
                            <SearchCard item={item} key={item.id} setSearchedValue={setSearchedValue} />
                        ))}
                    </div>
                )}

            </section>


            <ul className={styles['last-links']}>
                <li><Link to={'/ContactUs'}>Contact Us</Link></li>

                
                <li>{(authData && Object.keys(authData).length > 0) 
                    ? (<ProfileDropdown logoutSubmitHandler={logoutSubmitHandler} />)
                    : (<Link to={'/login'}>Sign In</Link>) }
                </li>
            </ul>
            
        </header>
    )
}

export default Header;