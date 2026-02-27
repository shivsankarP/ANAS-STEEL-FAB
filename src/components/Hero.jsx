import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiUser, FiInstagram, FiTwitter, FiLinkedin, FiFacebook, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import TextType from './TextType';

// Static Data defined outside component for stable references
const POPULAR_ITEMS = [
    {
        id: 1,
        title: 'Waste Management & Recycling Plant',
        tag: 'Sustainability',
        tagline: 'Turning waste into worth — steel-engineered for a cleaner tomorrow.',
        image: '/services/waste.jpg'
    },
    {
        id: 2,
        title: 'Effluent Treatment Plant',
        tag: 'Water Treatment',
        tagline: 'Precision-built structures that protect our planet, drop by drop.',
        image: '/services/ETP.jpg'
    },
    {
        id: 3,
        title: 'Site Erection',
        tag: 'Structural',
        tagline: 'Rising steel, built right — safe, swift, and uncompromising.',
        image: '/services/erection.png'
    },
    {
        id: 4,
        title: 'Roofing Solutions',
        tag: 'Infrastructure',
        tagline: 'Engineered covers that shield every structure with strength.',
        image: '/services/roofsolution.jpg'
    },
];

const TYPING_TEXTS = ["Soul & Strength", "Design Excellence", "Industrial Power"];

// Memoized TextType to ignore parent re-renders unless its own props change
const MemoizedTextType = memo(TextType);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % POPULAR_ITEMS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen w-full flex items-start justify-center overflow-hidden bg-black font-sans">
            {/* Dynamic Animated Background */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={POPULAR_ITEMS[currentIndex].image}
                        alt="Background"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>
                {/* Fallback/Overlay sparks image for cinematic feel */}
                <div className="absolute inset-0 z-10 opacity-10 mix-blend-overlay">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-20"></div>
            </div>

            {/* Left Side: Text and Buttons - sits near top */}
            <div className="absolute top-[40vh] md:top-[50vh] left-0 z-30 w-full max-w-xl px-8">
                <div className="flex flex-col items-start">

                    {/* Dynamic Tag + Tagline from active slide */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.5 }}
                            className="mb-3 flex flex-col items-start gap-1.5"
                        >
                            <span className="inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full bg-periwinkle/80 text-white backdrop-blur-sm">
                                {POPULAR_ITEMS[currentIndex].tag}
                            </span>
                            <p className="text-white/60 text-xs md:text-base font-light italic leading-snug max-w-sm">
                                "{POPULAR_ITEMS[currentIndex].tagline}"
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 uppercase tracking-tight"
                    >
                        Steel With <br />
                        <span className="text-periwinkle">Precision</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:block text-white/80 text-lg md:text-xl max-w-lg mb-6 leading-relaxed font-light"
                    >
                        Engineering excellence for Kerala's skyline. We transform raw steel into landmarks with unmatched durability and design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center gap-4"
                    >
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 border border-white/40 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all">
                            Our Projects
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Right Side: Cards - absolutely positioned at the bottom */}
            <div className="absolute bottom-8 right-6 z-30 w-full lg:w-[58%] px-6 lg:px-0">
                <div className="flex gap-4 w-full">
                    {POPULAR_ITEMS.slice(0, 4).map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: index === currentIndex ? 1.08 : 1,
                                borderColor: index === currentIndex ? "rgba(204, 204, 255, 0.6)" : "rgba(255, 255, 255, 0.1)"
                            }}
                            transition={{ duration: 0.6 }}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex-1 aspect-[2/3.5] relative rounded-3xl overflow-hidden group border-4 shadow-2xl cursor-pointer transition-all duration-500 ${index === currentIndex ? 'z-50 shadow-periwinkle/20' : 'opacity-60 grayscale-[0.5] hover:opacity-100 hover:grayscale-0'}`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className={`w-full h-full object-cover transition-transform duration-1000 ${index === currentIndex ? 'scale-110' : 'group-hover:scale-110'}`}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                            <div className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                                <span className="inline-block px-2 py-0.5 mb-2 text-[10px] font-black uppercase tracking-widest rounded-full bg-periwinkle/80 text-white">
                                    {item.tag}
                                </span>
                                <p className="text-white font-black text-sm md:text-base leading-tight mb-1">
                                    {item.title}
                                </p>
                                <p className="text-white/70 text-[11px] leading-snug font-light italic">
                                    {item.tagline}
                                </p>
                            </div>
                            {index === currentIndex && (
                                <motion.div
                                    layoutId="activeBar"
                                    className="absolute top-0 left-0 right-0 h-1.5 bg-periwinkle"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default Hero;
