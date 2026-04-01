import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Question } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';

interface QuestionCardProps {
  question: Question;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="p-5 rounded-xl shadow-sm border transition-all duration-300 flex flex-col h-full bg-white border-gray-100 hover:border-blue-200 hover:shadow-md"
    >
      <div className="flex justify-between items-start mb-4">
        <p className="text-lg font-medium leading-tight text-gray-800">
          {question.text}
        </p>
      </div>

      <div className="flex-grow">
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-3"
        >
          {showAnswer ? <EyeOff size={16} /> : <Eye size={16} />}
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>

        <AnimatePresence>
          {showAnswer && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mb-4">
                <div className="markdown-body">
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
