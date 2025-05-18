import React from 'react';
import { Project } from '../types';
import { X, Calendar, Wrench, Tag } from 'lucide-react';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl bg-white dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 z-10 p-1 rounded-full bg-gray-200/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={24} />
        </button>
        
        <div className="relative h-64 sm:h-80">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
          <img 
            src={project.thumbnailUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 z-20">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-teal-600 text-white rounded-md">
              {project.category}
            </span>
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Overview</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.results.map((result) => (
                <div 
                  key={result.metric} 
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                >
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{result.metric}</h4>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{result.value}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="flex items-center text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                <Calendar size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                Date
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {new Date(project.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            
            <div>
              <h3 className="flex items-center text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                <Wrench size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span 
                    key={tool} 
                    className="inline-block px-2 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="flex items-center text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                <Tag size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-block px-2 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <button 
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              onClick={onClose}
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;