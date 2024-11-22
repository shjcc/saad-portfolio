import styles from '../../styles/projects.module.css';
import Gif from '../../components/gif.tsx'


const Project = () => {
    return (
        <section id="projects" className={styles.projectsContainer}>
            <div>
                <h1>Projects</h1>
                <p>take a look at my projects.</p>
                <Gif src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1263.gif" alt="alt text"></Gif>
            </div>
        </section>
    )
}

export default Project;