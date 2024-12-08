import {useState, useEffect} from 'react';
import styles from './navbar.module.css';
import '../styles/global.module.css';


const NavBar = () => {
    const [activeSection, setActiveSection] = useState<string>('hero');

    useEffect(() => {
        const sections = document.querySelectorAll('div[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log(entry.target.id, entry.isIntersecting);
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {threshold: 0.4} //play around with this lol
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                {['about', 'skills', 'education', 'projects', 'contact'].map((section) => (
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
            </ul>
        </nav>
    );
};

export default NavBar;
