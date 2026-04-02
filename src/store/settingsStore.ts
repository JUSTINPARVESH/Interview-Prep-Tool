import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme } from './types';

interface SettingsStore {
  theme: Theme;
  setTheme: (mode: 'light' | 'dark' | 'auto') => void;
  isDarkMode: () => boolean;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      theme: {
        mode: 'auto',
      },

      setTheme: (mode: 'light' | 'dark' | 'auto') => {
        set({ theme: { mode } });
      },

      isDarkMode: (): boolean => {
        const mode = get().theme.mode;
        if (mode === 'auto') {
          return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return mode === 'dark';
      },
    }),
    {
      name: 'settings-store',
    }
  )
);
