import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiX, FiMaximize2 } from 'react-icons/fi';

// This array will be where you add your new project images
const galleryImages = [
    { id: 10, url: '/works/w1.jpeg', title: 'Industrial Site Work' },
    { id: 11, url: '/works/w3.jpeg', title: 'Fabrication Progress' },
];

const RecentlyDone = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-40 min-h-screen bg-white text-navy">
            <div className="container mx-auto px-6 mb-12">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-navy hover:text-cobalt font-bold transition-all group"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>

            <div className="container mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-navy">Recently Done....</h1>
                    <p className="text-slate-500 text-lg max-w-2xl font-light italic">
                        A visual chronicle of our engineering precision and structural milestones.
                    </p>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 pb-24">
                {galleryImages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
                        {[...galleryImages].reverse().map((img, index) => (
                            <motion.div
                                key={img.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedImg(img)}
                                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md border border-slate-100"
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                    <div className="text-center p-4">
                                        <FiMaximize2 className="text-3xl mx-auto mb-2 text-white" />
                                        <p className="font-bold uppercase tracking-widest text-sm text-white">{img.title}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-32 text-center border-2 border-dashed border-slate-100 bg-slate-50 rounded-3xl"
                    >
                        <div className="max-w-md mx-auto">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg border border-slate-50">
                                🏗️
                            </div>
                            <h2 className="text-2xl font-bold mb-3 text-navy">Gallery Empty</h2>
                            <p className="text-slate-500">We are currently curating the latest project captures. New visuals will be uploaded here shortly.</p>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Lightbox for full-view */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                    >
                        <button
                            className="absolute top-8 right-8 text-navy text-4xl hover:text-cobalt transition-colors"
                            onClick={() => setSelectedImg(null)}
                        >
                            <FiX />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            src={selectedImg.url}
                            alt={selectedImg.title}
                            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-2xl border-4 border-white"
                        />
                        <div className="absolute bottom-10 left-0 right-0 text-center">
                            <p className="text-navy font-black uppercase tracking-[0.3em] text-lg">
                                {selectedImg.title}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RecentlyDone;
