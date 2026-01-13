import { technicalSkills, softSkills, languages } from "../data/cvData";
import { SKILL_CATEGORIES, LANGUAGE_LEVELS } from "../constants";

export default function Skills() {
  // Group technical skills by category
  const frontendSkills = technicalSkills.filter((skill) =>
    (SKILL_CATEGORIES.FRONTEND as readonly string[]).includes(skill)
  );

  const stateManagement = technicalSkills.filter((skill) =>
    (SKILL_CATEGORIES.STATE_MANAGEMENT as readonly string[]).includes(skill)
  );

  const backendTools = technicalSkills.filter((skill) =>
    (SKILL_CATEGORIES.BACKEND as readonly string[]).includes(skill)
  );

  const devTools = technicalSkills.filter((skill) =>
    (SKILL_CATEGORIES.DEV_TOOLS as readonly string[]).includes(skill)
  );

  const paymentTools = technicalSkills.filter((skill) =>
    (SKILL_CATEGORIES.PAYMENT as readonly string[]).includes(skill)
  );

  const otherSkills = technicalSkills.filter(
    (skill) =>
      ![
        ...frontendSkills,
        ...stateManagement,
        ...backendTools,
        ...devTools,
        ...paymentTools,
      ].includes(skill)
  );

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-content">
          <div className="skills-main">
            <div className="skills-section">
              <h3 className="skills-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                Frontend & Mobile
              </h3>
              <div className="skills-tags">
                {frontendSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-section">
              <h3 className="skills-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
                State Management
              </h3>
              <div className="skills-tags">
                {stateManagement.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-section">
              <h3 className="skills-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Backend & APIs
              </h3>
              <div className="skills-tags">
                {backendTools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-section">
              <h3 className="skills-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                Development Tools
              </h3>
              <div className="skills-tags">
                {devTools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            {paymentTools.length > 0 && (
              <div className="skills-section">
                <h3 className="skills-section-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                  Payment Integration
              </h3>
              <div className="skills-tags">
                {paymentTools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>)}

            {otherSkills.length > 0 && (
              <div className="skills-section">
                <h3 className="skills-section-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  Other
              </h3>
              <div className="skills-tags">
                {otherSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>)}
          </div>

          <div className="skills-sidebar">
            <div className="skills-category">
              <h3 className="skills-category-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Soft Skills
              </h3>
              <div className="skills-tags">
                {softSkills.map((skill, index) => (
                  <span key={index} className="skill-tag skill-tag-soft">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-category-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Languages
              </h3>
              <div className="languages-list">
                {languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <span className="language-name">{lang.name}</span>
                    <div className="language-bar">
                      <div
                        className="language-progress"
                        style={{
                          width:
                            lang.level === "Native"
                              ? `${LANGUAGE_LEVELS.NATIVE}%`
                              : lang.level.includes("B2")
                              ? `${LANGUAGE_LEVELS.B2}%`
                              : lang.level.includes("B1")
                              ? `${LANGUAGE_LEVELS.B1}%`
                              : `${LANGUAGE_LEVELS.DEFAULT}%`,
                        }}
                      ></div>
                    </div>
                    <span className="language-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

