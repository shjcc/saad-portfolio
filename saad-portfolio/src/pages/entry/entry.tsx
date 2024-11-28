import styles from '../../styles/entry.module.css';
import '../../styles/global.module.css';
import TypewriterEffect from "../../components/typewriterEffect.tsx";

interface EntryProps {
    onButtonClick: () => void;
}

const Entry = ({ onButtonClick }: EntryProps) => {
    return (
        <div className={styles.entryBackground}>
            <h1 className={styles.entryTitle}>
                <span className={styles.entryWord}>S</span>aad <span className={styles.entryWord}>H</span>ussain
            </h1>
            <div className={styles.entryTypeBox}>
            <p className={styles.entryTyping}>
                <TypewriterEffect phrase="Welcome user..." delay={500}/>
            </p>

            <p className={styles.entryTyping}>
                <TypewriterEffect phrase="Loading portfolio..." delay={3500}/>
            </p>

            <p className={styles.entryTyping}>
                <TypewriterEffect phrase="Entrance granted..." delay={6500}/>
            </p>

            <p className={styles.entryTyping}>
                <TypewriterEffect phrase="Finding button..." delay={8500}/>
            </p>
            </div>

            <button className={styles.entryButton} onClick={onButtonClick}>
                Turn on
            </button>
        </div>
    );
};

export default Entry;
