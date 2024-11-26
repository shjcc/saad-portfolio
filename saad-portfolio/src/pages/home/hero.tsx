import styles from '../../styles/hero.module.css';

const Hero = () => {
    return (
        <section id ="hero" className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h2 className={styles.heroWord}>Saad Hussain</h2>
                <h4 className={styles.heroPronounce}>[sah-d who-sayn] <i>noun</i></h4>
                <p className={styles.heroDefinition}>
                    Good luck, Happy, A blissful, happy person.
                </p>
            </div>
        </section>
    )
}

export default Hero;
