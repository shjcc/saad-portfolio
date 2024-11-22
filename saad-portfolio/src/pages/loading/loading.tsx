import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import styles from '../../styles/loading.module.css';

const Loading = () => {
    const navi = useNavigate();
    const [showSecondLine, setShowSecondLine] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            navi('/home');
        }, 8000); // 1 second = 1000 milliseconds
        return () => clearTimeout(timer);
    }, [navi]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondLine(true);
        }, 4000);
        return() => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.loadingContainer}>
            <div className={styles.lineOne}>
                <Typewriter
                    options={{
                        strings: ["this is the first line of my page"],
                        autoStart: true,
                        loop: false,
                        cursor: "|",
                        delay: 75,
                        deleteSpeed:99999999,
                    }}
                />
            </div>
            {showSecondLine && (
                <div className={styles.lineTwo}>
                    <Typewriter
                        options={{
                            strings: ["this is the second line of my page"],
                            autoStart: true,
                            loop: false,
                            cursor: "|",
                            delay: 75,
                            deleteSpeed:99999999,
                        }}
                    />
                </div>
            )}
        </div>

    );
}

export default Loading;
