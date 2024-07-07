import styles from './EditProfileDetails.module.css'
import personImg from '../../assets/person.png'
import { useEffect, useState } from 'react'
import { getUserDetails } from '../../services/authService'

const EditProfileDetails = () => {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        async function loadUserData() {
            let result = await getUserDetails()
            setUserData(result)
        }

        loadUserData()
    }, [])

    return (
        <section className={styles['info-section']}>
            <div className={styles['left']}>
                <div className={styles['img-container']}>
                    <img src={personImg} alt="user-profile-picture" />
                </div>

                <div className={styles['user-info']}>
                    <p className={styles['name']}>Tim Cook</p>
                </div>
            </div>

            <div className={styles['right']}>
                <h3>Account Settings</h3>

                <form action="#" method="#">
                    <div className={styles['row']}>
                        <div className={styles['field']}>
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" id="first_name" name="first_name" />
                        </div>

                        <div className={styles['field']}>
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" id="last_name" name="last_name" />
                        </div>
                    </div>

                    <div className={styles['row']}>
                        <div className={styles['field']}>
                            <label htmlFor="phone_number">Phone Number</label>
                            <input type="text" id="phone_number" name="phone_number" />
                        </div>

                        <div className={styles['field']}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" value={userData.email && userData.email} />
                        </div>
                    </div>

                    <div className={styles['bio-row']}>
                        <h3>Bio</h3>
                        <textarea rows="10">{userData.bio && userData.bio}</textarea>
                    </div>

                    <button className={styles['update-button']}>Update</button>

                </form>
            </div>
        </section>
    )
}

export default EditProfileDetails;