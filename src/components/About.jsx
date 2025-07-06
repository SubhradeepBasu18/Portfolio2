import React from 'react';
import { Code, User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-purple-400">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                            <div className="flex items-center mb-4">
                                <User className="text-purple-400 mr-3" size={24} />
                                <h3 className="text-xl font-semibold text-white">Who I Am</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                            Backend-focused full-stack developer passionate about building reliable, scalable systems that solve real-world problems. I enjoy designing clean architectures, implementing efficient APIs, and turning complex workflows into seamless user experiences. Driven by curiosity and purpose, I bring ideas to life through thoughtful engineering.
                            </p>
                        </div>

                        <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                            <div className="flex items-center mb-4">
                                <Code className="text-purple-400 mr-3" size={24} />
                                <h3 className="text-xl font-semibold text-white">What I Do</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                            I build backend-driven web applications with a focus on clean architecture, secure flows, and scalable data handling. From automating insights to streamlining job systems, I enjoy creating reliable solutions using modern development practices.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-1 rounded-xl">
                            <div className="bg-gray-900 p-8 rounded-lg">
                                <div className="space-y-4">
                                    {/* <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Experience</span>
                                        <span className="text-purple-400 font-semibold">3+ Years</span>
                                    </div> */}
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Projects Completed</span>
                                        <span className="text-purple-400 font-semibold">15+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Technologies</span>
                                        <span className="text-purple-400 font-semibold">10+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Bugs fixed</span>
                                        <span className="text-purple-400 font-semibold">∞</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Coffee Consumed</span>
                                        <span className="text-purple-400 font-semibold">∞</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;