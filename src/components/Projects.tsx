import type { CSSProperties } from "react";
import { personalInfo, projects } from "../data/cvData";
import { trackClick } from "../analytics";
import { ExternalIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          id="projects-title"
          title="Selected projects"
          lead="Highlights from the roles above. Screens and more detail are in the full portfolio."
        />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`card project${p.featured ? " is-featured" : ""}`}
              data-reveal
              style={{ "--d": i % 3 } as CSSProperties}
            >
              <div className="project-top">
                <p className="project-company">{p.company}</p>
                {p.status && <span className="project-status">{p.status}</span>}
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-summary">{p.summary}</p>
              <p className="project-role">
                <span className="project-label">My role</span>
                {p.role}
              </p>
              {p.highlights && (
                <ul className="project-highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              {p.outcome && <p className="project-outcome">{p.outcome}</p>}
              <p className="project-label project-stack-label">Tech stack</p>
              <ul className="chips project-stack" aria-label="Tech stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          ))}
          <a
            className="card project project-more"
            href={personalInfo.contact.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            onClick={() => trackClick("portfolio", "projects")}
          >
            <span className="project-more-label">Full project portfolio</span>
            <span className="project-more-sub">Screens, details and more projects on Notion</span>
            <ExternalIcon className="icon project-more-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
