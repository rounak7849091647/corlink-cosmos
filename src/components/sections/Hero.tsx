import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ecosystemStages, hero } from "@/content/site";
import { ArrowGlyph } from "@/components/ui/eyebrow";
import { useReducedMotion } from "@/hooks/use-reveal";

const panelPos = [
  { top: "8%", left: "2%" },
  { top: "30%", right: "-2%" },
  { bottom: "24%", left: "-4%" },
  { bottom: "4%", right: "8%" },
];

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [m, setM] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        setM({
          x: (e.clientX - r.left) / r.width - 0.5,
          y: (e.clientY - r.top) / r.height - 0.5,
        });
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const shift = (f: number) => ({
    transform: `translate3d(${m.x * f}px, ${m.y * f}px, 0)`,
  });

  return (
    <section
      id="home"
      ref={wrapRef}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32 pb-16 lg:justify-center lg:pt-24"
    >
      <div className="grid-mesh pointer-events-none absolute inset-0" style={shift(-14)} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-18%] right-[-10%] h-[80vmin] w-[80vmin] rounded-full opacity-70 blur-[90px]"
        style={{
          background: "radial-gradient(circle, var(--brand-glow) 0%, transparent 65%)",
          ...shift(26),
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1500px] items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--electric)]" />
            <span className="font-mono text-[0.68rem] tracking-[0.32em] uppercase text-[var(--electric)]">
              {hero.badge}
            </span>
          </div>

          <h1 className="mt-7 font-display text-[clamp(3rem,8.4vw,7.5rem)] leading-[0.86] font-extrabold tracking-[-0.03em] text-[var(--on-dark)]">
            {hero.headline}
            <br />
            <span className="text-brand-gradient">{hero.headlineAccent}</span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-relaxed text-[var(--on-dark-muted)] lg:text-lg">
            {hero.subheading}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to={hero.primaryCta.path}
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--brand)] px-7 py-4 text-[0.74rem] font-semibold tracking-[0.18em] uppercase text-[var(--on-dark)] transition-all duration-300 hover:gap-5 hover:bg-[var(--electric)]"
            >
              {hero.primaryCta.label}
              <ArrowGlyph />
            </Link>
            <Link
              to={hero.secondaryCta.path}
              className="group inline-flex items-center gap-3 rounded-full border border-[var(--line-strong)] px-7 py-4 text-[0.74rem] font-semibold tracking-[0.18em] uppercase text-[var(--on-dark)] transition-colors hover:border-[var(--electric)]"
            >
              {hero.secondaryCta.label}
              <ArrowGlyph className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>

          <div className="mt-14 flex items-baseline gap-4">
            <span className="font-display text-4xl font-extrabold text-[var(--on-dark)]">
              {hero.badgeStat.value}
            </span>
            <span className="font-mono text-[0.65rem] tracking-[0.24em] uppercase text-[var(--on-dark-muted)]">
              {hero.badgeStat.label}
            </span>
          </div>
        </div>

        {/* Ecosystem composition */}
        <div className="relative mx-auto aspect-square w-full max-w-[560px]" style={shift(18)}>
          <div
            aria-hidden="true"
            className="animate-drift absolute inset-[8%] rounded-full border border-[var(--line-strong)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[20%] rounded-full border border-[var(--line)]"
          />
          <img
            src={hero.image}
            alt="CORLINK IT global technology network"
            className="glow-ring absolute inset-[6%] h-[88%] w-[88%] rounded-full object-cover opacity-90"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full opacity-70"
          >
            <g stroke="var(--electric)" strokeWidth="0.25" fill="none">
              <line x1="12" y1="14" x2="50" y2="50" />
              <line x1="90" y1="34" x2="50" y2="50" />
              <line x1="8" y1="74" x2="50" y2="50" />
              <line x1="84" y1="94" x2="50" y2="50" />
            </g>
          </svg>

          {ecosystemStages.map((label, i) => (
            <span
              key={label}
              style={{ ...panelPos[i], ...shift(-(10 + i * 6)) }}
              className="panel-dark absolute px-4 py-2.5 font-mono text-[0.6rem] tracking-[0.24em] whitespace-nowrap text-[var(--on-dark)]"
            >
              <span className="mr-2 text-[var(--electric)]">{String(i + 1).padStart(2, "0")}</span>
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex w-full max-w-[1500px] items-center gap-4 px-5 lg:mt-24 lg:px-10">
        <span className="font-mono text-[0.62rem] tracking-[0.3em] uppercase text-[var(--on-dark-muted)]">
          Scroll to explore
        </span>
        <span className="relative h-px flex-1 overflow-hidden bg-[var(--line-strong)]">
          <span className="animate-scroll-line absolute inset-y-0 left-0 w-24 bg-[var(--electric)]" />
        </span>
      </div>
    </section>
  );
}
