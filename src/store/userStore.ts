import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserStats, Achievement, DailyStreak } from './types';

const ALL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-quiz',
    name: 'First Blood',
    description: 'Complete your first quiz',
    icon: '🩸',
  },
  {
    id: 'streak-3',
    name: 'On Fire',
    description: '3-day streak',
    icon: '🔥',
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    description: '7-day streak',
    icon: '⚔️',
  },
  {
    id: 'streak-14',
    name: 'Two Weeks Strong',
    description: '14-day streak',
    icon: '💪',
  },
  {
    id: 'streak-30',
    name: 'Unstoppable',
    description: '30-day streak',
    icon: '🌟',
  },
  {
    id: 'perfect-quiz',
    name: 'Perfectionist',
    description: '100% on a quiz',
    icon: '⭐',
  },
  {
    id: 'speed-demon',
    name: 'Speed Racer',
    description: 'Answer 5 questions in < 1s each',
    icon: '⚡',
  },
  {
    id: 'accuracy-90',
    name: 'Accuracy Master',
    description: 'Achieve 90%+ accuracy',
    icon: '🎯',
  },
  {
    id: 'night-owl',
    name: 'Night Owl',
    description: 'Study between midnight and 3am',
    icon: '🦉',
  },
  {
    id: 'questions-100',
    name: 'Century Club',
    description: 'Study 100+ questions',
    icon: '💯',
  },
];

interface UserStore {
  stats: UserStats;
  initializeUser: () => void;
  addQuizResult: (accuracy: number, timeSpent: number, questionCount: number) => void;
  updateStreak: () => void;
  addXP: (amount: number) => void;
  recordWeakArea: (topic: string) => void;
  checkAchievements: () => void;
  resetAllData: () => void;
  getLevel: (xp: number) => number;
}

const defaultStats: UserStats = {
  totalQuestionsStudied: 0,
  totalQuizzesTaken: 0,
  totalTimeSpent: 0,
  currentStreak: 0,
  longestStreak: 0,
  overallAccuracy: 0,
  totalXP: 0,
  level: 1,
  dailyStreaks: {},
  achievements: [],
  weakAreas: [],
};

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      stats: defaultStats,

      initializeUser: () => {
        set((state) => {
          const today = new Date().toISOString().split('T')[0];
          const streaks = state.stats.dailyStreaks;
          
          // Check if user already quizzed today
          if (!streaks[today]) {
            return {
              stats: {
                ...state.stats,
                dailyStreaks: { ...streaks, [today]: false },
              },
            };
          }
          return state;
        });
      },

      addQuizResult: (accuracy: number, timeSpent: number, questionCount: number) => {
        set((state) => {
          const today = new Date().toISOString().split('T')[0];
          const newStats = { ...state.stats };

          // Update totals
          newStats.totalQuestionsStudied += questionCount;
          newStats.totalQuizzesTaken += 1;
          newStats.totalTimeSpent += timeSpent;

          // Update accuracy (running average)
          newStats.overallAccuracy =
            (newStats.overallAccuracy * (newStats.totalQuizzesTaken - 1) + accuracy) /
            newStats.totalQuizzesTaken;

          // Mark today as completed
          newStats.dailyStreaks[today] = true;

          // Update streak
          get().updateStreak();

          // Award XP
          const xpEarned = Math.round(accuracy * 100) + Math.min(timeSpent / 10, 25);
          newStats.totalXP += xpEarned;
          newStats.level = get().getLevel(newStats.totalXP);

          return { stats: newStats };
        });

        get().checkAchievements();
      },

      updateStreak: () => {
        set((state) => {
          const today = new Date();
          const yesterday = new Date(today);
          yesterday.setDate(yesterday.getDate() - 1);

          const todayStr = today.toISOString().split('T')[0];
          const yesterdayStr = yesterday.toISOString().split('T')[0];

          const streaks = state.stats.dailyStreaks;
          let currentStreak = state.stats.currentStreak;

          if (streaks[todayStr]) {
            // Completed today
            if (streaks[yesterdayStr]) {
              // Had streak yesterday, continue it
              currentStreak += 1;
            } else {
              // Start new streak
              currentStreak = 1;
            }
          } else {
            // Didn't complete today
            if (streaks[yesterdayStr]) {
              // Had streak yesterday, but lost it
              currentStreak = 0;
            }
          }

          const longestStreak = Math.max(
            currentStreak,
            state.stats.longestStreak
          );

          return {
            stats: {
              ...state.stats,
              currentStreak,
              longestStreak,
              dailyStreaks: streaks,
            },
          };
        });
      },

      addXP: (amount: number) => {
        set((state) => {
          const newXP = state.stats.totalXP + amount;
          return {
            stats: {
              ...state.stats,
              totalXP: newXP,
              level: get().getLevel(newXP),
            },
          };
        });
      },

      recordWeakArea: (topic: string) => {
        set((state) => {
          const weakAreas = state.stats.weakAreas;
          if (!weakAreas.includes(topic)) {
            weakAreas.push(topic);
          }
          return {
            stats: {
              ...state.stats,
              weakAreas: weakAreas.slice(-5), // Keep only last 5
            },
          };
        });
      },

      checkAchievements: () => {
        set((state) => {
          const newAchievements = [...state.stats.achievements];
          const unlockedIds = newAchievements.map((a) => a.id);
          const stats = state.stats;

          // Check achievements
          ALL_ACHIEVEMENTS.forEach((achievement) => {
            if (unlockedIds.includes(achievement.id)) return;

            let shouldUnlock = false;

            switch (achievement.id) {
              case 'first-quiz':
                shouldUnlock = stats.totalQuizzesTaken >= 1;
                break;
              case 'streak-3':
                shouldUnlock = stats.currentStreak >= 3;
                break;
              case 'streak-7':
                shouldUnlock = stats.currentStreak >= 7;
                break;
              case 'streak-14':
                shouldUnlock = stats.currentStreak >= 14;
                break;
              case 'streak-30':
                shouldUnlock = stats.currentStreak >= 30;
                break;
              case 'perfect-quiz':
                shouldUnlock = stats.overallAccuracy === 100;
                break;
              case 'accuracy-90':
                shouldUnlock = stats.overallAccuracy >= 90;
                break;
              case 'night-owl': {
                const hour = new Date().getHours();
                shouldUnlock = hour >= 0 && hour <= 3;
                break;
              }
              case 'questions-100':
                shouldUnlock = stats.totalQuestionsStudied >= 100;
                break;
            }

            if (shouldUnlock) {
              newAchievements.push({
                ...achievement,
                unlockedAt: new Date(),
              });
            }
          });

          return {
            stats: {
              ...state.stats,
              achievements: newAchievements,
            },
          };
        });
      },

      getLevel: (xp: number): number => {
        // XP thresholds for levels
        // Level 1: 0-500, Level 2: 500-1200, etc. (non-linear progression)
        const thresholds = [0, 500, 1200, 2100, 3200, 4500, 6000, 7700, 9600, 11700];
        
        let level = 1;
        for (let i = 0; i < thresholds.length; i++) {
          if (xp >= thresholds[i]) {
            level = i + 1;
          } else {
            break;
          }
        }
        return level;
      },

      resetAllData: () => {
        set({ stats: defaultStats });
      },
    }),
    {
      name: 'user-store',
    }
  )
);
