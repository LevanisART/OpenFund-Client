import { create } from "zustand";

interface AuthFormT {
  data: {
    email?: string;
    password?: string;
    userName?: string;
  };
  setData: (data: Partial<AuthFormT["data"]>) => void;
}

export const useAuthFormStore = create<AuthFormT>((set) => ({
  data: {},
  setData: (data) => set((state) => ({ data: { ...state.data, ...data } })),
}));
