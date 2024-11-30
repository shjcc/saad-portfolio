import styles from '../../styles/entry.module.css';
import '../../styles/global.module.css';
import TypewriterEffect from "../../components/typewriterEffect.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Entry = () => {
    return (
        <div className={styles.entryBackground}>
            {/*<h1 className={styles.entryTitle}>Saad Hussain</h1>*/}
            <div className={styles.entryTypeBox}>
                <p className={styles.entryTypingName}>
                    <TypewriterEffect phrase="User: Saad_Hussain" delay={0}/>
                </p>
                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase="running: portfolio.exe..." delay={1000}/>
                </p>

                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase=">> done..." delay={2000}/>
                </p>

                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase="projects: [ok]..." delay={2800}/>
                </p>

                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase=">> enjoy_your_stay..." delay={3800}/>
                </p>

                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase="error: nsaifunwenf2938nfn2efnufnndlsf222222zdizansodfnqjefn " delay={4500}/>
                </p>
            </div>

            <FontAwesomeIcon className={styles.entryIcon} icon={faSortDown} />
            <p className={styles.entryIconText}>scroll to continue</p>
        </div>
    );
};

export default Entry;
