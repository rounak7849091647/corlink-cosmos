import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/sections/PageHero";
import { OpportunityRows } from "@/components/sections/OpportunityRows";
import { FinalCta } from "@/components/sections/FinalCta";
import { opportunitiesPage } from "@/content/site";
import { ArrowGlyph } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/Reveal";

const title = "Opportunities — Careers at CORLINK IT";
const description =
  "Join a team of passionate innovators shaping the future of technology and healthcare. Discover your next big opportunity at CORLINK IT.";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: OpportunitiesRoute,
});

function OpportunitiesRoute() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={opportunitiesPage.hero.eyebrow}
        title={opportunitiesPage.hero.title}
        titleAccent={opportunitiesPage.hero.titleAccent}
        body={opportunitiesPage.hero.body}
        image="/assets/images/corl-team.webp"
      />

      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4.2vw,3.4rem)] font-extrabold tracking-tight text-[var(--on-dark)]">
              {opportunitiesPage.openTitle}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--on-dark-muted)]">
              {opportunitiesPage.openBody}
            </p>
          </Reveal>
          <div className="mt-14">
            <OpportunityRows jobs={opportunitiesPage.jobs} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[var(--line)] py-20 lg:py-28">
        <div className="grid-mesh pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-[clamp(1.8rem,3.6vw,3rem)] font-extrabold tracking-tight text-[var(--on-dark)]">
              {opportunitiesPage.noFit.title}
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-[var(--on-dark-muted)]">
              {opportunitiesPage.noFit.body}
            </p>
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[var(--brand)] px-7 py-4 text-[0.74rem] font-semibold tracking-[0.18em] uppercase text-[var(--on-dark)] transition-all hover:gap-5 hover:bg-[var(--electric)]"
            >
              {opportunitiesPage.noFit.cta}
              <ArrowGlyph />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}
