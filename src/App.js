import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PhoneMockup from './components/PhoneMockup';
import Services from './components/Services';
import Strategy from './components/Strategy';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    // This is a test comment to force a rebuild
    return (
        <div className="min-h-screen bg-light text-dark font-sans">
            <Navbar />
            <main>
                <Hero />
                <About />
                <PhoneMockup />
                <Services />
                <Strategy />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}

export default App;