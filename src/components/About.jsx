import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-[45%]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-video relative group">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover scale-110 blur-sm opacity-50 brightness-[0.8] transition-opacity duration-1000"
                                >
                                    <source src="/video.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-transparent to-navy/40 pointer-events-none"></div>
                                {/* RM Logo Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <motion.img
                                        src="/rm_logo.png"
                                        alt="RM Logo"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="w-56 md:w-96 h-auto drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-20 -right-10 bg-navy p-10 rounded-2xl shadow-xl hidden md:block">
                                <span className="text-5xl font-bold text-periwinkle block">15+</span>
                                <span className="text-white text-sm font-semibold uppercase tracking-widest">Years of Excellence</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-[55%]">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-cobalt font-bold tracking-widest uppercase text-sm mb-4">Who We Are</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-navy mb-6">Building Kerala’s Future Infrastructure</h3>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                ANAS STEEL FAB is a premier name in heavy steel fabrication and erection. Based in Kerala, we specialize in delivering high-precision structural solutions that drive the region's industrial growth.
                            </p>
                            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                                From intricate bridge components to massive warehouse frameworks, our commitment to quality and "Built to Last" philosophy ensures that every project we touch stands as a testament to engineering rigour.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-10">
                                <div>
                                    <h4 className="font-bold text-navy text-xl mb-2">Modern Facility</h4>
                                    <p className="text-slate-500 text-sm">State-of-the-art fabrication unit in the heart of Kerala.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy text-xl mb-2">Expert Team</h4>
                                    <p className="text-slate-500 text-sm">Certified engineers and skilled fabrication specialists.</p>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
