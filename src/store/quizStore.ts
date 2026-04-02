import { create } from 'zustand';
import { Question } from '../types';

export interface QuizSession {
  id: string;
  questions: Question[];
  currentIndex: number;
  userAnswers: { id: string; answer: string; isCorrect?: boolean }[];
  isFinished: boolean;
  startTime: Date;
  endTime?: Date;
  quizType: 'mcq' | 'short' | 'mixed';
}

interface QuizStore {
  currentSession: QuizSession | null;
  startQuiz: (questions: Question[], type: 'mcq' | 'short' | 'mixed') => void;
  submitAnswer: (answer: string) => void;
  nextQuestion: () => void;
  finishQuiz: () => void;
  resetQuiz: () => void;
  getCurrentQuestion: () => Question | null;
  getResults: () => {
    accuracy: number;
    duration: number;
    correctCount: number;
    totalCount: number;
  } | null;
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  currentSession: null,

  startQuiz: (questions: Question[], type: 'mcq' | 'short' | 'mixed') => {
    set({
      currentSession: {
        id: `quiz-${Date.now()}`,
        questions,
        currentIndex: 0,
        userAnswers: [],
        isFinished: false,
        startTime: new Date(),
        quizType: type,
      },
    });
  },

  submitAnswer: (answer: string) => {
    set((state) => {
      if (!state.currentSession) return state;

      const currentQuestion = state.currentSession.questions[state.currentSession.currentIndex];
      const isCorrect = answer === currentQuestion.answer;

      return {
        currentSession: {
          ...state.currentSession,
          userAnswers: [
            ...state.currentSession.userAnswers,
            {
              id: currentQuestion.id,
              answer,
              isCorrect,
            },
          ],
        },
      };
    });
  },

  nextQuestion: () => {
    set((state) => {
      if (!state.currentSession) return state;

      const nextIndex = state.currentSession.currentIndex + 1;
      const isFinished = nextIndex >= state.currentSession.questions.length;

      return {
        currentSession: {
          ...state.currentSession,
          currentIndex: nextIndex,
          isFinished,
          endTime: isFinished ? new Date() : undefined,
        },
      };
    });
  },

  finishQuiz: () => {
    set((state) => {
      if (!state.currentSession) return state;
      return {
        currentSession: {
          ...state.currentSession,
          isFinished: true,
          endTime: new Date(),
        },
      };
    });
  },

  resetQuiz: () => {
    set({ currentSession: null });
  },

  getCurrentQuestion: (): Question | null => {
    const session = get().currentSession;
    if (!session || session.currentIndex >= session.questions.length) {
      return null;
    }
    return session.questions[session.currentIndex];
  },

  getResults: () => {
    const session = get().currentSession;
    if (!session || !session.isFinished) {
      return null;
    }

    const correctCount = session.userAnswers.filter((a) => a.isCorrect).length;
    const totalCount = session.questions.length;
    const accuracy = (correctCount / totalCount) * 100;
    const duration = session.endTime
      ? (session.endTime.getTime() - session.startTime.getTime()) / 1000
      : 0;

    return {
      accuracy,
      duration,
      correctCount,
      totalCount,
    };
  },
}));
