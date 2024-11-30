import styles from '../../styles/education.module.css';

const Education = () => {
    return (
        <section id="education" className={styles.educationContainer}>
            <div className={styles.educationContent}>
                <h1 className={styles.educationTitle}>Education</h1>
                <p className={styles.educationText}>
                    Bachelor of Information Technology and a major in Software Engineering from La Trobe University
                    <br/>Graduate 2024
                    <br/>Academic Integrity recipient - 2023
                    <br/>Received 'Top 10% of cohort' within Professional Software Development
                </p>
                <p className={styles.educationListTitle}>Some of my classes include:</p>
                <ul className={styles.educationList}>
                    <li>Algorithms and Data Structures</li>
                    <li>UI/UX Design</li>
                    <li>OOP Programming</li>
                    <li>Data Visualization</li>
                    <li>System Analysis and Design</li>
                    <li>Mobile App Development</li>
                    <li>Machine Learning</li>
                    <li>Machine Learning</li>
                </ul>
            </div>
        </section>
    )
}
export default Education;