import styles from './ProfileDropdown.module.css';

import { Link } from 'react-router-dom';
import {
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem
} from 'mdb-react-ui-kit';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import profileIcon from '../../assets/profile_icon.png';

const ProfileDropdown = ({ logoutSubmitHandler }) => {
    const { createdUser } = useContext(AuthContext)

    return (
        <MDBDropdown>
            <MDBDropdownToggle tag='a' className={`btn btn-primary ${styles['dropdown-container']}`}>
                <div className={styles['profile-img-container']}>
                    <img src={createdUser.profileImg ? createdUser.profileImg : profileIcon} alt="profileImg" />
                </div>
                
            </MDBDropdownToggle>
            <MDBDropdownMenu className={styles['dropdown-items']} dark>
                <Link to={'/users/me'}><MDBDropdownItem className={styles['dropdown-item']}>Profile Details</MDBDropdownItem></Link>
                <Link to={'/movies/Watchlist'}><MDBDropdownItem className={styles['dropdown-item']}>Watchlist</MDBDropdownItem></Link>
                <Link onClick={() => logoutSubmitHandler()}><MDBDropdownItem className={styles['dropdown-item']}>Log Out</MDBDropdownItem></Link>
            </MDBDropdownMenu>
        </MDBDropdown>
    );
}

export default ProfileDropdown;