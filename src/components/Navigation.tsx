import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { NAV_ITEMS, THEME_LIGHT } from "../constants";
import { DownloadIcon, MoonIcon, SunIcon } from "./Icons";
import { personalInfo } from "../data/cvData";
import { trackClick } from "../analytics";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState<string>("");
  const nextTheme = theme === THEME_LIGHT ? "dark" : "light";

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => !!el
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="nav" aria-label="Main">
      <div className="nav-pill">
        <a href="#home" className="nav-logo" aria-label="Back to top">
          GA
        </a>
        <ul className="nav-menu">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? "is-active" : undefined}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="nav-cv"
          href={personalInfo.cvUrl}
          download
          aria-label="Download CV"
          onClick={() => trackClick("cv_download", "nav")}
        >
          <DownloadIcon className="icon" />
          <span>CV</span>
        </a>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${nextTheme} mode`}
          title={`Switch to ${nextTheme} mode`}
        >
          {theme === THEME_LIGHT ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </nav>
  );
}
