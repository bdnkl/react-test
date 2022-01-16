import React, {createContext} from "react";

import useTheme, {ThemeType} from "../hooks/useTheme";

interface ThemeContextValue {
  theme: ThemeType,
  setTheme: (arg: ThemeType) => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({children, startingTheme}) {
  const {theme, setTheme} = useTheme(startingTheme);

  function handleSetTheme(newTheme: ThemeType) {
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme: handleSetTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext)


  if (context === undefined) {
    throw new Error('useThemeContext should be used within an ThemeProvider.')
  }

  return context
}
