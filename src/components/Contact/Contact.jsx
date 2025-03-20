import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              Get in Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div
          ref={ref}
          className="max-w-3xl mx-auto"
        >
          <div
            className="bg-gray-800/70 p-8 rounded-lg shadow-md backdrop-blur-sm border border-gray-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease, transform 0.8s ease"
            }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-indigo-900/30">
                  <FaMapMarkerAlt className="text-indigo-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white">Location</h4>
                  <p className="text-gray-400">Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-indigo-900/30">
                  <FaEnvelope className="text-indigo-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white">Email</h4>
                  <a
                    href="mailto:upadhyaydhrumin224@gmail.com"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    upadhyaydhrumin224@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-indigo-900/30">
                  <FaPhone className="text-indigo-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white">Phone</h4>
                  <a
                    href="tel:+911234567890"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    +91 6355917400
                  </a>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-semibold mb-3 text-white">Connect</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/dhrumin-upadhyay-98b021287/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    href="https://github.com/Dhrumin007-creator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;