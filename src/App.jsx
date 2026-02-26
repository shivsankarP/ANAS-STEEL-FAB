import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';


function App() {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <Router>
            <div className="relative overflow-hidden bg-[#0a0c10]">
                {/* Loader handles its own logic and signals when to reveal content */}
                <Loader
                    onRevealStart={() => setIsRevealed(true)}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: isRevealed ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut"
                    }}
                >
                    <ScrollProgress />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<RouteWrapper><ProjectsPage /></RouteWrapper>} />
                    </Routes>
                    <Footer />
                </motion.div>
            </div>
        </Router>
    );
}

// Simple wrapper to ensure scroll to top on route change
const RouteWrapper = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return children;
};

export default App;
