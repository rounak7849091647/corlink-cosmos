import { serviceTicker } from "@/content/site";

/** Dark technical rail: service labels moving as nodes on a network line. */
export function TechRail() {
  const items = [...serviceTicker, ...serviceTicker];
  return (
    <section
      aria-label="Our services"
      className="relative overflow-hidden border-y border-[var(--line)] py-10"
    >
      <div className="hair-line absolute top-1/2 right-0 left-0" />
      <div className="relative flex overflow-hidden">
        <ul className="animate-marquee flex shrink-0 items-center gap-14 pr-14">
          {items.map((t, i) => (
            <li key={`${t}-${i}`} className="flex shrink-0 items-center gap-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--electric)] shadow-[0_0_10px_var(--brand-glow)]" />
              <span className="font-mono text-[0.68rem] tracking-[0.28em] whitespace-nowrap text-[var(--on-dark-muted)]">
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
