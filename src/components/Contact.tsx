import { useState } from "react";
import { personalInfo } from "../data/cvData";
import { trackClick } from "../analytics";
import { CheckIcon, CopyIcon, DownloadIcon, ExternalIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Contact() {
  const { contact } = personalInfo;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      trackClick("email_copy", "contact");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="card cta" data-reveal>
          <div className="cta-glow" aria-hidden="true" />
          <h2 className="cta-title" id="contact-title">
            Let's build something fast.
          </h2>
          <p className="cta-lead">
            {personalInfo.availability}. {personalInfo.workPreference} Email is
            the quickest way to reach me.
          </p>
          <div className="cta-actions">
            <a
              className="btn btn-primary btn-lg"
              href={`mailto:${contact.email}`}
              onClick={() => trackClick("email", "contact")}
            >
              <MailIcon className="icon" />
              {contact.email}
            </a>
            <button type="button" className="btn btn-lg" onClick={copyEmail} aria-live="polite">
              {copied ? <CheckIcon className="icon" /> : <CopyIcon className="icon" />}
              {copied ? "Copied" : "Copy email"}
            </button>
            <a
              className="btn btn-lg"
              href={personalInfo.cvUrl}
              download
              onClick={() => trackClick("cv_download", "contact")}
            >
              <DownloadIcon className="icon" />
              Download CV
            </a>
          </div>
          <ul className="cta-links">
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => trackClick("linkedin", "contact")}>
                <LinkedInIcon className="icon" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" onClick={() => trackClick("github", "contact")}>
                <GitHubIcon className="icon" /> GitHub
              </a>
            </li>
            <li>
              <a href={contact.portfolio} target="_blank" rel="noopener noreferrer" onClick={() => trackClick("portfolio", "contact")}>
                <ExternalIcon className="icon" /> Project portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
