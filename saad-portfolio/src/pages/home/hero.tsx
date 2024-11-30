import styles from '../../styles/hero.module.css';
import Typewriter from "typewriter-effect";
import selfie from "../../assets/profile.jpg";


const Hero = () => {
    return (
        <section id ="home" className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroWord}>
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
                </h1>
                <h2 className={styles.heroPronounce}>[sah-d who-sayn] <i>noun</i></h2>
                <p className={styles.heroDefinition}>Meaning of "Felicity" or "good fortune" </p>
                <img src={selfie} alt="Saad's Picture" className={styles.heroImg} />
            </div>
        </section>
    )
}

export default Hero;
