import styles from '../../styles/projects.module.css';
import Gif from '../../components/gif.tsx';
import GameGif from '../../assets/game.gif';
import MobileGif from '../../assets/mobile.gif';
import WebsiteGif from '../../assets/website.gif';

// need to update class names for specific tags lie <p>
const Project = () => {
    return (
        <section id="projects" className={styles.projectsContainer}>
            <div className={styles.projectsContent}>
                <h1>Projects</h1>
                <p>take a look at my projects.</p>
                <div className={styles.projectsGameGif}>
                    <a href="https://github.com/shjcc/Dr." target="_blank">
                        <Gif src={GameGif} alt="Game Gif"></Gif>
                    </a>
                </div>
                <div className={styles.projectsMobileGif}>
                <a href="https://github.com/shjcc/FlowerStoreApplication" target="_blank">
                        <Gif src={MobileGif} alt="Mobile Gif"></Gif>
                    </a>
                </div>
                <div className={styles.projectsWebsiteGif}>
                <a href="https://github.com/shjcc/CMS" target="_blank">
                    <Gif src={WebsiteGif} alt="WebApp Gif"></Gif>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Project;