import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award, Eye, EyeOff, Mic, MicOff, Send, HelpCircle, List, Type as TypeIcon } from 'lucide-react';
import { Question, QuizType } from '../types';
import { motion, AnimatePresence } from 'motion/react';

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
  const recognitionRef = useRef<any>(null);

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
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setQuizType(type);
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
  };

  if (!quizType) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center py-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Choose Quiz Type</h2>
        <p className="text-gray-500 mb-8">Select how you want to be tested.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            onClick={() => startQuiz('mcq')}
            className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-500 transition-all text-left"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <List size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Multiple Choice</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Test your knowledge with 4 options for each question.
            </p>
          </button>

          <button
            onClick={() => startQuiz('short')}
            className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-500 transition-all text-left"
          >
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <TypeIcon size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Short Answer</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Type or speak your answer. Great for deep understanding.
            </p>
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-12 text-gray-400 hover:text-gray-600 font-semibold transition-colors"
        >
          Cancel and Return
        </button>
      </motion.div>
    );
  }

  if (isFinished) {
    const score = userAnswers.filter(a => a.isCorrect).length;
    const percentage = Math.round((score / shuffledQuestions.length) * 100);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl mx-auto pb-20"
      >
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center mb-8">
          <div className="mb-6 inline-block p-4 bg-blue-50 rounded-full text-blue-600">
            <Award size={64} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Results</h2>
          
          {quizType === 'mcq' && (
            <div className="grid grid-cols-2 gap-4 my-8 max-w-md mx-auto">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500 uppercase font-semibold mb-1">Score</p>
                <p className="text-3xl font-bold text-blue-600">{score} / {shuffledQuestions.length}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500 uppercase font-semibold mb-1">Accuracy</p>
                <p className="text-3xl font-bold text-blue-600">{percentage}%</p>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={restartQuiz}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-200"
            >
              <RotateCcw size={20} />
              New Quiz
            </button>
            <button
              onClick={onClose}
              className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-xl transition-all"
            >
              Back to Study
            </button>
          </div>
        </div>

        {/* Detailed Review */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 mb-4 px-2">Detailed Review</h3>
          {shuffledQuestions.map((q, idx) => {
            const userAns = userAnswers[idx];
            return (
              <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="font-bold text-gray-900 mb-3">{idx + 1}. {q.text}</p>
                <div className="space-y-2">
                  <div className={`p-3 rounded-lg text-sm ${
                    quizType === 'mcq' 
                      ? (userAns.isCorrect ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100')
                      : 'bg-blue-50 text-blue-700 border border-blue-100'
                  }`}>
                    <span className="font-bold uppercase mr-2">Your Answer:</span>
                    {userAns.answer || '(No answer)'}
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-100">
                    <span className="font-bold uppercase mr-2">Correct Answer:</span>
                    {q.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  }

  const currentQuestion = shuffledQuestions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Quiz Progress */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors"
          >
            Exit Quiz
          </button>
          <div className="h-4 w-px bg-gray-300" />
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
            {quizType === 'mcq' ? 'MCQ' : 'Short Answer'} | {currentIndex + 1} / {shuffledQuestions.length}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-8 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / shuffledQuestions.length) * 100}%` }}
          className="bg-blue-600 h-full rounded-full"
        />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 min-h-[450px] flex flex-col"
        >
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 leading-tight">
              {currentQuestion.text}
            </h3>

            {quizType === 'mcq' ? (
              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options?.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleMCQAnswer(option)}
                    className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all font-medium text-gray-700 flex items-center gap-3 group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <textarea
                    value={shortAnswerText}
                    onChange={(e) => setShortAnswerText(e.target.value)}
                    placeholder="Type your answer here..."
                    className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[150px] text-gray-700 resize-none"
                  />
                  <button
                    onClick={toggleListening}
                    className={`absolute bottom-4 right-4 p-3 rounded-full transition-all ${
                      isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                    title={isListening ? "Stop listening" : "Use voice input"}
                  >
                    {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                  </button>
                </div>
                <button
                  onClick={handleShortAnswerSubmit}
                  disabled={!shortAnswerText.trim()}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Submit Answer
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
