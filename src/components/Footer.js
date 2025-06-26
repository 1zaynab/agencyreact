// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <motion.div
                            className="text-2xl font-bold mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            Lumina<span className="text-primary">.</span>
                        </motion.div>
                        <p className="text-white/70 mb-6">
                            Creating exceptional digital experiences that drive growth and captivate audiences.
                        </p>
                        <div className="flex space-x-4">
                            {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                                <motion.a
                                    key={social}
                                    href="#"
                                    className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="w-5 h-5 bg-white/80 rounded-full"></div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {['Branding', 'Web Development', 'Digital Marketing', 'Media Production', 'Strategy'].map((service) => (
                                <li key={service}>
                                    <a href="#" className="text-white/70 hover:text-primary transition-colors">{service}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {['About Us', 'Careers', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-white/70 hover:text-primary transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>123 Design Street, Creative City</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>hello@lumina.design</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/50 mb-4 md:mb-0">
                        © {new Date().getFullYear()} Lumina Design Agency. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-white/50 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/50 hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="text-white/50 hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;