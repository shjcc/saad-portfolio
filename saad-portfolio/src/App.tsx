import { useRef } from 'react';
import Entry from './pages/entry/entry';
import Home from './pages/home/home';

const App = () => {
    const homeRef = useRef<HTMLDivElement>(null);

    const handleScrollToHome = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Entry onButtonClick={handleScrollToHome} />
            <div ref={homeRef}>
                <Home />
            </div>
        </div>
    );
};

export default App;
