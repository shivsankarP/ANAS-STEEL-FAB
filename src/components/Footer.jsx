import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center">
                        <span className="font-ethnocentric text-sm md:text-xl tracking-wide text-navy">
                            ANAS <span className="text-cobalt">STEEL</span> FAB
                        </span>
                    </div>

                    <div className="flex gap-8 text-sm font-semibold text-slate-500">
                        <a href="#" className="hover:text-cobalt transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-cobalt transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-cobalt transition-colors">Cookie Settings</a>
                    </div>

                    <div className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} ANAS STEEL FAB. Built to Last.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
