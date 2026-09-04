import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { homeServices, serviceCorridor } from "@/content/site";
import { ArrowGlyph, Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function ServiceCorridor() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-32">
      <div className="grid-mesh pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.4fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>{homeServices.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,4.4vw,4rem)] leading-[0.98] font-extrabold tracking-tight text-[var(--on-dark)]">
              {homeServices.title}
            </h2>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-[var(--on-dark-muted)]">
              {homeServices.body}
            </p>
            <Link
              to={homeServices.cta.path}
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-[var(--line-strong)] px-6 py-3 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[var(--on-dark)] transition-colors hover:border-[var(--electric)] hover:bg-[color-mix(in_oklab,var(--electric)_12%,transparent)]"
            >
              {homeServices.cta.label}
              <ArrowGlyph className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>

          <ul className="flex flex-col gap-4" onMouseLeave={() => setActive(0)}>
            {serviceCorridor.map((s, i) => {
              const isActive = active === i;
              return (
                <li key={s.num}>
                  <Link
                    to="/services"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-label={s.title}
                    className={cn(
                      "clip-notch group relative block w-full overflow-hidden border border-[var(--line-strong)] transition-all duration-500 ease-out",
                      isActive ? "h-[min(46vw,320px)]" : "h-[104px] lg:h-[92px]",
                    )}
                    style={{
                      transform: `translateX(${(i % 2 === 0 ? 1 : -1) * (isActive ? 0 : 10)}px) rotate(${isActive ? 0 : (i % 2 === 0 ? -0.45 : 0.45)}deg)`,
                    }}
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                        isActive ? "scale-105 opacity-60" : "scale-100 opacity-25",
                      )}
                    />
                    <span className="pointer-events-none absolute inset-0 bg-[var(--gradient-abyss)]" />
                    <span className="relative flex h-full items-end justify-between gap-4 p-5 lg:p-7">
                      <span className="flex min-w-0 items-baseline gap-4">
                        <span className="shrink-0 font-mono text-[0.7rem] tracking-[0.2em] text-[var(--electric)]">
                          {s.num}
                        </span>
                        <span
                          className={cn(
                            "font-display font-bold tracking-tight text-[var(--on-dark)] transition-all duration-500",
                            isActive
                              ? "text-[clamp(1.5rem,3.2vw,2.6rem)] leading-[1]"
                              : "text-[clamp(1.05rem,2vw,1.45rem)] leading-tight",
                          )}
                        >
                          {s.title}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                          isActive
                            ? "border-[var(--electric)] bg-[color-mix(in_oklab,var(--electric)_18%,transparent)] text-[var(--on-dark)]"
                            : "border-[var(--line-strong)] text-[var(--on-dark-muted)]",
                        )}
                      >
                        <ArrowGlyph
                          className={cn("transition-transform duration-500", isActive && "translate-x-0.5")}
                        />
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
