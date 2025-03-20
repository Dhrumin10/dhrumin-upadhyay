import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaArrowLeft, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'AI News Aggregator',
      description: 'An AI-powered news aggregator that collects, summarizes, and delivers the latest news in AI, robotics, and engineering fields.',
      technologies: ['FastAPI', 'LLaMA 3', 'MongoDB', 'Next.js', 'AWS'],
      github: 'https://github.com/Dhrumin007-creator/AI-ML',
      image: '/assets/images.jpeg',
      category: 'ai',
      highlights: [
        'Automated content aggregation from multiple sources',
        'AI-powered text summarization using LLaMA 3',
        'Scalable architecture with AWS deployment'
      ]
    },
    {
      title: 'Smart Assistant Chatbot',
      description: 'An intelligent chatbot that helps with scheduling, reminders, and answering common questions.',
      technologies: ['Python', 'Flask', 'NLTK', 'Google Calendar API'],
      github: 'https://github.com/Dhrumin007-creator/AI-ML',
      image: '/assets/hq720.jpg',
      category: 'ai',
      highlights: [
        'Natural language understanding for user queries',
        'Calendar integration for scheduling',
        'Customizable reminder system'
      ]
    },
    {
      title: 'IoT Home Controller',
      description: 'A comprehensive system for controlling home devices through voice commands and a web dashboard.',
      technologies: ['Raspberry Pi', 'Python', 'MQTT', 'Speech Recognition'],
      github: 'https://github.com/Dhrumin007-creator/AI-ML',
      image: '/assets/download.png',
      category: 'iot',
      highlights: [
        'Voice-controlled device management',
        'Real-time monitoring dashboard',
        'Secure MQTT communication'
      ]
    },
    {
      title: 'Object Detection System',
      description: 'An image recognition tool for identifying common objects to assist in organizing and managing everyday items.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'MobileNet'],
      github: 'https://github.com/Dhrumin007-creator/AI-ML',
      image: '/assets/images (1).jpeg',
      category: 'ai',
      highlights: [
        'Real-time object detection and tracking',
        'Custom model fine-tuning capabilities',
        'Optimized for edge devices'
      ]
    }
  ];

  // Scroll to the next or previous project
  const scrollToProject = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('.project-card')?.offsetWidth || 0;
      const scrollDistance = cardWidth + 24; // Card width + gap

      if (direction === 'next' && currentIndex < projects.length - 1) {
        container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        setCurrentIndex(prev => prev + 1);
      } else if (direction === 'prev' && currentIndex > 0) {
        container.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        setCurrentIndex(prev => prev - 1);
      }
    }
  };

  // Handle scroll snap points
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('.project-card')?.offsetWidth || 0;
      const scrollPosition = container.scrollLeft;

      // Calculate current index based on scroll position
      const newIndex = Math.round(scrollPosition / (cardWidth + 24));
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < projects.length) {
        setCurrentIndex(newIndex);
      }
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex]);

  return (
    <section id="projects" ref={ref} className="py-24 relative overflow-hidden bg-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-800/20 to-blue-500/5 blur-3xl -translate-y-1/2"></div>
        <div className="absolute right-1/4 bottom-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-800/20 to-purple-500/5 blur-3xl translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div
          className="max-w-3xl mx-auto text-center mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(-1rem)',
            transition: 'all 0.7s ease'
          }}
        >
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              My Work
            </span>
          </h2>
        </div>

        {/* Projects horizontal scroll container */}
        <div
          className="relative"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(1rem)',
            transition: 'all 0.7s ease 0.4s'
          }}
        >
          {/* Navigation arrows */}
          <button
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-indigo-600/90 text-white p-3 rounded-full shadow-lg 
              transition-all duration-300 hover:bg-indigo-700 backdrop-blur-sm ${currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'opacity-100'}`}
            onClick={() => scrollToProject('prev')}
            disabled={currentIndex === 0}
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <FaArrowLeft />
          </button>

          <button
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-indigo-600/90 text-white p-3 rounded-full shadow-lg 
              transition-all duration-300 hover:bg-indigo-700 backdrop-blur-sm ${currentIndex === projects.length - 1 ? 'opacity-40 cursor-not-allowed' : 'opacity-100'}`}
            onClick={() => scrollToProject('next')}
            disabled={currentIndex === projects.length - 1}
            style={{ transform: 'translate(50%, -50%)' }}
          >
            <FaArrowRight />
          </button>

          {/* Horizontal scroll container */}
          <div className="overflow-hidden">
            <div className="transition-opacity duration-300">
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none' }}
              >
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="project-card flex-shrink-0 w-full md:w-[calc(100%-4rem)] lg:w-[calc(100%-12rem)] xl:w-[calc(85%-12rem)] snap-center"
                    style={{
                      transition: `opacity 0.5s ease, transform 0.5s ease`,
                      opacity: Math.abs(currentIndex - index) > 1 ? 0.3 : 1,
                      transform: `scale(${currentIndex === index ? 1 : 0.95})`,
                    }}
                  >
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/40 h-full">
                      <div className="flex flex-col lg:flex-row h-full">
                        {/* Image section - full height on desktop */}
                        <div className="w-full lg:w-3/5 relative h-80 lg:h-auto overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/20 to-transparent"></div>

                          {/* Project title on mobile */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 z-10 lg:hidden bg-gradient-to-t from-gray-900 to-transparent">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        {/* Content section */}
                        <div className="w-full lg:w-2/5 p-6 lg:p-8 flex flex-col">
                          {/* Title (desktop only) */}
                          <div className="hidden lg:block mb-4">
                            <h3 className="text-2xl font-bold text-white">
                              {project.title}
                            </h3>
                          </div>

                          {/* Tech stack */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map(tech => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-6 flex-grow">
                            {project.description}
                          </p>

                          {/* Key features */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-indigo-400 mb-2">Key Features</h4>
                            <ul className="space-y-1">
                              {project.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex text-sm text-gray-400">
                                  <span className="text-indigo-400 mr-2">•</span>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* GitHub button only */}
                          <div className="flex items-center mt-auto">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full justify-center"
                            >
                              <FaGithub size={18} />
                              <span>View on GitHub</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                  ? 'bg-indigo-500 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const cardWidth = container.querySelector('.project-card')?.offsetWidth || 0;
                    container.scrollLeft = index * (cardWidth + 24);
                    setCurrentIndex(index);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;