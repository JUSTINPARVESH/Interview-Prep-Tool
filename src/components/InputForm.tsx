import React, { useState, useRef, useEffect } from 'react';
import { ALL_FILTERS } from '../constants';
import { Search, X, ChevronDown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface InputFormProps {
  selectedFilters: string[];
  setSelectedFilters: (filters: string[]) => void;
  onGenerate: () => void;
}

export default function InputForm({ 
  selectedFilters, 
  setSelectedFilters, 
  onGenerate 
}: InputFormProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
    setSearchTerm('');
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter(f => f !== filter));
  };

  const filteredOptions = ALL_FILTERS.filter(option => 
    option.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedFilters.includes(option)
  );

  const showDropdown = searchTerm.length >= 3 || (isOpen && filteredOptions.length > 0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 sm:p-10 mb-12 max-w-2xl mx-auto transition-colors"
    >
      <div className="space-y-6">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
            <Sparkles size={28} className="text-blue-600 dark:text-blue-400" />
            Personalize Your Learning
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Search and filter by roles, languages, or technical skills</p>
        </div>

        <div className="relative" ref={dropdownRef}>
          {/* Search Input */}
          <div className="relative">
            <div className="min-h-[56px] p-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-2xl flex flex-wrap gap-2 items-center focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300">
              {selectedFilters.map(filter => (
                <motion.span 
                  key={filter}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white text-sm font-semibold rounded-xl border border-blue-400 dark:border-blue-500 shadow-md hover:shadow-lg transition-all"
                >
                  {filter}
                  <button 
                    onClick={() => removeFilter(filter)}
                    className="hover:bg-blue-600 dark:hover:bg-blue-700 p-0.5 rounded-md transition-colors"
                  >
                    <X size={16} />
                  </button>
                </motion.span>
              ))}
              
              <div className="flex-grow flex items-center min-w-[140px]">
                <Search size={20} className="text-gray-400 dark:text-gray-500 ml-3 flex-shrink-0" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                  placeholder={selectedFilters.length === 0 ? "e.g. React, Frontend, JavaScript..." : "Add more..."}
                  className="w-full bg-transparent border-none focus:ring-0 text-sm py-2 px-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                />
              </div>
              
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Dropdown */}
            {showDropdown && filteredOptions.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-2xl shadow-2xl max-h-64 overflow-y-auto"
              >
                {filteredOptions.map((option, idx) => (
                  <motion.button
                    key={option}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => toggleFilter(option)}
                    className="w-full text-left px-5 py-3 text-sm hover:bg-blue-50 dark:hover:bg-gray-700/50 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center justify-between group text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                  >
                    <span className="font-medium">{option}</span>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 group-hover:text-blue-400 dark:group-hover:text-blue-300 uppercase font-bold tracking-wide">
                      {ALL_FILTERS.slice(0, 3).includes(option) ? 'Role' : 'Skill'}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
          
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 italic">
            💡 Type at least 3 characters to search. You can select multiple roles and skills.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onGenerate}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/30 flex items-center justify-center gap-2 text-lg"
        >
          <Sparkles size={22} />
          Generate Questions
        </motion.button>
      </div>
    </motion.div>
  );
}
