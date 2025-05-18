import React from 'react';
import { Skill } from '../types';
import * as LucideIcons from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<any>>)[
    skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)
  ] || LucideIcons.Code;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
      <div className="flex items-center mb-3">
        <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3">
          <IconComponent size={20} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
      </div>
      
      <div className="mb-2">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {skill.category}
        </span>
      </div>
      
      <div className="mt-2">
        <div className="flex items-center">
          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
              style={{ width: `${(skill.proficiency / 5) * 100}%` }}
            ></div>
          </div>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
            {skill.proficiency}/5
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;