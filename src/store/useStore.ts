import { create } from 'zustand';

interface AppState {
  isMenuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useStore = create<AppState>((set) => ({
  isMenuOpen: false,
  setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
  isLoading: true, // Started true for an initial loader animation
  setLoading: (isLoading) => set({ isLoading }),
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
}));
