import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useSettingsStore } from '../store/settingsStore';

export default function ThemeToggle() {
  const { theme, setTheme, isDarkMode } = useSettingsStore();
  const dark = isDarkMode();

  return (
    <button
      onClick={() => {
        const newMode = theme.mode === 'light' ? 'dark' : theme.mode === 'dark' ? 'auto' : 'light';
        setTheme(newMode);
      }}
      className="p-2 rounded-lg transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
      title={`Current theme: ${theme.mode}`}
      aria-label="Toggle theme"
    >
      {dark ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
