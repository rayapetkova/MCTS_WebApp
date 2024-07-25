import styles from './EditProfileDetails.module.css'
import personImg from '../../assets/person.png'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { editUser, retrieveUser } from '../../services/usersService'
import useForm from '../../hooks/useForm'
import DeleteProfileForm from './deleteProfileForm/DeleteProfileForm'

const EditProfileDetails = () => {
    const { setCreatedUser } = useContext(AuthContext)
    const [showDeleteForm, setShowDeleteForm] = useState(false)
    const createdUser = JSON.parse(localStorage.getItem('createdUser'))

    const editProfileSubmitHandler = async (values) => {
        let result = await editUser(values, createdUser._id)
        setCreatedUser(result)
    }

    const [values, onChange, onSubmit] = useForm(editProfileSubmitHandler, createdUser)

    const deleteProfileEvent = (e) => setShowDeleteForm(true)

    const hideDeleteForm = (e) => setShowDeleteForm(false)

    return (
        <section className={styles['info-section']}>
            <div className={styles['left']}>
                <div className={styles['img-container']}>
                    <img src={createdUser.profileImg} alt="user-profile-picture" />
                </div>

                <div className={styles['user-info']}>
                    <p className={styles['name']}>{`${createdUser.firstName} ${createdUser.lastName}`}</p>

                    <form onSubmit={onSubmit}>
                        <div className={styles['field']}>
                            <label htmlFor="profile-img">Profile Image URL</label>
                            <input
                                type="text"
                                id="profile_img"
                                name="profileImg"
                                value={values.profileImg}
                                onChange={onChange}
                            />
                        </div>

                        <button className={styles['update-button']}>Save</button>
                    </form>
                </div>
            </div>

            <div className={styles['right']}>
                <h3>Account Settings</h3>

                <form onSubmit={onSubmit}>
                    <div className={styles['row']}>
                        <div className={styles['field']}>
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="text"
                                id="first_name"
                                name="firstName"
                                value={values.firstName}
                                onChange={onChange}
                            />
                        </div>

                        <div className={styles['field']}>
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="text"
                                id="last_name"
                                name="lastName"
                                value={values.lastName}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className={styles['row']}>
                        <div className={styles['field']}>
                            <label htmlFor="phone_number">Phone Number</label>
                            <input
                                type="text"
                                id="phone_number"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className={styles['bio-row']}>
                        <h3>Bio</h3>
                        <textarea
                            rows="10"
                            id="bio"
                            name="bio"
                            value={values.bio}
                            onChange={onChange}
                        />
                    </div>

                    <div className={styles['buttons']}>
                        <button className={styles['update-button']}>Update</button>
                        <button className={styles['delete-button']} onClick={deleteProfileEvent}>Delete Profile</button>
                    </div>
                </form>

                {showDeleteForm && <DeleteProfileForm hideDeleteForm={hideDeleteForm} />}
            </div>
        </section>
    )
}

export default EditProfileDetails;