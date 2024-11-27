import styles from '../../styles/entry.module.css';
import '../../styles/global.module.css';

interface EntryProps {
    onButtonClick: () => void;
}

const Entry = ({ onButtonClick }: EntryProps) => {
    return (
        <div className={styles.entryBackground}>
            <h1 className={styles.entryTitle}>
                <span className={styles.entryWord}>S</span>aad <span className={styles.entryWord}>H</span>ussain
            </h1>
            <button className={styles.entryButton} onClick={onButtonClick}>
                Turn on
            </button>
        </div>
    );
};

export default Entry;
