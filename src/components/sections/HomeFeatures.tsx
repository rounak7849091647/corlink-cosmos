import { homeServices } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function HomeFeatures() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <ul className="grid gap-6 md:grid-cols-2">
          {homeServices.features.map((f, i) => (
            <Reveal
              as="li"
              key={f.title}
              delay={i * 80}
              className={
                "group relative overflow-hidden border border-[var(--line-strong)] " +
                (i % 2 === 1 ? "md:translate-y-10" : "")
              }
            >
              <img
                src={f.image}
                alt={f.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-20 transition-all duration-700 group-hover:scale-105 group-hover:opacity-35"
              />
              <span className="pointer-events-none absolute inset-0 bg-[var(--gradient-abyss)]" />
              <div className="relative flex h-full flex-col justify-end p-7 pt-32 lg:p-9 lg:pt-40">
                <span className="font-mono text-[0.65rem] tracking-[0.24em] text-[var(--electric)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-[clamp(1.3rem,2.3vw,1.85rem)] leading-tight font-bold tracking-tight text-[var(--on-dark)]">
                  {f.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--on-dark-muted)]">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
