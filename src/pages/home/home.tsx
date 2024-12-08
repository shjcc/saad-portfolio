import styles from '../../styles/home.module.css';
import Navbar from '../../components/navbar.tsx';
import About from './about.tsx';
import Education from './education.tsx';
import Skills from './skills.tsx';
import Projects from './projects.tsx';
import Contact from './contact.tsx';


const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Navbar/>

            <div id="about">
                <About/>
            </div>
            <div id="skills">
                <Skills/>
            </div>
            <div id="education">
                <Education/>
            </div>
            <div id="projects">
                <Projects/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
        </div>
    );
};

export default Home;
