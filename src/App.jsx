import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import RecentlyDone from './pages/RecentlyDone';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';
import { useLocation } from 'react-router-dom';


const HashScrollHandler = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Delay to allow for page load and reveal animation
                const timer = setTimeout(() => {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 600);
                return () => clearTimeout(timer);
            }
        }
    }, [location]);

    return null;
};

function App() {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <Router>
            <HashScrollHandler />
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
                        <Route path="/recently-done" element={<RouteWrapper><RecentlyDone /></RouteWrapper>} />
                    </Routes>
                    <Footer />
                    <div className="w-full py-5 flex items-center justify-center" style={{ backgroundColor: '#050d1a' }}>
                        <a
                            href="https://www.instagram.com/intellex.web?igsh=MXc4Z2Uwd243OHpqdA%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 group cursor-pointer"
                        >
                            <span className="text-white font-bold tracking-widest uppercase text-sm group-hover:text-gray-300 transition-colors">Meet the Developers</span>
                            <FaInstagram className="text-white text-xl group-hover:text-gray-300 transition-colors" />
                        </a>
                    </div>
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
