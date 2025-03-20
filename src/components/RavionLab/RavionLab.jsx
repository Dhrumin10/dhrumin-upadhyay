import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaUsers, FaRobot, FaBrain, FaArrowRight } from 'react-icons/fa';

const RavionLab = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const features = [
        {
            icon: <FaLightbulb className="text-3xl text-indigo-400" />,
            title: "Innovation Hub",
            description: "A space where groundbreaking ideas come to life through collaborative engineering and cutting-edge technology."
        },
        {
            icon: <FaUsers className="text-3xl text-indigo-400" />,
            title: "Community-Driven",
            description: "Open to all passionate minds - from seasoned professionals to curious beginners - united by the drive to innovate."
        },
        {
            icon: <FaRobot className="text-3xl text-indigo-400" />,
            title: "Future Technology",
            description: "Focusing on robotics, AI, and advanced engineering to shape the technologies that will define tomorrow."
        },
        {
            icon: <FaBrain className="text-3xl text-indigo-400" />,
            title: "Knowledge Sharing",
            description: "A platform for learning, mentoring, and growing together through hands-on project experience."
        }
    ];

    return (
        <section id="ravion-lab" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                            Ravion Lab
                        </span>
                    </h2>
                    <p className="text-2xl font-light text-gray-300 mb-6">
                        A Collaborative Innovation Hub
                    </p>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-gray-400 text-lg mb-8">
                            Where ideas ignite, collaboration thrives, and every project paves the way for a better future.
                        </p>
                    </div>
                </div>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-sm bg-gray-800/70 p-8 rounded-xl border border-gray-700 hover:border-indigo-500/30 
                transition-all duration-500 transform hover:-translate-y-1"
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(20px)",
                                transition: `all 0.8s ease ${index * 0.2}s`
                            }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-3 rounded-lg bg-indigo-900/30">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white ml-4">{feature.title}</h3>
                            </div>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div
                    className="max-w-4xl mx-auto text-center"
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(20px)",
                        transition: "all 0.8s ease 0.8s"
                    }}
                >
                    <div className="backdrop-blur-sm bg-gray-800/70 p-8 rounded-xl border border-gray-700">
                        <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-400 mb-6">
                            I founded Ravion Lab with a vision to push the boundaries of innovation and redefine what’s possible. Here, we’re not just building projects—we’re shaping the future of technology through collaboration and bold ideas. Every project at Ravion Lab is a step toward creating a smarter, more connected world, where AI, robotics, and cutting-edge solutions come together to solve real-world challenges..
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 
                text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Join Our Community
                            <FaArrowRight className="ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RavionLab; 