import { Link } from "@tanstack/react-router";
import { opportunitiesPage } from "@/content/site";
import { ArrowGlyph, Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/Reveal";
import { OpportunityRows } from "@/components/sections/OpportunityRows";

export function OpportunitiesTeaser() {
  return (
    <section id="opportunities" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <Eyebrow>{opportunitiesPage.hero.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] leading-[1] font-extrabold tracking-tight text-[var(--on-dark)]">
              {opportunitiesPage.openTitle}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--on-dark-muted)]">
              {opportunitiesPage.openBody}
            </p>
          </div>
          <Link
            to="/opportunities"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-[var(--line-strong)] px-6 py-3 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[var(--on-dark)] transition-colors hover:border-[var(--electric)]"
          >
            Opportunities
            <ArrowGlyph className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>

        <div className="mt-12">
          <OpportunityRows jobs={opportunitiesPage.jobs.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
}
