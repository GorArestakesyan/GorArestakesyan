import type { CSSProperties } from "react";
import { personalInfo, projects } from "../data/cvData";
import type { Project } from "../types";
import { trackClick } from "../analytics";
import { ExternalIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

function ProjectLinks({ links }: { links: NonNullable<Project["links"]> }) {
  return (
    <ul className="project-links">
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick("project_link", "projects")}
          >
            {l.label}
            <ExternalIcon className="icon" />
          </a>
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <article
      className={`card project${p.featured ? " is-featured" : ""}`}
      data-reveal
      style={{ "--d": i % 3 } as CSSProperties}
    >
      {/* Featured cards lay these two parts side by side; others stack them. */}
      <div className="project-main">
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
        {p.featured && p.links && <ProjectLinks links={p.links} />}
      </div>

      <div className="project-details">
        {p.highlights && (
          <ul className="project-highlights">
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        {p.outcome && <p className="project-outcome">{p.outcome}</p>}
        {!p.featured && p.links && <ProjectLinks links={p.links} />}
        <p className="project-label project-stack-label">Tech stack</p>
        <ul className="chips project-stack" aria-label="Tech stack">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          id="projects-title"
          title="Selected projects"
          lead="Highlights from the roles above. Screens and more detail are in the full portfolio."
        />
        <div className="projects-layout">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
          <div className="projects-masonry">
            {rest.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </div>
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
