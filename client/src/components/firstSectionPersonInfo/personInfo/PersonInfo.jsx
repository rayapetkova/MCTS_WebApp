import styles from './PersonInfo.module.css'

const PersonInfo = ({ personInfo, personMovies }) => {
    const showNumberOfMovies = 15

    return (
        <div className={styles['person-info']}>
            <h3>Biography</h3>
            <p className={styles['biography']}>{personInfo.biography}</p>
            <div className={styles['participated-in']}>
                <h6>Movies</h6>
                <p>{personMovies.slice(0, showNumberOfMovies).join(', ')}</p>
            </div>
        </div>
    )
}

export default PersonInfo;