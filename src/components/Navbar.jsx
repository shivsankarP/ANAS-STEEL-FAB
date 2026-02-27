import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOverContact, setIsOverContact] = useState(false);
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsOverContact(entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: "-80px 0px -90% 0px"
            }
        );

        const contactSection = document.getElementById('contact');
        if (contactSection) observer.observe(contactSection);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (contactSection) observer.unobserve(contactSection);
        };
    }, []);

    const isHome = location.pathname === '/';
    const useWhiteText = (isHome && !isScrolled) || isOverContact;

    const navLinks = [
        { name: 'Home', href: isHome ? '#hero' : '/' },
        { name: 'About Us', href: isHome ? '#about' : '/#about' },
        { name: 'Services', href: isHome ? '#services' : '/#services' },
        { name: 'Projects', href: isHome ? '#projects' : '/#projects' },
        { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
    ];

    const scrollToSection = (e, href) => {
        if (isHome && href.startsWith('#')) {
            e.preventDefault();
            const element = document.getElementById(href.substring(1));
            if (element) {
                const offset = 80; // Offset for sticky navbar
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                setIsOpen(false);
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`fixed w-full z-50 transition-all duration-300 py-4`}
        >
            <div className="container mx-auto px-6">
                <div className="bg-white ml-0 md:mx-auto rounded-full px-4 md:px-8 py-2 md:py-1 flex items-center justify-between border border-slate-200 transition-all duration-300 shadow-lg w-[98%] md:w-full md:max-w-7xl">
                    <Link
                        to="/"
                        onClick={(e) => {
                            if (isHome) {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                        className="flex items-center gap-2 md:gap-3 flex-shrink-0"
                    >
                        <img src="/rm_logo.png" alt="ANAS STEEL FAB" className="h-12 md:h-[88px] w-auto transition-transform hover:scale-105" />
                        <span className="font-ethnocentric text-sm md:text-2xl tracking-wide flex items-center text-navy">
                            ANAS&nbsp;<span className="text-cobalt">STEEL</span>&nbsp;FAB
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-xs md:text-sm font-medium tracking-wide transition-colors duration-300 text-navy hover:text-cobalt"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 border-l border-slate-200 pl-4">
                            <button
                                onClick={(e) => scrollToSection(e, '#contact')}
                                className="bg-navy text-white hover:bg-cobalt px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-md"
                            >
                                Get a Quote
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg transition-colors duration-300 text-navy hover:bg-slate-100"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Content */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden mt-4"
                    >
                        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-lg font-bold text-navy hover:text-cobalt transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={(e) => scrollToSection(e, '#contact')}
                                className="bg-navy text-white px-8 py-4 rounded-2xl font-bold hover:bg-cobalt transition-all shadow-lg active:scale-95 text-center mt-4"
                            >
                                Get a Quote
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav >

    );
};

export default Navbar;
