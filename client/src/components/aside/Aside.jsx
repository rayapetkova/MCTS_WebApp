import styles from "./Aside.module.css";
import { Link } from 'react-router-dom'

const Aside = () => {
    return (
        <aside>
            <ul>
                <li><Link to="#overview">Overview</Link></li>
                <li><Link to="#cast">Cast & Crew</Link></li>
                <li><Link to="#reviews">User Reviews</Link></li>
            </ul>
        </aside>
    )
}

export default Aside;