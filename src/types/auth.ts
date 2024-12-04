export interface User {
  id: string;
  email: string;
  name: string;
  graduationYear: number;
  department: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
}