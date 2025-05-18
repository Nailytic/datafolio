import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DataFolio
              </span>
              <p className="mt-2 text-gray-400 max-w-md">
                Transforming data into actionable insights. Showcasing analytics projects that drive business decisions.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <button 
                onClick={scrollToTop}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors mb-4"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} DataFolio. All rights reserved.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-800">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Data Analysis</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Data Visualization</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Predictive Modeling</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Dashboard Creation</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Data Strategy</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Tools</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Python</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">R</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">SQL</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Tableau</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Power BI</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Medium</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;