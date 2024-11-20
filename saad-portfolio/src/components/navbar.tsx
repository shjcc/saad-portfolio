import styles from '../styles/navbar.module.css';

const NavBar = () => {
    return (
      <nav className={styles.navbar}>
          <ul className={styles.navList}>
              <li className={styles.navItem}>
                  <a href="#hero" className={styles.navLink}>Home</a>
              </li>
              <li className={styles.navItem}>
                  <a href="#skills" className={styles.navLink}>Skills</a>
              </li>
              <li className={styles.navItem}>
                  <a href="#projects" className={styles.navLink}>Projects</a>
              </li>
          </ul>
      </nav>
    );
}

export default NavBar;
