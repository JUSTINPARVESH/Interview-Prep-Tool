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

  // Generate dynamic question options based on available questions
  const getQuestionOptions = (totalQuestions: number): number[] => {
    const options: number[] = [];
    
    // Define standard question counts in order of preference
    const standardOptions = [10, 25, 30, 40, 50, 60, 75, 100];
    
    // Add options that don't exceed total questions
    standardOptions.forEach(option => {
      if (option < totalQuestions) {
        options.push(option);
      }
    });
    
    // Always add "All" option (total questions)
    options.push(totalQuestions);
    
    // If no standard options fit (total questions <= 10), show appropriate smaller options
    if (options.length === 1) { // Only "All" was added
      if (totalQuestions > 10) {
        options.unshift(10);
      } else if (totalQuestions > 5) {
        options.unshift(5);
      } else if (totalQuestions > 2) {
        options.unshift(Math.floor(totalQuestions / 2));
      }
    }
    
    // Limit to maximum 3 options for UI clarity (10, 25, All when possible)
    if (options.length > 3) {
      // Keep the most relevant options: 10, 25, and All
      const result = [];
      
      // Add 10 if available
      if (options.includes(10)) {
        result.push(10);
      } else {
        result.push(options[0]); // First available option
      }
      
      // Add 25 if available, otherwise middle option
      if (options.includes(25)) {
        result.push(25);
      } else if (options.length > 2) {
        result.push(options[Math.floor(options.length / 2)]);
      }
      
      // Always add All
      result.push(options[options.length - 1]);
      
      return result;
    }
    
    return options;
  };

  // Get dynamic options for current question set
  const availableQuestionOptions = getQuestionOptions(questions.length);

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
      // Set default to first available option
      setMcqCount(availableQuestionOptions[0]);
    } else if (type === 'short') {
      // For Short Answer, we'll ask for count first, then start with selected count
      setQuizType('short-count');
      // Set default to first available option
      setShortAnswerCount(availableQuestionOptions[0]);
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

  // Helper function to normalize answers for flexible comparison
  const normalizeAnswer = (answer: string): string => {
    return answer
      .trim()                    // Remove leading/trailing spaces
      .toLowerCase()             // Convert to lowercase
      .replace(/[.,!?]+$/, '')   // Remove trailing punctuation (.,!?)
      .replace(/\s+/g, ' ')     // Replace multiple spaces with single space
      .trim();                  // Trim again after punctuation removal
  };

  const handleMCQAnswer = (selectedOption: string) => {
    const currentQuestion = shuffledQuestions[currentIndex];
    const isCorrect = normalizeAnswer(selectedOption) === normalizeAnswer(currentQuestion.answer);
    
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
    // Auto-grade short answers using normalized comparison
    const isCorrect = normalizeAnswer(shortAnswerText) === normalizeAnswer(currentQuestion.answer);
    
    const newAnswers = [...userAnswers, { id: currentQuestion.id, answer: shortAnswerText, isCorrect }];
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
    setMcqCount(availableQuestionOptions[0]); // Reset to first available option
    setShortAnswerCount(availableQuestionOptions[0]); // Reset to first available option
  };

  if (!quizType) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex flex-col items-center justify-center px-3 sm:px-4 md:px-6"
      >
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Choose Quiz Type</h2>
            <p className="text-lg text-gray-500">Select how you'd like to test your knowledge today.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => startQuiz('mcq')}
              className="group bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-blue-500 transition-all text-left overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  <List size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Multiple Choice</h3>
                <p className="text-gray-600 leading-relaxed">
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
              className="group bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-purple-500 transition-all text-left overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                  <TypeIcon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Short Answer</h3>
                <p className="text-gray-600 leading-relaxed">
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
            className="w-full text-center text-gray-400 hover:text-gray-600 font-semibold transition-colors py-3 rounded-lg hover:bg-gray-100"
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
        className="min-h-screen flex flex-col items-center justify-center px-3 sm:px-4 md:px-6"
      >
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Number of Questions</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-2">How many short answer questions would you like to attempt?</p>
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-full">
              <span className="text-purple-700 font-semibold text-xs sm:text-sm">Total Available: {questions.length} Questions</span>
            </div>
          </motion.div>
          
          <div className={`grid gap-3 sm:gap-4 mb-8 ${availableQuestionOptions.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : availableQuestionOptions.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 max-w-sm mx-auto'}`}>
            {availableQuestionOptions.map((count, idx) => (
              <motion.button
                key={count}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShortAnswerCount(count)}
                className={`p-4 sm:p-6 md:p-8 rounded-2xl border-2 transition-all font-bold text-base sm:text-lg md:text-xl ${
                  shortAnswerCount === count
                    ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-lg'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50 text-gray-700'
                }`}
              >
                <div>{count === questions.length ? `All (${count})` : count}</div>
                <div className="text-xs sm:text-sm font-normal text-gray-500 mt-2">questions</div>
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
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 sm:py-4 rounded-2xl transition-all shadow-lg hover:shadow-purple-200 text-sm sm:text-base md:text-lg"
            >
              Start Quiz ({shortAnswerCount === questions.length ? `All ${shortAnswerCount}` : shortAnswerCount} questions)
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setQuizType(null)}
              className="w-full text-center text-gray-400 hover:text-gray-600 font-semibold transition-colors py-3 rounded-lg hover:bg-gray-100"
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
        className="min-h-screen flex flex-col items-center justify-center px-3 sm:px-4 md:px-6"
      >
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Number of Questions</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-2">How many multiple choice questions would you like to attempt?</p>
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-full">
              <span className="text-blue-700 font-semibold text-xs sm:text-sm">Total Available: {questions.length} Questions</span>
            </div>
          </motion.div>
          
          <div className={`grid gap-3 sm:gap-4 mb-8 ${availableQuestionOptions.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : availableQuestionOptions.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 max-w-sm mx-auto'}`}>
            {availableQuestionOptions.map((count, idx) => (
              <motion.button
                key={count}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMcqCount(count)}
                className={`p-4 sm:p-6 md:p-8 rounded-2xl border-2 transition-all font-bold text-base sm:text-lg md:text-xl ${
                  mcqCount === count
                    ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-700'
                }`}
              >
                <div>{count === questions.length ? `All (${count})` : count}</div>
                <div className="text-xs sm:text-sm font-normal text-gray-500 mt-2">questions</div>
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
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 sm:py-4 rounded-2xl transition-all shadow-lg hover:shadow-blue-200 text-sm sm:text-base md:text-lg"
            >
              Start Quiz ({mcqCount === questions.length ? `All ${mcqCount}` : mcqCount} questions)
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setQuizType(null)}
              className="w-full text-center text-gray-400 hover:text-gray-600 font-semibold transition-colors py-3 rounded-lg hover:bg-gray-100"
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
            className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100 text-center mb-8 transition-colors"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full"
            >
              <Award size={56} className="text-blue-600" />
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Quiz Complete!</h2>
            <p className="text-gray-500 text-base mb-8">Great effort! You're making progress.</p>
            
            {quizType === 'mcq' && (
              <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200"
                >
                  <p className="text-xs sm:text-sm text-blue-600 uppercase font-bold tracking-wide mb-2">Score</p>
                  <p className="text-3xl sm:text-4xl font-bold text-blue-700">
                    {quizResults.correctCount}
                  </p>
                  <p className="text-sm text-blue-600 mt-1">out of {quizResults.totalCount}</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl border border-emerald-200"
                >
                  <p className="text-xs sm:text-sm text-emerald-600 uppercase font-bold tracking-wide mb-2">Accuracy</p>
                  <p className="text-3xl sm:text-4xl font-bold text-emerald-700">
                    {Math.round(quizResults.accuracy)}%
                  </p>
                  <p className="text-sm text-emerald-600 mt-1">performance</p>
                </motion.div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 border-t border-gray-200">
              <button
                onClick={restartQuiz}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 sm:px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-200 text-sm sm:text-base flex-1 sm:flex-initial"
              >
                <RotateCcw size={18} />
                New Quiz
              </button>
              
              <button
                onClick={onClose}
                className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 sm:px-8 rounded-xl transition-all text-sm sm:text-base flex-1 sm:flex-initial"
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 px-2">Detailed Review</h3>
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
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-colors hover:shadow-md"
                  >
                    {/* Question Header */}
                    <div className="p-5 sm:p-6 border-b border-gray-100">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-bold text-sm sm:text-base ${
                          quizType === 'mcq' && isCorrect 
                            ? 'bg-green-100 text-green-700'
                            : quizType === 'mcq' 
                            ? 'bg-red-100 text-red-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {idx + 1}
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-semibold text-gray-900 text-sm sm:text-base">{q.text}</p>
                        </div>
                        {quizType === 'mcq' && (
                          isCorrect ? (
                            <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                          ) : (
                            <XCircle size={20} className="text-red-600 flex-shrink-0" />
                          )
                        )}
                      </div>
                    </div>

                    {/* Answers Section */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <div className={`p-4 rounded-lg border-l-4 text-sm ${
                        quizType === 'mcq' 
                          ? (isCorrect 
                            ? 'bg-green-50 border-green-500 text-green-800'
                            : 'bg-red-50 border-red-500 text-red-800')
                          : 'bg-blue-50 border-blue-500 text-blue-800'
                      }`}>
                        <p className="font-bold uppercase text-xs mb-1">Your Answer</p>
                        <p className="text-sm">{userAns?.answer || '(No answer provided)'}</p>
                      </div>

                      <div className="p-4 rounded-lg border-l-4 border-gray-400 bg-gray-50 text-gray-800 text-sm">
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
              className="text-xs sm:text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              ← Exit
            </button>
            <span className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider bg-gray-100 px-4 py-2 rounded-full">
              {quizType === 'mcq' ? 'MCQ' : 'Short Answer'} • {currentIndex + 1}/{shuffledQuestions.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full">
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / shuffledQuestions.length) * 100}%` }}
                className="bg-gradient-to-r from-blue-600 to-blue-500 h-full rounded-full transition-all"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-right">{Math.round(((currentIndex + 1) / shuffledQuestions.length) * 100)}% complete</p>
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-colors mb-6"
          >
            {/* Question Section */}
            <div className="p-8 sm:p-10 border-b border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-6">
                {currentQuestion.text}
              </h3>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
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
                      className="w-full text-left p-4 sm:p-5 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all font-medium text-gray-700 flex items-center gap-3 sm:gap-4 group"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors text-sm sm:text-base">
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
                      className="w-full p-5 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[140px] sm:min-h-[160px] text-gray-700 resize-none text-sm sm:text-base placeholder-gray-400 transition-all"
                    />
                    <button
                      onClick={toggleListening}
                      title={isListening ? "Stop listening" : "Use voice input (click to toggle)"}
                      className={`absolute bottom-4 right-4 p-3 rounded-full transition-all ${
                        isListening 
                          ? 'bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/50' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
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
