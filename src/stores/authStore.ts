import { create } from 'zustand';
import { AuthState, User } from '../types/auth';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user: User | null) => 
    set({ user, isAuthenticated: !!user }),
  logout: () => 
    set({ user: null, isAuthenticated: false }),
}));