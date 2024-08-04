import { useEffect, useState } from 'react';
import styles from './UserInfo.module.css'
import { useParams } from "react-router-dom";
import { retrieveUser } from '../../services/usersService';

const UserInfo = () => {
    const { userId } = useParams()
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        async function loadUserInfo() {
            const result = await retrieveUser(userId)
            setUserInfo(result[0])
        }

        loadUserInfo()
    }, [])

    return (
        <section className={styles['info-section']}>
            <div className={styles['left']}>
                <div className={styles['img-container']}>
                    <img src={userInfo.profileImg} alt="user-profile-picture" />
                </div>

                <div className={styles['user-info']}>
                    <p className={styles['name']}>{`${userInfo.firstName} ${userInfo.lastName}`}</p>
                </div>
            </div>

            <div className={styles['right']}>
                <h3>Account</h3>

                <div className={styles['account-info']}>
                    <div className={styles['row']}>
                        <div className={styles['field']}>
                            <h3 htmlFor="first_name">First Name</h3>
                            <p>{userInfo.firstName}</p>
                        </div>

                        <div className={styles['field']}>
                            <h3 htmlFor="last_name">Last Name</h3>
                            <p>{userInfo.lastName}</p>
                        </div>
                    </div>

                    <div className={styles['bio-row']}>
                        <h3>Bio</h3>
                        {userInfo.bio ? <p>{userInfo.bio}</p> : <p className={styles['no-bio-yet']}>No bio yet</p>}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default UserInfo;