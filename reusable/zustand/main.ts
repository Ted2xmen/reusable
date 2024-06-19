import { create } from "zustand";
import { createSelector } from "./createSelector";

interface MainState {
  isSheetOpen: boolean | undefined;
  selectedArticle: any;
  setSelectedArticle: (selectedArticle: any) => any;
  setIsSheetOpen: (isSheetOpen: boolean) => void;
  history: [];
  setHistory: (history: []) => void;
}

export const useMainStore = create<MainState>()((set) => ({
  isSheetOpen: false,
  selectedArticle: {},
  setSelectedArticle: (selectedArticle: {}) => set({ selectedArticle }),
  setIsSheetOpen: (isSheetOpen: boolean) => set({ isSheetOpen }),
  history: [],
  setHistory: (history: []) => set({ history }),
}));

export const fromStore = createSelector(useMainStore);
