import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

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

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`fixed w-full z-50 transition-all duration-300 py-4`}
        >
            <div className="container mx-auto px-6">
                <div className={`glass ml-0 md:mx-auto rounded-full px-4 md:px-8 py-2 md:py-1 flex items-center justify-between border border-white/20 transition-all duration-300 shadow-lg 
                    ${useWhiteText
                        ? (isOverContact ? 'bg-slate-900/40 backdrop-blur-xl border-white/10' : 'bg-white/10 backdrop-blur-md')
                        : 'bg-white/90 md:bg-white/80 backdrop-blur-md shadow-xl'
                    } w-[98%] md:w-full md:max-w-7xl`}>
                    <Link
                        to="/"
                        onClick={(e) => {
                            if (isHome) {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                        className="flex items-center gap-2 md:gap-4"
                    >
                        <img src="/rm_logo.png" alt="ANAS STEEL FAB" className="h-10 md:h-[74px] w-auto transition-transform hover:scale-105" />
                        <span className={`text-lg md:text-2xl font-bold tracking-tighter flex items-center transition-colors duration-300 ${useWhiteText ? 'text-white' : 'text-navy'}`}>
                            ANAS&nbsp;<span className={useWhiteText ? 'text-periwinkle' : 'text-cobalt'}>STEEL</span>&nbsp;FAB
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            link.href.startsWith('#') || (link.href.startsWith('/#') && !isHome) ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-semibold transition-colors duration-300 ${useWhiteText ? 'text-white/90 hover:text-white' : 'text-navy hover:text-cobalt'}`}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-sm font-semibold transition-colors duration-300 ${useWhiteText ? 'text-white/90 hover:text-white' : 'text-navy hover:text-cobalt'}`}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                        <button
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                                else window.location.href = '/#contact';
                            }}
                            className={`${useWhiteText ? 'bg-white text-navy hover:bg-periwinkle' : 'bg-navy text-white hover:bg-cobalt'} px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-md`}
                        >
                            Get a Quote
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg transition-colors duration-300 ${useWhiteText ? 'text-white hover:bg-white/10' : 'text-navy hover:bg-slate-100'}`}
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
                                link.href.startsWith('#') || (link.href.startsWith('/#') && !isHome) ? (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-bold text-navy hover:text-cobalt transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-bold text-navy hover:text-cobalt transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                                    else window.location.href = '/#contact';
                                }}
                                className="bg-navy text-white px-8 py-4 rounded-2xl text-center font-bold shadow-lg active:scale-95 transition-all"
                            >
                                Get a Quote
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>

    );
};

export default Navbar;
