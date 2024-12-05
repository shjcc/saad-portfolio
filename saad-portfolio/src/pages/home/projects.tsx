import Gif from '../../components/gif.tsx';
import styles from '../../styles/projects.module.css';
import GameGif from '../../assets/game.gif';
import MobileGif from '../../assets/mobile.gif';
import WebsiteGif from '../../assets/website.gif';

const Project = () => {
    return (
        <section id="projects" className={styles.projectsContainer}>
            <div className={styles.projectsContent}>
                <h1 className={styles.projectsTitle}>Projects</h1>
                <div className={styles.projectsGifList}>
                    <div className={styles.projectsGifBox}>

                        <div className={styles.projectsGame}>
                            <a className={styles.GameGif} href="https://github.com/shjcc/Dr." target="_blank">
                                <Gif src={GameGif} alt="Game Gif"></Gif>
                            </a>
                            <div className={styles.projectText}>
                                <h2>Game Project</h2>
                                <p>my video game lol</p>
                            </div>
                        </div>

                        <div className={styles.projectsMobile}>
                            <a className={styles.MobileGif} href="https://github.com/shjcc/FlowerStoreApplication"
                               target="_blank">
                                <Gif src={MobileGif} alt="Mobile Gif"></Gif>
                            </a>
                            <div className={styles.projectText}>
                                <h2>Mobile Application</h2>
                                <p>my mobile app lol</p>
                            </div>
                        </div>

                        <div className={styles.projectsWeb}>
                            <a className={styles.WebAppGif} href="https://github.com/shjcc/CMS" target="_blank">
                                <Gif src={WebsiteGif} alt="WebApp Gif"></Gif>
                            </a>
                            <div className={styles.projectText}>
                                <h2>Catering management system</h2>
                                <p>my web application lol</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;