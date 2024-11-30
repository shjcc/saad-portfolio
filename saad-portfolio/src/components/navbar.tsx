import { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import '../styles/global.module.css';
import { motion } from 'framer-motion';


const NavBar = () => {
    const [activeSection, setActiveSection] = useState<string>('hero');

    useEffect(() => {
        const sections = document.querySelectorAll('div[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } //play around with this lol
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <motion.nav className={styles.navbar}
                    initial={{opacity: 0, x: -50 }}
                    whileInView={{opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 }}}
                    viewport={ {once: false, amount: .5}}
        >
            <motion.ul className={styles.navList}
                       initial={{opacity: 0, x: -50 }}
                       whileInView={{opacity: 1, x: 0, transition: { delay: 0.9, duration: 0.5 }}}
                       viewport={ {once: false, amount: .5}}
            >
                {['home', 'about', 'education', 'skills', 'projects'].map((section) => (
                    <li key={section} className={styles.navItem}>
                        <a
                            href={`#${section}`}
                            className={`${styles.navLink} ${
                                activeSection === section ? styles.active : ''
                            }`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    </li>
                ))}
            </motion.ul>
        </motion.nav>
    );
};

export default NavBar;
