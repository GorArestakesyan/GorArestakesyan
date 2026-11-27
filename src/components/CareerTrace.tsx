import type { CSSProperties } from "react";
import { experiences } from "../data/cvData";
import type { YearMonth } from "../types";

const toMonths = (ym: YearMonth) => {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
};

const now = new Date();
const END = now.getFullYear() * 12 + now.getMonth() + 1;
const START = Math.min(...experiences.map((e) => toMonths(e.start)));
const SPAN = END - START;

const pos = (start: YearMonth, end?: YearMonth) => {
  const s = toMonths(start);
  const e = end ? toMonths(end) : END;
  return {
    left: `${((s - START) / SPAN) * 100}%`,
    width: `${((e - s) / SPAN) * 100}%`,
  };
};

type Bar = {
  key: string;
  label: string;
  href: string;
  title: string;
  row: number;
  kind: "role" | "step" | "side";
  style: { left: string; width: string };
};

const bars: Bar[] = experiences
  .slice()
  .reverse()
  .flatMap((exp) => {
    const main: Bar = {
      key: exp.id,
      label: exp.partTime ? `${exp.company}, part-time` : exp.company,
      href: `#exp-${exp.id}`,
      title: `${exp.title}, ${exp.company} (${exp.period})`,
      row: exp.partTime ? 2 : 0,
      kind: exp.partTime ? "side" : "role",
      style: pos(exp.start, exp.end),
    };
    const steps: Bar[] = (exp.steps ?? []).map((step, j) => ({
      key: `${exp.id}-${j}`,
      label: step.short ?? step.title,
      href: `#exp-${exp.id}`,
      title: `${step.title} at ${exp.company}`,
      row: 1,
      kind: "step",
      style: pos(step.start, step.end),
    }));
    return [main, ...steps];
  });

const firstYear = Math.floor(START / 12) + 1;
const lastYear = Math.floor((END - 1) / 12);
const ticks = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => {
  const year = firstYear + i;
  return { year, left: `${((year * 12 - START) / SPAN) * 100}%` };
});

export default function CareerTrace() {
  return (
    <figure className="trace" aria-labelledby="trace-caption">
      <figcaption id="trace-caption" className="trace-caption">
        <span className="card-label">Career timeline</span>
        <span className="trace-legend" aria-hidden="true">
          <span className="legend-swatch legend-role" /> Full-time
          <span className="legend-swatch legend-step" /> Promotion
          <span className="legend-swatch legend-side" /> Part-time
        </span>
      </figcaption>
      <div className="trace-scroll">
        <div className="trace-plot">
          <div className="trace-axis" aria-hidden="true">
            {ticks.map((t) => (
              <span key={t.year} className="trace-tick" style={{ left: t.left }}>
                {t.year}
              </span>
            ))}
          </div>
          <ul className="trace-rows">
            {bars.map((bar, i) => (
              <li
                key={bar.key}
                className={`trace-bar trace-${bar.kind}${parseFloat(bar.style.width) < 4 ? " trace-tiny" : ""}`}
                style={{ ...bar.style, "--row": bar.row, "--i": i } as CSSProperties}
              >
                <a href={bar.href} title={bar.title} aria-label={bar.title} data-label={bar.label}>
                  {bar.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="trace-now" aria-hidden="true">
            <span className="pulse" />
            Now
          </span>
        </div>
      </div>
    </figure>
  );
}
