import { Fragment, useState, type CSSProperties, type PointerEvent } from "react";
import { highlights, personalInfo, stack } from "../data/cvData";
import avatarAvif400 from "../assets/avatar-400.avif";
import avatarAvif800 from "../assets/avatar-800.avif";
import avatarWebp400 from "../assets/avatar-400.webp";
import avatarWebp800 from "../assets/avatar-800.webp";
import avatarJpg400 from "../assets/avatar-400.jpg";
import avatarJpg800 from "../assets/avatar-800.jpg";
import { trackClick } from "../analytics";
import CareerTrace from "./CareerTrace";
import SignalField from "./SignalField";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from "./Icons";
import { useCountUp, useLocalTime } from "../hooks/useMotion";

function Stat({ value, suffix, label, i }: (typeof highlights)[number] & { i: number }) {
  const { ref, value: shown } = useCountUp<HTMLParagraphElement>(value);
  return (
    <div className="card stat" data-reveal style={{ "--d": i } as CSSProperties}>
      <p className="stat-value" ref={ref}>
        {shown.toLocaleString("en-US")}
        <span>{suffix}</span>
      </p>
      <p className="stat-label">{label}</p>
    </div>
  );
}

// The photo card is tall, so the square image is shown at roughly its height.
const PHOTO_SIZES = "(max-width: 560px) 100vw, (max-width: 960px) 50vw, 540px";

/** Tilts the photo card toward the cursor and moves a soft glare with it. */
function tilt(e: PointerEvent<HTMLDivElement>) {
  if (e.pointerType !== "mouse") return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width;
  const py = (e.clientY - r.top) / r.height;
  el.classList.add("is-tilting");
  el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 10}deg) rotateY(${(px - 0.5) * 12}deg) scale(1.015)`;
  el.style.setProperty("--gx", `${px * 100}%`);
  el.style.setProperty("--gy", `${py * 100}%`);
}

function untilt(e: PointerEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  el.classList.remove("is-tilting");
  el.style.transform = "";
}

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const { name, title, intro, summary, contact, availability, workPreference, cvUrl } = personalInfo;
  const time = useLocalTime("Asia/Yerevan");

  return (
    <header className="hero" id="home">
      <div className="container bento">
        <div className="card intro">
          <SignalField />
          <div className="intro-top">
            <p className="status">
              <span className="pulse" aria-hidden="true" />
              {availability}
            </p>
            <div className="intro-location">
              <p className="intro-location-city">
                <PinIcon className="icon" />
                {personalInfo.location}
                <span className="intro-location-time">{time} local time (GMT+4)</span>
              </p>
              <p className="intro-location-pref">{workPreference}</p>
            </div>
          </div>
          <h1 className="hero-name" aria-label={name}>
            {name.split(" ").map((word, w, words) => {
              const offset = words.slice(0, w).join("").length + w;
              return (
                <Fragment key={word}>
                  <span className="word" aria-hidden="true">
                    {[...word].map((ch, c) => (
                      <span key={c} className="char" style={{ "--c": offset + c } as CSSProperties}>
                        {ch}
                      </span>
                    ))}
                  </span>
                  {w < words.length - 1 && " "}
                </Fragment>
              );
            })}
          </h1>
          <p className="hero-role">{title} at Koreez Ed Tech</p>
          <p className="hero-intro">{intro}</p>
          <p className="hero-summary">{summary}</p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={`mailto:${contact.email}`}
              onClick={() => trackClick("email", "hero")}
            >
              <MailIcon className="icon" />
              Get in touch
            </a>
            <a className="btn" href={cvUrl} download onClick={() => trackClick("cv_download", "hero")}>
              <DownloadIcon className="icon" />
              Download CV
            </a>
            <div className="hero-socials">
              <a
                className="btn btn-icon"
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon className="icon" />
              </a>
              <a
                className="btn btn-icon"
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <GitHubIcon className="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="card photo" data-reveal style={{ "--d": 1 } as CSSProperties} onPointerMove={tilt} onPointerLeave={untilt}>
          {!imageError ? (
            <picture>
              <source type="image/avif" srcSet={`${avatarAvif400} 400w, ${avatarAvif800} 800w`} sizes={PHOTO_SIZES} />
              <source type="image/webp" srcSet={`${avatarWebp400} 400w, ${avatarWebp800} 800w`} sizes={PHOTO_SIZES} />
              <img
                src={avatarJpg800}
                srcSet={`${avatarJpg400} 400w, ${avatarJpg800} 800w`}
                sizes={PHOTO_SIZES}
                alt={name}
                width={800}
                height={800}
                fetchPriority="high"
                decoding="async"
                onError={() => setImageError(true)}
              />
            </picture>
          ) : (
            <span className="photo-fallback" aria-hidden="true">
              GA
            </span>
          )}
          <span className="photo-glare" aria-hidden="true" />
        </div>

        {highlights.map((h, i) => (
          <Stat key={h.label} {...h} i={i} />
        ))}

        <div className="card stack" data-reveal>
          <p className="card-label">Daily stack</p>
          <div className="marquee" aria-label={stack.join(", ")}>
            <ul className="marquee-track" aria-hidden="true">
              {[...stack, ...stack].map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>


        <div className="card trace-card" data-reveal>
          <CareerTrace />
        </div>
      </div>
    </header>
  );
}
