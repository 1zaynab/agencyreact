// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="about" className="py-20 bg-light">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <motion.div
                        className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <motion.div
                            className="neumorphic-card p-1 rounded-2xl inline-block"
                            variants={itemVariants}
                        >
                            <div className="bg-white rounded-2xl overflow-hidden">
                                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2"
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-6"
                            variants={itemVariants}
                        >
                            Crafting Digital Excellence
                        </motion.h2>

                        <motion.p
                            className="text-dark/80 mb-6"
                            variants={itemVariants}
                        >
                            Founded in 2015, our agency has been at the forefront of digital innovation.
                            We blend creativity with technical expertise to deliver solutions that make
                            a real impact.
                        </motion.p>

                        <motion.p
                            className="text-dark/80 mb-8"
                            variants={itemVariants}
                        >
                            Our team of designers, developers, and strategists work collaboratively
                            to transform your vision into reality. We're passionate about creating
                            experiences that engage and inspire.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-2 gap-6"
                            variants={itemVariants}
                        >
                            {[
                                { value: '200+', label: 'Projects Delivered' },
                                { value: '98%', label: 'Client Satisfaction' },
                                { value: '50+', label: 'Team Members' },
                                { value: '15', label: 'Industry Awards' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="neumorphic-card p-6 rounded-2xl"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-dark/70">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;