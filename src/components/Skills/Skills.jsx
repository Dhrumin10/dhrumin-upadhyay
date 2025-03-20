import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaBrain, FaTools, FaUsers } from 'react-icons/fa';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="text-2xl text-indigo-400" />,
      skills: [
        { name: 'Python', description: 'ML/AI, Data Analysis, Web Development' },
        { name: 'C++', description: 'Algorithm Design, System Programming' },
        { name: 'JavaScript', description: 'Web Development, React' },
        { name: 'SQL', description: 'Database Design, Query Optimization' }
      ]
    },
    {
      title: 'Machine Learning & AI',
      icon: <FaBrain className="text-2xl text-indigo-400" />,
      skills: [
        { name: 'TensorFlow', description: 'Deep Learning, Neural Networks' },
        { name: 'PyTorch', description: 'Computer Vision, NLP' },
        { name: 'Scikit-learn', description: 'ML Algorithms, Data Processing' },
        { name: 'Deep Learning', description: 'CNN, RNN, Transformers' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools className="text-2xl text-indigo-400" />,
      skills: [
        { name: 'Git/GitHub', description: 'Version Control, Collaboration' },
        { name: 'Docker', description: 'Containerization, Deployment' },
        { name: 'AWS', description: 'Cloud Computing, ML Deployment' },
        { name: 'Jupyter', description: 'Data Analysis, Visualization' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <FaUsers className="text-2xl text-indigo-400" />,
      skills: [
        { name: 'Problem Solving', description: 'Analytical Thinking, Innovation' },
        { name: 'Leadership', description: 'Team Management, Mentoring' },
        { name: 'Communication', description: 'Technical Writing, Presentation' },
        { name: 'Project Management', description: 'Agile, Scrum' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities,
            developed through years of experience and continuous learning.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="backdrop-blur-sm bg-gray-800/70 p-6 rounded-lg shadow-xl border border-gray-700
                hover:border-indigo-500/30 transition-all duration-500 group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.8s ease ${categoryIndex * 0.2}s, transform 0.8s ease ${categoryIndex * 0.2}s, border-color 0.3s ease`
              }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-indigo-900/30 mr-4 group-hover:bg-indigo-900/50 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300
                      border border-gray-700/50 hover:border-indigo-500/30"
                    style={{
                      transform: inView ? "translateX(0)" : "translateX(-20px)",
                      opacity: inView ? 1 : 0,
                      transition: `all 0.5s ease ${categoryIndex * 0.2 + skillIndex * 0.1}s`
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                    </div>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
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