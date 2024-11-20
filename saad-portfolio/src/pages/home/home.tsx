import styles from '../../styles/home.module.css';

const Home = () => {
    return (
        <section className={styles.homeContainer}>
            <div className={styles.homeContent}>
                <h1 className={styles.homeTitle}>Saad Hussain</h1>
                <h4 className={styles.homePronounce}>[sah-d] <i>noun</i> </h4>
                <p className={styles.homeDescription}>
                    Happiness or good fortune.
                </p>
                <a href="mailto:saad.shjcc@gmail.com" className={styles.homeContactButton}>contact</a>
            </div>
        </section>
    )
}

export default Home;
