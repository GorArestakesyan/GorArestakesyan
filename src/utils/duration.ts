import type { YearMonth } from "../types";

const toMonthIndex = (ym: YearMonth) => {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
};

/**
 * Length of a role, counting both the first and last month (LinkedIn style),
 * so Jan 2024 – Dec 2025 reads "2 yrs", not "1 yr". Omit `end` for a current role.
 */
export function formatDuration(start: YearMonth, end?: YearMonth): string {
  const now = new Date();
  const last = end ? toMonthIndex(end) : now.getFullYear() * 12 + now.getMonth();
  const months = Math.max(1, last - toMonthIndex(start) + 1);
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (rest) parts.push(`${rest} ${rest === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}
