import styles from '../../styles/skills.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPython, faHtml5, faCss3Alt, faReact, faJava, faGitAlt, faNode} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <section id="skills" className={styles.skillsContainer}>

            <div className={styles.skillsContent}>

                <h1 className={styles.skillsTitle}>My Skills</h1>

                <div className={styles.skillsList}>

                    <div className={styles.skillsIcon}>
                        <FontAwesomeIcon className={styles.skillsIconA} icon={faPython}/>
                        <span className={styles.skillsHover}>Python</span>
                    </div>

                    <div className={styles.skillsIcon}>
                        <FontAwesomeIcon className={styles.skillsIconB} icon={faHtml5}/>
                        <span className={styles.skillsHover}>HTML5</span>

                    </div>

                    <div className={styles.skillsIcon}>
                        <FontAwesomeIcon className={styles.skillsIconC} icon={faCss3Alt}/>
                        <span className={styles.skillsHover}>CSS3</span>

                    </div>

                    <div className={styles.skillsIcon}>
                        <FontAwesomeIcon className={styles.skillsIconD} icon={faReact}/>
                        <span className={styles.skillsHover}>React</span>

                    </div>

                    <div className={styles.skillsIcon}>
                        <FontAwesomeIcon className={styles.skillsIconG} icon={faNode}/>
                        <span className={styles.skillsHover}>Node.js</span>
                    </div>

                    <div className={styles.skillsIcon}>
                        <FontAwesomeIcon className={styles.skillsIconE} icon={faJava}/>
                        <span className={styles.skillsHover}>Java</span>

                    </div>

                    <div className={styles.skillsIcon}>
                        <FontAwesomeIcon className={styles.skillsIconF} icon={faGitAlt}/>
                        <span className={styles.skillsHover}>Git</span>

                    </div>


                </div>
            </div>
        </section>
    )
}
export default Skills;
