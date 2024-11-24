import styles from '../../styles/projects.module.css';
import Gif from '../../components/gif.tsx'
import GameGif from '../../assets/game.gif'


const Project = () => {
    return (
        <section id="projects" className={styles.projectsContainer}>
            <div>
                <h1>Projects</h1>
                <p>take a look at my projects.</p>
                <div className={styles.projectsGameGif}>
                <Gif src={GameGif} alt="alt text"></Gif>
            </div>
            </div>
        </section>
    )
}

export default Project;