import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete, onRevealStart }) => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [targetPos, setTargetPos] = useState({ x: 0, y: 0, scale: 0.15 });

    useEffect(() => {
        const calculateTarget = () => {
            const isMobile = window.innerWidth < 768;
            const containerWidth = Math.min(window.innerWidth * 0.92, 1280);
            const sideMargin = (window.innerWidth - containerWidth) / 2;

            // Adjust X target based on navbar layout
            // On desktop, the logo is inside a padded container
            const targetX = isMobile
                ? - (window.innerWidth / 2) + 80
                : - (window.innerWidth / 2) + sideMargin + 110;

            // Adjust Y target (navbar height + padding)
            const targetY = isMobile
                ? - (window.innerHeight / 2) + 70
                : - (window.innerHeight / 2) + 80;

            setTargetPos({
                x: targetX,
                y: targetY,
                scale: isMobile ? 0.25 : 0.18
            });
        };

        calculateTarget();
        window.addEventListener('resize', calculateTarget);

        const revealTimer = setTimeout(() => {
            if (onRevealStart) onRevealStart();
        }, 400);

        const completeTimer = setTimeout(() => {
            setIsAnimating(false);
            if (onComplete) onComplete();
        }, 800);

        return () => {
            window.removeEventListener('resize', calculateTarget);
            clearTimeout(revealTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete, onRevealStart]);

    return (
        <AnimatePresence>
            {isAnimating && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "circIn" }}
                    className="fixed inset-0 z-[100] bg-[#0a0c10] flex items-center justify-center overflow-hidden"
                >
                    {/* Animated Cinematic Logo */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <motion.div
                                initial={{ scale: 0.7, opacity: 0, filter: "blur(20px)" }}
                                animate={{
                                    scale: [0.7, 1, targetPos.scale],
                                    opacity: [0, 1, 1],
                                    filter: ["blur(20px)", "blur(0px)", "blur(0px)"],
                                    x: [0, 0, targetPos.x],
                                    y: [0, 0, targetPos.y]
                                }}
                                transition={{
                                    duration: 0.8,
                                    times: [0, 0.3, 1],
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="relative z-20"
                            >
                                {/* Main Logo Container */}
                                <img
                                    src="/rm_logo.png"
                                    alt="Logo"
                                    className="w-64 md:w-[450px] h-auto drop-shadow-[0_0_50px_rgba(204,204,255,0.4)]"
                                />

                                {/* Inner Glow Layer */}
                                <motion.div
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-gradient-to-tr from-cobalt/40 via-transparent to-periwinkle/30 blur-[40px] rounded-full -z-10"
                                />
                            </motion.div>

                            {/* Company Name Text - Disappears as movement starts */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: [0, 1, 1, 0],
                                    y: [20, 0, 0, 0]
                                }}
                                transition={{
                                    duration: 0.8,
                                    times: [0, 0.2, 0.35, 0.45], // Fade in then out slightly after logo starts moving
                                    ease: "easeInOut"
                                }}
                                className="mt-8 text-3xl md:text-5xl font-black tracking-tighter text-white flex items-center gap-3 drop-shadow-xl"
                            >
                                <span>ANAS</span>
                                <span className="text-periwinkle">STEEL</span>
                                <span>FAB</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Industrial Backdrop: Subtle Grid & Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
