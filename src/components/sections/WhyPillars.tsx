import { whyCorlink } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function WhyPillars() {
  return (
    <section className="clip-diagonal-both relative overflow-hidden bg-[var(--on-dark)] py-28 text-[var(--abyss)] lg:py-36">
      <div className="grid-mesh-light pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.9rem)] leading-[1] font-extrabold tracking-tight">
            {whyCorlink.title}
          </h2>
        </Reveal>

        <ol className="relative mt-16 border-l border-[color-mix(in_oklab,var(--abyss)_14%,transparent)] pl-6 lg:mt-20 lg:pl-12">
          {whyCorlink.items.map((item, i) => (
            <Reveal
              as="li"
              key={item}
              delay={i * 90}
              className="relative flex flex-col gap-3 border-b border-[color-mix(in_oklab,var(--abyss)_10%,transparent)] py-7 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-10"
            >
              <span
                aria-hidden="true"
                className="absolute top-9 -left-[1.7rem] h-px w-6 bg-[color-mix(in_oklab,var(--brand)_60%,transparent)] lg:-left-[3.2rem] lg:w-12"
              />
              <span className="w-14 shrink-0 font-mono text-[0.72rem] tracking-[0.2em] text-[var(--brand)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[clamp(1.35rem,2.7vw,2.2rem)] leading-tight font-bold tracking-tight">
                {item}
              </span>
            </Reveal>
          ))}
        </ol>

        <p className="mt-16 font-mono text-[0.68rem] tracking-[0.28em] uppercase text-[color-mix(in_oklab,var(--abyss)_55%,transparent)]">
          {whyCorlink.banner}
        </p>

        <div className="mt-14">
          <h3 className="font-display text-2xl font-bold tracking-tight">{whyCorlink.offerTitle}</h3>
          <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyCorlink.offer.map((o) => (
              <li
                key={o}
                className="border-t border-[color-mix(in_oklab,var(--abyss)_12%,transparent)] pt-3 text-sm text-[color-mix(in_oklab,var(--abyss)_70%,transparent)]"
              >
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
