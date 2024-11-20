import '../src/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home.tsx";
import Loading from "./pages/loading/loading";
import Entry from "./pages/entry/entry";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Entry />}/>
      <Route path="/entry" element={<Entry />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;