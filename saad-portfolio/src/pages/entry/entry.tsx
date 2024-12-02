import styles from '../../styles/entry.module.css';
import '../../styles/global.module.css';
import TypewriterEffect from "../../components/typewriterEffect.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';


const Entry = () => {
    return (
        <div className={styles.entryBackground}>
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
                    <TypewriterEffect phrase="error: !!!131232@92n813192(*@Q*(#(*@naskj@*(!((" delay={4500}/>
                </p>
            </div>
            <motion.div className={styles.entryIconBox}
                        initial={{opacity: 0,}}
                        whileInView={{opacity: 1, transition: {delay: 0.1, duration: 0.5}}}
                        viewport={{once: false, amount: .5}}
            >
            <FontAwesomeIcon className={styles.entryIcon} icon={faSortDown} />
            <p className={styles.entryIconText}>scroll to continue</p>
            </motion.div>
        </div>
    );
};

export default Entry;
