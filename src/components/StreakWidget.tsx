import React, { useEffect } from 'react';
import { Flame } from 'lucide-react';
import { useUserStore } from '../store/userStore';
import { motion } from 'motion/react';

export default function StreakWidget() {
  const { stats, initializeUser, updateStreak } = useUserStore();

  useEffect(() => {
    initializeUser();
    updateStreak();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full px-4 py-2 shadow-lg flex items-center justify-center gap-2 font-bold text-sm">
        <Flame size={20} className="animate-bounce flex-shrink-0" />
        <div className="flex flex-col items-center">
          <span className="leading-none">{stats.currentStreak}</span>
          {stats.currentStreak > 0 && (
            <span className="text-xs opacity-90 leading-none">day{stats.currentStreak > 1 ? 's' : ''}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
