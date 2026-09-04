import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  titleAccent,
  body,
  image,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  body: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-28">
      <div className="grid-mesh pointer-events-none absolute inset-0 opacity-60" />
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-abyss)]" />
        </>
      ) : null}

      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
        <Reveal className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.9] font-extrabold tracking-tight text-[var(--on-dark)]">
            {title}
            {titleAccent ? (
              <>
                <br />
                <span className="text-brand-gradient">{titleAccent}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--on-dark-muted)]">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}
