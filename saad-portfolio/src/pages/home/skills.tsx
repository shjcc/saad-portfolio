import styles from '../../styles/skills.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPython, faHtml5, faCss, faReact, faJava, faGitAlt, faNode} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <section id="skills" className={styles.skillsContainer}>
            <div className={styles.skillsContent}>
                <h1 className={styles.skillsTitle}>Skills</h1>
                <div className={styles.skillsList}>
                    <FontAwesomeIcon icon={faPython} />
                    <FontAwesomeIcon icon={faHtml5} />
                    <FontAwesomeIcon icon={faCss} />
                    <FontAwesomeIcon icon={faReact} />
                    <FontAwesomeIcon icon={faJava} />
                    <FontAwesomeIcon icon={faGitAlt} />
                    <FontAwesomeIcon icon={faNode} />
                </div>
            </div>
        </section>
    )
}
export default Skills;
