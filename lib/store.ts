import { create } from 'zustand';

interface AppState {
  xp: number;
  streak: number;
  dailyGoal: number;
  addXP: (amount: number) => void;
  incrementStreak: () => void;
  setDailyGoal: (goal: number) => void;
}

export const useStore = create<AppState>((set) => ({
  xp: 0,
  streak: 0,
  dailyGoal: 100,
  addXP: (amount) => set((state) => ({ xp: state.xp + amount })),
  incrementStreak: () => set((state) => ({ streak: state.streak + 1 })),
  setDailyGoal: (goal) => set({ dailyGoal: goal }),
}));
