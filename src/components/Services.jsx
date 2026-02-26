import React from 'react';
import { motion } from 'framer-motion';
import { FaIndustry, FaProjectDiagram, FaHardHat, FaArchway } from 'react-icons/fa';

const services = [
    {
        title: 'Industrial Fabrication',
        desc: 'High-quality steel fabrication for factories, warehouses, and industrial plants with precision engineering.',
        icon: <FaIndustry />,
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800'
    },
    {
        title: 'Roofing Solutions',
        desc: 'Advanced roofing and cladding systems for industrial, commercial, and residential structures using high-grade steel.',
        icon: <FaProjectDiagram />,
        image: '/services/roofsolution.jpg'
    },
    {
        title: 'Site Erection',
        desc: 'Professional on-site erection services for complex steel structures following strict safety standards.',
        icon: <FaHardHat />,
        image: '/services/erection.png'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-cobalt font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Our Core Expertise
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-navy"
                    >
                        Specialized Solutions
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-navy/20 group-hover:bg-cobalt/20 transition-colors"></div>
                                <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-cobalt text-2xl shadow-lg">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="p-10">
                                <h4 className="text-2xl font-bold text-navy mb-4">{service.title}</h4>
                                <p className="text-slate-500 leading-relaxed mb-6">
                                    {service.desc}
                                </p>
                                <div className="h-1 w-12 bg-periwinkle group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
