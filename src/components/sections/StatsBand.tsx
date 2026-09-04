import { useEffect, useState } from "react";
import { stats } from "@/content/site";
import { useReducedMotion, useReveal } from "@/hooks/use-reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, visible } = useReveal<HTMLSpanElement>(0.4);
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (reduced) {
      setN(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value, reduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export function StatsBand() {
  return (
    <section
      aria-label="Company statistics"
      className="relative overflow-hidden border-y border-[var(--line)] py-20 lg:py-28"
    >
      <img
        src="/assets/images/corl-boardroom.webp"
        alt=""
        loading="lazy"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-abyss)]" />

      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
        <ul className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className={
                "relative px-0 lg:px-8 " +
                (i > 0 ? "lg:border-l lg:border-[var(--line-strong)] " : "") +
                (i === 1 || i === 3 ? "lg:pt-10 " : "")
              }
            >
              <p className="font-display text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.85] font-extrabold tracking-tight text-[var(--on-dark)]">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-4 font-mono text-[0.65rem] tracking-[0.24em] uppercase text-[var(--on-dark-muted)]">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
