// src/components/Services.js
import React, { useState } from 'react'; // Added useState import here
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Services = () => {
    const [expandedService, setExpandedService] = useState(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const services = [
        {
            title: 'Corporate Branding & Design',
            description: 'Strategic brand identity development and visual storytelling',
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            details: [
                'Logo design & brand identity',
                'Marketing collateral',
                'Brand guidelines development',
                'Packaging design',
                'Environmental branding'
            ]
        },
        {
            title: 'Digital Marketing',
            description: 'Data-driven strategies to grow your online presence',
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            details: [
                'SEO optimization',
                'Social media management',
                'PPC advertising',
                'Content marketing',
                'Email marketing campaigns'
            ]
        },
        {
            title: 'Web Development',
            description: 'Custom digital experiences built for performance',
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            details: [
                'Responsive web design',
                'E-commerce solutions',
                'Web application development',
                'CMS implementation',
                'API integrations'
            ]
        },
        {
            title: 'Media Production',
            description: 'Compelling visual content that tells your story',
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            details: [
                'Video production',
                'Animation & motion graphics',
                'Photography',
                'Audio production',
                'Post-production editing'
            ]
        }
    ];

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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="services" className="py-20 bg-light">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-dark/80 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your business goals and objectives
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`neumorphic-card rounded-2xl overflow-hidden ${
                                expandedService === index ? 'md:col-span-2' : ''
                            }`}
                            variants={itemVariants}
                        >
                            <div
                                className="p-6 cursor-pointer flex items-start"
                                onClick={() => setExpandedService(expandedService === index ? null : index)}
                            >
                                <div className="mr-4 mt-1">{service.icon}</div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                        <motion.div
                                            animate={{ rotate: expandedService === index ? 180 : 0 }}
                                        >
                                            <svg className="w-5 h-5 text-dark/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                    <p className="text-dark/70">{service.description}</p>
                                </div>
                            </div>

                            {expandedService === index && (
                                <motion.div
                                    className="px-6 pb-6"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="pt-4 border-t border-dark/10">
                                        <h4 className="font-bold mb-3 text-dark/80">Service Details</h4>
                                        <ul className="grid grid-cols-2 gap-3">
                                            {service.details.map((detail, i) => (
                                                <li key={i} className="flex items-start">
                                                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-6 flex justify-end">
                                            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-dark transition-colors">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;