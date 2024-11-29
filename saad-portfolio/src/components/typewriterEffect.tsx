import React, { useEffect, useState } from 'react';
import Typewriter from "typewriter-effect";
import styles from './typewriter.module.css'

interface TypewriterProps {
    phrase: string;
    delay: number;
}

const TypewriterEffect: React.FC<TypewriterProps> = ({ phrase, delay }) => {

    const [showLine, setShowLine] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLine(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={styles.typewriterEffect}>
            {showLine && (
                <Typewriter
                    options={{
                        strings: [phrase],
                        autoStart: true,
                        loop: false,
                        cursor: "|",
                        delay: 10, //current was 80
                        deleteSpeed: 999999,
                    }}
                />
            )}
        </div>
    );
};

export default TypewriterEffect;
