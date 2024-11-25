import styles from '../../styles/about.module.css';

const About = () => {
    return (
        <section id="about" className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
                <h1 className={styles.aboutTitle}>About</h1>
                <p className={styles.aboutBlurb}>
                    blah bleh blehab lh maybe change the class name?
                </p>
            </div>
        </section>
    )
}

export default About