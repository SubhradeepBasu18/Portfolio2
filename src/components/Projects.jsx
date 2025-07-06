import React from 'react';
import { ArrowUp } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "HireMe - Job Portal",
            description: "A full-stack web application designed to connect job seekers with employers, focusing on startups and emerging opportunities. It features user and    employer registration, secure authentication, job postings, and application management — all built with a scalable and clean backend architecture.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            image: "https://i.pinimg.com/736x/55/da/eb/55daeb8cf8ecd4eabb8a66ea52f4cb82.jpg",
            link: "https://github.com/SubhradeepBasu18/JobPortal"
        },
        {
                title: "InsightBoard – AI-Powered Productivity Tool",
                description: "A team productivity platform that transforms raw meeting notes into AI-generated summaries and actionable tasks. It uses background workflows to automate insights, helping teams stay aligned and efficient.",
                tech: ["React", "Node.js", "Express", "MySQL", "Inngest", "OpenAI API"],
                image: "https://i.pinimg.com/736x/e6/64/31/e6643150e33039ff7cf9c538257c6c70.jpg",
                link: "https://github.com/SubhradeepBasu18/InsightBoard"            
        },
        {
            title: "Ecom – Simple E-commerce Platform",
            description: "A basic e-commerce web application that allows users to browse products, add items to cart, and simulate checkout. Built to understand core concepts of full-stack development and CRUD operations.",
            tech: ["HTML", "CSS", "JavaScript", "Node.js", "Appwrite"],
            image: "https://i.pinimg.com/736x/ca/3a/d7/ca3ad7219481e859ee22bb4dd9e5a2ff.jpg",
            link: "https://github.com/SubhradeepBasu18/Ecom"
        },          
        {
            title: "Inventree – Inventory Management System",
            description: "A full-stack inventory management system that allows users to add, update, and delete inventory items with proper user authentication. Designed to simplify product tracking and stock management for small-scale operations.",
            tech: ["HTML", "CSS", "JavaScript", "Node.js", "Appwrite"],
            image: "https://i.pinimg.com/736x/4d/f3/59/4df35933ecbb7a159ae9c630e4843a4b.jpg",
            link: "https://github.com/SubhradeepBasu18/Inventree"
        },
        {
            title: "Satellite Image Classification",
            description: "A deep learning project that classifies satellite images into multiple land cover categories using a CNN model. It helps in analyzing geographical patterns for applications like agriculture, waterbodies, and desert detection.",
            tech: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV"],
            image: "https://i.pinimg.com/736x/60/89/4c/60894cf36d389cec5dbb249a3a807fd9.jpg",
            link: "https://github.com/SubhradeepBasu18/Satellite-Image-Classification"
        },
        {
            title: "Voice-Controlled Personal Assistant",
            description: "A Python-based voice assistant that can perform tasks like web search, opening applications, telling the time, and more through voice commands. Designed to provide a simple hands-free interaction experience using speech recognition and text-to-speech.",
            tech: ["Python", "SpeechRecognition", "pyttsx3", "webbrowser"],
            image: "https://i.pinimg.com/736x/d6/01/68/d6016865af34cc7c5889657fd0ed035f.jpg",
            link: "https://github.com/SubhradeepBasu18/Personal_Assistant"
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="projects" className="py-20 px-6 bg-gray-900/30">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-purple-400">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-400/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200 cursor-pointer"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-600/25"
                    >
                        <ArrowUp className="mr-2" size={20} />
                        Back to Top
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;