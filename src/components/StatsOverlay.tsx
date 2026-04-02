import React from 'react';
import { TrendingUp, Zap, Clock, Target } from 'lucide-react';
import { useUserStore } from '../store/userStore';
import { motion } from 'motion/react';

export default function StatsOverlay() {
  const { stats } = useUserStore();

  const formatTime = (seconds: number): string => {
    if (seconds < 60) return `${Math.round(seconds)}s`;
    if (seconds < 3600) return `${Math.round(seconds / 60)}m`;
    const hours = Math.floor(seconds / 3600);
    const mins = Math.round((seconds % 3600) / 60);
    return `${hours}h ${mins}m`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
    >
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
        className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-7 sm:p-8 rounded-2xl border-2 border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm transition-all duration-300 cursor-pointer group"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-200/50 dark:bg-blue-700/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Target size={24} className="text-blue-600 dark:text-blue-300" />
          </div>
        </div>
        <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-300 font-bold uppercase tracking-wider mb-2">Questions</p>
        <p className="text-3xl sm:text-4xl font-black text-blue-900 dark:text-blue-100">{stats.totalQuestionsStudied}</p>
        <p className="text-xs text-blue-600/60 dark:text-blue-300/60 mt-3">Total questions studied</p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)" }}
        className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-7 sm:p-8 rounded-2xl border-2 border-purple-200/50 dark:border-purple-700/50 backdrop-blur-sm transition-all duration-300 cursor-pointer group"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-purple-200/50 dark:bg-purple-700/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Zap size={24} className="text-purple-600 dark:text-purple-300" />
          </div>
        </div>
        <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-300 font-bold uppercase tracking-wider mb-2">Quizzes</p>
        <p className="text-3xl sm:text-4xl font-black text-purple-900 dark:text-purple-100">{stats.totalQuizzesTaken}</p>
        <p className="text-xs text-purple-600/60 dark:text-purple-300/60 mt-3">Total quizzes taken</p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.15)" }}
        className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-7 sm:p-8 rounded-2xl border-2 border-green-200/50 dark:border-green-700/50 backdrop-blur-sm transition-all duration-300 cursor-pointer group"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-green-200/50 dark:bg-green-700/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <TrendingUp size={24} className="text-green-600 dark:text-green-300" />
          </div>
        </div>
        <p className="text-xs sm:text-sm text-green-600 dark:text-green-300 font-bold uppercase tracking-wider mb-2">Accuracy</p>
        <p className="text-3xl sm:text-4xl font-black text-green-900 dark:text-green-100">
          {Math.round(stats.overallAccuracy)}%
        </p>
        <p className="text-xs text-green-600/60 dark:text-green-300/60 mt-3">Overall performance</p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.15)" }}
        className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-7 sm:p-8 rounded-2xl border-2 border-orange-200/50 dark:border-orange-700/50 backdrop-blur-sm transition-all duration-300 cursor-pointer group"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-orange-200/50 dark:bg-orange-700/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Clock size={24} className="text-orange-600 dark:text-orange-300" />
          </div>
        </div>
        <p className="text-xs sm:text-sm text-orange-600 dark:text-orange-300 font-bold uppercase tracking-wider mb-2">Time Spent</p>
        <p className="text-3xl sm:text-4xl font-black text-orange-900 dark:text-orange-100">
          {formatTime(stats.totalTimeSpent)}
        </p>
        <p className="text-xs text-orange-600/60 dark:text-orange-300/60 mt-3">Total learning time</p>
      </motion.div>
    </motion.div>
  );
}
