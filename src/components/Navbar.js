import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Translations
    const navItems = {
        en: ['Home', 'About', 'Services', 'Projects', 'Contact'],
        ar: ['الرئيسية', 'من نحن', 'خدماتنا', 'مشاريعنا', 'اتصل بنا']
    };

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'py-2 bg-white/90 backdrop-blur-sm shadow-sm' : 'py-4 bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <motion.div
                    className="text-xl font-bold text-primary"
                    whileHover={{ scale: 1.05 }}
                >
                    Lumina<span className="text-accent">.</span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navItems[language].map((item, index) => (
                        <motion.a
                            key={index}
                            href={`#${navItems.en[index].toLowerCase()}`}
                            className="text-dark hover:text-primary transition-colors"
                            whileHover={{ y: -2 }}
                        >
                            {item}
                        </motion.a>
                    ))}

                    <motion.button
                        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-dark transition-colors"
                        whileHover={{ scale: 1.05 }}
                    >
                        {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
                    </motion.button>

                    <motion.button
                        onClick={toggleLanguage}
                        className="text-dark hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                    >
                        {language === 'en' ? 'العربية' : 'English'}
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-dark"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <motion.div
                    className="md:hidden bg-white py-4 px-4 absolute w-full shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex flex-col space-y-4">
                        {navItems[language].map((item, index) => (
                            <a
                                key={index}
                                href={`#${navItems.en[index].toLowerCase()}`}
                                className="text-dark hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="bg-primary text-white px-4 py-2 rounded-lg">
                            {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
                        </button>
                        <button
                            onClick={toggleLanguage}
                            className="text-dark hover:text-primary transition-colors text-left"
                        >
                            {language === 'en' ? 'العربية' : 'English'}
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;