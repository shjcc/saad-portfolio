import styles from '../../styles/hero.module.css';
import Typewriter from "typewriter-effect";


const Hero = () => {
    return (
        <section id ="hero" className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h2 className={styles.heroWord}>
                    <Typewriter
                        options={{
                            strings: ["Saad Hussain"],
                            autoStart: true,
                            loop: true,
                            cursor: "|",
                            delay: 75,
                            deleteSpeed:75,
                        }}
                    />
                </h2>
                <h4 className={styles.heroPronounce}>[sah-d who-sayn] <i>noun</i></h4>
                <p className={styles.heroDefinition}>
                    Good luck, Happy, A blissful, happy person.
                </p>
            </div>
        </section>
    )
}

export default Hero;
