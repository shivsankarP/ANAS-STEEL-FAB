import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cobalt/10 skew-x-12 translate-x-20"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-periwinkle font-bold tracking-widest uppercase text-sm mb-4"
                        >
                            Get in Touch
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold mb-8"
                        >
                            Let’s Build Something <br />
                            <span className="text-periwinkle">Remarkable</span> Together.
                        </motion.h3>

                        <p className="text-slate-400 text-lg mb-12 max-w-md">
                            Ready to start your next heavy structure project? Our team is available 24/7 for support and sales inquiries.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-periwinkle text-xl border border-white/10">
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Main Office</p>
                                    <p className="text-xl font-bold">+91 97461 02236</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-periwinkle text-xl border border-white/10">
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Contact Person</p>
                                    <p className="text-xl font-bold">+91 98464 02236</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-periwinkle text-xl border border-white/10">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Email Us</p>
                                    <p className="text-xl font-bold">anasfab23@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-periwinkle text-xl border border-white/10">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Visit Us</p>
                                    <p className="text-xl font-bold">Chelembra, Malappuram, <br className="hidden sm:block" /> Kerala, 672634</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-12">
                                <a
                                    href="https://wa.me/919746102236"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-900/40"
                                >
                                    <FaWhatsapp className="text-2xl" />
                                    <span>Chat with us on WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-10 shadow-2xl"
                        >
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-slate-700 text-sm font-bold mb-2">Name</label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-navy focus:outline-none focus:ring-2 focus:ring-cobalt/20" placeholder="Your Name" required />
                                    </div>
                                    <div>
                                        <label className="block text-slate-700 text-sm font-bold mb-2">Email</label>
                                        <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-navy focus:outline-none focus:ring-2 focus:ring-cobalt/20" placeholder="name@email.com" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-slate-700 text-sm font-bold mb-2">Service</label>
                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-navy focus:outline-none focus:ring-2 focus:ring-cobalt/20">
                                        <option>Industrial Fabrication</option>
                                        <option>Bridge Works</option>
                                        <option>Site Erection</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-slate-700 text-sm font-bold mb-2">Message</label>
                                    <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-navy h-32 focus:outline-none focus:ring-2 focus:ring-cobalt/20" placeholder="Tell us about your project..." required></textarea>
                                </div>
                                <button type="submit" className="w-full bg-cobalt hover:bg-navy text-white font-bold py-5 rounded-xl shadow-xl shadow-cobalt/20 transition-all transform hover:-translate-y-1">
                                    Send Inquiry Now
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-24 h-96 w-full rounded-3xl overflow-hidden glass-dark relative group">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <FaMapMarkerAlt className="text-cobalt text-5xl mx-auto mb-4" />
                            <p className="text-slate-400">Headquarters Location</p>
                            <p className="text-white font-bold">Chelembra, Malappuram, Kerala</p>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31317.073403867605!2d75.87532395521443!3d11.140417983633633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba651918365697d%3A0x6a15bd7f0e75a907!2sChelembra%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709148400000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, opacity: 0.3 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="group-hover:opacity-60 transition-opacity"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
