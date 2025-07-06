import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="min-h-screen bg-zinc-900 text-white relative overflow-x-hidden">
            <Header />
            <main className="relative z-10">
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
            </main>
            <Footer />
        </div>
    )
}

export default App
