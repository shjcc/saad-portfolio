import styles from '../../styles/education.module.css';

const Education = () => {
    return (
        <section id="education" className={styles.educationContainer}>
            <div className={styles.educationContent}>
                <h2 className={styles.educationTitle}>Education</h2>
                <p className={styles.educationText}>
                    Bachelor of Information Technology, majoring in Software Engineering, La Trobe University
                    <br />Graduate of 2024.
                </p>
                <ul className={styles.educationAchievements}>
                    <li>Career Ready Advantage Award recipient, 2024</li>
                    <li>Academic Integrity Award recipient, 2023</li>
                    <li>Top 10% of cohort in Professional Software Development</li>
                </ul>
                <div className={styles.educationListBox}>
                <p className={styles.educationListTitle}>Some of my relevant courses</p>
                <ul className={styles.educationList}>
                    <li>Algorithms and Data Structures</li>
                    <li>UI/UX Design</li>
                    <li>OOP Programming</li>
                    <li>Data Visualization</li>
                    <li>System Analysis and Design</li>
                    <li>Mobile App Development</li>
                    <li>Machine Learning</li>
                    <li>Professional Software Development</li>
                </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;
