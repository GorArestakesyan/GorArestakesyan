import { education } from '../data/cvData';

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-card-header">
                <div className="education-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <span className="education-period">{edu.period}</span>
              </div>
              <div className="education-card-body">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

