import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';
import { FaGithub, FaLinkedin, FaDownload, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticlesBackground />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left animate__animated animate__fadeInLeft">
            <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
              <span className="text-indigo-400 font-semibold px-4 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm">Welcome to my portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Dhrumin Upadhyay</span>
            </h1>
            <div className="text-xl md:text-2xl mb-6 text-gray-300">
              <TypeAnimation
                sequence={[
                  'ML Engineer',
                  2000,
                  'Data Scientist',
                  2000,
                  'Tech Innovator',
                  2000,
                ]}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400"
              />
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Passionate about leveraging machine learning to solve complex real-world problems.
              Specializing in predictive modeling, computer vision, and innovative AI solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-full
                  hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 flex items-center
                  transform hover:translate-y-[-3px] hover:shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border-2 border-indigo-400 text-indigo-400 px-8 py-3 rounded-full
                  hover:bg-indigo-900/30 transition-all duration-300 flex items-center
                  transform hover:translate-y-[-3px] hover:shadow-lg"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="border-2 border-gray-400 text-gray-300 px-8 py-3 rounded-full
                  hover:bg-gray-800 transition-all duration-300 flex items-center
                  transform hover:translate-y-[-3px] hover:shadow-lg"
              >
                <FaDownload className="mr-2" />
                Resume
              </a>
            </div>
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <a
                href="https://github.com/Dhrumin007-creator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300
                transform hover:scale-125"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhrumin-upadhyay-98b021287/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300
                transform hover:scale-125"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 animate__animated animate__fadeInRight">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full opacity-10 animate-ping"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-gray-900 to-black rounded-full shadow-xl flex items-center justify-center backdrop-blur-sm border border-indigo-900/50">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">DU</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#skills" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
          <FaChevronDown className="text-2xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero;