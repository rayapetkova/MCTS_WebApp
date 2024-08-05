import styles from './EditProfileDetails.module.css';

import { useFormik } from 'formik';
import { useContext, useState } from 'react';

import useProfileImgForm from '../../hooks/useProfileImgForm';
import { AuthContext } from '../../contexts/AuthContext';
import { editUser } from '../../services/usersService';
import { editProfileSchema } from '../../schemas/editProfileSchema';

import tick from '../../assets/tick.png';
import whiteTick from '../../assets/white_tick.png';

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
    const [showDeleteProfileImgButton, setShowDeleteProfileImgButton] = useState(() => {
        return createdUser.profileImg !== 'https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png'
    })

    const editProfileSubmitHandler = async (values) => {
        let result = await editUser({...values, profileImg: createdUser.profileImg}, createdUser._id)

        setCreatedUser(result)
        setUpdatedDataBtn(true)
    }

    const submitFormik = () => {
        editProfileSubmitHandler(values)
    }

    const changeSavedImgState = () => {
        setSavedProfileImg(false)
    }

    const removeProfileImg = (e) => {
        setCreatedUser({
            ...createdUser,
            profileImg: 'https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png'
        })

        setShowDeleteProfileImgButton(false)
    }

    const changeProfileImgSubmitHandler = async (imgUrl) => {
        const result = await editUser({
            ...createdUser,
            profileImg: imgUrl
        }, createdUser._id)

        setCreatedUser(result)
        setSavedProfileImg(true)
        setShowDeleteProfileImgButton(true)
    }

    const [onChangeImg, onSubmitImg] = useProfileImgForm(changeProfileImgSubmitHandler, changeSavedImgState, createdUser.profileImg)

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {
            [formNames.firstName]: createdUser.firstName,
            [formNames.lastName]: createdUser.lastName,
            [formNames.phoneNumber]: createdUser.phoneNumber,
            [formNames.bio]: createdUser.bio,
            email: createdUser.email,
        },
        validationSchema: editProfileSchema,
        onSubmit: submitFormik
    })
    
    return (
        <section className={styles['info-section']}>
            <div className={styles['left']}>
                <div className={styles['img-container']}>
                    <img src={createdUser.profileImg} alt="user-profile-picture" />
                    {showDeleteProfileImgButton && <button className={styles['remove-profile-btn']} onClick={removeProfileImg}>X</button>}
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

                            {(errors.firstName && touched.firstName) && <p>{errors.firstName}</p>}
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

                            {(errors.lastName && touched.lastName) && <p>{errors.lastName}</p>}
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

                            {(errors.phoneNumber && touched.phoneNumber) && <p>{errors.phoneNumber}</p>}
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

                        {(errors.bio && touched.bio) && <p>{errors.bio}</p>}
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