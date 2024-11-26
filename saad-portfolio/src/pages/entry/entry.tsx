import styles from '../../styles/entry.module.css';
import '../../styles/global.module.css';
interface EntryProps {
    onButtonClick: () => void;
}

const Entry: React.FC<EntryProps> = ({ onButtonClick }) => {
    return (
        <div className={styles.entryBackground}>
            <h1 className={styles.entryTitle}>
                hey, i'm saad,
                check it out
            </h1>
            <button className={styles.entryButton} onClick={onButtonClick}>
                Turn on
            </button>
        </div>
    );
};

export default Entry;
