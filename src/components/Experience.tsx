import { experiences } from "../data/cvData";
import { formatDuration } from "../utils/duration";

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container exp-layout">
        <aside className="exp-aside" data-reveal>
          <h2 className="section-title" id="experience-title">
            Experience
          </h2>
          <p className="section-lead">
            Six years across ed-tech, ESG, fintech, gaming and fashion, mostly
            on real-time products.
          </p>
          <ul className="exp-index">
            {experiences.map((exp) => (
              <li key={exp.id}>
                <a href={`#exp-${exp.id}`}>
                  <span>{exp.company}</span>
                  <span className="exp-index-years">{formatDuration(exp.start, exp.end)}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <ol className="timeline">
          {experiences.map((exp, i) => (
            <li
              key={exp.id}
              id={`exp-${exp.id}`}
              className={`timeline-item${i === 0 ? " is-current" : ""}`}
              data-reveal
            >
              <span className="timeline-dot" aria-hidden="true" />
              <article className="card role">
                <header className="role-head">
                  <div>
                    <h3 className="role-title">{exp.title}</h3>
                    <p className="role-company">
                      {exp.company}
                      <span className="role-location">{exp.location}</span>
                    </p>
                  </div>
                  <div className="role-tags">
                    {i === 0 && <span className="tag tag-live">Current</span>}
                    {exp.partTime && <span className="tag tag-side">Part-time</span>}
                    <span className="tag">{exp.period}</span>
                    <span className="tag tag-duration">{formatDuration(exp.start, exp.end)}</span>
                  </div>
                </header>
                {exp.about && <p className="role-about">{exp.about}</p>}
                {exp.steps && (
                  <ol className="role-steps" aria-label="Promotions">
                    {exp.steps.map((s) => (
                      <li key={s.title}>{s.title}</li>
                    ))}
                  </ol>
                )}
                {exp.note && !exp.steps && <p className="role-note">{exp.note}</p>}
                <ul className="role-points">
                  {exp.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
