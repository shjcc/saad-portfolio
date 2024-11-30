import styles from '../../styles/about.module.css';


const About = () => {
    return (
        <section id="about" className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
                <h1 className={styles.aboutTitle}>About Me</h1>
                <p className={styles.aboutDescription}>
                    I am a recent graduate from La Trobe University, however I am a firm believer in the philosophy that education does not stop after graduation.
                    I earned a degree in Information Technology with a major in software engineering.
                    With a personal passion for web development and machine learning, the unique blend of creativity and problem-solving
                    within coding never fails to excite and motivate me go beyond my limits.
                    <br/>When I'm not at my computer, I like to learn new cuisines to cook and maintain my Duolingo streak for Spanish. I am also interested in movies and music -almost too much!
                </p>
            </div>
        </section>
    )
}

export default About