import { Link } from "@tanstack/react-router";
import { homeAbout } from "@/content/site";
import { ArrowGlyph, Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/Reveal";

export function AboutSplit() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[38vw] leading-none font-extrabold text-[color-mix(in_oklab,var(--on-dark)_4%,transparent)] select-none lg:left-[62%]"
      >
        10+
      </span>

      <div className="relative mx-auto grid max-w-[1500px] items-center gap-14 px-5 lg:grid-cols-[1.1fr_1fr] lg:gap-24 lg:px-10">
        <Reveal className="relative -mx-5 lg:-ml-[8vw] lg:mr-0">
          <div className="clip-diagonal-bottom relative overflow-hidden">
            <img
              src={homeAbout.image}
              alt="CORLINK IT office"
              loading="lazy"
              className="h-[54vh] w-full object-cover lg:h-[68vh]"
            />
            <span className="pointer-events-none absolute inset-0 bg-[color-mix(in_oklab,var(--abyss)_28%,transparent)]" />
          </div>
        </Reveal>

        <Reveal className="min-w-0">
          <Eyebrow>{homeAbout.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[1] font-extrabold tracking-tight text-[var(--on-dark)]">
            {homeAbout.title}
          </h2>
          <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-[var(--on-dark-muted)]">
            {homeAbout.body}
          </p>
          <ul className="mt-8 space-y-4">
            {homeAbout.points.map((p) => (
              <li key={p} className="flex gap-4 border-t border-[var(--line)] pt-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--electric)]" />
                <span className="text-sm leading-relaxed text-[var(--on-dark-muted)]">{p}</span>
              </li>
            ))}
          </ul>
          <Link
            to={homeAbout.cta.path}
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-[var(--line-strong)] px-6 py-3 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[var(--on-dark)] transition-colors hover:border-[var(--electric)]"
          >
            {homeAbout.cta.label}
            <ArrowGlyph className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
