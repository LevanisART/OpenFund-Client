import { create } from "zustand";

interface AuthStore {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  init: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  login: (token: string) => {
    localStorage.setItem("accessToken", token);
    set({ isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    set({ isAuthenticated: false });
  },
  init: () => {
    const token = localStorage.getItem("accessToken");
    set({ isAuthenticated: !!token });
  },
}));
