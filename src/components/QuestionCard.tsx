import React, { useState } from 'react';
import { Eye, EyeOff, Copy, Check } from 'lucide-react';
import { Question } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';

interface QuestionCardProps {
  question: Question;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(question.answer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
      
      <div className="h-full p-6 sm:p-7 rounded-2xl shadow-lg border-2 border-gray-100 dark:border-gray-700 transition-all duration-300 flex flex-col bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-2xl dark:hover:shadow-xl dark:hover:shadow-blue-900/30">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex-1">
            <p className="text-lg sm:text-xl font-bold leading-relaxed text-gray-900 dark:text-white">
              {question.text}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 rounded-full border border-blue-300 dark:border-blue-700/50">
            {question.role}
          </span>
          {question.skills.slice(0, 2).map(skill => (
            <span key={skill} className="px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/40 rounded-full border border-indigo-300 dark:border-indigo-700/50">
              {skill}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="flex-grow"></div>
        <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-4"></div>

        {/* Toggle Answer Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAnswer(!showAnswer)}
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
        >
          {showAnswer ? (
            <>
              <EyeOff size={18} />
              Hide Answer
            </>
          ) : (
            <>
              <Eye size={18} />
              Show Answer
            </>
          )}
        </motion.button>

        {/* Answer Section */}
        <AnimatePresence>
          {showAnswer && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-4"
            >
              <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-700/50 relative">
                <button
                  onClick={handleCopy}
                  className="absolute top-4 right-4 p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors rounded-lg hover:bg-white dark:hover:bg-gray-700/30"
                  title="Copy answer"
                >
                  {copied ? (
                    <Check size={18} className="text-green-600" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
                <div className="markdown-body text-gray-800 dark:text-gray-200 text-sm leading-relaxed pr-8">
                  <ReactMarkdown>{question.answer}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default QuestionCard;
