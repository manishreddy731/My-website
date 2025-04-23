import React, { useEffect, useRef } from 'react';
import { Code, Globe, Layout, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a passionate developer with expertise in creating beautiful, functional, and user-centered digital experiences. With a strong foundation in both design and development, I bridge the gap between aesthetics and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
              <Code className="text-indigo-600 dark:text-indigo-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creating clean, efficient, and maintainable code to bring designs to life with attention to performance and accessibility.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6">
              <Layout className="text-purple-600 dark:text-purple-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Cloud Architect</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Designing scalable, secure, and resilient cloud infrastructures that balance performance, cost-efficiency, and business agility.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-6">
              <Globe className="text-pink-600 dark:text-pink-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Responsive Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building flexible layouts that adapt seamlessly to all devices and screen sizes for optimal user experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
              <Users className="text-indigo-600 dark:text-indigo-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Working effectively with cross-functional teams to deliver cohesive products that meet business goals and user needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;