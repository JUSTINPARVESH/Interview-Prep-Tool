import React, { useState, useRef, useEffect } from 'react';
import { ALL_FILTERS } from '../constants';
import { Search, X, ChevronDown } from 'lucide-react';

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
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 max-w-lg mx-auto">
      <div className="space-y-6">
        <div className="relative" ref={dropdownRef}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Roles, Languages & Skills
          </label>
          
          <div className="relative">
            <div className="min-h-[46px] p-1.5 bg-gray-50 border border-gray-300 rounded-lg flex flex-wrap gap-2 items-center focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
              {selectedFilters.map(filter => (
                <span 
                  key={filter} 
                  className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-md border border-blue-200"
                >
                  {filter}
                  <button 
                    onClick={() => removeFilter(filter)}
                    className="hover:text-blue-900 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
              
              <div className="flex-grow flex items-center min-w-[120px]">
                <Search size={18} className="text-gray-400 ml-2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                  placeholder={selectedFilters.length === 0 ? "Search (e.g. React, Frontend...)" : ""}
                  className="w-full bg-transparent border-none focus:ring-0 text-sm py-1 px-2"
                />
              </div>
              
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Dropdown */}
            {showDropdown && filteredOptions.length > 0 && (
              <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredOptions.map(option => (
                  <button
                    key={option}
                    onClick={() => toggleFilter(option)}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors flex items-center justify-between group"
                  >
                    <span>{option}</span>
                    <span className="text-[10px] text-gray-400 group-hover:text-blue-400 uppercase font-bold">
                      {ALL_FILTERS.slice(0, 3).includes(option) ? 'Role' : 'Skill'}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <p className="mt-2 text-xs text-gray-500 italic">
            Type at least 3 characters to search. You can select multiple roles and skills.
          </p>
        </div>

        <button
          onClick={onGenerate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-lg transition-all duration-200 shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Generate Questions
        </button>
      </div>
    </div>
  );
}
