import React, { useEffect, useState } from 'react';
import Typewriter from "typewriter-effect";

interface TypewriterProps {
    phrase: string;
    delay: number;
}

const TypeWriter: React.FC<TypewriterProps> = ({ phrase, delay }) => {

    const [showLine, setShowLine] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLine(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div>
            {showLine && (
                <Typewriter
                    options={{
                        strings: [phrase],
                        autoStart: true,
                        loop: true,
                        cursor: "|",
                        delay: delay,
                        deleteSpeed: 75,
                    }}
                />
            )}
        </div>
    );
};

export default TypeWriter;
