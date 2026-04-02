// Shared types for stores
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface DailyStreak {
  [date: string]: boolean; // YYYY-MM-DD: true/false
}

export interface UserStats {
  totalQuestionsStudied: number;
  totalQuizzesTaken: number;
  totalTimeSpent: number; // in seconds
  currentStreak: number;
  longestStreak: number;
  overallAccuracy: number;
  totalXP: number;
  level: number;
  dailyStreaks: DailyStreak;
  achievements: Achievement[];
  weakAreas: string[]; // Array of topic names user is weak in
}

export interface Theme {
  mode: 'light' | 'dark' | 'auto';
}
