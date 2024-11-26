import styles from '../../styles/about.module.css';

const About = () => {
    return (
        <section id="about" className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
                <h1 className={styles.aboutTitle}>About Me</h1>
                <p className={styles.aboutDescription}>
                    I am a recent graduate from La Trobe University, however I and committed to the philosophy of being a life-long student of knowledge.
                    I earned a degree in Information Technology with a major in software engineering.
                    With a personal passion for web development and machine learning, the unique blend of creativity and problem-solving
                    never fails to excite and motivate me to educate and push myself further.
                    When I'm not at my computer, I spend my time learning new cuisines to cook, watching movies, and enjoying music.
                </p>
            </div>
        </section>
    )
}

export default About