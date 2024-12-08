import Entry from './pages/entry/entry.tsx';
import Home from './pages/home/home.tsx';
import Footer from './pages/home/footer.tsx';

const App = () => {

    return (
        <div>
            <Entry />
            <div>
            <Home />
                <Footer />
            </div>
        </div>
    );
};

export default App;
