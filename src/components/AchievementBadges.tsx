import React, { useState } from 'react';
import { X, Award } from 'lucide-react';
import { useUserStore } from '../store/userStore';
import { motion, AnimatePresence } from 'motion/react';

export default function AchievementBadges() {
  const { stats } = useUserStore();
  const [showFullList, setShowFullList] = useState(false);

  const displayedAchievements = showFullList ? stats.achievements : stats.achievements.slice(-3);

  if (stats.achievements.length === 0) {
    return null;
  }

  return (
    <>
      {/* Floating badge button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setShowFullList(true)}
        className="fixed top-4 left-4 z-40 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow border border-yellow-200"
        title="View achievements"
      >
        <Award size={24} className="text-yellow-500" />
        {stats.achievements.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {stats.achievements.length}
          </span>
        )}
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {showFullList && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFullList(false)}
            className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Award size={28} className="text-yellow-500" />
                  Achievements
                </h2>
                <button
                  onClick={() => setShowFullList(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {stats.achievements.map((achievement, idx) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg"
                  >
                    <div className="text-3xl">{achievement.icon}</div>
                    <div>
                      <p className="font-bold text-gray-900">{achievement.name}</p>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      {achievement.unlockedAt && (
                        <p className="text-xs text-gray-500 mt-1">
                          Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  {stats.achievements.length} of 10 achievements unlocked
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
