import styles from '../../styles/home.module.css';
import Navbar from '../../components/navbar.tsx';
// import Hero from './hero.tsx';
import About from './about.tsx';
import Education from './education.tsx';
import Skills from './skills.tsx';
import Projects from './projects.tsx';


const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Navbar/>
            {/*<div id="hero">*/}
            {/*    <Hero/>*/}
            {/*</div>*/}
            <div id="about">
                <About/>
            </div>
            <div id="education">
                <Education/>
            </div>
            <div id="skills">
                <Skills/>
            </div>
            <div id="projects">
                <Projects/>
            </div>
        </div>
    );
};

export default Home;
