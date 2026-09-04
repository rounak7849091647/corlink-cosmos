import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { TechRail } from "@/components/sections/TechRail";
import { servicesPage } from "@/content/site";
import { ArrowGlyph, Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const title = "Services — CORLINK IT";
const description =
  "From visionary application development to specialized healthcare technology. High-impact engineering that drives business value and operational efficiency.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={servicesPage.hero.eyebrow}
        title={servicesPage.hero.title}
        titleAccent={servicesPage.hero.titleAccent}
        body={servicesPage.hero.body}
        image="/assets/images/corl-enterprise.webp"
      />
      <TechRail />

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="grid-mesh pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
          <p className="eyebrow">{servicesPage.hoverHint}</p>
          <ul className="mt-10 grid gap-5 lg:grid-cols-2">
            {servicesPage.items.map((s, i) => {
              const isActive = active === i;
              return (
                <Reveal
                  as="li"
                  key={s.title}
                  delay={(i % 4) * 70}
                  className={cn(
                    "group relative overflow-hidden border border-[var(--line-strong)]",
                    i % 3 === 0 ? "lg:col-span-2" : "",
                  )}
                >
                  <div
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    className="relative"
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                        isActive ? "scale-105 opacity-45" : "opacity-20",
                      )}
                    />
                    <span className="pointer-events-none absolute inset-0 bg-[var(--gradient-abyss)]" />
                    <div className="relative flex min-h-[300px] flex-col justify-end p-7 lg:min-h-[340px] lg:p-10">
                      <span className="font-mono text-[0.65rem] tracking-[0.24em] text-[var(--electric)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-4 max-w-xl font-display text-[clamp(1.4rem,2.8vw,2.4rem)] leading-[1.05] font-bold tracking-tight text-[var(--on-dark)]">
                        {s.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--on-dark-muted)]">
                        {s.body}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-3 font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[var(--on-dark)]">
                        {servicesPage.readMore}
                        <ArrowGlyph className="transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="clip-diagonal-both relative overflow-hidden bg-[var(--on-dark)] py-24 text-[var(--abyss)] lg:py-32">
        <div className="grid-mesh-light pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
          <Eyebrow className="text-[var(--brand)]">Our Values</Eyebrow>
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {servicesPage.values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 90} className="min-w-0">
                <span className="font-mono text-[0.65rem] tracking-[0.24em] text-[var(--brand)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-[clamp(1.3rem,2.3vw,1.9rem)] leading-tight font-bold tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--abyss)_65%,transparent)]">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}
