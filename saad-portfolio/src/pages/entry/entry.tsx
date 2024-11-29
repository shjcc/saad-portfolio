import styles from '../../styles/entry.module.css';
import '../../styles/global.module.css';
import TypewriterEffect from "../../components/typewriterEffect.tsx";

const Entry = () => {
    return (
        <div className={styles.entryBackground}>
            {/*<h1 className={styles.entryTitle}>Saad Hussain</h1>*/}
            <div className={styles.entryTypeBox}>
                <p className={styles.entryTypingName}>
                    <TypewriterEffect phrase="User: Saad_Hussain" delay={0}/>
                </p>
                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase="Running: portfolio.exe..." delay={1000}/>
                </p>

                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase=">> done..." delay={2500}/>
                </p>

                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase="Projects: [OK]..." delay={3000}/>
                </p>

                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase=">> enjoy_your_visit..." delay={4000}/>
                </p>

                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase="ERROR: !@888888!@#@JASPKMDPIWQzzzzzzzz*W(E*(!@NDNNDDND" delay={5000}/>
                </p>
            </div>

            {/*<button className={styles.entryButton} onClick={onButtonClick}>continue</button>*/}
        </div>
    );
};

export default Entry;
