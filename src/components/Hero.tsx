import React from 'react';
import { ArrowDown, Laptop, BarChart2, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-300 dark:bg-purple-700 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-300 dark:bg-blue-700 blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        {/* Data visualization inspired patterns */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
          {Array(20).fill(0).map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-1 md:w-24 md:h-1.5 bg-blue-600 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0.5 + Math.random() * 0.5
              }}
            ></div>
          ))}
          {Array(15).fill(0).map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 2 === 0 ? '#3B82F6' : '#8B5CF6',
                opacity: 0.5 + Math.random() * 0.5
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium animate-fade-in-up">
            Data Analytics Portfolio
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white animate-fade-in-up animation-delay-150">
            Transforming <span className="text-blue-600 dark:text-blue-400">Data</span> into 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Actionable Insights</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl animate-fade-in-up animation-delay-300">
            Showcasing analytics projects that drive business decisions through comprehensive data analysis, statistical modeling, and impactful visualizations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-450">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center"
            >
              View Projects <ArrowDown size={16} className="ml-2" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
          
          {/* Feature icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl animate-fade-in-up animation-delay-600">
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
                <Laptop size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Data Processing</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Cleaning, transforming, and preparing data for analysis</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-3">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Visualization</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Creating intuitive visual representations of complex data</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-3">
                <Database size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Advanced Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Statistical modeling and predictive analysis</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#projects" 
          className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md text-gray-700 dark:text-gray-300"
          aria-label="Scroll to projects"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </div>
  );
};

export default Hero;