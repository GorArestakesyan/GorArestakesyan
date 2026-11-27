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
  const featured = p.tier === "featured";
  return (
    <article
      className={`card project project-${p.tier}`}
      data-reveal
      style={{ "--d": i % 3 } as CSSProperties}
    >
      {/* Featured cards lay these two parts side by side; others stack them. */}
      <div className="project-main">
        <div className="project-top">
          {p.company && <p className="project-company">{p.company}</p>}
          {p.status && <span className="project-status">{p.status}</span>}
        </div>
        <h3 className="project-title">{p.title}</h3>
        <p className="project-summary">{p.summary}</p>
        {p.role && (
          <p className="project-role">
            <span className="project-label">My role</span>
            {p.role}
          </p>
        )}
        {featured && p.links && <ProjectLinks links={p.links} />}
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
        {!featured && p.links && <ProjectLinks links={p.links} />}
        {p.stack && (
          <>
            <p className="project-label project-stack-label">Tech stack</p>
            <ul className="chips project-stack" aria-label="Tech stack">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const tier = (t: Project["tier"]) => projects.filter((p) => p.tier === t);

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          id="projects-title"
          title="Selected projects"
          lead="Strongest first: apps I built or led that are live in the stores, then web platforms and client work."
        />
        <div className="projects-layout">
          {tier("featured").map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}

          <div className="projects-main">
            {tier("main").map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i % 2} />
            ))}
          </div>

          <h3 className="projects-subhead">More apps live in the stores</h3>
          <div className="projects-more">
            {tier("more").map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </div>

          <a
            className="card project project-portfolio"
            href={personalInfo.contact.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            onClick={() => trackClick("portfolio", "projects")}
          >
            <span className="project-portfolio-label">Full project portfolio</span>
            <span className="project-portfolio-sub">Screenshots and details for every project on Notion</span>
            <ExternalIcon className="icon project-portfolio-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
