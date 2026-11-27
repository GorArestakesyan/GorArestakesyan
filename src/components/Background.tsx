import type { CSSProperties } from "react";
import { education, languages } from "../data/cvData";
import SectionHeader from "./SectionHeader";

export default function Background() {
  return (
    <section className="section" id="background" aria-labelledby="background-title">
      <div className="container">
        <SectionHeader id="background-title" title="Background" />
        <div className="bg-grid">
          <div className="card bg-card" data-reveal>
            <h3 className="skills-title">Education</h3>
            <ul className="bg-list">
              {education.map((edu) => (
                <li key={edu.degree}>
                  <div>
                    <p className="bg-primary">{edu.degree}</p>
                    <p className="bg-secondary">{edu.institution}</p>
                  </div>
                  <span className="bg-period">{edu.period}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card bg-card" data-reveal style={{ "--d": 1 } as CSSProperties}>
            <h3 className="skills-title">Languages</h3>
            <ul className="bg-list">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <div>
                    <p className="bg-primary">{lang.name}</p>
                    <p className="bg-secondary">{lang.level}</p>
                  </div>
                  <span
                    className="lang-meter"
                    aria-hidden="true"
                    style={{ "--level": lang.level === "Native" ? 1 : 0.7 } as CSSProperties}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
