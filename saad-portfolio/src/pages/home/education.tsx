import styles from '../../styles/education.module.css';

const eduLi = [
    {
        id: 0,
        class: 'Algorithms and Data Structures',
    },
    {
        id: 1,
        class: 'UI/UX Design',
    },
    {
        id: 2,
        class: 'OOP Programming',

    },
    {
        id: 3,
        class: 'System Analysis and Design',
    },
    {
        id: 4,
        class: 'Mobile App Development',
    },
    {
        id: 5,
        class: 'Machine Learning',
    },
    {
        id: 6,
        class: 'Professional Software Development',
    },
    {
        id: 7,
        class: 'Data Visualization',
    },
];

const Education = () => {
    return (
        <section id="education" className={styles.educationContainer}>
            <div className={styles.educationContent}>
                <h2 className={styles.educationTitle}>Education</h2>
                <p className={styles.educationText}>
                    Bachelor of Information Technology, majoring in Software Engineering, La Trobe University
                    <br/>Graduate of 2024.
                </p>
                <ul className={styles.educationAchievements}>
                    <li>Career Ready Advantage Award recipient, 2024</li>
                    <li>Academic Integrity Award recipient, 2023</li>
                    <li>Top 10% of cohort in Professional Software Development</li>
                </ul>
                <div className={styles.educationListBox}>
                    <p className={styles.educationListTitle}>Some of my relevant courses</p>
                    <ul className={styles.educationList}>
                        {eduLi.map((course) => (
                            <li key={course.id}>{course.class}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;
