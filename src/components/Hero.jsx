import React from 'react';
import { ArrowDown, Linkedin, Twitter, Github } from 'lucide-react';
import { FaHashnode } from "react-icons/fa6";

const Hero = () => {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/subhradeepbasu18/',
            icon: Linkedin,
            color: 'hover:text-blue-400'
        },
        {
            name: 'Hashnode',
            url: 'https://hashnode.com/@Subhradeep18',
            icon: (props) => (
                <FaHashnode/>
            ),
            color: 'hover:text-blue-600'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/SubhradeepBasu18',
            icon: Github,
            color: 'hover:text-gray-400'
        }
    ];

    return (
        <section className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-6">
                <div className="animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Hi, I'm <span className="text-purple-400">Subhradeep Basu</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
                        Full Stack Developer
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Passionate about creating beautiful, functional, and user-friendly applications
                        that solve real-world problems with clean, efficient code.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button
                            onClick={scrollToAbout}
                            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-600/25"
                        >
                            Learn More
                        </button>
                        <a
                            href="https://drive.google.com/file/d/1rFRZx-_txZbt9vZeIXF6DQS_OZDXTefD/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center items-center gap-6 mb-8">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                                aria-label={social.name}
                            >
                                <social.icon size={28} />
                            </a>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="text-center mb-8">
                        <h3 className="text-xl text-gray-300 mb-4">Contact with me</h3>
                        <a
                            href="mailto:subhradeepbasu18@gmail.com"
                            className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-lg font-medium"
                        >
                            subhradeepbasu2002@gmail.com
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ArrowDown className="text-purple-400" size={32} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
