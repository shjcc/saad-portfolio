import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Typewriter from "typewriter-effect"
import styles from '../../styles/loading.module.css';

const Loading = () => {
    const navi = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navi('/home');
        }, 5000); //1 second = 1000 milliseconds
        return () => clearTimeout(timer);
    }, [navi]);

    return (
    <div className={styles.loading}>
    <Typewriter options={{
        strings: ['loading data and preparing saad hussain for employability'],
        autoStart:true,
        cursor:'/.',
    }} />
    </div>
    );
}

export default Loading