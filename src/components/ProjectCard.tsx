import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer bg-white dark:bg-gray-800 h-full flex flex-col"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          src={project.thumbnailUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {project.featured && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded z-20">
            Featured
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 p-4 z-20">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-teal-600 text-white rounded-md">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(project.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short'
            })}
          </span>
          <button 
            className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
            onClick={(e) => {
              e.stopPropagation();
              onClick(project);
            }}
          >
            View Case Study <ExternalLink size={16} className="ml-1" />
          </button>
        </div>
      </div>
      
      {/* Highlight border on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600 rounded-xl pointer-events-none transition-colors duration-300"></div>
    </div>
  );
};

export default ProjectCard;