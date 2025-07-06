import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "Bachelor of Information Technology",
            institution: "BP Poddar Institute of Management and Technology",
            year: "2022 - 2026",
            status: "(Ongoing)",
            // description: "Focused on software engineering, algorithms, and web development"
            grade: "8.35 CGPA (Upto 6th semester)"
        },
        {
            degree: "12th Grade",
            institution: "Douglas Memorial Higher Secondary School",
            year: "2021",
            status: "(Completed)",
            // description: "Intensive bootcamp covering modern web technologies"
            grade: "84%"
        }
    ];

    return (
        <section id="education" className="py-20 px-6 bg-gray-900/30">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        <span className="text-purple-400">Education</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 group"
                        >
                            <div className="flex items-start mb-4">
                                <div className="bg-purple-600 p-3 rounded-lg mr-4 group-hover:bg-purple-500 transition-colors duration-300">
                                    <GraduationCap className="text-white" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                                    <p className="text-purple-400 font-medium mb-1">{edu.institution}</p>
                                    <p className="text-gray-400 text-sm ">{edu.year}</p>
                                    <p className="text-blue-400 text-sm mb-3">{edu.status}</p>
                                    <p className="text-gray-300 leading-relaxed">{edu.grade}</p>
                                </div>
                            </div>
                            {/* <p className="text-gray-300 leading-relaxed">{edu.description}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;