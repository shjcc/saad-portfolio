import styles from '../../styles/about.module.css';
import { motion } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import profile from "../../assets/profile.jpg";

const About = () => {
    return (
        <section id="about" className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
                <motion.h1 className={styles.aboutTitle}
                           initial={{opacity: 0, x: -50}}
                           whileInView={{opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.5}}}
                           viewport={{once: false, amount: .5}}
                >
                    About Me
                </motion.h1>
                <motion.p className={styles.aboutDescription}
                          initial={{opacity: 0, x: -50}}
                          whileInView={{opacity: 1, x: 0, transition: {delay: 0.4, duration: 0.5}}}
                          viewport={{once: false, amount: .5}}
                >
                    <strong>Hi!</strong> my name is <strong>Saad Hussain</strong>, I am a recent graduate from La Trobe
                    University, however I am a firm believer in the philosophy that
                    education does not stop after graduation.
                    I earned my degree in Information Technology, majoring in software engineering.
                    <br/> With a personal passion for web development and machine learning, the unique blend of
                    creativity and
                    problem-solving
                    within coding never fails to excite and motivate me to go beyond my limits.
                    <br/>When I'm not at my computer, I like to learn new cuisines to cook and maintain my Duolingo
                    streak for Spanish. I also enjoy watching (too many) movies, and increasing my spotify hours!
                    <br/><br/>
                    <a href="https://drive.google.com/file/d/19ZnRu1VrDuJpenlFIiqgRhUYZj81F8tU/view?usp=sharing" target="_blank" className={styles.aboutAnchor}>
                        Check out my resume!</a>
                </motion.p>
            </div>
            <div className={styles.aboutImgBox}>
                <motion.img src={profile} alt="Saad's Picture" className={styles.aboutImg}
                            initial={{opacity: 0, y: -50}}
                            whileInView={{opacity: 1, y: 0, transition: {delay: 0.8, duration: 0.5}}}
                            viewport={{once: false, amount: .5}}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}/>
            </div>
        </section>
    )
}

export default About