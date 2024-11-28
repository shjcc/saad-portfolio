import styles from '../../styles/entry.module.css';
import '../../styles/global.module.css';
import TypewriterEffect from "../../components/typewriterEffect.tsx";

interface EntryProps {
    onButtonClick: () => void;
}

const Entry = ({onButtonClick}: EntryProps) => {
    return (
        <div className={styles.entryBackground}>
            <h1 className={styles.entryTitle}>Saad Hussain</h1>
            <div className={styles.entryTypeBox}>
                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase="Running: portfolio.exe version_2024..." delay={1000}/>
                </p>

                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase=">> done..." delay={4500}/>
                </p>

                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase="Running: locate_button.exe..." delay={5500}/>
                </p>

                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase="Completed: displaying button.." delay={8000}/>
                </p>

                <p className={styles.entryTyping}>
                    <TypewriterEffect phrase=">> enjoy_your_visit..." delay={10500}/>
                </p>
            </div>

            <button className={styles.entryButton} onClick={onButtonClick}>
                Turn on
            </button>
        </div>
    );
};

export default Entry;
