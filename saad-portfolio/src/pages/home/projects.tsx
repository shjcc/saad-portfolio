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
                <h2>Click on any GIF to check out my GitHub repository!</h2>
                <div className={styles.projectsGifList}>

                    <div className={styles.projectRow}>
                        <a className={`${styles.projectGifLink} ${styles.gameGif}`} href="https://github.com/shjcc/Dr."
                           target="_blank">
                            <Gif src={GameGif} alt="Game Gif"/>
                        </a>
                        <div className={styles.projectText}>
                            <h2>Python 2D Game</h2>
                            <p>
                                <strong>Language:</strong> Python, PyGame
                                <br/>
                                <strong>Technologies used:</strong> Github/Git, VsCode
                                <br/>
                                "Doctor" is a 2D platform game built entirely using Python and PyGame. The game uses
                                gravity-based
                                mathematics, with the speed increasing the longer the player survives. Most of the
                                assets were hand-made
                                using a sprite paint application.
                            </p>
                        </div>
                    </div>

                    <div className={styles.projectRow}>
                        <a className={styles.mobileGif}
                           href="https://github.com/shjcc/FlowerStoreApplication" target="_blank">
                            <Gif src={MobileGif} alt="Mobile Gif"/>
                        </a>
                        <div className={styles.projectTextMobile}>
                            <h2>Flower Mobile App</h2>
                            <p>
                                <strong>Language:</strong> Java, Kotlin
                                <br/>
                                <strong>Technologies used:</strong> Github/Git, Trello, Jira, Android Studio
                                <br/>
                                A mobile application to locate nearby flower stores. The app allows users to search for pre-defined flower
                                stores, add or remove flower stores, and rate flower stores based on their available features.
                                It includes components such as geolocation, store details, and user-friendly navigation. Built within Android Studio and improved using testing/
                                user feedback.
                            </p>
                        </div>
                    </div>

                    <div className={styles.projectRow}>
                        <a className={`${styles.projectGifLink} ${styles.webGif}`} href="https://github.com/shjcc/CMS"
                           target="_blank">
                            <Gif src={WebsiteGif} alt="WebApp Gif"/>
                        </a>
                        <div className={styles.projectText}>
                            <h2>Catering Management System</h2>
                            <p>
                                <strong>Language:</strong> MySQL, Node.js, React.js, JavaScript
                                <br/>
                                <strong>Technologies used:</strong> Github/Git, Trello, Jira, Slack, VsCode
                                <br/>
                                A full-stack web-based system for a catering management system. Included features are Inventory
                                adding/tracking,
                                production scheduling, customer report generation, order processing along with MySQL
                                CRUD elements. Fully deployed and hosted using Render and Microsoft Azure along with CI/CD.
                                This project was created within 2 months as part of a school competition for our local
                                council.
                            </p>
                        </div>

                </div>
            </div>
        </div>
</section>
)
    ;
};

export default Project;
