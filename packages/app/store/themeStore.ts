import { StateCreator } from 'zustand'
import { create } from 'zustand'

export interface ThemeSlice {
  theme: string;
  setTheme: (newTheme: string) => void
}


export const useThemeStore = create<ThemeSlice>((set) => ({
  theme: 'default',
  setTheme: (newTheme: string) => set({ theme: newTheme }),
}));