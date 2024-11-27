import { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import '../styles/global.module.css';

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
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                {['hero', 'about', 'education', 'skills', 'projects'].map((section) => (
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
                <li className={styles.navResume}>Resume</li>
            </ul>
        </nav>
    );
};

export default NavBar;
