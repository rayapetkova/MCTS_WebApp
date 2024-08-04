import styles from './EditProfileDetails.module.css'
import personImg from '../../assets/person.png'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { editUser, retrieveUser } from '../../services/usersService'
import useForm from '../../hooks/useForm'
import useProfileImgForm from '../../hooks/useProfileImgForm'
import tick from '../../assets/tick.png'
import whiteTick from '../../assets/white_tick.png'
import { useFormik } from 'formik'
import { editProfileSchema } from '../../schemas/editProfileSchema'

const formNames = {
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    bio: 'bio'
}

const EditProfileDetails = () => {
    const { createdUser, setCreatedUser } = useContext(AuthContext)
    const [savedProfileImg, setSavedProfileImg] = useState(false)
    const [updatedDataBtn, setUpdatedDataBtn] = useState(false)

    const editProfileSubmitHandler = async (values) => {
        let result = await editUser(values, createdUser._id)

        setCreatedUser(result)
        setUpdatedDataBtn(true)
    }

    const submitFormik = () => {
        editProfileSubmitHandler(values)
    }

    const changeSavedImgState = () => {
        setSavedProfileImg(false)
    }

    const changeProfileImgSubmitHandler = async (imgUrl) => {
        const result = await editUser({
            ...createdUser,
            profileImg: imgUrl
        }, createdUser._id)

        setCreatedUser(result)
        setSavedProfileImg(true)
    }

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {
            [formNames.firstName]: createdUser.firstName,
            [formNames.lastName]: createdUser.lastName,
            [formNames.phoneNumber]: createdUser.phoneNumber,
            [formNames.bio]: createdUser.bio,
            email: createdUser.email,
            profileImg: createdUser.profileImg
        },
        validationSchema: editProfileSchema,
        onSubmit: submitFormik
    })
    const [onChangeImg, onSubmitImg] = useProfileImgForm(changeProfileImgSubmitHandler, changeSavedImgState, createdUser.profileImg)

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

                        {savedProfileImg ? (
                            <button className={styles['updated-button']} disabled><img src={tick} className={styles['tick']} alt='tick' />Saved</button>
                        ) : (
                            <button className={styles['update-button']}>Save</button>
                        )}
                        
                    </form>
                </div>
            </div>

            <div className={styles['right']}>
                <h3>Account Settings</h3>

                <form onSubmit={handleSubmit}>
                    <div className={styles['row']}>
                        <div className={styles['field']}>
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="text"
                                id="first_name"
                                name={formNames.firstName}
                                value={values.firstName}
                                onChange={handleChange} 
                                onBlur={handleBlur}
                            />
                        </div>

                        <div className={styles['field']}>
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="text"
                                id="last_name"
                                name={formNames.lastName}
                                value={values.lastName}
                                onChange={handleChange} 
                                onBlur={handleBlur}
                            />
                        </div>
                    </div>

                    <div className={styles['row']}>
                        <div className={styles['field']}>
                            <label htmlFor="phone_number">Phone Number</label>
                            <input
                                type="text"
                                id="phone_number"
                                name={formNames.phoneNumber}
                                value={values.phoneNumber}
                                onChange={handleChange} 
                                onBlur={handleBlur}
                            />
                        </div>
                    </div>

                    <div className={styles['bio-row']}>
                        <h3>Bio</h3>
                        <textarea
                            rows="10"
                            id="bio"
                            name={formNames.bio}
                            value={values.bio}
                            onChange={handleChange} 
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className={styles['buttons']}>
                        <button type='submit' className={styles['update-button']}>Update</button>
                        {updatedDataBtn && <p><img src={whiteTick} className={styles['tick']} alt='tick'/>Updated</p>}
                    </div>
                </form>

            </div>
        </section>
    )
}

export default EditProfileDetails;