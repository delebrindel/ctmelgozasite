import { create } from "zustand";
import { ROUTES } from "./Constants.Enum";

export const useAppStore = create<{
  currentRoute: string;
  changeRoute: (newRoute: string) => void;
}>((set) => ({
  currentRoute: ROUTES.ABOUT,
  changeRoute: (newRoute: string) => set({ currentRoute: newRoute }),
}));
