import React, { useState } from 'react';
import { Skill } from '../types';
import SkillCard from './SkillCard';
import FilterBar from './FilterBar';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Extract unique categories from skills
  const categories = [...new Set(skills.map(skill => skill.category))];
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical and analytical skills acquired through years of experience in data analysis.
            </p>
          </div>
          
          <FilterBar 
            categories={categories} 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;