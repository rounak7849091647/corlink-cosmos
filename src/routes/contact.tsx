import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { contactPage, footer } from "@/content/site";
import { ArrowGlyph, Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/Reveal";

const title = "Contact CORLINK IT — Let's build something extraordinary";
const description =
  "Have a project in mind or want to explore possibilities? Our team of experts is ready to help you navigate your digital transformation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
        <div className="grid-mesh pointer-events-none absolute inset-0 opacity-70" />
        <img
          src="/assets/images/contact-hero.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-abyss)]" />

        <div className="relative mx-auto grid max-w-[1500px] gap-16 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24 lg:px-10">
          <Reveal className="min-w-0">
            <Eyebrow>{contactPage.hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,5.2rem)] leading-[0.92] font-extrabold tracking-tight text-[var(--on-dark)]">
              {contactPage.hero.title}
              <br />
              <span className="text-brand-gradient">{contactPage.hero.titleAccent}</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--on-dark-muted)]">
              {contactPage.hero.body}
            </p>

            <h2 className="mt-14 font-mono text-[0.65rem] tracking-[0.28em] uppercase text-[var(--electric)]">
              {contactPage.info.title}
            </h2>
            <ul className="mt-6 space-y-5">
              {contactPage.info.items.map((it) => (
                <li key={it.label} className="border-t border-[var(--line)] pt-5">
                  <span className="block font-mono text-[0.6rem] tracking-[0.24em] uppercase text-[var(--on-dark-muted)]">
                    {it.label}
                  </span>
                  <span className="mt-2 block text-base whitespace-pre-line text-[var(--on-dark)]">
                    {it.value}
                  </span>
                </li>
              ))}
              <li className="border-t border-[var(--line)] pt-5 font-mono text-[0.7rem] tracking-wider text-[var(--on-dark-muted)]">
                {footer.contact[4]}
              </li>
            </ul>
          </Reveal>

          <Reveal className="min-w-0">
            <div className="panel-dark p-6 lg:p-9">
              <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--on-dark)]">
                {contactPage.form.title}
              </h2>
              <p className="mt-2 text-sm text-[var(--on-dark-muted)]">{contactPage.form.subtitle}</p>

              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                {contactPage.form.fields.map((f) => (
                  <div key={f.name}>
                    <label
                      htmlFor={f.name}
                      className="block font-mono text-[0.6rem] tracking-[0.24em] uppercase text-[var(--on-dark-muted)]"
                    >
                      {f.label}
                      {f.required ? <span className="text-[var(--electric)]"> *</span> : null}
                    </label>
                    {f.type === "textarea" ? (
                      <textarea
                        id={f.name}
                        name={f.name}
                        required={f.required}
                        rows={5}
                        className="mt-2 w-full border-b border-[var(--line-strong)] bg-transparent py-3 text-sm text-[var(--on-dark)] outline-none transition-colors placeholder:text-[var(--on-dark-muted)] focus:border-[var(--electric)]"
                      />
                    ) : (
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type}
                        required={f.required}
                        className="mt-2 w-full border-b border-[var(--line-strong)] bg-transparent py-3 text-sm text-[var(--on-dark)] outline-none transition-colors placeholder:text-[var(--on-dark-muted)] focus:border-[var(--electric)]"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="group mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--brand)] px-7 py-4 text-[0.74rem] font-semibold tracking-[0.18em] uppercase text-[var(--on-dark)] transition-all hover:gap-5 hover:bg-[var(--electric)]"
                >
                  {contactPage.form.submit}
                  <ArrowGlyph />
                </button>

                <p aria-live="polite" className="min-h-5 text-sm text-[var(--mint)]">
                  {sent ? contactPage.form.success : ""}
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
