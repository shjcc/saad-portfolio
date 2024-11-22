import styles from '../../styles/skills.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPython, faHtml5, faCss, faReact, faJava, faGitAlt, faNode} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <section id="skills" className={styles.skillsContainer}>
            <div className={styles.skillsContent}>
                <h1 className={styles.skillsTitle}>Skills</h1>
                <div className={styles.skillsList}>
                    <FontAwesomeIcon icon={faPython} size="2x"/>
                    <FontAwesomeIcon icon={faHtml5} size="2x"/>
                    <FontAwesomeIcon icon={faCss} size="2x"/>
                    <FontAwesomeIcon icon={faReact} size="2x"/>
                    <FontAwesomeIcon icon={faJava} size="2x"/>
                    <FontAwesomeIcon icon={faGitAlt} size="2x"/>
                    <FontAwesomeIcon icon={faNode} size="2x"/>
                </div>
            </div>
        </section>
    )
}
export default Skills;
