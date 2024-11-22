import { Link } from "react-router-dom"
import styles from '../../styles/entry.module.css';


const Entry = () => {
    return (
        <div>
            <h1 className={styles.entryTitle}>Hi, I'm Saad.<br></br>check it out</h1>

            <Link to="/loading">
                <button className={styles.button}>who is saad?</button>
            </Link>
        </div>
    );
}

export default Entry;