import React, { useState } from 'react';
import { Filter, Play, BookOpen } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import InputForm from './components/InputForm';
import QuestionCard from './components/QuestionCard';
import Quiz from './components/Quiz';
import { Role, Question, AppMode } from './types';
import { QUESTIONS } from './constants';

import { ROLES } from './constants';

export default function App() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [mode, setMode] = useState<AppMode>('study');

  const handleGenerate = () => {
    if (selectedFilters.length === 0) {
      setActiveQuestions(QUESTIONS);
    } else {
      const selectedRoles = selectedFilters.filter(f => ROLES.includes(f));
      const selectedSkills = selectedFilters.filter(f => !ROLES.includes(f));

      const filtered = QUESTIONS.filter(q => {
        const roleMatch = selectedRoles.length === 0 || selectedRoles.includes(q.role);
        const skillMatch = selectedSkills.length === 0 || selectedSkills.some(s => q.skills.includes(s));
        return roleMatch && skillMatch;
      });
      
      setActiveQuestions(filtered);
    }
    setMode('study');
  };

  const startQuiz = () => {
    setMode('quiz');
  };

  const exitQuiz = () => {
    setMode('study');
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-3">
            AI Interview Prep Tool
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search and filter by role, language, or specific technical skills.
          </p>
        </header>

        {/* Filter Selection */}
        {mode === 'study' && (
          <InputForm 
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            onGenerate={handleGenerate} 
          />
        )}

        {activeQuestions.length > 0 && (
          <div className="space-y-8 animate-in fade-in duration-700">
            {/* Study Mode Content */}
            {mode === 'study' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AnimatePresence mode="popLayout">
                    {activeQuestions.map((q) => (
                      <QuestionCard
                        key={q.id}
                        question={q}
                      />
                    ))}
                  </AnimatePresence>
                </div>

                {/* Quiz Button at the bottom */}
                <div className="flex justify-center mt-12">
                  <button
                    onClick={startQuiz}
                    className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl hover:shadow-blue-200 group"
                  >
                    <Play size={24} className="fill-current group-hover:scale-110 transition-transform" />
                    Start Exam Quiz
                  </button>
                </div>
              </>
            )}

            {/* Quiz Mode Content */}
            {mode === 'quiz' && (
              <Quiz questions={activeQuestions} onClose={exitQuiz} />
            )}
          </div>
        )}

        {activeQuestions.length === 0 && (
          <div className="mt-20 text-center opacity-40 select-none">
            <div className="inline-block p-4 rounded-full bg-gray-200 mb-4">
              <Filter size={48} className="text-gray-400" />
            </div>
            <p className="text-xl font-medium text-gray-500">Search for roles or skills to see relevant questions</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} AI Interview Prep Tool. All rights reserved.</p>
      </footer>
    </div>
  );
}
