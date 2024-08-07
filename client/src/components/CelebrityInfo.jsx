import styles from './CelebrityInfo.module.css';

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import FirstSectionPersonInfo from "./firstSectionPersonInfo/FirstSectionPersonInfo";
import SecondMainPersonPhotos from "./secondMainPersonPhotos/SecondMainPersonPhotos";
import AsidePersonInfo from "./asidePersonInfo/AsidePersonInfo";

const CelebrityInfo = () => {

    const { personId } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <div className={styles['left']}>
                <FirstSectionPersonInfo personId={personId} />

                <SecondMainPersonPhotos personId={personId} />
            </div>

            {!window.matchMedia('(max-width: 600px)').matches && (
                <AsidePersonInfo />
            )}
        </main>
    )
}

export default CelebrityInfo;