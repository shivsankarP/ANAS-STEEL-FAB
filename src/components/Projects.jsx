import React from 'react';
import { motion } from 'framer-motion';

const projectItems = [
    {
        title: 'CANOPY',
        location: 'Commercial Center',
        country: 'Kerala, India',
        image: '/projects/canopy.jpg'
    },
    {
        title: 'ROOF TRUSS WORKS',
        location: 'Storage Facility',
        country: 'Kochi, India',
        image: '/projects/rooftruss.jpg'
    },
    {
        title: 'PUFF SHEET WORK',
        location: 'Cold Storage Lab',
        country: 'Calicut, India',
        image: '/projects/puffsheet.jpg'
    },
    {
        title: 'STEEL STRUCTURAL WORK',
        location: 'Business Park',
        country: 'Trivandrum, India',
        image: '/projects/steelstructure.jpg'
    },
    {
        title: 'PERGOLAS',
        location: 'Leisure Club',
        country: 'Munnar, India',
        image: '/projects/pergolas1.jpg'
    },
    {
        title: 'MEZZANINE FLOORS',
        location: 'Distribution Hub',
        country: 'Palakkad, India',
        image: '/projects/mezzanine.jpg'
    },
    {
        title: 'CURVED ROOFINGS',
        location: 'Sports Arena',
        country: 'Wayanad, India',
        image: '/projects/curvedroof.jpg'
    },
    {
        title: 'GATES',
        location: 'Luxury Estate',
        country: 'Kottayam, India',
        image: '/projects/gates.jpg'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-navy tracking-tight"
                    >
                        We Do....
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {projectItems.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group relative bg-white/40 backdrop-blur-md rounded-[24px] border border-white/20 shadow-lg overflow-hidden cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.33,1,0.68,1)] hover:-translate-y-1.5 hover:shadow-xl"
                        >
                            {/* Top: Image Section */}
                            <div className="relative aspect-[16/10] overflow-hidden m-3 rounded-[18px]">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                            </div>

                            {/* Bottom: Info Section */}
                            <div className="px-5 pb-5">
                                <div className="overflow-hidden mb-1">
                                    <h3 className="text-base font-bold text-navy mb-0.5 group-hover:text-cobalt transition-colors duration-300 truncate">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
