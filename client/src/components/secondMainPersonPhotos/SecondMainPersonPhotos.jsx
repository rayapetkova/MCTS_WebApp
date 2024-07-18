import styles from './SecondMainPersonPhotos.module.css'
import movieImg from '../../assets/movie_img.png'
import leftArrow from '../../assets/left_arrow_button.png'
import rigthArrow from '../../assets/right_arrow_button.png'
import { useEffect, useState } from 'react'
import { getPersonPhotos } from '../../api_data/dataFunctions'

const pathForImages = 'https://image.tmdb.org/t/p/w500'

const SecondMainPersonPhotos = ({ personId }) => {
    const [personPhotos, setPersonPhotos] = useState([])

    useEffect(() => {
        async function loadPersonPhotos() {
            let result = await getPersonPhotos(personId)
            setPersonPhotos(result.profiles)
        }

        loadPersonPhotos()
    }, [])

    return (
        <div className={`${styles['second-main']} ${styles['photos']}`} id="photos">
            <section className={styles['one-section']}>
                <div className={styles['title']}>
                    <h2>Photos</h2>
                    <div className={styles['buttons']}>
                        <a href="#"><img src={leftArrow} alt="left-arrow" /></a>
                        <a href="#"><img src={rigthArrow} alt="right-arrow" /></a>
                    </div>
                </div>
                <div className={styles['cards']}>
                    {personPhotos && personPhotos.slice(0, 4).map((photo) => (
                        <div className={styles['card']} key={photo.vote_average}>
                            <img src={`${pathForImages + photo.file_path}`} alt="card" />
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}

export default SecondMainPersonPhotos;