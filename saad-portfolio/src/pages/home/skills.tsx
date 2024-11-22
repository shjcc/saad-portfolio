import styles from '../../styles/skills.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faHtml5, faCss } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <section id ="skills" className={styles.skillsContainer}>
            <div className={styles.skillsContent}>
                <h1 className={styles.skillsTitle}>my best skills</h1>
                <ul className={styles.skillsList}>
                    <li><FontAwesomeIcon icon={faPython} size="2x" color="#3776AB" /></li>
                    <li><FontAwesomeIcon icon={faHtml5} size="2x" color="#B197FC" /></li>
                    <li><FontAwesomeIcon icon={faCss} size="2x" color="#63E6BE" /></li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;
