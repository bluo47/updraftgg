import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Matches from './components/Matches'; // Assuming Matches is similar to Search
import Settings from './components/Settings'; // Assuming you have a Settings component

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/matches" element={<Matches />} /> {/* Assuming Matches is similar to Search */}
                    <Route path="/settings" element={<Settings />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;