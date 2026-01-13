import { experiences } from '../data/cvData';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                  {exp.categories && exp.categories.length > 0 && (
                    <div className="experience-categories">
                      {exp.categories.map((category, catIdx) => (
                        <span key={catIdx} className="experience-category">{category}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="experience-meta">
                  {exp.location && <span className="experience-location">{exp.location}</span>}
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

