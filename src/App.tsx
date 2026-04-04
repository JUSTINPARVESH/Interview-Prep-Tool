import React, { useState, useEffect } from 'react';
import { Filter, Play } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import InputForm from './components/InputForm';
import QuestionCard from './components/QuestionCard';
import Quiz from './components/Quiz';
import StreakWidget from './components/StreakWidget';
import AchievementBadges from './components/AchievementBadges';
import StatsOverlay from './components/StatsOverlay';
import { Role, Question, AppMode } from './types';
import { QUESTIONS } from './constants';
import { ROLES } from './constants';
import { useUserStore } from './store/userStore';

export default function App() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [mode, setMode] = useState<AppMode>('study');
  
  // Initialize stores
  const { initializeUser } = useUserStore();

  useEffect(() => {
    initializeUser();
  }, []);

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
    <div className="min-h-screen bg-white">
      {/* New UI Components */}
      <StreakWidget />
      <AchievementBadges />

      {/* Premium Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 pt-20 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
                Master Your
                <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Interview Skills</span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                AI-powered interview prep with real-time grading, detailed feedback, and personalized learning paths.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Stats Overview */}
        {mode === 'study' && activeQuestions.length === 0 && (
          <StatsOverlay />
        )}

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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                      {activeQuestions.map((q) => (
                        <QuestionCard
                          key={q.id}
                          question={q}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Quiz Button at the bottom */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center mt-16"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startQuiz}
                    className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-5 px-12 text-lg rounded-2xl transition-all shadow-2xl hover:shadow-3xl hover:shadow-blue-500/40 group"
                  >
                    <Play size={26} className="fill-current group-hover:scale-110 transition-transform" />
                    Start Exam Quiz
                  </motion.button>
                </motion.div>
              </>
            )}

            {/* Quiz Mode Content */}
            {mode === 'quiz' && (
              <Quiz questions={activeQuestions} onClose={exitQuiz} />
            )}
          </div>
        )}

        {activeQuestions.length === 0 && mode === 'study' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-32 text-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ delay: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="p-5 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200">
                <Filter size={56} className="text-blue-400" />
              </div>
            </motion.div>
            <p className="text-2xl font-bold text-gray-700 mb-2">No questions yet</p>
            <p className="text-gray-500 text-lg">Select roles or skills above to start your interview prep journey</p>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-32 text-center py-8 border-t border-gray-200">
        <p className="text-gray-600 font-medium mb-2">🚀 Master your interview skills with AI-powered feedback</p>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} AI Interview Prep Tool. Built with ❤️</p>
      </footer>
    </div>
  );
}
