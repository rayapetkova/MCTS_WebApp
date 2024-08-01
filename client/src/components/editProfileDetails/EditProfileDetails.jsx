import styles from './EditProfileDetails.module.css'
import personImg from '../../assets/person.png'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { editUser, retrieveUser } from '../../services/usersService'
import useForm from '../../hooks/useForm'
import useProfileImgForm from '../../hooks/useProfileImgForm'

const EditProfileDetails = () => {
    const { createdUser, setCreatedUser } = useContext(AuthContext)
    console.log(createdUser)

    const editProfileSubmitHandler = async (values) => {
        let result = await editUser(values, createdUser._id)
        setCreatedUser(result)
    }

    const changeProfileImgSubmitHandler = async (imgUrl) => {
        const result = await editUser({
            ...createdUser,
            profileImg: imgUrl
        }, createdUser._id)
        setCreatedUser(result)
    }

    const [values, onChange, onSubmit] = useForm(editProfileSubmitHandler, createdUser)
    const [onChangeImg, onSubmitImg] = useProfileImgForm(changeProfileImgSubmitHandler, createdUser.profileImg)

    return (
        <section className={styles['info-section']}>
            <div className={styles['left']}>
                <div className={styles['img-container']}>
                    <img src={createdUser.profileImg} alt="user-profile-picture" />
                </div>

                <div className={styles['user-info']}>
                    <p className={styles['name']}>{`${createdUser.firstName} ${createdUser.lastName}`}</p>

                    <form onSubmit={onSubmitImg}>
                        <div className={styles['field']}>
                            <label htmlFor="profile-img">Profile Image</label>
                            <input
                                type="file"
                                id="profile_img"
                                name="profileImg"
                                className={styles['choose-file-button']}
                                onChange={onChangeImg}
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
                    </div>
                </form>

            </div>
        </section>
    )
}

export default EditProfileDetails;