// src/components/PhoneMockup.js
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext'; // Import the actual hook

const PhoneMockup = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);
    const { language } = useLanguage(); // Use the actual hook

    // Translations for the PhoneMockup section
    const phoneMockupContent = {
        en: {
            approachTitle: "Our Approach",
            approachDescription: "We combine strategic thinking with creative execution to deliver solutions that drive real business results.",
            whyChooseUsTitle: "Why Choose Us",
            visionTitle: 'Shaping the Future',
            visionDescription: 'We envision a world where digital experiences are intuitive, accessible, and meaningful. Our goal is to lead the industry in creating solutions that elevate human interaction with technology.',
            missionTitle: 'Delivering Excellence',
            missionDescription: 'Our mission is to empower businesses with transformative digital solutions. Through innovation, collaboration, and exceptional craftsmanship, we help our clients achieve their goals.',
            teamTitle: 'Collaborative Experts',
            teamDescription: 'Our diverse team brings together unique perspectives and specialized skills. United by our passion for excellence, we collaborate to create exceptional digital experiences.',
            chooseUsItems: [
                'Industry-leading expertise',
                'Proven track record of success',
                'Collaborative approach',
                'Cutting-edge technology',
                'User-centered design philosophy',
                'Transparent communication'
            ]
        },
        ar: {
            approachTitle: "نهجنا",
            approachDescription: "نحن نجمع بين التفكير الاستراتيجي والتنفيذ الإبداعي لتقديم حلول تدفع نتائج أعمال حقيقية.",
            whyChooseUsTitle: "لماذا تختارنا",
            visionTitle: 'تشكيل المستقبل',
            visionDescription: 'نتصور عالماً تكون فيه التجارب الرقمية سهلة الاستخدام، سهلة الوصول، وذات مغزى. هدفنا هو قيادة الصناعة في إنشاء حلول ترتقي بالتفاعل البشري مع التكنولوجيا.',
            missionTitle: 'تقديم التميز',
            missionDescription: 'مهمتنا هي تمكين الشركات بحلول رقمية تحويلية. من خلال الابتكار والتعاون والحرفية الاستثنائية، نساعد عملائنا على تحقيق أهدافهم.',
            teamTitle: 'خبراء متعاونون',
            teamDescription: 'يجمع فريقنا المتنوع بين وجهات نظر فريدة ومهارات متخصصة. متحدون بشغفنا بالتميز، نتعاون لخلق تجارب رقمية استثنائية.',
            chooseUsItems: [
                'خبرة رائدة في الصناعة',
                'سجل حافل بالنجاح',
                'نهج تعاوني',
                'تكنولوجيا متطورة',
                'فلسفة تصميم تتمحور حول المستخدم',
                'تواصل شفاف'
            ]
        }
    };

    const t = phoneMockupContent[language] || phoneMockupContent.en;

    // Content with translations
    const content = [
        {
            id: 'vision',
            title: t.visionTitle,
            description: t.visionDescription,
            color: 'from-blue-500/10 to-primary'
        },
        {
            id: 'mission',
            title: t.missionTitle,
            description: t.missionDescription,
            color: 'from-teal-500/10 to-teal-500/30'
        },
        {
            id: 'team',
            title: t.teamTitle,
            description: t.teamDescription,
            color: 'from-gray-700/10 to-gray-700/30'
        }
    ];

    // Functions for slide navigation
    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % content.length;
        setCurrentIndex(nextIndex);
        scrollToSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = (currentIndex - 1 + content.length) % content.length;
        setCurrentIndex(prevIndex);
        scrollToSlide(prevIndex);
    };

    const scrollToSlide = (index) => {
        if (scrollContainerRef.current) {
            const slideWidth = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollTo({
                left: slideWidth * index,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="services" className="py-20 bg-white font-['Inter']">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        {t.approachTitle}
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        {t.approachDescription}
                    </p>
                </motion.div>

                {/* Phone Mockup with Horizontal Scroll */}
                <motion.div
                    className="flex flex-col items-center justify-center mb-16 relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    {/* Navigation Arrows */}
                    <button
                        className={`absolute left-0 lg:left-[calc(50%-200px)] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-200/80 backdrop-blur-sm flex items-center justify-center z-20 hover:bg-gray-300 transition-all shadow-lg ${language === 'ar' ? 'rotate-180' : ''}`}
                        onClick={prevSlide}
                        aria-label="Previous Slide"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="relative">
                        {/* Phone Frame */}
                        <div className="neumorphic-phone w-64 h-[500px] rounded-[40px] border-8 border-gray-100 p-1 overflow-hidden relative shadow-inner-xl">
                            <div className="absolute top-0 left-0 w-full h-10 rounded-t-[32px] bg-gray-100 z-10 opacity-70"></div>

                            {/* Horizontal Scroll Container */}
                            <div className="h-full w-full rounded-[32px] overflow-hidden">
                                <div
                                    ref={scrollContainerRef}
                                    className="flex h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar"
                                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                >
                                    {content.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className={`flex-shrink-0 w-full h-full bg-gradient-to-br ${item.color} p-6 flex flex-col justify-center items-center snap-center text-white`}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                                className="text-center"
                                            >
                                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                                <p className="text-white/90">{item.description}</p>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-primary blur-xl opacity-60"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                    </div>

                    <button
                        className={`absolute right-0 lg:right-[calc(50%-200px)] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-200/80 backdrop-blur-sm flex items-center justify-center z-20 hover:bg-gray-300 transition-all shadow-lg ${language === 'ar' ? 'rotate-180' : ''}`}
                        onClick={nextSlide}
                        aria-label="Next Slide"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </motion.div>

                {/* Why Choose Us Card - Below Phone */}
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl z-0"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-accent/20 blur-3xl z-0"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                                {t.whyChooseUsTitle}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {t.chooseUsItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm"
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                    >
                                        <div className="bg-primary rounded-full p-1 mr-3 flex-shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="font-medium text-gray-800">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PhoneMockup;