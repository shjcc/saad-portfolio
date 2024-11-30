import styles from '../../styles/about.module.css';
import { motion } from 'framer-motion';


const About = () => {
    return (
        <section id="about" className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
                <motion.h1 className={styles.aboutTitle}
                           initial={{opacity: 0, x: -50 }}
                           whileInView={{opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 }}}
                           viewport={ {once: false, amount: .5}}
                >
                    About Me
                </motion.h1>
                <motion.p className={styles.aboutDescription}
                          initial={{opacity: 0, x: -50 }}
                          whileInView={{opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.5 }}}
                          viewport={ {once: false, amount: .5}}
                >
                    I am a recent graduate from La Trobe University, however I am a firm believer in the philosophy that education does not stop after graduation.
                    I earned a degree in Information Technology with a major in software engineering.
                    With a personal passion for web development and machine learning, the unique blend of creativity and problem-solving
                    within coding never fails to excite and motivate me go beyond my limits.
                    <br/>When I'm not at my computer, I like to learn new cuisines to cook and maintain my Duolingo streak for Spanish. I am also interested in movies and music -almost too much!
                </motion.p>
            </div>
        </section>
    )
}

export default About