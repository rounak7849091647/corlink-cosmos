import { Link } from "@tanstack/react-router";
import { finalCta } from "@/content/site";
import { ArrowGlyph } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="clip-diagonal-top group relative isolate overflow-hidden"
      aria-label={finalCta.title}
    >
      <img
        src={finalCta.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-40 transition-transform duration-[1400ms] ease-out group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-abyss)]" />
      <div className="relative mx-auto max-w-[1500px] px-5 py-32 lg:px-10 lg:py-44">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] font-extrabold tracking-tight text-[var(--on-dark)]">
            {finalCta.title}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--on-dark-muted)]">
            {finalCta.body}
          </p>
          <Link
            to={finalCta.cta.path}
            className="mt-11 inline-flex items-center gap-3 rounded-full bg-[var(--brand)] px-7 py-4 text-[0.75rem] font-semibold tracking-[0.18em] uppercase text-[var(--on-dark)] transition-all duration-400 hover:gap-6 hover:bg-[var(--electric)]"
          >
            {finalCta.cta.label}
            <ArrowGlyph />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
