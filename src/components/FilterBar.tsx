import React, { useState, useEffect, useRef } from 'react';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}) => {
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setShowMobileFilter(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowMobileFilter(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-8 relative" ref={filterRef}>
      {/* Desktop Filter */}
      <div className="hidden md:flex justify-center space-x-2 overflow-x-auto pb-2">
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeCategory === 'All'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
          onClick={() => handleCategoryClick('All')}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Mobile Filter Button */}
      <div className="md:hidden flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Filter: <span className="text-blue-600 dark:text-blue-400">{activeCategory}</span>
        </h2>
        <button
          className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          onClick={() => setShowMobileFilter(!showMobileFilter)}
        >
          <Filter size={20} />
        </button>
      </div>
      
      {/* Mobile Filter Dropdown */}
      {showMobileFilter && (
        <div className="md:hidden absolute right-0 top-12 z-10 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden">
          <div className="p-2 max-h-60 overflow-y-auto">
            <button
              className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                activeCategory === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => handleCategoryClick('All')}
            >
              All
            </button>
            
            {categories.map((category) => (
              <button
                key={category}
                className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;