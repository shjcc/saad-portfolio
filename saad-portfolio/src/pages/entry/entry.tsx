import { Link } from "react-router-dom"
import styles from '../../styles/entry.module.css';


const Entry = () => {
    return (
        <div>
            <Link to="/loading">
                <button className={styles.button}>Go to loading page</button>
            </Link>
        </div>
    );
}

export default Entry;