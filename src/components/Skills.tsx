import type { CSSProperties } from "react";
import { skillGroups } from "../data/cvData";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader id="skills-title" title="Skills" />
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className="card skills-card"
              data-reveal
              style={{ "--d": i % 3 } as CSSProperties}
            >
              <h3 className="skills-title">{group.label}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
