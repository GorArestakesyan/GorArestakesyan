import { useEffect, useState } from "react";
import type { Theme } from "../types";
import {
  THEME_STORAGE_KEY,
  THEME_DARK_CLASS,
  THEME_LIGHT,
  THEME_DARK,
} from "../constants";

// index.html sets the class before React loads, so read it as the source of truth.
const readTheme = (): Theme =>
  document.documentElement.classList.contains(THEME_DARK_CLASS)
    ? THEME_DARK
    : THEME_LIGHT;

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle(
      THEME_DARK_CLASS,
      theme === THEME_DARK
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
      localStorage.setItem(THEME_STORAGE_KEY, next);
      return next;
    });
  };

  return { theme, toggleTheme };
}
