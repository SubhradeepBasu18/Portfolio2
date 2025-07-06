import React from 'react';
import { Code, Settings, File } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code className="text-purple-400" size={24} />,
            skills: ["JavaScript", "HTML5", "CSS3", "C++", "Java", "Python", "C"]
        },
        {
            title: "Frameworks",
            icon: <Settings className="text-purple-400" size={24} />,
            skills: ["React.js", "Express.js", "Node.js", "Scikit-learn", "Tensorflow"]
        },
        {
            title: "Tools",
            icon: <File className="text-purple-400" size={24} />,
            skills: ["Git", "Docker", "MySql", "MongoDB", "Appwrite", "Postman"]
        }
    ];

    return (
        <section id="skills" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-purple-400">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 group"
                        >
                            <div className="flex items-center mb-6">
                                <div className="bg-gray-700 p-3 rounded-lg mr-4 group-hover:bg-purple-600 transition-colors duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="bg-gray-700/50 px-4 py-2 rounded-lg text-gray-300 text-center hover:bg-purple-600/20 hover:text-purple-300 transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;