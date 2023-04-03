import { createContext } from "react";

export const initialAppStateContext = {
  isLoading: false,
};

export const AppStateContext = createContext(initialAppStateContext);
