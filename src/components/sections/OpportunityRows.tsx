import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowGlyph } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

export type Job = {
  dept: string;
  title: string;
  location: string;
  type: string;
  exp: string;
  cta: string;
  image: string;
};

export function OpportunityRows({ jobs }: { jobs: readonly Job[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <ul className="border-t border-[var(--line-strong)]">
      {jobs.map((job, i) => {
        const isActive = active === i;
        return (
          <li key={job.title} className="border-b border-[var(--line-strong)]">
            <Link
              to="/contact"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className={cn(
                "group relative flex flex-col gap-4 overflow-hidden px-4 transition-all duration-500 sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto_auto] sm:items-center sm:gap-8",
                isActive ? "py-10" : "py-7",
              )}
            >
              <img
                src={job.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className={cn(
                  "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                  isActive ? "opacity-25" : "opacity-0",
                )}
              />
              <span className="pointer-events-none absolute inset-0 bg-[var(--gradient-abyss)] opacity-90" />
              <span
                className={cn(
                  "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-[var(--electric)] transition-transform duration-500",
                  isActive ? "scale-x-100" : "scale-x-0",
                )}
              />

              <span className="relative font-mono text-[0.68rem] tracking-[0.2em] text-[var(--electric)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative min-w-0">
                <span className="block font-display text-[clamp(1.2rem,2.6vw,2.1rem)] leading-tight font-bold tracking-tight text-[var(--on-dark)]">
                  {job.title}
                </span>
                <span className="mt-2 block text-sm text-[var(--on-dark-muted)]">
                  {job.dept} · {job.location}
                </span>
              </span>
              <span className="relative flex gap-3 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[var(--on-dark-muted)] sm:justify-end">
                <span className="border border-[var(--line-strong)] px-3 py-1.5">{job.type}</span>
                <span className="border border-[var(--line-strong)] px-3 py-1.5">{job.exp}</span>
              </span>
              <span
                className={cn(
                  "relative flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500",
                  isActive
                    ? "translate-x-1 border-[var(--electric)] bg-[color-mix(in_oklab,var(--electric)_18%,transparent)] text-[var(--on-dark)]"
                    : "border-[var(--line-strong)] text-[var(--on-dark-muted)]",
                )}
                aria-label={job.cta}
              >
                <ArrowGlyph />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
