import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiUser, FiInstagram, FiTwitter, FiLinkedin, FiFacebook, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import TextType from './TextType';

// Static Data defined outside component for stable references
const POPULAR_ITEMS = [
    { id: 1, title: 'Roofing Solutions', image: '/services/roofsolution.jpg' },
    { id: 2, title: 'Steel Frames', image: '/services/steelfreame.jpg' },
    { id: 3, title: 'Site Erection', image: '/services/erection.png' },
    { id: 4, title: 'Handrails', image: '/services/handrails.jpg' },
];

const TYPING_TEXTS = ["Soul & Strength", "Design Excellence", "Industrial Power"];

// Memoized TextType to ignore parent re-renders unless its own props change
const MemoizedTextType = memo(TextType);

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [popularIndex, setPopularIndex] = useState(0);

    // Using useCallback for stable event handlers
    const nextPopular = useCallback(() => {
        setPopularIndex((prev) => (prev + 1) % POPULAR_ITEMS.length);
    }, []);

    // 5-second automatic progression for the works carousel
    useEffect(() => {
        const interval = setInterval(nextPopular, 5000);
        return () => clearInterval(interval);
    }, [nextPopular]);

    // 5-second progression for the ambient background/indicator
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % 4);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center p-4 md:p-10 overflow-hidden bg-[#0a0c10]">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-70 brightness-[0.8]"
                >
                    <source src="/video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Ambient Background Glows */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cobalt/20 rounded-full blur-[120px]"
            ></motion.div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-periwinkle/10 rounded-full blur-[100px]"></div>

            {/* Main Glassmorphism Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-7xl min-h-[550px] lg:h-[75vh] glass rounded-[2.5rem] md:rounded-[3.5rem] border-[12px] border-white/40 shadow-2xl flex flex-col overflow-hidden"
            >

                <div className="flex-1 flex flex-col lg:row p-6 md:p-12 pt-0 z-10 relative lg:flex-row">
                    {/* Left Progress Sidebar */}
                    <div className="hidden lg:flex flex-col justify-center w-12 mr-8">
                        <div className="flex flex-col gap-6 items-center relative">
                            <div className="absolute top-0 bottom-0 w-px bg-white/10 left-1/2 -translate-x-1/2"></div>
                            {[0, 1, 2, 3].map((i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveSlide(i)}
                                    className="relative z-10 group"
                                >
                                    <div className={`transition-all duration-500 rounded-full border-2 ${activeSlide === i ? 'w-4 h-4 bg-periwinkle border-periwinkle shadow-[0_0_15px_rgba(204,204,255,0.6)]' : 'w-2 bg-white/30 border-transparent hover:border-white/60'}`} />
                                </button>
                            ))}
                        </div>
                    </div>


                    {/* Headline & CTA Section */}
                    <div className="flex-1 flex flex-col justify-center pt-16 lg:pt-0 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black text-white leading-[1.1] mb-6">
                                Steel With <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-periwinkle to-indigo-400 min-h-[1.2em] inline-block">
                                    <MemoizedTextType
                                        text={TYPING_TEXTS}
                                        typingSpeed={75}
                                        pauseDuration={5000}
                                        loop={true}
                                        showCursor={true}
                                        cursorCharacter="_"
                                    />
                                </span>
                            </h1>
                            <p className="text-white/60 text-base md:text-xl max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
                                Engineering excellence for Kerala's skyline. <span className="text-periwinkle uppercase font-bold tracking-[0.2em] text-sm">Built to Last</span>.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <a
                                    href="#projects"
                                    className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md inline-block"
                                >
                                    Our Projects
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Carousel Section */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-center mt-12 lg:mt-0 gap-6">

                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl border-8 border-white/20">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={popularIndex}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0"
                                >
                                    <img src={POPULAR_ITEMS[popularIndex].image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6">
                                        <p className="text-periwinkle text-xs font-bold tracking-widest uppercase mb-1">Infrastructure</p>
                                        <h4 className="text-white font-bold text-xl">{POPULAR_ITEMS[popularIndex].title}</h4>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="flex gap-2 justify-center lg:justify-start">
                            {POPULAR_ITEMS.map((_, i) => (
                                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${popularIndex === i ? 'w-8 bg-periwinkle' : 'w-2 bg-white/20'}`} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            </motion.div>
        </section>
    );
};

export default Hero;
