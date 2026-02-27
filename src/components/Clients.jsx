import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding } from 'react-icons/fa';
import LogoLoop from './LogoLoop';

// ─── Add your clients here ───────────────────────────────────────────────────
// To use an image: { src: '/logos/client1.png', alt: 'Client Name' }
// To use an icon:  { node: <FaBuilding />, title: 'Client Name' }
const clients = [
    {
        node: (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <img src="/logos/greenwormlogo.png" alt="Green Worms" style={{ height: '90px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#00205B', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
                    Green Worms – Sustainable Waste Management Solutions
                </span>
            </div>
        ),
        title: 'Green Worms'
    },
    {
        node: (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <img src="/logos/kmctlogo.png" alt="KMCT Medical College" style={{ height: '90px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontSize: '11px', fontWeight: '600', color: '#00205B', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
                    KMCT Medical College
                </span>
            </div>
        ),
        title: 'KMCT Medical College'
    },
    {
        node: (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <img src="/logos/TClogo.jpg" alt="TC-ONE Realtors & Developers" style={{ height: '90px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontSize: '11px', fontWeight: '600', color: '#00205B', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
                    TC-ONE Realtors &amp; Developers
                </span>
            </div>
        ),
        title: 'TC-ONE Realtors & Developers'
    },
    {
        node: (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <img src="/logos/sowparnikalogo.png" alt="Sowparnika" style={{ height: '90px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontSize: '11px', fontWeight: '600', color: '#00205B', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
                    SOWPARNIKA – Delivering Happiness
                </span>
            </div>
        ),
        title: 'Sowparnika'
    },
    {
        node: (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <img src="/logos/esconlogo.png" alt="ESCON Elevators" style={{ height: '90px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontSize: '11px', fontWeight: '600', color: '#00205B', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
                    ESCON Elevators
                </span>
            </div>
        ),
        title: 'ESCON Elevators'
    },
    {
        node: (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <img src="/logos/hilitelogo.jpg" alt="HiLITE Realty" style={{ height: '90px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontSize: '11px', fontWeight: '600', color: '#00205B', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
                    HiLITE Realty
                </span>
            </div>
        ),
        title: 'HiLITE Realty'
    },
    {
        node: (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <img src="/logos/konelogo.png" alt="KONE Elevator and Escalator" style={{ height: '90px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontSize: '11px', fontWeight: '600', color: '#00205B', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
                    KONE Elevator and Escalator
                </span>
            </div>
        ),
        title: 'KONE Elevator and Escalator'
    },
];
// ─────────────────────────────────────────────────────────────────────────────

const Clients = () => {
    return (
        <section id="clients" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-cobalt font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Trusted By
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-navy"
                    >
                        Our Clients
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-4 mx-auto h-1 w-20 bg-cobalt rounded-full"
                    />
                </div>
            </div>

            {/* Animated Logo Ticker — full width, outside container for edge-to-edge */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{ height: '200px', position: 'relative', overflow: 'hidden' }}
            >
                <LogoLoop
                    logos={clients}
                    speed={80}
                    direction="left"
                    logoHeight={110}
                    gap={80}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#f8fafc"
                    ariaLabel="Our clients"
                />
            </motion.div>

            {/* Subtle divider */}
            <div className="container mx-auto px-6 mt-12">
                <p className="text-center text-slate-400 text-sm italic">
                    And many more valued partners across Kerala & beyond.
                </p>
            </div>
        </section>
    );
};

export default Clients;
