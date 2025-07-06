import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['About', 'Education', 'Skills', 'Projects'];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId.toLowerCase());
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                        <span className="text-purple-400">Dev</span>Portfolio
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 bg-gray-900/95 rounded-lg backdrop-blur-sm">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-gray-800/50 transition-colors duration-200"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;