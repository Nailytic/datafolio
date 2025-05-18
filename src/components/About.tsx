import React from 'react';
import { Award, BookOpen, Briefcase, Calendar, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Data analyst passionate about transforming complex data into actionable insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="col-span-1 flex justify-center md:justify-end">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/5439152/pexels-photo-5439152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Naiara Rodríguez Solano
              </h3>
              <h4 className="text-xl text-blue-600 dark:text-blue-400 mb-6">
                Data Analyst
              </h4>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                With a passion for uncovering patterns and insights from data, I help organizations make better decisions through advanced analytics. My expertise spans from statistical analysis to machine learning, with a focus on creating visualizations that communicate complex findings clearly.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                >
                  Contact Me
                </a>
                <a 
                  href="https://github.com/Nailytic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 font-medium transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Briefcase size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
                Work Experience
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-8 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <div className="flex items-center mb-1">
                    <Calendar size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Data Analyst</h4>
                  <p className="text-gray-600 dark:text-gray-300">Company Name</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Leading data analytics projects and providing insights for business decision-making.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Education & Certifications */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
                Education & Certifications
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="relative pl-8 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <div className="flex items-center mb-1">
                    <Calendar size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">2019 - 2023</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor's Degree</h4>
                  <p className="text-gray-600 dark:text-gray-300">University Name</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <BookOpen size={16} className="mr-3 mt-1 text-gray-500 dark:text-gray-400" />
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">Data Analytics Certification</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;