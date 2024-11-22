import styles from '../../styles/hero.module.css';

const Hero = () => {
    return (
        <section id ="hero" className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>About</h1>
                <h2 className={styles.heroWord}>Saad Hussain</h2>
                <h4 className={styles.heroPronounce}>[sah-d] <i>noun</i></h4>
                <p className={styles.heroDefinition}>
                    Happiness or good fortune.
                </p>
            </div>
        </section>
    )
}

export default Hero;
