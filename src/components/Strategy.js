// src/components/Strategy.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Strategy = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const strategies = [
        {
            title: 'Business Strategy',
            description: 'Comprehensive growth planning and market positioning',
            icon: '📈'
        },
        {
            title: 'Team Building',
            description: 'Building high-performance teams and leadership development',
            icon: '👥'
        },
        {
            title: 'Financial Planning',
            description: 'Financial modeling, forecasting, and investment strategies',
            icon: '💰'
        },
        {
            title: 'Operational Efficiency',
            description: 'Process optimization and performance improvement',
            icon: '⚙️'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Consulting</h2>
                    <p className="text-dark/80 max-w-2xl mx-auto">
                        Expert guidance to navigate business challenges and unlock growth potential
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {strategies.map((strategy, index) => (
                        <motion.div
                            key={index}
                            className="neumorphic-card p-6 rounded-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="flex items-start">
                                <div className="text-3xl mr-4">{strategy.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
                                    <p className="text-dark/70">{strategy.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-2/3 mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold mb-3">Ready to transform your business?</h3>
                            <p>Schedule a free consultation with our strategy experts today.</p>
                        </div>
                        <div className="md:w-1/3 text-center md:text-right">
                            <button className="bg-white text-dark px-8 py-3 rounded-full hover:bg-light transition-colors font-bold">
                                Book a Call
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Strategy;