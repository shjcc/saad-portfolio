import styles from '../../styles/home.module.css';
import Navbar from '../../components/navbar.tsx';
import Hero from './hero.tsx'
import About from './about.tsx'
import Skills from './skills.tsx'
import Projects from './projects.tsx'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className={styles.homeContainer}>
                <Hero />
                <About />
                <Skills />
                <Projects />
            </div>
        </>
    );
}

export default Home;
