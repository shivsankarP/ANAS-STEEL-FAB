import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import Projects from '../components/Projects';

const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-[#f8f9fa]">
            <div className="container mx-auto px-6 mb-12">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-navy hover:text-cobalt font-bold transition-colors group"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>

            <div className="container mx-auto px-6 mb-16">
                <div>
                    <h1 className="text-4xl md:text-6xl font-black text-navy mb-4">Complete Portfolio</h1>
                    <p className="text-slate-600 text-lg max-w-2xl">
                        Explore our full range of structural steel projects, from industrial warehouses to precision fabrication works across Kerala.
                    </p>
                </div>
            </div>

            <Projects />

            <div className="py-20 text-center">
                <p className="text-slate-500 mb-6">Need a custom steel solution for your project?</p>
                <Link
                    to="/#contact"
                    className="px-10 py-4 bg-periwinkle text-navy font-bold rounded-xl hover:bg-navy hover:text-white transition-all shadow-xl"
                >
                    Start a Discussion
                </Link>
            </div>
        </div>
    );
};

export default ProjectsPage;
