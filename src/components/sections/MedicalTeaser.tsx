import { Link } from "@tanstack/react-router";
import { liveCodes } from "@/content/site";
import { medHero } from "@/content/medical";
import { ArrowGlyph, Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/Reveal";

export function MedicalTeaser() {
  return (
    <section
      id="medical"
      className="relative overflow-hidden bg-[var(--on-dark)] py-24 text-[var(--abyss)] lg:py-32"
    >
      <div className="grid-mesh-light pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-[1500px] items-center gap-14 px-5 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-10">
        <Reveal className="min-w-0">
          <Eyebrow className="text-[var(--brand)]">{medHero.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,4.4vw,3.7rem)] leading-[1] font-extrabold tracking-tight">
            {medHero.title} <span className="text-[var(--brand)]">{medHero.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-[color-mix(in_oklab,var(--abyss)_68%,transparent)]">
            {medHero.body}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {medHero.pills.map((p) => (
              <li
                key={p}
                className="rounded-full border border-[color-mix(in_oklab,var(--brand)_35%,transparent)] px-4 py-2 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[var(--brand)]"
              >
                {p}
              </li>
            ))}
          </ul>
          <Link
            to="/medical-coding"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--brand)] px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[var(--on-dark)] transition-all hover:gap-5"
          >
            Medical Coding
            <ArrowGlyph />
          </Link>
        </Reveal>

        <Reveal className="min-w-0">
          <div className="relative overflow-hidden border border-[color-mix(in_oklab,var(--abyss)_12%,transparent)]">
            <img
              src={medHero.image}
              alt={medHero.caption}
              loading="lazy"
              className="h-[42vh] w-full object-cover lg:h-[54vh]"
            />
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
            <span className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[color-mix(in_oklab,var(--abyss)_55%,transparent)]">
              {medHero.caption}
            </span>
            <span className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[var(--brand)]">
              {liveCodes.title}
            </span>
          </div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
            {liveCodes.items.map((c) => (
              <li
                key={c.code}
                className="border border-[color-mix(in_oklab,var(--abyss)_12%,transparent)] p-3"
              >
                <span className="block font-mono text-[0.58rem] tracking-[0.2em] text-[color-mix(in_oklab,var(--abyss)_50%,transparent)]">
                  {c.system}
                </span>
                <span className="mt-1 block font-mono text-sm font-semibold">{c.code}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
