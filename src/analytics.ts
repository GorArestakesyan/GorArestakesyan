import { track } from "@vercel/analytics";

type Target = "cv_download" | "email" | "email_copy" | "linkedin" | "github" | "portfolio" | "project_link";

/** Records a recruiter-relevant click in Vercel Analytics (no-op locally). */
export function trackClick(target: Target, location: "nav" | "hero" | "contact" | "projects") {
  track(target, { location });
}
