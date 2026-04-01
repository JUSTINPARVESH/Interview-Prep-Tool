export type Role = 'Frontend Developer' | 'Backend Developer' | 'Full Stack Developer' | '';

export interface Question {
  id: string;
  text: string;
  answer: string;
  options?: string[]; // For MCQs
  role: Role;
  skills: string[];
}

export type AppMode = 'study' | 'quiz';
export type QuizType = 'mcq' | 'short';
