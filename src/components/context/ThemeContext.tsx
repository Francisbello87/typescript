import { ReactNode, createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: ReactNode;
};
export const ThemeContext = createContext(theme);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children} </ThemeContext.Provider>
  );
}
