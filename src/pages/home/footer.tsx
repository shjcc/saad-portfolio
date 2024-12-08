import styles from "../../styles/footer.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <section id="footer" className={styles.footerContainer}>
            <div className={styles.footerBar}>
                <FontAwesomeIcon className={styles.footerIcon} icon={faCopyright} />
                <p className={styles.footerText}> Saad Hussain 2024 </p>
            </div>
        </section>
    )
}

export default Footer;