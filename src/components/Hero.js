import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const { language } = useLanguage();

    /* ----------------  GSAP SETUP  ---------------- */
    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const hero    = self.selector('#home')[0];
            const bg      = self.selector('.hero-bg')[0];
            const content = contentRef.current;

            /* Parallax background */
            gsap.to(bg, {
                y: 100,
                ease: 'none',
                scrollTrigger: {
                    trigger: hero,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            /* Content fade + lift */
            gsap.to(content, {
                opacity: 0,
                y: -50,
                ease: 'none',
                scrollTrigger: {
                    trigger: hero,
                    start: 'top top',
                    end: 'bottom 30%',
                    scrub: true,
                },
            });
        }, heroRef);        // <— scope all selectors to this section

        /* Re-calculate positions if the language (content height) changes */
        ScrollTrigger.refresh();

        return () => ctx.revert();   // clean-up on unmount
    }, [language]);
    /* ---------------------------------------------- */

    const copy = {
        en: {
            title1: 'Elevate Your',
            title2: 'Digital Presence',
            description:
                'We craft exceptional digital experiences that drive growth and captivate audiences.',
            button1: 'Our Work',
            button2: 'Learn More',
            scroll: 'Scroll',
        },
        ar: {
            title1: 'ارفع مستوى',
            title2: 'تواجدك الرقمي',
            description: 'نصنع تجارب رقمية استثنائية تحقق النمو وتجذب الجماهير.',
            button1: 'أعمالنا',
            button2: 'تعلم المزيد',
            scroll: 'انتقل',
        },
    }[language];

    return (
        <section
            id="home"
            ref={heroRef}
            className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Parallax background */}
            <div className="hero-bg absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 will-change-transform" />

            {/* Floating blobs */}
            <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />

            {/* Main content */}
            <div className="container mx-auto px-4 z-10">
                <motion.div
                    ref={contentRef}
                    className="hero-content text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Headline */}
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="block">{copy.title1}</span>
                        <motion.span
                            className="text-primary relative inline-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {copy.title2}
                            {/* Underline */}
                            <motion.div
                                className="absolute -bottom-2 left-0 w-full h-1 bg-primary origin-left"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            />
                        </motion.span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-xl md:text-2xl text-dark/80 mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {copy.description}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className={`flex ${language === 'ar' ? 'flex-row-reverse' : ''} justify-center gap-4`}
                    >
                        <motion.button
                            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-dark transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {copy.button1}
                        </motion.button>
                        <motion.button
                            className="bg-white text-dark border border-dark/20 px-8 py-3 rounded-full hover:bg-light transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {copy.button2}
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <span className="text-dark/60 mb-2">{copy.scroll}</span>
                <motion.svg
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-6 text-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </motion.svg>
            </motion.div>
        </section>
    );
};

export default Hero;
