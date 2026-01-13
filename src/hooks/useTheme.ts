import { useState, useEffect } from "react";
import type { Theme } from "../types";
import {
  THEME_STORAGE_KEY,
  THEME_DARK_CLASS,
  THEME_MEDIA_QUERY,
  THEME_LIGHT,
  THEME_DARK,
} from "../constants";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(THEME_LIGHT);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted flag to indicate we're on the client
    setMounted(true);

    // Check localStorage for saved theme first
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme;
    if (savedTheme === THEME_LIGHT || savedTheme === THEME_DARK) {
      setTheme(savedTheme);
    } else {
      // Check system preference if no saved theme
      if (window.matchMedia(THEME_MEDIA_QUERY).matches) {
        setTheme(THEME_DARK);
      } else {
        setTheme(THEME_LIGHT);
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    if (theme === THEME_DARK) {
      root.classList.add(THEME_DARK_CLASS);
    } else {
      root.classList.remove(THEME_DARK_CLASS);
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEME_LIGHT ? THEME_DARK : THEME_LIGHT));
  };

  return { theme, toggleTheme, mounted };
}
