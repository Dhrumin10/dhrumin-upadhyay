import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-950 text-white py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="bg-gray-900 p-3 rounded-full border border-indigo-500/30 text-indigo-400
            hover:text-indigo-300 transition-all duration-300 hover:border-indigo-500/50"
        >
          <FaChevronUp />
        </button>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              Dhrumin Upadhyay
            </h3>
            <p className="text-gray-400">
              ML Engineer & Data Scientist passionate about creating innovative solutions
              through machine learning and artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2" />
                <a href="mailto:upadhyaydhrumin224@gmail.com" className="hover:text-indigo-400 transition-colors">
                  upadhyaydhrumin224@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                Ahmedabad, Gujarat, India
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Dhrumin007-creator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors p-2 rounded-full bg-gray-900/60 hover:bg-gray-900"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhrumin-upadhyay-98b021287/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors p-2 rounded-full bg-gray-900/60 hover:bg-gray-900"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors p-2 rounded-full bg-gray-900/60 hover:bg-gray-900"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Dhrumin Upadhyay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;