import styles from '../../styles/skills.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPython, faHtml5, faCss3Alt, faReact, faJava, faGitAlt, faNode, faCuttlefish} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <section id="skills" className={styles.skillsContainer}>
            <div className={styles.skillsContent}>
                <h1 className={styles.skillsTitle}>Technical Skills</h1>
                <div className={styles.skillsList}>
                    <div className={styles.skillsIcon}>
                        <a className={styles.skillsAnchor} href={"https://www.python.org/"} target="_blank">
                            <FontAwesomeIcon className={styles.skillsIconA} icon={faPython}/>
                        </a>
                        <span className={styles.skillsHover}>Python</span>
                    </div>

                    <div className={styles.skillsIcon}>
                        <a className={styles.skillsAnchor} href={"https://isocpp.org/"} target="_blank">
                            <FontAwesomeIcon className={styles.skillsIconB} icon={faCuttlefish}/>
                        </a>
                        <span className={styles.skillsHover}>C++</span>
                    </div>

                    <div className={styles.skillsIcon}>
                        <a className={styles.skillsAnchor}
                           href={"https://developer.mozilla.org/en-US/docs/Glossary/HTML5"} target="_blank">
                            <FontAwesomeIcon className={styles.skillsIconC} icon={faHtml5}/>
                        </a>
                        <span className={styles.skillsHover}>HTML5</span>
                    </div>

                    <div className={styles.skillsIcon}>
                        <a className={styles.skillsAnchor} href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
                           target="_blank">
                            <FontAwesomeIcon className={styles.skillsIconD} icon={faCss3Alt}/>
                        </a>
                        <span className={styles.skillsHover}>CSS3</span>
                    </div>

                    <div className={styles.skillsIcon}>
                        <a className={styles.skillsAnchor} href={"https://react.dev/"} target="_blank">
                            <FontAwesomeIcon className={styles.skillsIconE} icon={faReact}/>
                        </a>
                        <span className={styles.skillsHover}>React</span>
                    </div>

                    <div className={styles.skillsIcon}>
                        <a className={styles.skillsAnchor} href={"https://nodejs.org/en"} target="_blank">
                            <FontAwesomeIcon className={styles.skillsIconF} icon={faNode}/>
                        </a>
                        <span className={styles.skillsHover}>Node.js</span>
                    </div>

                    <div className={styles.skillsIcon}>
                        <a className={styles.skillsAnchor} href={"https://www.java.com/en/"} target="_blank">
                            <FontAwesomeIcon className={styles.skillsIconG} icon={faJava}/>
                        </a>
                        <span className={styles.skillsHover}>Java</span>
                    </div>

                    <div className={styles.skillsIcon}>
                        <a className={styles.skillsAnchor} href={"https://git-scm.com/"} target="_blank">
                            <FontAwesomeIcon className={styles.skillsIconH} icon={faGitAlt}/>
                        </a>
                        <span className={styles.skillsHover}>Git</span>
                    </div>


                </div>
            </div>
        </section>
    )
}
export default Skills;
