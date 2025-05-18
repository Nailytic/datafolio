import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data/projects';
import { skills } from './data/skills';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check user preference for dark mode
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Update body class when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;