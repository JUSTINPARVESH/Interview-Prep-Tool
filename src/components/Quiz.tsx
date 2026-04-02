import React, { useState, useEffect, useRef, useMemo } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award, Eye, EyeOff, Mic, MicOff, Send, HelpCircle, List, Type as TypeIcon } from 'lucide-react';
import { Question, QuizType } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { useUserStore } from '../store/userStore';

interface QuizProps {
  questions: Question[];
  onClose: () => void;
}

export default function Quiz({ questions, onClose }: QuizProps) {
  const [quizType, setQuizType] = useState<QuizType | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ id: string; answer: string; isCorrect?: boolean }[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [shortAnswerText, setShortAnswerText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [mcqCount, setMcqCount] = useState<number>(25);
  const [shortAnswerCount, setShortAnswerCount] = useState<number>(25);
  const recognitionRef = useRef<any>(null);
  const [quizStartTime] = useState<Date>(new Date());
  const [resultsRecorded, setResultsRecorded] = useState(false);
  
  // Use user store to save quiz results
  const { addQuizResult } = useUserStore();

  // Calculate results once and memoize to prevent recalculation
  const quizResults = useMemo(() => {
    if (!isFinished || shuffledQuestions.length === 0) return null;
    
    const score = userAnswers.filter(a => a.isCorrect).length;
    const totalCount = shuffledQuestions.length;
    const accuracy = (score / totalCount) * 100;
    const duration = (new Date().getTime() - quizStartTime.getTime()) / 1000;

    return {
      accuracy,
      duration,
      correctCount: score,
      totalCount,
    };
  }, [isFinished, shuffledQuestions.length, userAnswers, quizStartTime]);

  // Save results to store when quiz finishes (only once)
  useEffect(() => {
    if (quizResults && isFinished && !resultsRecorded) {
      addQuizResult(quizResults.accuracy, quizResults.duration, quizResults.totalCount);
      setResultsRecorded(true);
    }
  }, [quizResults, isFinished, resultsRecorded, addQuizResult]);

  useEffect(() => {
    // Initialize Speech Recognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setShortAnswerText(prev => prev + ' ' + transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const startQuiz = (type: QuizType) => {
    if (type === 'mcq') {
      // For MCQ, we'll ask for count first, then start with selected count
      setQuizType('mcq-count');
    } else if (type === 'short') {
      // For Short Answer, we'll ask for count first, then start with selected count
      setQuizType('short-count');
    }
  };

  const startMcqWithCount = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const limitedQuestions = shuffled.slice(0, mcqCount);
    setShuffledQuestions(limitedQuestions);
    setQuizType('mcq');
    setCurrentIndex(0);
    setUserAnswers([]);
    setIsFinished(false);
  };

  const startShortAnswerWithCount = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const limitedQuestions = shuffled.slice(0, shortAnswerCount);
    setShuffledQuestions(limitedQuestions);
    setQuizType('short');
    setCurrentIndex(0);
    setUserAnswers([]);
    setIsFinished(false);
  };

  const handleMCQAnswer = (selectedOption: string) => {
    const currentQuestion = shuffledQuestions[currentIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    
    const newAnswers = [...userAnswers, { id: currentQuestion.id, answer: selectedOption, isCorrect }];
    setUserAnswers(newAnswers);

    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleShortAnswerSubmit = () => {
    const currentQuestion = shuffledQuestions[currentIndex];
    // For short answers, we don't auto-grade strictly, but we store it
    const newAnswers = [...userAnswers, { id: currentQuestion.id, answer: shortAnswerText }];
    setUserAnswers(newAnswers);
    setShortAnswerText('');

    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const restartQuiz = () => {
    setQuizType(null);
    setIsFinished(false);
    setMcqCount(25); // Reset to default
    setShortAnswerCount(25); // Reset to default
  };

  if (!quizType) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Choose Quiz Type</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">Select how you'd like to test your knowledge today.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => startQuiz('mcq')}
              className="group bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all text-left overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-300 mb-4 group-hover:scale-110 transition-transform">
                  <List size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Multiple Choice</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Test your knowledge by selecting the correct answers from multiple options. Perfect for reinforcing concepts.
                </p>
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => startQuiz('short')}
              className="group bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border-2 border-gray-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all text-left overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-300 mb-4 group-hover:scale-110 transition-transform">
                  <TypeIcon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Short Answer</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Type or speak your answers. Great for practicing explanations and demonstrating deep understanding.
                </p>
              </div>
            </motion.button>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={onClose}
            className="w-full text-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 font-semibold transition-colors py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            ← Back to Study Mode
          </motion.button>
        </div>
      </motion.div>
    );
  }

  if (quizType === 'short-count') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Number of Questions</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">How many short answer questions would you like to attempt?</p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[25, 50, 75, questions.length].map((count, idx) => (
              <motion.button
                key={count}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShortAnswerCount(count)}
                className={`p-6 sm:p-8 rounded-2xl border-2 transition-all font-bold text-lg sm:text-xl ${
                  shortAnswerCount === count
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-200 shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div>{count === questions.length ? 'All' : count}</div>
                <div className="text-xs sm:text-sm font-normal text-gray-500 mt-2">{count === questions.length ? 'questions' : 'questions'}</div>
              </motion.button>
            ))}
          </div>

          <div className="space-y-3">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startShortAnswerWithCount}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 hover:from-purple-700 hover:to-purple-800 dark:hover:from-purple-600 dark:hover:to-purple-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-500/30 text-lg"
            >
              Start Quiz ({shortAnswerCount} questions)
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setQuizType(null)}
              className="w-full text-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 font-semibold transition-colors py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              ← Change Quiz Type
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (quizType === 'mcq-count') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Number of Questions</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">How many multiple choice questions would you like to attempt?</p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[25, 50, 75, questions.length].map((count, idx) => (
              <motion.button
                key={count}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMcqCount(count)}
                className={`p-6 sm:p-8 rounded-2xl border-2 transition-all font-bold text-lg sm:text-xl ${
                  mcqCount === count
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div>{count === questions.length ? 'All' : count}</div>
                <div className="text-xs sm:text-sm font-normal text-gray-500 mt-2">{count === questions.length ? 'questions' : 'questions'}</div>
              </motion.button>
            ))}
          </div>

          <div className="space-y-3">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startMcqWithCount}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-500/30 text-lg"
            >
              Start Quiz ({mcqCount} questions)
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setQuizType(null)}
              className="w-full text-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 font-semibold transition-colors py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              ← Change Quiz Type
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (isFinished && quizResults) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex flex-col"
      >
        <div className="w-full max-w-3xl mx-auto pb-12 sm:pb-20 px-4 flex-1">
          {/* Results Header Card */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 text-center mb-8 transition-colors"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-full"
            >
              <Award size={56} className="text-blue-600 dark:text-blue-300" />
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Quiz Complete!</h2>
            <p className="text-gray-500 dark:text-gray-400 text-base mb-8">Great effort! You're making progress.</p>
            
            {quizType === 'mcq' && (
              <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-2xl border border-blue-200 dark:border-blue-700"
                >
                  <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-300 uppercase font-bold tracking-wide mb-2">Score</p>
                  <p className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-200">
                    {quizResults.correctCount}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">out of {quizResults.totalCount}</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-700"
                >
                  <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-300 uppercase font-bold tracking-wide mb-2">Accuracy</p>
                  <p className="text-3xl sm:text-4xl font-bold text-emerald-700 dark:text-emerald-200">
                    {Math.round(quizResults.accuracy)}%
                  </p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-300 mt-1">performance</p>
                </motion.div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={restartQuiz}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-bold py-3 px-6 sm:px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-500/30 text-sm sm:text-base flex-1 sm:flex-initial"
              >
                <RotateCcw size={18} />
                New Quiz
              </button>
              
              <button
                onClick={onClose}
                className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-bold py-3 px-6 sm:px-8 rounded-xl transition-all text-sm sm:text-base flex-1 sm:flex-initial"
              >
                Back to Study
              </button>
            </div>
          </motion.div>

          {/* Detailed Review Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 px-2">Detailed Review</h3>
            <div className="space-y-4">
              {shuffledQuestions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns?.isCorrect;
                
                return (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors hover:shadow-md"
                  >
                    {/* Question Header */}
                    <div className="p-5 sm:p-6 border-b border-gray-100 dark:border-gray-700">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-bold text-sm sm:text-base ${
                          quizType === 'mcq' && isCorrect 
                            ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                            : quizType === 'mcq' 
                            ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                            : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        }`}>
                          {idx + 1}
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{q.text}</p>
                        </div>
                        {quizType === 'mcq' && (
                          isCorrect ? (
                            <CheckCircle size={20} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                          ) : (
                            <XCircle size={20} className="text-red-600 dark:text-red-400 flex-shrink-0" />
                          )
                        )}
                      </div>
                    </div>

                    {/* Answers Section */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <div className={`p-4 rounded-lg border-l-4 text-sm ${
                        quizType === 'mcq' 
                          ? (isCorrect 
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-800 dark:text-green-300'
                            : 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-800 dark:text-red-300')
                          : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-800 dark:text-blue-300'
                      }`}>
                        <p className="font-bold uppercase text-xs mb-1">Your Answer</p>
                        <p className="text-sm">{userAns?.answer || '(No answer provided)'}</p>
                      </div>

                      <div className="p-4 rounded-lg border-l-4 border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 text-sm">
                        <p className="font-bold uppercase text-xs mb-1">Correct Answer</p>
                        <p className="text-sm">{q.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  const currentQuestion = shuffledQuestions[currentIndex];

  return (
    <div className="min-h-screen flex flex-col pt-4 sm:pt-6 pb-8 px-4">
      <div className="w-full max-w-2xl mx-auto flex-1">
        {/* Quiz Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={onClose}
              className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              ← Exit
            </button>
            <span className="text-xs sm:text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
              {quizType === 'mcq' ? 'MCQ' : 'Short Answer'} • {currentIndex + 1}/{shuffledQuestions.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full">
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / shuffledQuestions.length) * 100}%` }}
                className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 h-full rounded-full transition-all"
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 text-right">{Math.round(((currentIndex + 1) / shuffledQuestions.length) * 100)}% complete</p>
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors mb-6"
          >
            {/* Question Section */}
            <div className="p-8 sm:p-10 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                {currentQuestion.text}
              </h3>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Question {currentIndex + 1} of {shuffledQuestions.length}</span>
              </div>
            </div>

            {/* Answers Section */}
            <div className="p-8 sm:p-10">
              {quizType === 'mcq' ? (
                // MCQ Options
                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options?.map((option, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleMCQAnswer(option)}
                      className="w-full text-left p-4 sm:p-5 rounded-2xl border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all font-medium text-gray-700 dark:text-gray-300 flex items-center gap-3 sm:gap-4 group"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white transition-colors text-sm sm:text-base">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1">{option}</span>
                    </motion.button>
                  ))}
                </div>
              ) : (
                // Short Answer Input
                <div className="space-y-4">
                  <div className="relative">
                    <textarea
                      value={shortAnswerText}
                      onChange={(e) => setShortAnswerText(e.target.value)}
                      placeholder="Type your answer here... (minimum 10 characters)"
                      className="w-full p-5 rounded-2xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400 min-h-[140px] sm:min-h-[160px] text-gray-700 resize-none text-sm sm:text-base placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                    />
                    <button
                      onClick={toggleListening}
                      title={isListening ? "Stop listening" : "Use voice input (click to toggle)"}
                      className={`absolute bottom-4 right-4 p-3 rounded-full transition-all ${
                        isListening 
                          ? 'bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/50' 
                          : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500'
                      }`}
                    >
                      {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                    </button>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleShortAnswerSubmit}
                    disabled={!shortAnswerText.trim() || shortAnswerText.trim().length < 3}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Send size={18} />
                    {shortAnswerText.trim().length < 3 ? `Continue (${shortAnswerText.trim().length}/3 chars)` : 'Submit Answer'}
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
