// src/components/Projects.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'branding', label: 'Branding' },
        { id: 'web', label: 'Web Development' },
        { id: 'marketing', label: 'Marketing' },
        { id: 'strategy', label: 'Strategy' }
    ];

    const projects = [
        { id: 1, category: 'branding', title: 'EcoFashion Brand Identity', description: 'Sustainable clothing brand launch' },
        { id: 2, category: 'web', title: 'Fintech Dashboard', description: 'Financial analytics platform' },
        { id: 3, category: 'marketing', title: 'Healthcare Campaign', description: 'Patient engagement initiative' },
        { id: 4, category: 'strategy', title: 'Retail Transformation', description: 'Omnichannel retail strategy' },
        { id: 5, category: 'branding', title: 'Tech Startup Rebrand', description: 'Modern identity for SaaS platform' },
        { id: 6, category: 'web', title: 'E-commerce Platform', description: 'Custom shopping experience' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="py-20 bg-light">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
                    <p className="text-dark/80 max-w-2xl mx-auto">
                        Explore our portfolio of successful client engagements and creative solutions
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map(filter => (
                        <motion.button
                            key={filter.id}
                            className={`px-5 py-2 rounded-full transition-colors ${
                                activeFilter === filter.id
                                    ? 'bg-primary text-white'
                                    : 'bg-white text-dark hover:bg-light'
                            }`}
                            onClick={() => setActiveFilter(filter.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {filter.label}
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate={inView ? "visible" : {}}
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        delay: index * 0.1
                                    }
                                }
                            }}
                        >
                            <div className="neumorphic-card overflow-hidden rounded-2xl h-full flex flex-col">
                                <div className="relative overflow-hidden">
                                    <div className="bg-gray-200 border-2 border-dashed rounded-t-2xl w-full h-48" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <motion.button
                                            className="bg-white text-dark rounded-full px-4 py-2"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            View Case Study
                                        </motion.button>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <span className="text-xs bg-light px-2 py-1 rounded-full capitalize">
                      {project.category}
                    </span>
                                    </div>
                                    <p className="text-dark/70 mb-4 flex-1">{project.description}</p>
                                    <button className="text-primary font-medium flex items-center">
                                        Learn More
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-dark transition-colors font-medium">
                        View All Projects
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;