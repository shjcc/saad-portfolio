import { Link } from "react-router-dom"
import styles from '../../styles/entry.module.css';
import '../../styles/global.module.css';

const Entry = () => {
    return (
        <div className={styles.entryBackground}>
            <h1 className={styles.entryTitle}>
                hey, i'm saad,
                check it out
            </h1>
            <Link to="/loading">
                <button className={styles.entryButton}>Turn on</button>
            </Link>
        </div>
    );
}

export default Entry;