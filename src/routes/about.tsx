import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { FinalCta } from "@/components/sections/FinalCta";
import { aboutPage } from "@/content/site";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/Reveal";

const title = "Work & Company — CORLINK IT";
const description =
  "CORLINK IT isn't just an IT firm — we are a catalyst for digital evolution. Meet the mission, vision, capabilities and leadership behind our work.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        titleAccent={aboutPage.hero.titleAccent}
        body={aboutPage.hero.body}
        image={aboutPage.hero.image}
      />

      <StatsBand />

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <ul className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {aboutPage.mv.map((m, i) => (
              <Reveal as="li" key={m.label} delay={i * 90} className="min-w-0">
                <div className="clip-diagonal-bottom relative overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.label}
                    loading="lazy"
                    className="h-[38vh] w-full object-cover opacity-80 lg:h-[46vh]"
                  />
                </div>
                <h2 className="mt-8 font-display text-[clamp(1.8rem,3.4vw,2.9rem)] leading-tight font-extrabold tracking-tight text-[var(--on-dark)]">
                  {m.label}
                </h2>
                <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-[var(--on-dark-muted)]">
                  {m.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[var(--line)] py-24 lg:py-28">
        <div className="grid-mesh pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
          <Eyebrow>{aboutPage.capabilitiesLabel}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-tight text-[var(--on-dark)]">
            {aboutPage.expertiseTitle}
          </h2>
          <ul className="mt-10 flex flex-wrap gap-3">
            {aboutPage.expertise.map((e) => (
              <li
                key={e}
                className="rounded-full border border-[var(--line-strong)] px-5 py-2.5 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--on-dark-muted)] transition-colors hover:border-[var(--electric)] hover:text-[var(--on-dark)]"
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="clip-diagonal-both relative overflow-hidden bg-[var(--on-dark)] py-24 text-[var(--abyss)] lg:py-32">
        <div className="grid-mesh-light pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
          <Eyebrow className="text-[var(--brand)]">{aboutPage.dna.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-tight">
            {aboutPage.dna.title}
          </h2>
          <ul className="mt-12 grid gap-10 md:grid-cols-2">
            {aboutPage.dna.items.map((d, i) => (
              <Reveal as="li" key={d.title} delay={i * 80} className="min-w-0">
                <span className="font-mono text-[0.65rem] tracking-[0.24em] text-[var(--brand)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--abyss)_65%,transparent)]">
                  {d.body}
                </p>
              </Reveal>
            ))}
          </ul>

          <h2 className="mt-20 font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-extrabold tracking-tight">
            {aboutPage.leadershipTitle}
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
            {aboutPage.leaders.map((l) => (
              <Reveal as="li" key={l.name} className="min-w-0">
                <div className="overflow-hidden border border-[color-mix(in_oklab,var(--abyss)_12%,transparent)]">
                  <img
                    src={l.image}
                    alt={l.name}
                    loading="lazy"
                    className="h-[42vh] w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight uppercase">
                  {l.name}
                </h3>
                <p className="mt-1 font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[var(--brand)]">
                  {l.role}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <Eyebrow>{aboutPage.exploreTitle}</Eyebrow>
          <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutPage.explore.map((e, i) => (
              <li
                key={e}
                className="flex items-baseline gap-4 border-t border-[var(--line)] pt-4 text-sm text-[var(--on-dark-muted)]"
              >
                <span className="font-mono text-[0.6rem] text-[var(--electric)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}
