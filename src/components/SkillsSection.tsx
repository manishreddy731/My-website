import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

const skills: Skill[] = [
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 92, category: 'frontend' },
  { name: 'Vue.js', level: 80, category: 'frontend' },
  { name: 'Java', level: 95, category: 'backend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Python', level: 70, category: 'backend' },
  { name: 'SQL', level: 65, category: 'backend' },
  { name: 'Figma', level: 85, category: 'design' },
  { name: 'Photoshop', level: 75, category: 'design' },
  { name: 'Git', level: 82, category: 'other' },
];

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Initialize with the correct number of null refs
  progressRefs.current = Array(skills.length).fill(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate progress bars
            progressRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.style.width = `${skills[index].level}%`;
                  ref.style.opacity = '1';
                }, 300 + index * 100);
              }
            });
            
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

  const filteredSkills = (category: Skill['category']) => {
    return skills.filter(skill => skill.category === category);
  };

  const renderSkillsCategory = (categoryTitle: string, category: Skill['category']) => (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">{categoryTitle}</h3>
      <div className="space-y-6">
        {filteredSkills(category).map((skill, idx) => {
          // Get the global index for this skill in the skills array
          const globalIndex = skills.findIndex(s => s.name === skill.name);
          
          return (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  ref={el => (progressRefs.current[globalIndex] = el)}
                  className="h-2.5 rounded-full transition-all duration-1000 ease-out opacity-0"
                  style={{ 
                    width: '0%', 
                    backgroundColor: 
                      category === 'frontend' ? '#6366f1' : 
                      category === 'backend' ? '#8b5cf6' : 
                      category === 'design' ? '#ec4899' : 
                      '#3b82f6'
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {renderSkillsCategory('Frontend Development', 'frontend')}
          {renderSkillsCategory('Backend Development', 'backend')}
          {renderSkillsCategory('Design', 'design')}
          {renderSkillsCategory('Other Skills', 'other')}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;