import styles from '../../styles/skills.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faPython,
    faHtml5,
    faCss3Alt,
    faReact,
    faJava,
    faGitAlt,
    faNode,
    faCuttlefish
} from '@fortawesome/free-brands-svg-icons';
import {motion} from 'framer-motion';

interface Skill {
    name: string;
    icon: any;
    link: string;
    className: string;
}

const skillsData: Skill[] = [
    {name: 'Python', icon: faPython, link: 'https://www.python.org/', className: styles.skillsIconA},
    {name: 'C++/C#', icon: faCuttlefish, link: 'https://isocpp.org/', className: styles.skillsIconB},
    {
        name: 'HTML5',
        icon: faHtml5,
        link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
        className: styles.skillsIconC
    },
    {
        name: 'CSS3',
        icon: faCss3Alt,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        className: styles.skillsIconD
    },
    {name: 'React', icon: faReact, link: 'https://react.dev/', className: styles.skillsIconE},
    {name: 'Node.js', icon: faNode, link: 'https://nodejs.org/en', className: styles.skillsIconF},
    {name: 'Java', icon: faJava, link: 'https://www.java.com/en/', className: styles.skillsIconG},
    {name: 'Git', icon: faGitAlt, link: 'https://git-scm.com/', className: styles.skillsIconH},
];

const Skills = () => {
    return (
        <section id="skills" className={styles.skillsContainer}>
            <div className={styles.skillsContent}>
                <motion.h1 className={styles.skillsTitle}
                           initial={{opacity: 0, x: 25}}
                           whileInView={{opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.5}}}
                           viewport={{once: false, amount: 0.5}}
                >Technical Skills
                </motion.h1>
                <motion.ul
                    className={styles.skillsList}
                    initial={{opacity: 0, x: 25}}
                    whileInView={{opacity: 1, x: 0, transition: {delay: 0.4, duration: 0.5}}}
                    viewport={{once: false, amount: 0.5}}
                >
                    {skillsData.map((skill, index) => (
                        <li key={index} className={styles.skillsIcon}>
                            <a className={styles.skillsAnchor} href={skill.link} target="_blank"
                               rel="noopener noreferrer">
                                <FontAwesomeIcon className={skill.className} icon={skill.icon}/>
                            </a>
                            <span className={styles.skillsHover}>{skill.name}</span>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
};

export default Skills;
