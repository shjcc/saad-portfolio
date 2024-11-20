import styles from '../../styles/home.module.css';
const Hero = () => {
    return (
        <section id ="hero" className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Saad Hussain</h1>
                <h4 className={styles.heroPronounce}>[sah-d] <i>noun</i></h4>
                <p className={styles.heroDescription}>
                    Happiness or good fortune.
                </p>
                <a href="mailto:saad.shjcc@gmail.com" className={styles.heroContactButton}>contact</a>
            </div>
        </section>
    )
}

export default Hero;
