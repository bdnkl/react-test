import React, { useState } from "react";

export type ThemeType = "light" | "dark"

function useTheme(startingTheme: ThemeType = "light") {
  const [theme, setTheme] = useState<ThemeType>(startingTheme);

  function validateTheme(themeValue: ThemeType) {
    if (themeValue === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return {
    theme,
    setTheme: validateTheme,
  };
}

export default useTheme;
