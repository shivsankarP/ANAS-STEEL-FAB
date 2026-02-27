import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import Contact from '../components/Contact';

const Home = () => {
    useEffect(() => {
        // Reveal on scroll logic
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <Hero />
            <div className="reveal-on-scroll">
                <About />
            </div>
            <div className="reveal-on-scroll">
                <Services />
            </div>
            <div className="reveal-on-scroll">
                <Projects />
            </div>
            <div className="reveal-on-scroll">
                <Clients />
            </div>
            <div className="reveal-on-scroll">
                <Contact />
            </div>
        </main>
    );
};

export default Home;
