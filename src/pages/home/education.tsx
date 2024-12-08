import styles from '../../styles/education.module.css';
import {motion} from 'framer-motion';

const eduLi = [
    {id: 0, class: 'Algorithms and Data Structures'},
    {id: 1, class: 'UI/UX Design'},
    {id: 2, class: 'OOP Programming'},
    {id: 3, class: 'System Analysis and Design'},
    {id: 4, class: 'Mobile App Development'},
    {id: 5, class: 'Machine Learning'},
    {id: 6, class: 'Professional Software Development'},
    {id: 7, class: 'Data Visualization'},
];

const variants = {
    hidden: {opacity: 0, y: -100},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 1, staggerChildren: 0.3},
    },
};

const childVariants = {
    hidden: {opacity: 0, y: -50},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.3},
    },
};

const Education = () => {
    return (
        <section id="education" className={styles.educationContainer}>
            <motion.div className={styles.educationContent}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.5}}
            >
                <h2 className={styles.educationTitle}>Education</h2>
                <p className={styles.educationText}>
                    Bachelor of Information Technology, majoring in Software Engineering, La Trobe University
                    <br/>Graduate of 2024.
                </p>
                <ul className={styles.educationAchievements}>
                    <li>✔️ Career Ready Advantage Award recipient, 2024</li>
                    <li>✔️ Academic Integrity Award recipient, 2023</li>
                    <li>✔️ Top 10% of cohort in Professional Software Development</li>
                </ul>
                <motion.div className={styles.educationListBox}
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false, amount: 0.5}}
                >
                    <p className={styles.educationListTitle}>Some of my relevant courses</p>
                    <ul className={styles.educationList}>
                        {eduLi.map((course) => (
                            <motion.li
                                key={course.id}
                                className={styles.course}
                                variants={childVariants}
                            >
                                {course.class}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Education;
