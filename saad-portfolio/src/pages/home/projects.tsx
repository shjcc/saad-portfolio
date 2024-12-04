import styles from '../../styles/projects.module.css';
import Gif from '../../components/gif.tsx';
import GameGif from '../../assets/game.gif';
import MobileGif from '../../assets/mobile.gif';
import WebsiteGif from '../../assets/website.gif';


const Project = () => {
    return (
        <section id="projects" className={styles.projectsContainer}>
            <div className={styles.projectsContent}>
                <h1 className={styles.projectsTitle}>Projects</h1>
                <p className={styles.projectsTitleText}>Have a look through some of my projects!</p>
                <div className={styles.projectsGifList}>
                    <div className={styles.ProjectGifBox}>
                    <a className={styles.GameGif} href="https://github.com/shjcc/Dr." target="_blank">
                        <Gif src={GameGif} alt="Game Gif"></Gif></a>
                    <a className={styles.MobileGif} href="https://github.com/shjcc/FlowerStoreApplication" target="_blank">
                        <Gif src={MobileGif} alt="Mobile Gif"></Gif> </a>
                    <a className={styles.WebAppGif} href="https://github.com/shjcc/CMS" target="_blank">
                        <Gif src={WebsiteGif} alt="WebApp Gif"></Gif> </a>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Project;